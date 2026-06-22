"use client";

import { GlobeIcon, MapPinIcon } from "@/components/home/icons";
import { SectionHeading } from "@/components/home/section-heading";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

const officeIcons = [GlobeIcon, MapPinIcon];

type ContactSectionProps = {
  offices?: { title: string; address: string }[];
  heading?: string;
  description?: string;
  submitLabel?: string;
  submittingLabel?: string;
  successMessage?: string;
  errorMessage?: string;
};

const fallbackOffices = [
  { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates" },
  { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021" },
];

export function ContactSection({
  offices: officesProp,
  heading,
  description,
  submitLabel,
  submittingLabel,
  successMessage,
  errorMessage,
}: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const offices = officesProp && officesProp.length > 0 ? officesProp : fallbackOffices;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || (errorMessage ?? "Unable to send your message right now."));
      }

      form.reset();
      setStatus("success");
      setStatusMessage(result.message || (successMessage ?? "Message sent successfully."));
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : (errorMessage ?? "Unable to send your message right now."));
    }
  }

  return (
    <section id="contact" className="bg-brand-ice py-12 md:py-[60px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow=""
          title={heading ?? "Let's Build Something Together"}
          description={description ?? "Whether you have a project in mind, a question about our services, or want to explore a partnership — our team is ready to help."}
          centered
        />
        <div className="mt-8 grid gap-[18px] xl:grid-cols-[621px_1fr]">
          <div className="grid gap-[18px]">
            {offices.map((office, index) => {
              const Icon = officeIcons[index];

              return (
                <article
                  key={office.title}
                  className="rounded-[10px] md:rounded-[19px] bg-white p-4 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex size-[48px] items-center justify-center rounded-full bg-brand-ice text-brand-navy">
                    <Icon className="size-[24px]" />
                  </div>
                  <h3 className="mt-4 md:mt-8 font-display text-[24px] md:text-[29px] font-bold leading-none text-brand-navy">
                    {office.title}
                  </h3>
                  <p className="mt-4 text-[16px] md:text-[19px] leading-[1.5] text-brand-soft">
                    {office.address}
                  </p>
                </article>
              );
            })}
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-[10px] md:rounded-[29px] bg-white px-5 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:px-6 sm:py-8 md:px-[30px] md:py-[40px]"
          >
            <div className="grid gap-5 sm:grid-cols-2 md:gap-[20px]">
              <Field label="Full Name">
                <input name="name" type="text" placeholder="Your Name" className="form-field" required />
              </Field>
              <Field label="Company">
                <input name="company" type="text" placeholder="Company Name" className="form-field" />
              </Field>
              <Field label="Email Address">
                <input name="email" type="email" placeholder="email@company.com" className="form-field" required />
              </Field>
              <Field label="Phone Number">
                <input name="phone" type="tel" placeholder="+91 XXXX XXX XXX" className="form-field" />
              </Field>
            </div>
            <div className="mt-5 md:mt-[30px]">
              <Field label="Service Interest">
                <div className="relative">
                  <select name="service" className="form-field appearance-none pr-12" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Water Treatment Systems</option>
                    <option>Automated Vehicle Washing</option>
                    <option>ESG Intelligence Platform</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-soft">
                    <span aria-hidden>&#x2304;</span>
                  </span>
                </div>
              </Field>
            </div>
            <div className="mt-5 md:mt-[30px]">
              <Field label="Message">
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Tell us about your project requirements..."
                  className="form-field min-h-[182px] resize-y py-3"
                  required
                />
              </Field>
            </div>
            <div className="mt-7">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[5px] border border-white bg-brand-gradient px-6 py-3 font-heading text-[17px] font-medium leading-none text-white shadow-[0_8px_20px_rgba(17,145,208,0.18)] transition duration-200 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 md:text-[20px]"
              >
                <span>{status === "submitting" ? (submittingLabel ?? "Sending...") : (submitLabel ?? "Talk To Our Team")}</span>
              </button>
            </div>
            {statusMessage ? (
              <p
                role="status"
                className={`mt-4 text-center text-[15px] font-medium ${
                  status === "success" ? "text-brand-navy" : "text-red-600"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-sans text-[17px] font-bold text-brand-navy">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
