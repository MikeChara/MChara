import { NextResponse } from "next/server";

const CONTACT_EMAIL = "mikejchara@gmail.com";

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254);
  const subject = clean(body.subject, 200);
  const message = clean(body.message, 5000);
  const website = clean(body.website, 200);
  const captchaToken = clean(body.captchaToken, 5000);

  if (website) {
    return NextResponse.json({ error: "Unable to send message." }, { status: 400 });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please complete every required field." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (!captchaToken || !recaptchaSecret) {
    return NextResponse.json(
      { error: "The contact form is not configured for reCAPTCHA." },
      { status: 503 },
    );
  }

  const captchaResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: captchaToken,
      }),
    },
  );
  const captchaResult = (await captchaResponse.json()) as {
    success?: boolean;
  };

  if (!captchaResult.success) {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed. Please try again." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    "Contact form <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured." },
      { status: 503 },
    );
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject: `Website contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!emailResponse.ok) {
    const responseText = await emailResponse.text();
    console.error("Resend contact email failed:", responseText);
    return NextResponse.json(
      { error: "Your message could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ sent: true });
}
