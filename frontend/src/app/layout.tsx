import type { Metadata } from "next";
import "./globals.css";
import LegalSchema from "@/components/LegalSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://example-lawfirm.com"),
  title: {
    default: "Apex Legal & Associates | Expert Attorneys & Legal Counsel",
    template: "%s | Apex Legal & Associates",
  },
  description:
    "Premier legal counsel offering specialized services in Corporate Law, Criminal Defense, Family Law, Civil Litigation, and Legal Advisory.",
  keywords: [
    "Lawyer",
    "Attorney",
    "Advocate",
    "Legal Counsel",
    "Law Firm",
    "Corporate Lawyer",
    "Criminal Defense",
    "Family Law",
    "Civil Litigation",
    "Legal Consultation",
  ],
  authors: [{ name: "Apex Legal Associates" }],
  creator: "Apex Legal Associates",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example-lawfirm.com",
    title: "Apex Legal & Associates | Expert Attorneys & Legal Counsel",
    description:
      "Premier legal counsel offering specialized services in Corporate Law, Criminal Defense, Family Law, and Civil Litigation.",
    siteName: "Apex Legal & Associates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Legal & Associates | Expert Attorneys & Legal Counsel",
    description:
      "Premier legal counsel offering specialized services and trusted consultation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LegalSchema />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans selection:bg-amber-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
