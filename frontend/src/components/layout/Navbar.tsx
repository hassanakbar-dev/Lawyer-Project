"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Scale,
  Menu,
  X,
  ArrowRight,
  LogIn,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Client");
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const syncAuth = () => {
      const loggedIn = localStorage.getItem("apex_user_logged_in") === "true";
      const name = localStorage.getItem("apex_user_name") || "Alexander H.";
      setIsLoggedIn(loggedIn);
      setUserName(name);
    };

    syncAuth();
    window.addEventListener("storage", syncAuth);
    window.addEventListener("auth_change", syncAuth);
    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("auth_change", syncAuth);
    };
  }, []);

  const handleSignOut = () => {
    document.cookie = "apex_auth_session=; path=/; max-age=0;";
    localStorage.removeItem("apex_user_logged_in");
    localStorage.removeItem("apex_user_name");
    localStorage.removeItem("apex_user_role");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("auth_change"));
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform duration-200">
            <Scale className="h-6 w-6 stroke-[2.4]" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 font-serif">
              APEX LEGAL
            </span>
            <span className="block text-[10px] uppercase font-bold tracking-[0.2em] text-amber-600">
              Attorneys & Counselors
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-amber-600 font-bold border-b-2 border-amber-600"
                    : "text-slate-600 hover:text-amber-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            /* Logged-in State: Show Dashboard & Sign Out */
            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50/80 px-3.5 py-2 text-xs sm:text-sm font-bold text-amber-900 shadow-xs hover:bg-amber-100 transition-colors"
              >
                <LayoutDashboard className="h-4 w-4 text-amber-700" />
                <span>Dashboard</span>
              </Link>
              <button
                onClick={handleSignOut}
                type="button"
                className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-xs font-semibold text-slate-600 hover:text-red-600 hover:border-red-300 transition-colors cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span className="hidden lg:inline text-[11px]">Sign Out</span>
              </button>
            </div>
          ) : (
            /* Logged-out State: Show Login Button */
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors hover:border-amber-500 hover:text-amber-600 hover:bg-amber-50/40"
            >
              <LogIn className="h-4 w-4 text-amber-600" />
              <span>Login</span>
            </Link>
          )}

          {/* Free Consultation CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-amber-600/20 transition-all hover:from-amber-500 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-600/30"
          >
            <span>Free Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="inline-flex md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-5 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 transition-colors ${
                    isActive ? "text-amber-600 font-bold" : "text-slate-700 hover:text-amber-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 flex flex-col gap-2 border-t border-slate-100">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-50 border border-amber-300 py-2.5 text-center text-sm font-bold text-amber-900"
                >
                  <LayoutDashboard className="h-4 w-4 text-amber-700" />
                  <span>Go to Dashboard</span>
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleSignOut();
                  }}
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-2 text-center text-xs font-semibold text-slate-600 hover:text-red-600"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 py-2.5 text-center text-sm font-semibold text-slate-700 hover:border-amber-500"
              >
                <LogIn className="h-4 w-4 text-amber-600" />
                <span>Login to Portal</span>
              </Link>
            )}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-amber-600 py-3 text-center text-sm font-bold text-white shadow-md shadow-amber-600/20"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
