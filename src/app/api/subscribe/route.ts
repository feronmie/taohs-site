import { NextResponse } from "next/server";

const GOOGLE_SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK as string;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Missing email" });
    }

    // --- Lagos time ---
    const now = new Date();
    const tz = "Africa/Lagos";
    const today = new Date(
      new Date(now).toLocaleString("en-US", { timeZone: tz })
    );

    // Giveaway dates
    const day1 = new Date("2025-12-01");
    const day2 = new Date("2025-12-02");
    const day3 = new Date("2025-12-03");

    let campaignDay = 0;
    let discount = "0%";

    if (today.toDateString() === day1.toDateString()) {
      campaignDay = 1;
      discount = "50%";
    } else if (today.toDateString() === day2.toDateString()) {
      campaignDay = 2;
      discount = "40%";
    } else if (today.toDateString() === day3.toDateString()) {
      campaignDay = 3;
      discount = "30%";
    }

    // --- Test mode ---
    if (email.includes("testwin")) {
      await forwardToSheet(email, true, discount, campaignDay, false, true);
      return NextResponse.json({ success: true, won: true });
    }
    if (email.includes("testloss")) {
      await forwardToSheet(email, false, discount, campaignDay, false, true);
      return NextResponse.json({ success: true, won: false });
    }
    if (email.includes("testover")) {
      await forwardToSheet(email, false, "0%", 0, false, true);
      return NextResponse.json({ success: true, giveawayEnded: true });
    }
    if (email.includes("testduplicate")) {
      await forwardToSheet(email, false, discount, campaignDay, true, true);
      return NextResponse.json({ success: true, alreadyWon: true });
    }

    // --- REAL GIVEAWAY LOGIC WITH DAILY CHANCES ---
    let chance = 0;

    if (campaignDay === 1) chance = 50;  // Day 1 → 1 in 50
    if (campaignDay === 2) chance = 40;  // Day 2 → 1 in 40
    if (campaignDay === 3) chance = 30;  // Day 3 → 1 in 30

    let won = false;

    if (chance > 0) {
      const randomNum = Math.floor(Math.random() * chance) + 1;
      won = randomNum === 7;  // you can choose any lucky number 1–chance
    }

    // Record result
    await forwardToSheet(email, won, discount, campaignDay, false, false);

    return NextResponse.json({ success: true, won });

  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 }
    );
  }
}

async function forwardToSheet(
  email: string,
  won: boolean,
  discount: string,
  day: number,
  alreadyWon: boolean,
  testMode: boolean
) {
  await fetch(GOOGLE_SHEETS_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      won,
      discount,
      day,
      alreadyWon,
      testMode,
      timestamp: new Date().toISOString(),
    }),
  });
}
