import type { Metadata } from "next";
import { Inter, Manrope, Playfair_Display } from "next/font/google";

import { Footer, Navbar } from "@/components/home";
import { getFooter, getGlobalSettings, getNavbar } from "@/lib/data";

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

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getGlobalSettings();

  return {
    title: settings.title,
    description: settings.description,
    openGraph: {
      title: settings.ogTitle || settings.title,
      description: settings.ogDescription || settings.description,
      images: settings.ogImage ? [settings.ogImage.url] : undefined,
    },
    twitter: {
      card: settings.twitterCard as "summary" | "summary_large_image" | undefined,
      title: settings.ogTitle || settings.title,
      description: settings.ogDescription || settings.description,
      images: settings.ogImage ? [settings.ogImage.url] : undefined,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navbar, footer] = await Promise.all([getNavbar(), getFooter()]);

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar data={navbar} />
        <div className="flex-1">{children}</div>
        <Footer data={footer} />
      </body>
    </html>
  );
}
