import type { Metadata } from "next";
import { Inter, Manrope, Playfair_Display } from "next/font/google";

import { Footer, Navbar } from "@/components/home";
import { getFooterContent, getNavbarContent } from "@/services/content-service";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BlueVerse | Water Infrastructure Landing Page",
    template: "%s | BlueVerse",
  },
  description:
    "BlueVerse cleantech landing page for water treatment, automated vehicle washing, and ESG intelligence solutions.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navbarContent, footerContent] = await Promise.all([
    getNavbarContent(),
    getFooterContent(),
  ]);

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar
          navLinks={navbarContent.navLinks}
          logo={navbarContent.logo}
          logoAlt={navbarContent.logoAlt}
          ctaLabel={navbarContent.ctaLabel}
          ctaHref={navbarContent.ctaHref}
        />
        <div className="flex-1">{children}</div>
        <Footer
          navLinks={footerContent.navLinks}
          serviceLinks={footerContent.serviceLinks}
          logo={footerContent.logo}
          copyright={footerContent.copyright}
          socialLinks={footerContent.socialLinks}
        />
      </body>
    </html>
  );
}
