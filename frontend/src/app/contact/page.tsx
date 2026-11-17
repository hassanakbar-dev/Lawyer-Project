import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationSection from "@/components/home/ConsultationSection";
import FaqAccordion from "@/components/common/FaqAccordion";
import {
  HelpCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building,
  FileText,
  AlertTriangle,
  Globe,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Schedule Confidential Consultation | Apex Legal",
  description:
    "Get in touch with the attorneys at Apex Legal & Associates. 24/7 emergency legal helpline, confidential intake, and chamber consultations in New York, D.C., and London.",
};

export default function ContactPage() {
  const offices = [
    {
      city: "New York (Global Headquarters)",
      address: "100 Constitution Ave, 14th Floor, New York, NY 10005",
      phone: "+1 (212) 555-0144",
      email: "nyc@apexlegal.com",
      hours: "Mon – Fri: 8:00 AM – 7:30 PM EST (24/7 Emergency Line)",
      note: "Primary trial chambers, executive client conference suites, and legal research archives.",
    },
    {
      city: "Washington, D.C. (Regulatory & Appellate)",
      address: "1200 Pennsylvania Ave NW, Suite 800, Washington, D.C. 20004",
      phone: "+1 (202) 555-0182",
      email: "dc@apexlegal.com",
      hours: "Mon – Fri: 8:30 AM – 6:30 PM EST",
      note: "Antitrust compliance, DOJ/SEC government inquiries, and federal appellate practice.",
    },
    {
      city: "London (International Arbitration Liaison)",
      address: "30 St Mary Axe, 22nd Floor, London EC3A 8EP, United Kingdom",
      phone: "+44 (20) 7946-0921",
      email: "london@apexlegal.com",
      hours: "Mon – Fri: 9:00 AM – 6:00 PM GMT",
      note: "LCIA / ICC commercial arbitrations and cross-border European M&A advisory.",
    },
  ];

  const intakeFaqs = [
    {
      q: "Is my initial consultation strictly confidential even if I don't hire you?",
      a: "Yes, without exception. Under the professional rules of legal ethics and statutory evidence codes, prospective client communications are protected by attorney-client privilege and the work-product doctrine from the exact moment of first inquiry.",
    },
    {
      q: "What should I have prepared for my intake or Google Meet video meeting?",
      a: "Please organize all relevant contracts, pleadings, emails, court dates, financial disclosures, or police reports. Having documents arranged chronologically enables counsel to give you immediate, high-impact tactical advice.",
    },
    {
      q: "How are your legal retainers and billing rates structured?",
      a: "Depending on your specific matter, we offer transparent structured hourly retainers, predictable flat fees for transactional filings, or contingency/hybrid fee arrangements for selected commercial plaintiff litigation.",
    },
    {
      q: "Do you maintain a 24/7 hotline for weekend arrests or emergency search warrants?",
      a: "Yes. Our trial advocates maintain an on-call 24/7 rapid emergency hotline (+1 800-555-0199) specifically for unannounced federal search warrants, immediate arrests, bail hearings, or emergency Temporary Restraining Orders (TROs).",
    },
    {
      q: "Can I schedule a consultation if I reside outside New York or overseas?",
      a: "Yes. Over 40% of our enterprise and executive clients utilize our encrypted Google Meet video chambers. Our partners are admitted across federal circuits and frequently handle multi-jurisdictional matters through pro hac vice admission.",
    },
    {
      q: "How quickly will an intake attorney review my submitted case inquiry?",
      a: "Inquiries submitted through our website form are reviewed within 2 hours during normal business hours. Urgent matter inquiries flagged as 'Emergency' receive a telephone response within 30 minutes from on-call trial counsel.",
    },
    {
      q: "What happens during the initial consultation?",
      a: "We conduct an in-depth factual diagnosis, analyze key legal exposures and statutes of limitations, evaluate evidence strength, and present you with a candid strategic roadmap along with fee options.",
    },
    {
      q: "Where do we serve formal court subpoenas or legal process?",
      a: "Formal service of process must be delivered to our designated Registered Agent at our New York chambers or served via authorized electronic discovery portal per our litigation hold protocol.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Banner */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-amber-800">Home</Link>
              <span>/</span>
              <span className="text-slate-500">Contact & Chambers</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-serif">
              Confidential Case Intake & Chamber Directory
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
              When facing high-stakes legal scrutiny, timing and confidentiality are paramount. Connect directly with our intake advocates via Google Meet, telephone, or at our offices.
            </p>
          </div>
        </section>

        {/* Main Intake Form Section (Dual-Tab Quick Message vs Calendar Booking) */}
        <ConsultationSection />

        {/* Global Chambers Directory */}
        <section className="py-24 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <Building className="h-4 w-4 text-amber-600" />
                Physical Presence
              </div>
              <h2 className="mt-3 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                Chambers & Regional Office Locations
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Strategically positioned in major financial, regulatory, and international arbitration hubs.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 p-7 shadow-xs hover:border-amber-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">
                      {office.city}
                    </h3>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      {office.note}
                    </p>

                    <div className="mt-6 space-y-3 text-xs text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span className="font-semibold text-slate-900">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Clock className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
                      <Lock className="h-3 w-3 text-amber-600" />
                      <span>Strict Security Checkpoint at Reception</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Response & Subpoena Notice */}
        <section className="py-16 bg-slate-100/80 border-y border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* 24/7 Rapid Emergency Hotline */}
              <div className="rounded-2xl border border-amber-300 bg-amber-50/60 p-7 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-amber-700" />
                  <h3 className="text-lg font-bold text-amber-950 font-serif">
                    24/7 Urgent Trial & Arrest Response
                  </h3>
                </div>
                <p className="text-xs text-amber-900/90 leading-relaxed">
                  If you or an executive is detained, facing imminent arrest, served with an urgent federal search warrant, or served with an emergency TRO, call our emergency hotline immediately.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="tel:+18005550199"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-amber-500"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Hotline: +1 (800) 555-0199</span>
                  </a>
                  <span className="text-xs text-amber-800 font-medium">Available 24/7/365</span>
                </div>
              </div>

              {/* Service of Legal Process */}
              <div className="rounded-2xl border border-slate-300 bg-white p-7 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    Service of Process & Subpoena Delivery
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Attorneys and process servers serving judicial subpoenas, discovery notices, or summons must email a conformed copy to <span className="font-semibold text-slate-900">service@apexlegal.com</span> or deliver in duplicate to our Manhattan reception desk.
                </p>
                <div className="mt-5 text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Formal acceptance subject to active notice of appearance.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation FAQs with Interactive Accordion */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
                <HelpCircle className="h-4 w-4 text-amber-600" />
                Intake FAQ
              </div>
              <h2 className="mt-2 text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
                Client Intake & Consultation Inquiries
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Click any question below to view detailed answers regarding confidentiality, retainers, and booking.
              </p>
            </div>

            <div className="mt-12">
              <FaqAccordion items={intakeFaqs} cardBg="slate" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
