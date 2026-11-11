"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const fields = [
  ["name", "Name"],
  ["dealership", "Dealership Name"],
  ["website", "Website"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["stockVolume", "Stock Volume"],
  ["chatProvider", "Current Chat Provider"]
];

export default function DemoForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("_subject", "New AutoSalesAI Demo Request");

    try {
      const response = await fetch("https://formspree.io/f/mreveovp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or email contact@autosalesai.co.uk.");
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-brand-gold/20 bg-[#0b0b0b] p-7 md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {fields.map(([name, label]) => (
          <label key={name} className="block">
            <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-brand-muted">
              {label}
            </span>

            <input
  name={name}
  type={
    name === "email"
      ? "email"
      : name === "phone"
      ? "tel"
      : name === "website"
      ? "url"
      : "text"
  }
  required={["name", "dealership", "email"].includes(name)}
  className="mt-3 w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-brand-gold"
/>
          </label>
        ))}
      </div>

      <label className="mt-6 block">
        <span className="text-[12px] font-bold uppercase tracking-[0.24em] text-brand-muted">
          Message
        </span>

        <textarea
          name="message"
          rows={5}
          className="mt-3 w-full border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-brand-gold"
        />
      </label>

      <p className="mt-6 text-xs leading-6 text-white/60">
        AutosalesAI Ltd uses these details to respond to your enquiry and arrange your requested demo. The form is processed through Formspree. Read our <Link href="/privacy-policy" className="text-brand-gold underline underline-offset-4">Privacy Policy</Link> for recipients, retention and your rights. A demo request does not subscribe you to a newsletter. Please do not include sensitive personal information or dealership customer records.
      </p>
      {error && (
        <p className="mt-6 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
  type="submit"
  disabled={isSubmitting}
  className="mt-8 inline-flex items-center justify-center border border-brand-gold/80 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-brand-gold transition hover:bg-brand-gold hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
>
        {isSubmitting ? "Submitting..." : "Request Demo"}
      </button>
    </form>
  );
}