import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // IMPORTANT: create Resend inside the handler, not at the top.
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "TAOHS <admin@theartofhighsociety.com>",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", data);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("RESEND ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
