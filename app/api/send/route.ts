import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

export async function POST() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return Response.json(
      { error: "Resend is not configured" },
      { status: 503 },
    );
  }

  const resend = new Resend(key);

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_EMAIL || "notify@uncap.us",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactNode,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
