"use client";

import { MapPinIcon } from "@/components/home/icons";
import { SectionHeading } from "@/components/home/section-heading";
import type { ContactFormData } from "@/lib/types";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

type ContactSectionProps = {
  data: ContactFormData;
};

export function ContactSection({ data }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

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
        throw new Error(result.message || data.errorMessage || "Unable to send your message right now.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage(result.message || data.successMessage || "Message sent successfully.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : data.errorMessage || "Unable to send your message right now.",
      );
    }
  }

  return (
    <section id="contact" className="bg-brand-ice py-12 md:py-[60px]">
      <div className="homepage-shell">
        <h3 className="font-heading text-[24px] leading-[1.05] font-bold md:text-[40px] text-[#062B4F] text-center">
          {data.heading}
        </h3>
       
        {data.description ? (
          <p className="mx-auto mt-3 text-center text-[16px] leading-[1.4] text-[#4A5565] md:text-[22px]">
            {data.description}
          </p>
        ) : null}
        <div className="mt-8 grid gap-[18px] xl:grid-cols-[621px_1fr]">
          <div className="grid gap-[18px]">
            <article className="h-full rounded-[10px] bg-white px-4 pb-22 pt-4 shadow-[0_1px_3px_rgba(0,0,0,0.08)] md:rounded-[19px] md:px-8 md:pb-0 md:pt-8">
              <div className="flex size-[48px] items-center justify-center rounded-[10px] bg-brand-ice text-brand-navy">
                <MapPinIcon className="size-[24px]" />
              </div>
              <div className="mt-4 flex h-full flex-col items-start justify-between md:mt-8 lg:h-[70%]">
                {data.offices.map((office) => (
                  <div key={office.title} className="border-b border-gray-200 pb-8">
                    <h3 className="mt-4 font-display text-[24px] font-bold leading-none text-brand-navy md:mt-0 md:text-[29px]">
                      {office.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.5] text-brand-soft md:text-[19px]">
                      {office.address}
                    </p>
                  </div>
                ))}
                {data.emailAddress ? (
                  <div className="pt-6">
                    <h3 className="font-display text-[24px] font-bold leading-none text-brand-navy md:text-[29px]">
                      {data.emailTitle}
                    </h3>
                    <a href={`mailto:${data.emailAddress}`}>
                      <p className="mt-4 text-[16px] leading-[1.5] text-brand-soft md:text-[19px]">
                        {data.emailAddress}
                      </p>
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-[10px] bg-white px-5 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:px-6 sm:py-8 md:rounded-[29px] md:px-[30px] md:py-[30px]"
          >
            <div className="grid gap-5 sm:grid-cols-2 md:gap-[10px]">
              <Field label={data.nameField.label}>
                <input
                  name="name"
                  type="text"
                  placeholder={data.nameField.placeholder}
                  className="form-field h-14"
                  required={data.nameField.required}
                />
              </Field>
              <Field label={data.companyField.label}>
                <input
                  name="company"
                  type="text"
                  placeholder={data.companyField.placeholder}
                  className="form-field h-14"
                  required={data.companyField.required}
                />
              </Field>
              <Field label={data.emailField.label}>
                <input
                  name="email"
                  type="email"
                  placeholder={data.emailField.placeholder}
                  className="form-field h-14"
                  required={data.emailField.required}
                />
              </Field>
              <Field label={data.phoneField.label}>
                <input
                  name="phone"
                  type="tel"
                  placeholder={data.phoneField.placeholder}
                  className="form-field h-14"
                  required={data.phoneField.required}
                />
              </Field>
            </div>
            <div className="mt-5 md:mt-[15px]">
              <Field label={data.serviceField.label}>
                <div className="relative">
                  <select name="service" className="form-field appearance-none pr-12" defaultValue="" required>
                    <option value="" disabled>
                      {data.serviceField.placeholder}
                    </option>
                    {data.serviceField.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-soft">
                    <span aria-hidden>âŒ„</span>
                  </span>
                </div>
              </Field>
            </div>
            <div className="mt-5 md:mt-[15px]">
              <Field label={data.messageField.label}>
                <textarea
                  name="message"
                  rows={7}
                  placeholder={data.messageField.placeholder}
                  className="form-field min-h-[170px] resize-y py-3"
                  required={data.messageField.required}
                />
              </Field>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[5px] border border-white bg-brand-gradient px-6 py-3 font-heading text-[17px] font-medium leading-none text-white shadow-[0_8px_20px_rgba(17,145,208,0.18)] transition duration-200 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 md:text-[20px]"
              >
                <span>{status === "submitting" ? data.submittingLabel || "Sending..." : data.submitLabel}</span>
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
