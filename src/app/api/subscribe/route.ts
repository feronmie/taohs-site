import { NextResponse } from "next/server";

const GOOGLE_SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK as string;

// -----------------------------
// Main POST handler
// -----------------------------
export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Missing email" });
    }

    // 1️⃣ Get state from Google Sheets
    const stateRes = await fetch(
      `${GOOGLE_SHEETS_WEBHOOK}?mode=getState&email=${encodeURIComponent(email)}`
    );

    const {
      totalSubscribers,
      eligible,
      winnersCount,
      alreadyWon,
      availableVouchers,
    } = await stateRes.json();

    // 2️⃣ If already won before → block from future winning
    if (alreadyWon) {
      await forwardToSheet(email, false, "0%");
      return NextResponse.json({ success: true, alreadyWon: true });
    }

    // 3️⃣ If NOT eligible (>50th subscriber) → normal subscribe only
    if (!eligible) {
      await forwardToSheet(email, false, "0%");
      return NextResponse.json({
        success: true,
        won: false,
        discount: "0%",
      });
    }

    // 4️⃣ If all 3 winners already assigned → no more winners
    if (winnersCount >= 3) {
      await forwardToSheet(email, false, "0%");
      return NextResponse.json({
        success: true,
        won: false,
        discount: "0%",
      });
    }

    // 5️⃣ Determine win probability
    const winnersLeft = 3 - winnersCount;
    const peopleLeft = 50 - totalSubscribers;
    const winChance = winnersLeft / peopleLeft;

    let won = false;
    let discount = "0%";

    if (Math.random() < winChance) {
      won = true;

      // Pick random from the remaining vouchers
      const randIndex = Math.floor(Math.random() * availableVouchers.length);
      discount = availableVouchers[randIndex];
    }

    // 6️⃣ Send result into Google Sheet
    await forwardToSheet(email, won, discount);

    // 7️⃣ Respond to UI
    return NextResponse.json({
      success: true,
      won,
      discount,
    });

  } catch (err) {
    console.error("Voucher logic error:", err);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 }
    );
  }
}


// -----------------------------
// Helper → send data to Apps Script
// -----------------------------
async function forwardToSheet(email: string, won: boolean, discount: string) {
  await fetch(GOOGLE_SHEETS_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      won,
      discount,
      timestamp: new Date().toISOString(),
    }),
  });
}
