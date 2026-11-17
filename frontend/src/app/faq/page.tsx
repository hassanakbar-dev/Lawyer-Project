import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqAccordion from "@/components/common/FaqAccordion";
import {
  HelpCircle,
  Shield,
  PhoneCall,
  ArrowRight,
  Video,
  FileText,
  Briefcase,
  Users,
  Scale,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Legal Guidance & Retainers",
  description:
    "Comprehensive legal answers regarding initial intake, Google Meet consultations, retainer billing, corporate governance, federal grand juries, and family wealth preservation.",
};

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Consultations & Virtual Google Meet Protocols",
      icon: Video,
      questions: [
        {
          q: "How does the virtual Google Meet consultation operate?",
          a: "When you schedule a consultation through our website and select Google Meet, an instant encrypted video room link is generated and emailed to you. At your chosen time, clicking 'Join Google Meet' connects you directly face-to-face with a senior attorney from any smartphone, laptop, or tablet without needing special downloads.",
        },
        {
          q: "Is an online video consultation legally protected by attorney-client privilege?",
          a: "Yes, 100%. Under federal and state evidence codes, communications initiated for the purpose of seeking legal advice are strictly confidential and protected by attorney-client privilege and the work-product doctrine from the very first moment of contact, regardless of whether you formally retain our firm.",
        },
        {
          q: "What should I have prepared prior to my virtual or in-chamber intake meeting?",
          a: "We recommend assembling all pertinent documentation: contracts, subpoena notices, email correspondence, police reports, pleadings, financial schedules, or court filings. Having these chronologically organized allows counsel to provide actionable tactical analysis during your initial meeting.",
        },
        {
          q: "Can multiple corporate officers or family stakeholders join the same Google Meet call?",
          a: "Absolutely. We routinely accommodate multiple authorized stakeholders across different geographic timezones. Simply provide their email addresses during booking or forward the secure Google Meet link to authorized parties.",
        },
      ],
    },
    {
      category: "Legal Fees, Retainers & Billing Architecture",
      icon: FileText,
      questions: [
        {
          q: "How are your legal retainers and hourly rates structured?",
          a: "Our firm operates with total financial transparency. For ongoing litigation and white-collar defense, we establish an evergreen trust retainer with itemized monthly billing calculated to the tenth of an hour. Routine administrative overhead (internal copying, local travel) is never marked up.",
        },
        {
          q: "Do you offer flat-fee certainty for transactional matters?",
          a: "Yes. For corporate formations, standard mergers, real estate purchases, trademark registrations, and prenuptial agreements, we offer predictable, all-inclusive flat fee arrangements so you never receive surprise invoices.",
        },
        {
          q: "Are preliminary case evaluations complimentary?",
          a: "Initial case screenings submitted via our website form or 24/7 telephone helpline are reviewed at no charge. In-depth multi-hour document audits, statutory research, and strategic roadmaps are quoted transparently during the initial intake call.",
        },
        {
          q: "Do you take matters on a contingency or hybrid fee basis?",
          a: "We accept selected commercial plaintiff disputes, antitrust actions, and breach of contract matters on a contingency or hybrid basis. Every potential contingency engagement undergoes a rigorous pre-engagement risk assessment by our managing partners.",
        },
      ],
    },
    {
      category: "Corporate Governance, Cross-Border M&A & Compliance",
      icon: Briefcase,
      questions: [
        {
          q: "What protections do you provide corporate boards under Delaware Chancery law?",
          a: "We advise boards of directors and special litigation committees on fulfilling their fiduciary duties of care and loyalty, structuring transactions to receive the full protections of the Business Judgment Rule, and navigating Caremark oversight duties to insulate directors from personal liability.",
        },
        {
          q: "How does Apex Legal handle international cross-border transactions?",
          a: "Our partners coordinate multi-jurisdictional acquisitions, CFIUS regulatory filings, FCPA compliance audits, and foreign exchange clearances in partnership with vetted international trial co-counsel in London, Paris, and Singapore.",
        },
        {
          q: "Can you assist with minority shareholder freeze-out and partnership disputes?",
          a: "Yes. We frequently represent founders and minority investors in deadlock dissolutions, books and records inspections under DGCL § 220, and emergency injunctions to halt unlawful dilution of equity or asset dissipation.",
        },
        {
          q: "Do you conduct independent internal corporate investigations?",
          a: "Yes. When audit committees or boards face whistleblower complaints or regulatory inquiries, we deploy forensic teams to conduct privileged investigations, evaluate employee liability, and advise on voluntary disclosures to federal authorities.",
        },
      ],
    },
    {
      category: "Federal Criminal Defense, Grand Juries & Subpoenas",
      icon: Shield,
      questions: [
        {
          q: "What should I do if federal agents (FBI/IRS/SEC) show up with a search warrant or subpoena?",
          a: "Immediately assert your constitutional right to counsel under the Fifth and Sixth Amendments. Do not make statements or attempt to 'explain things.' Request a copy of the warrant and inventory sheet, observe without obstructing, and contact our 24/7 emergency trial hotline immediately.",
        },
        {
          q: "Can you negotiate immunity or avoid an indictment before formal charges are filed?",
          a: "Yes. The pre-indictment window is the most critical period of criminal defense. We engage in structured proffers, contest grand jury subpoenas, present exculpatory evidence to prosecutors, and routinely succeed in having investigations closed without charges being filed.",
        },
        {
          q: "What is the difference between a target, subject, and witness in a federal investigation?",
          a: "A 'target' is a person whom prosecutors have substantial evidence linking to a crime; a 'subject' is someone whose conduct falls within the scope of the grand jury investigation; a 'witness' possesses factual information. Counsel can frequently negotiate protections to prevent a witness or subject from escalating into a target.",
        },
        {
          q: "How do you defend against federal wire fraud and mail fraud allegations (18 U.S.C. §§ 1341, 1343)?",
          a: "Federal fraud statutes require proof beyond a reasonable doubt of specific intent to defraud. We dismantle the government's case by demonstrating good-faith commercial conduct, reliance on professional advice (accountants/counsel), and absence of material misrepresentation.",
        },
      ],
    },
    {
      category: "High-Net-Worth Family Law, Trusts & Asset Protection",
      icon: Users,
      questions: [
        {
          q: "How do you protect separate property and inherited wealth during a divorce?",
          a: "Under equitable distribution statutes, separate property remains exempt from division if it has not been commingled. We work with forensic forensic valuation experts to trace original deposits, prove lack of appreciation through marital effort, and defend irrevocable trust structures.",
        },
        {
          q: "What happens if a spouse attempts to hide assets in offshore accounts or shell companies?",
          a: "We utilize court-ordered subpoena power, electronic discovery of bank metadata, forensic tax audit reconciliations, and international Hague Evidence Convention requests to locate undisclosed crypto wallets, offshore corporations, and redirected revenue streams.",
        },
        {
          q: "Can prenuptial agreements be overturned or challenged in court?",
          a: "Prenuptial agreements are scrutinized for procedural fairness, full financial disclosure, and absence of duress. We draft ironclad prenuptial agreements with separate independent counsel certificates and videotaped executions to prevent future judicial challenges.",
        },
        {
          q: "How are privately held businesses and stock options valued during marital dissolution?",
          a: "We retain leading business appraisers to apply discounted cash flow (DCF), market multiples, and Black-Scholes equity option valuation methods, while advocating for enterprise goodwill deductions to prevent over-valuation.",
        },
      ],
    },
    {
      category: "Civil Litigation, E-Discovery & Courtroom Appeals",
      icon: Scale,
      questions: [
        {
          q: "How quickly can you obtain an emergency Temporary Restraining Order (TRO)?",
          a: "We can file emergency ex parte TRO applications within 24 to 48 hours in state and federal courts to immediately freeze bank accounts, prevent trade secret disclosures, or halt wrongful property transfers.",
        },
        {
          q: "How does Apex Legal handle massive electronic discovery (ESI) and data holds?",
          a: "We deploy enterprise AI-assisted review tools and secure data rooms to process terabytes of electronic emails, Slack messages, and server logs while rigorously protecting attorney-client work product under Federal Rule of Evidence 502.",
        },
        {
          q: "What is your philosophy on courtroom trials versus negotiated settlements?",
          a: "We prepare every case with the meticulous assumption that it will go to a jury trial. Paradoxically, this relentless trial readiness provides the ultimate leverage needed to extract top-dollar settlements without trial risk.",
        },
        {
          q: "Can you handle federal appellate challenges if another firm lost at trial?",
          a: "Yes. Our appellate division routinely steps in post-verdict to file post-trial motions, preserve appeal records, stay executions of judgments, and argue before federal circuit courts of appeal and state supreme courts.",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-widest mb-4">
              <Link href="/" className="hover:text-amber-800">Home</Link>
              <span>/</span>
              <span className="text-slate-500">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-serif">
              Frequently Asked Legal Questions
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
              Transparent, authoritative answers regarding our consultation procedures, virtual Google Meet chambers, retainer billing structures, corporate advisory, and trial litigation.
            </p>
          </div>
        </section>

        {/* FAQs by Category */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
            {faqCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700 shadow-xs border border-amber-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                        {cat.category}
                      </h2>
                      <span className="text-xs font-medium text-amber-700">
                        {cat.questions.length} Questions in this section
                      </span>
                    </div>
                  </div>

                  {/* Interactive Accordion */}
                  <FaqAccordion items={cat.questions} />
                </div>
              );
            })}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="border-t border-slate-200 bg-white py-20 text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <HelpCircle className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
              Still Have Questions Regarding Your Specific Case?
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              Our legal intake advocates are on-call 24/7 to provide frank, confidential answers to your inquiries and schedule your partner consultation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-amber-500 transition-colors"
              >
                <span>Ask A Question via Contact Form</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-800 shadow-xs hover:bg-slate-50 transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-amber-600" />
                <span>Call Hotline: +1 (800) 555-0199</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
