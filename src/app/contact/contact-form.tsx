"use client";

import Script from "next/script";
import { FormEvent, useRef, useState } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: { sitekey: string; theme?: "light" | "dark" },
      ) => number;
      getResponse: (widgetId: number) => string;
      reset: (widgetId: number) => void;
    };
  }
}

type ContactFormProps = {
  siteKey?: string;
};

export default function ContactForm({ siteKey }: ContactFormProps) {
  const captchaContainer = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  function renderCaptcha() {
    if (!siteKey || !captchaContainer.current || widgetId.current !== null) return;

    widgetId.current =
      window.grecaptcha?.render(captchaContainer.current, {
        sitekey: siteKey,
        theme: "light",
      }) ?? null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const captchaToken =
      widgetId.current !== null
        ? window.grecaptcha?.getResponse(widgetId.current) ?? ""
        : "";

    if (!captchaToken) {
      setStatus("error");
      setMessage("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
          captchaToken,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent.");
      }

      form.reset();
      if (widgetId.current !== null) {
        window.grecaptcha?.reset(widgetId.current);
      }
      setStatus("sent");
      setMessage("Thanks - your message has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be sent.",
      );
    }
  }

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderCaptcha}
      />
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field-row">
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
        </div>
        <label>
          Subject
          <input name="subject" type="text" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={7} required />
        </label>
        <div className="contact-honeypot" aria-hidden="true">
          <label>
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        {siteKey ? (
          <div
            className="recaptcha-container"
            ref={captchaContainer}
            aria-label="reCAPTCHA verification"
          />
        ) : (
          <p className="contact-status error">
            reCAPTCHA and email delivery are not configured yet.
          </p>
        )}
        {message && (
          <p
            className={`contact-status ${status === "sent" ? "sent" : "error"}`}
            role="status"
          >
            {message}
          </p>
        )}
        <button
          className="contact-submit"
          type="submit"
          disabled={status === "sending" || !siteKey}
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </form>
    </>
  );
}
