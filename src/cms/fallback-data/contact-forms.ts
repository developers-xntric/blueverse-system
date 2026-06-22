import type { ContactFormContent, WWTPContactFormContent } from "@/types/cms";
import { fallbackOffices } from "@/cms/fallback-data/home";

export const fallbackContactFormContent: ContactFormContent = {
  heading: "Let's Build Something Together",
  description:
    "Whether you have a project in mind, a question about our services, or want to explore a partnership — our team is ready to help.",
  offices: fallbackOffices,
  fields: {
    name: { label: "Full Name", placeholder: "Your Name", required: true },
    company: { label: "Company", placeholder: "Company Name", required: false },
    email: { label: "Email Address", placeholder: "email@company.com", required: true },
    phone: { label: "Phone Number", placeholder: "+91 XXXX XXX XXX", required: false },
    service: {
      label: "Service Interest",
      placeholder: "Select a service",
      options: ["Water Treatment Systems", "Automated Vehicle Washing", "ESG Intelligence Platform"],
    },
    message: { label: "Message", placeholder: "Tell us about your project requirements...", required: true },
  },
  submitLabel: "Talk To Our Team",
  submittingLabel: "Sending...",
  successMessage: "Message sent successfully.",
  errorMessage: "Unable to send your message right now.",
};

export const fallbackWWTPContactFormContent: WWTPContactFormContent = {
  heading: "Let's Build Something Together",
  description:
    "Whether you have a project in mind, a question about our services, or want to explore a partnership — our team is ready to help.",
  offices: fallbackOffices,
  fields: {
    name: { label: "Full Name", placeholder: "Your Name" },
    company: { label: "Company", placeholder: "Company Name" },
    email: { label: "Email Address", placeholder: "email@company.com" },
    phone: { label: "Phone Number", placeholder: "+91 XXXX XXX XXX" },
    service: {
      label: "Service Interest",
      options: [
        "Select a service",
        "Waste Water Treatment Systems",
        "Decentralised Desalination Infrastructure",
        "ElectroX Product Ecosystem",
      ],
    },
    message: { label: "Message", placeholder: "Tell us about your project requirements..." },
  },
  submitLabel: "Talk To Our Team ↗",
};
