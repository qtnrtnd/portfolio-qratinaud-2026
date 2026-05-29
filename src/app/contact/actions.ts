"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";
import { EMAIL, BRAND } from "@/lib/data/profile";

export type ContactState = {
  ok: boolean;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill hidden fields. Pretend success without sending.
  const honeypot = (formData.get("company") as string | null)?.trim();
  if (honeypot) return { ok: true };

  const name = ((formData.get("name") as string | null) ?? "").trim();
  const email = ((formData.get("email") as string | null) ?? "").trim();
  const message = ((formData.get("message") as string | null) ?? "").trim();

  if (!email || !EMAIL_RE.test(email) || email.length > MAX_EMAIL) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (!message) {
    return { ok: false, error: "Please write a short message." };
  }
  if (name.length > MAX_NAME || message.length > MAX_MESSAGE) {
    return { ok: false, error: "That's a bit long - please shorten it." };
  }

  const apiKey = getCloudflareContext().env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return {
      ok: false,
      error: "Sending is unavailable right now - please email me directly.",
    };
  }

  const fromName = name || "Anonymous";
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${BRAND} <${EMAIL}>`,
        to: [EMAIL],
        reply_to: email,
        subject: `New message from ${fromName} via the portfolio`,
        text: `Name: ${name || "-"}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(`Resend responded ${res.status}: ${detail}`);
      return {
        ok: false,
        error: "Something went wrong sending your message - please try again.",
      };
    }
  } catch (err) {
    console.error("Failed to reach Resend:", err);
    return {
      ok: false,
      error: "Something went wrong sending your message - please try again.",
    };
  }

  return { ok: true };
}
