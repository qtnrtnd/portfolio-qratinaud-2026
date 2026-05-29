"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/contact/actions";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({ label, name, type = "text", required, textarea }: FieldProps) {
  const id = "f-" + name;
  const baseClass =
    "w-full bg-transparent border-0 border-b-[1.5px] border-b-ink py-2 font-sans text-base text-ink outline-none";
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mono block text-mid mb-1 text-[11px]"
      >
        {label.toUpperCase()}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={4}
          className={`${baseClass} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          className={`${baseClass} resize-none`}
        />
      )}
    </div>
  );
}

const initialState: ContactState = { ok: false };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  return (
    <form
      action={formAction}
      className="relative bg-paper border-[1.5px] border-ink shadow-[5px_5px_0_var(--ink)] pt-6 px-6 pb-5.5 rotate-[0.6deg]"
    >
      <span
        aria-hidden="true"
        className="mono absolute -top-3.5 left-4 bg-accent-1 text-ink px-2.5 pt-1 pb-0.5 text-[11px] tracking-[0.08em] border-[1.5px] border-ink -rotate-3"
      >
        OR WRITE HERE ↓
      </span>

      {state.ok ? (
        <div className="py-5">
          <p className="serif text-[26px] italic m-0">
            Got it<span className="text-accent-2">.</span> I&apos;ll write back within 48h.
          </p>
        </div>
      ) : (
        <>
          <Field label="Name" name="name" />
          <Field label="Email" name="email" type="email" required />
          <Field label="Message" name="message" textarea required />

          {/* Honeypot - hidden from humans, catches bots. */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
            <label htmlFor="f-company">Company</label>
            <input id="f-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {state.error && (
            <p className="mono mt-1 mb-2 text-[12px] text-accent-2" role="alert">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mono mt-4.5 pt-3 px-4.5 pb-2.75 bg-ink text-paper border-[1.5px] border-paper shadow-[3px_3px_0_var(--ink)] cursor-pointer text-xs tracking-[0.08em] disabled:opacity-60 disabled:cursor-wait"
          >
            {pending ? "SENDING…" : "SEND →"}
          </button>
        </>
      )}
    </form>
  );
}
