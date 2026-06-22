import { GlobeIcon, MapPinIcon } from "@/components/home/icons";

const officeIcons = [GlobeIcon, MapPinIcon];

type ContactSectionProps = {
  heading?: string;
  description?: string;
  submitLabel?: string;
  offices?: { title: string; address: string }[];
};

const fallbackOffices = [
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
}: ContactSectionProps) {
  const offices = officesProp && officesProp.length > 0 ? officesProp : fallbackOffices;

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
                    <Icon className="size-[39px]" />
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
            <div className="mt-5 md:mt-[34px]">
              <Field label="Service Interest">
                <select className="form-field appearance-none">
                  <option>Select a service</option>
                  <option>Waste Water Treatment Systems</option>
                  <option>Decentralised Desalination Infrastructure</option>
                  <option>ElectroX Product Ecosystem</option>
                </select>
              </Field>
            </div>
            <div className="mt-5 md:mt-[34px]">
              <Field label="Message">
                <textarea
                  rows={7}
                  placeholder="Tell us about your project requirements..."
                  className="form-field min-h-[182px] resize-none py-3"
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
