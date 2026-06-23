"use client";

import { GlobeIcon, MapPinIcon } from "@/components/home/icons";
import { SectionHeading } from "@/components/home/section-heading";
import Image from "next/image";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

const officeIcons = [GlobeIcon, MapPinIcon];

type ContactSectionProps = {
  offices?: { title: string; address: string; icon?: string }[];
  heading?: string;
  description?: string;
  fields?: {
    name: { label: string; placeholder: string; required: boolean };
    company: { label: string; placeholder: string; required: boolean };
    email: { label: string; placeholder: string; required: boolean };
    phone: { label: string; placeholder: string; required: boolean };
    service: { label: string; placeholder: string; options: string[] };
    message: { label: string; placeholder: string; required: boolean };
  };
  submitLabel?: string;
  submittingLabel?: string;
  successMessage?: string;
  errorMessage?: string;
};

const fallbackOffices: { title: string; address: string; icon?: string }[] = [
  { title: "UAE", address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates" },
  { title: "India", address: "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021" },
];

export function ContactSection({
  offices: officesProp,
  heading,
  description,
  fields,
  submitLabel,
  submittingLabel,
  successMessage,
  errorMessage,
}: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const offices = officesProp && officesProp.length > 0 ? officesProp : fallbackOffices;
  const formFields = fields ?? {
    name: { label: "Full Name", placeholder: "Your Name", required: true },
    company: { label: "Company", placeholder: "Company Name", required: false },
    email: { label: "Email Address", placeholder: "email@company.com", required: true },
    phone: { label: "Phone Number", placeholder: "+91 XXXX XXX XXX", required: false },
    service: { label: "Service Interest", placeholder: "Select a service", options: ["Water Treatment Systems", "Automated Vehicle Washing", "ESG Intelligence Platform"] },
    message: { label: "Message", placeholder: "Tell us about your project requirements...", required: true },
  };

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
                    {office.icon ? (
                      <Image src={office.icon} alt="" width={24} height={24} className="size-[24px] object-contain" />
                    ) : (
                      <Icon className="size-[24px]" />
                    )}
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
              <Field label={formFields.name.label}>
                <input name="name" type="text" placeholder={formFields.name.placeholder} className="form-field" required={formFields.name.required} />
              </Field>
              <Field label={formFields.company.label}>
                <input name="company" type="text" placeholder={formFields.company.placeholder} className="form-field" required={formFields.company.required} />
              </Field>
              <Field label={formFields.email.label}>
                <input name="email" type="email" placeholder={formFields.email.placeholder} className="form-field" required={formFields.email.required} />
              </Field>
              <Field label={formFields.phone.label}>
                <input name="phone" type="tel" placeholder={formFields.phone.placeholder} className="form-field" required={formFields.phone.required} />
              </Field>
            </div>
            <div className="mt-5 md:mt-[30px]">
              <Field label={formFields.service.label}>
                <div className="relative">
                  <select name="service" className="form-field appearance-none pr-12" defaultValue="">
                    <option value="" disabled>
                      {formFields.service.placeholder}
                    </option>
                    {formFields.service.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-soft">
                    <span aria-hidden>&#x2304;</span>
                  </span>
                </div>
              </Field>
            </div>
            <div className="mt-5 md:mt-[30px]">
              <Field label={formFields.message.label}>
                <textarea
                  name="message"
                  rows={7}
                  placeholder={formFields.message.placeholder}
                  className="form-field min-h-[182px] resize-y py-3"
                  required={formFields.message.required}
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
