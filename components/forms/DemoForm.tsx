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

  const control = "mt-2 min-h-12 w-full rounded-lg border border-white/20 bg-[#050b10] px-4 py-3 text-base text-white placeholder:text-white/30 outline-none transition focus:border-[#00BDF2] focus:ring-2 focus:ring-[#00BDF2]/15";
  const placeholders: Record<string,string> = {name:"Your full name",dealership:"Your dealership",website:"https://your-dealership.co.uk",email:"you@your-dealership.co.uk",phone:"Your preferred contact number",stockVolume:"e.g. 40 vehicles",chatProvider:"Provider name, or none"};
  const autocomplete: Record<string,string> = {name:"name",dealership:"organization",website:"url",email:"email",phone:"tel"};
  return <form onSubmit={handleSubmit} aria-labelledby="demo-form-heading" className="rounded-2xl border border-white/15 bg-[#10171c] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.25)] md:p-8">
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-5"><div><h2 id="demo-form-heading" className="text-2xl font-bold tracking-tight">Tell us about your dealership.</h2><p className="mt-2 text-sm leading-6 text-white/55">A few details help us make the conversation relevant.</p></div><p className="text-[11px] text-white/45">* Required fields</p></div>
    <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">{fields.map(([name,label])=><label key={name} className="block min-w-0"><span className="text-xs font-semibold text-white/85">{label}{["name","dealership","email"].includes(name)?<span className="ml-1 text-[#49d7ff]">*</span>:<span className="ml-2 text-[10px] font-normal text-white/40">Optional</span>}</span><input name={name} type={name==="email"?"email":name==="phone"?"tel":name==="website"?"url":"text"} autoComplete={autocomplete[name]} required={["name","dealership","email"].includes(name)} placeholder={placeholders[name]} className={control}/></label>)}</div>
    <label className="mt-5 block"><span className="text-xs font-semibold text-white/85">What would you like to explore?<span className="ml-2 text-[10px] font-normal text-white/40">Optional</span></span><textarea name="message" rows={3} placeholder="Tell us about your enquiry process, stock sourcing or the challenges you want to solve." className={`${control} resize-y`}/></label>
    <div className="mt-6 flex flex-wrap items-center gap-4"><button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-4 rounded-lg bg-[#F5B800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#ffd45c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5B800] disabled:cursor-wait disabled:opacity-50 sm:w-auto">{isSubmitting?"Sending your request…":"Request my demo"}<span aria-hidden="true">→</span></button><p className="text-xs text-white/50">We’ll contact you to arrange a suitable time.</p></div>
    {error&&<p role="alert" className="mt-4 rounded-lg border border-red-400/30 bg-red-400/5 p-4 text-sm text-red-300">{error}</p>}
    <p className="mt-5 border-t border-white/10 pt-4 text-[11px] leading-6 text-white/45">AutosalesAI Ltd uses these details to respond to your enquiry and arrange your requested demo. The form is processed through Formspree. Read our <Link href="/privacy-policy" className="text-[#efd269] underline underline-offset-4">Privacy Policy</Link> for recipients, retention and your rights. A demo request does not subscribe you to a newsletter. Please do not include sensitive personal information or dealership customer records.</p>
  </form>;
}