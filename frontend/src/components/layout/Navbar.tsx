"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Firm", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Our Attorneys", href: "/attorneys" },
    { name: "Case Results", href: "/case-results" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
            <Scale className="h-6 w-6 stroke-[2.4]" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white font-serif">
              APEX LEGAL
            </span>
            <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-amber-500">
              Attorneys & Counselors
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-amber-400 font-semibold border-b-2 border-amber-400"
                    : "text-slate-300 hover:text-amber-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/30"
          >
            <span>Free Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex md:hidden rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive ? "text-amber-400 font-bold" : "text-slate-300 hover:text-amber-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-amber-500 py-3 text-center text-sm font-bold text-slate-950"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
