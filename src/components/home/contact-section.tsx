"use client";

import { MapPinIcon } from "@/components/home/icons";
import { offices } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

export function ContactSection() {
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
        throw new Error(result.message || "Unable to send your message right now.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage(result.message || "Message sent successfully.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Unable to send your message right now.");
    }
  }

  return (
    <section id="contact" className="bg-brand-ice py-12 md:py-[60px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow=""
          title="Let's Build Something Together"
          description=""
          centered
        />
        <p className="text-[#4A5565] mx-auto mt-3  text-[16px] leading-[1.4] md:text-[22px]">Whether you have a project in mind, a question about our services, or want to explore a partnership our team is ready to help.</p>
        <div className="mt-8 grid gap-[18px] xl:grid-cols-[621px_1fr]">
          <div className="grid gap-[18px]">
            <article className="rounded-[10px] md:rounded-[19px] bg-white h-full pb-10 md:pb-0 pt-4 md:pt-8 px-4 md:px-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <div className="flex size-[48px] items-center justify-center rounded-[10px] bg-brand-ice text-brand-navy">
                <MapPinIcon className="size-[24px]" />
              </div>
              <div className="mt-4 md:mt-8 flex items-start flex-col justify-between lg:h-[70%] ">
                {offices.map((office, _index) => (
                  <div
                    key={office.title}
                    className={"pb-8 border-b border-gray-200"}
                  >
                    <h3 className="font-display text-[24px]  mt-4 md:mt-0 md:text-[29px] font-bold leading-none text-brand-navy">
                      {office.title}
                    </h3>
                    <p className="mt-4 text-[16px] md:text-[19px] leading-[1.5] text-brand-soft">
                      {office.address}
                    </p>
                  </div>
                ))}
                <div className="pt-6 ">
                  <h3 className="font-display text-[24px] md:text-[29px] font-bold leading-none text-brand-navy">
                    Email Address
                  </h3>
                  <p className="mt-4 text-[16px] md:text-[19px] leading-[1.5] text-brand-soft">
                    info@blueverse.ae
                  </p>
                </div>
              </div>
            </article>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-[10px] md:rounded-[29px] bg-white px-5 py-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:px-6 sm:py-8 md:px-[30px] md:py-[30px]"
          >
            <div className="grid gap-5 sm:grid-cols-2 md:gap-[10px]">
              <Field label="Full Name">
                <input name="name" type="text" placeholder="Your Name" className="form-field" required />
              </Field>
              <Field label="Company">
                <input name="company" type="text" placeholder="Company Name" className="form-field" required />
              </Field>
              <Field label="Email Address">
                <input name="email" type="email" placeholder="email@company.com" className="form-field" required />
              </Field>
              <Field label="Phone Number">
                <input name="phone" type="tel" placeholder="+91 XXXX XXX XXX" className="form-field" required />
              </Field>
            </div>
            <div className="mt-5 md:mt-[30px]">
              <Field label="Service Interest">
                <div className="relative">
                  <select name="service" className="form-field appearance-none pr-12" defaultValue="" required>
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Water Treatment Systems</option>
                    <option>Automated Vehicle Washing</option>
                    <option>ESG Intelligence Platform</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-soft">
                    <span aria-hidden>⌄</span>
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
                <span>{status === "submitting" ? "Sending..." : "Talk To Our Team"}</span>
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
