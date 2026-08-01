import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return Response.json({ success: false, error: "Missing fields" }, { status: 400 });
    }
    try {
        await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL!,
        replyTo: email,
        subject: `New message from ${name}`,
        text: message,
        });
        return Response.json({ success: true });
    } catch (error) {
        console.error("Resend error:", error);
        return Response.json({ success: false, error: "Failed to send" }, { status: 500 });
    }
}