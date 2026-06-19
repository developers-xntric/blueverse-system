import { Button } from "@/components/home/button";
import { GlobeIcon, MapPinIcon } from "@/components/home/icons";
import { offices } from "@/components/home/homepage-data";
import { SectionHeading } from "@/components/home/section-heading";
import type { ReactNode } from "react";

const officeIcons = [GlobeIcon, MapPinIcon];

export function ContactSection() {
  return (
    <section id="contact" className="bg-brand-ice py-12 md:py-[60px]">
      <div className="homepage-shell">
        <SectionHeading
          eyebrow=""
          title="Let&apos;s Build Something Together"
          description="Whether you have a project in mind, a question about our services, or want to explore a partnership — our team is ready to help."
          centered
        />
        <div className="mt-8 grid gap-[18px] xl:grid-cols-[621px_1fr]">
          <div className="grid gap-[18px]">
            {offices.map((office, index) => {
              const Icon = officeIcons[index];

              return (
                <article
                  key={office.title}
                  className="rounded-[19px] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex size-[48px] items-center justify-center rounded-full bg-brand-ice text-brand-navy">
                    <Icon className="size-[24px]" />
                  </div>
                  <h3 className="mt-8 font-display text-[29px] font-bold leading-none text-brand-navy">
                    {office.title}
                  </h3>
                  <p className="mt-4 text-[19px] leading-[1.5] text-brand-soft">
                    {office.address}
                  </p>
                </article>
              );
            })}
          </div>
          <form className="rounded-[29px] bg-white px-6 py-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] md:px-[60px] md:py-[40px]">
            <div className="grid gap-[30px] md:grid-cols-2">
              <Field label="Full Name">
                <input type="text" placeholder="Your Name" className="form-field" />
              </Field>
              <Field label="Company">
                <input type="text" placeholder="Company Name" className="form-field" />
              </Field>
              <Field label="Email Address">
                <input type="email" placeholder="email@company.com" className="form-field" />
              </Field>
              <Field label="Phone Number">
                <input type="tel" placeholder="+91 XXXX XXX XXX" className="form-field" />
              </Field>
            </div>
            <div className="mt-[30px]">
              <Field label="Service Interest">
                <div className="relative">
                  <select className="form-field appearance-none pr-12">
                    <option>Select a service</option>
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
            <div className="mt-[30px]">
              <Field label="Message">
                <textarea
                  rows={7}
                  placeholder="Tell us about your project requirements..."
                  className="form-field min-h-[182px] resize-y py-3"
                />
              </Field>
            </div>
            <div className="mt-7">
              <Button className="w-full">Talk To Our Team</Button>
            </div>
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
      <div className="mt-1">{children}</div>
    </label>
  );
}
