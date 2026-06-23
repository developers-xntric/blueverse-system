import { GlobeIcon, MapPinIcon } from "@/components/home/icons";
import Image from "next/image";

const officeIcons = [GlobeIcon, MapPinIcon];

type ContactSectionProps = {
  heading?: string;
  description?: string;
  submitLabel?: string;
  offices?: { title: string; address: string; icon?: string }[];
  fields?: {
    name: { label: string; placeholder: string; required: boolean };
    company: { label: string; placeholder: string; required: boolean };
    email: { label: string; placeholder: string; required: boolean };
    phone: { label: string; placeholder: string; required: boolean };
    service: { label: string; placeholder: string; options: string[] };
    message: { label: string; placeholder: string; required: boolean };
  };
};

const fallbackOffices: { title: string; address: string; icon?: string }[] = [
  {
    title: "UAE",
    address: "near Al Quoz - Al Qouz Ind.second - Al Quoz - Dubai - United Arab Emirates",
  },
  {
    title: "India",
    address:
      "Floor-8, Plot-208, Regent Chambers, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra - 400021",
  },
];

export function ContactSection({
  heading,
  description,
  submitLabel,
  offices: officesProp,
  fields,
}: ContactSectionProps) {
  const offices = officesProp && officesProp.length > 0 ? officesProp : fallbackOffices;
  const formFields = fields ?? {
    name: { label: "Full Name", placeholder: "Your Name", required: true },
    company: { label: "Company", placeholder: "Company Name", required: false },
    email: { label: "Email Address", placeholder: "email@company.com", required: true },
    phone: { label: "Phone Number", placeholder: "+91 XXXX XXX XXX", required: false },
    service: {
      label: "Service Interest",
      placeholder: "Select a service",
      options: ["Waste Water Treatment Systems", "Decentralised Desalination Infrastructure", "ElectroX Product Ecosystem"],
    },
    message: { label: "Message", placeholder: "Tell us about your project requirements...", required: true },
  };

  return (
    <section id="contact" className="bg-brand-ice px-5 py-12 md:px-10 md:py-[60px] xl:px-[134px]">
      <div className="mx-auto max-w-[1652px]">
        <div className="text-center">
          <h2 className="font-heading text-[42px] leading-[1.05] font-bold text-brand-navy md:text-[50px] xl:text-[55px]">
            {heading ?? "Let's Build Something Together"}
          </h2>
          <p className="mx-auto mt-[10px] max-w-[1652px] text-[20px] leading-[1.4] text-brand-muted xl:text-[22px] xl:leading-[1.405]">
            {description ??
              "Whether you have a project in mind, a question about our services, or want to explore a partnership — our team is ready to help."}
          </p>
        </div>

        <div className="mt-10 grid gap-[15px] xl:grid-cols-[621px_1fr]">
          <div className="grid gap-[15px]">
            {offices.map((office, index) => {
              const Icon = officeIcons[index];

              return (
                <article
                  key={office.title}
                  className="rounded-[19px] border border-transparent bg-white p-5 sm:p-6 md:p-[50px]"
                >
                  <div className="flex size-[78px] items-center justify-center rounded-[19px] bg-brand-ice-strong text-brand-navy">
                    {office.icon ? (
                      <Image src={office.icon} alt="" width={39} height={39} className="size-[39px] object-contain" />
                    ) : (
                      <Icon className="size-[39px]" />
                    )}
                  </div>
                  <h3 className="mt-10 font-display text-[29px] leading-[1.33] font-bold text-brand-navy">
                    {office.title}
                  </h3>
                  <p className="mt-[10px] text-[19px] leading-[1.5] text-brand-soft">
                    {office.address}
                  </p>
                </article>
              );
            })}
          </div>

          <form className="rounded-[29px] border border-white bg-white px-5 py-6 sm:px-6 sm:py-8 md:px-[60px] md:py-[40px]">
            <div className="grid gap-5 sm:grid-cols-2 md:gap-[34px] md:gap-x-[30px]">
              <Field label={formFields.name.label}>
                <input type="text" placeholder={formFields.name.placeholder} className="form-field" required={formFields.name.required} />
              </Field>
              <Field label={formFields.company.label}>
                <input type="text" placeholder={formFields.company.placeholder} className="form-field" required={formFields.company.required} />
              </Field>
              <Field label={formFields.email.label}>
                <input type="email" placeholder={formFields.email.placeholder} className="form-field" required={formFields.email.required} />
              </Field>
              <Field label={formFields.phone.label}>
                <input type="tel" placeholder={formFields.phone.placeholder} className="form-field" required={formFields.phone.required} />
              </Field>
            </div>
            <div className="mt-5 md:mt-[34px]">
              <Field label={formFields.service.label}>
                <select className="form-field appearance-none">
                  <option>{formFields.service.placeholder}</option>
                  {formFields.service.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="mt-5 md:mt-[34px]">
              <Field label={formFields.message.label}>
                <textarea
                  rows={7}
                  placeholder={formFields.message.placeholder}
                  className="form-field min-h-[182px] resize-none py-3"
                  required={formFields.message.required}
                />
              </Field>
            </div>
            <button
              type="submit"
              className="bg-brand-gradient mt-[27px] inline-flex min-h-[55px] w-full items-center justify-center rounded-[5px] border border-white px-[30px] py-3 font-heading text-[20px] font-medium text-white"
            >
              {submitLabel ?? "Talk To Our Team ↗"}
            </button>
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
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[17px] font-bold text-brand-navy">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
