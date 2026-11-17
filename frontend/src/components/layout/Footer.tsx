import Link from "next/link";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Ethos (2 cols on lg) */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-md">
                <Scale className="h-6 w-6 stroke-[2.4]" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  APEX LEGAL
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-amber-500">
                  Attorneys & Counselors At Law
                </span>
              </div>
            </Link>

            <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-sm">
              Apex Legal & Associates is a premier litigation and corporate law firm committed to fearless
              representation, rigorous evidence investigation, and personalized advocacy.
            </p>

            <div className="mt-6 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-amber-500" />
                <span>100 Constitution Ave, 14th Floor, New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-500" />
                <span>+1 (800) 555-0199 / +1 (212) 555-0144</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-amber-500" />
                <span>counsel@apexlegal.com</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Practice Areas
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/practice-areas" className="hover:text-amber-400 transition-colors">
                  Corporate & Commercial Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-amber-400 transition-colors">
                  Criminal Defense Litigation
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-amber-400 transition-colors">
                  Family & Custody Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-amber-400 transition-colors">
                  Civil Dispute Resolution
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-amber-400 transition-colors">
                  Real Estate & Property
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-amber-400 transition-colors">
                  Intellectual Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Firm Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Firm Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-amber-400 transition-colors">
                  Practice Disciplines
                </Link>
              </li>
              <li>
                <Link href="/attorneys" className="hover:text-amber-400 transition-colors">
                  Senior Advocates
                </Link>
              </li>
              <li>
                <Link href="/case-results" className="hover:text-amber-400 transition-colors">
                  Case Results & Verdicts
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Case Intake & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Advertising Disclaimer */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Attorney Disclaimer
            </h4>
            <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
              The information on this website is for educational and marketing purposes only and does not establish
              an attorney-client relationship. Prior outcomes do not guarantee similar results in future matters.
            </p>
            <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/60 p-3 text-[10px] text-amber-500/90">
              Licensed before State & Federal Courts in NY, DC & Nationwide.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Apex Legal & Associates LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-300">Terms of Representation</Link>
            <Link href="/contact" className="hover:text-slate-300">Bar Ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
