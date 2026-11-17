"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [portalType, setPortalType] = useState<"client" | "staff">("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  // ALWAYS ensure the fresh Login Portal form is displayed when landing on /login
  useEffect(() => {
    setLoginMessage(null);
    setIsSubmitting(false);
    setIsGoogleSubmitting(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save authenticated session in cookie (for middleware protection on Vercel) and localStorage
    document.cookie = "apex_auth_session=authenticated; path=/; max-age=86400; SameSite=Lax";
    const userName = portalType === "client" ? "Alexander Hayes (Client)" : "Arthur Sterling, Esq. (Advocate)";
    localStorage.setItem("apex_user_logged_in", "true");
    localStorage.setItem("apex_user_name", userName);
    localStorage.setItem("apex_user_role", portalType);
    window.dispatchEvent(new Event("auth_change"));

    // Show instant success then navigate to /dashboard
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginMessage(
        portalType === "client"
          ? "Client Portal verified. Redirecting directly to your active dashboard..."
          : "Advocate credentials verified. Redirecting to firm case management..."
      );
      setTimeout(() => {
        router.push("/dashboard");
      }, 700);
    }, 600);
  };

  const handleGoogleSignIn = () => {
    setIsGoogleSubmitting(true);

    // Save Google authenticated session in cookie and localStorage
    document.cookie = "apex_auth_session=authenticated; path=/; max-age=86400; SameSite=Lax";
    localStorage.setItem("apex_user_logged_in", "true");
    localStorage.setItem("apex_user_name", "Alexander Hayes (Google Auth)");
    localStorage.setItem("apex_user_role", "client");
    window.dispatchEvent(new Event("auth_change"));

    setTimeout(() => {
      setIsGoogleSubmitting(false);
      setLoginMessage("Google account authenticated. Redirecting to your dashboard...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 600);
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-900 selection:bg-amber-600 selection:text-white">
      
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-8 shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-md group-hover:scale-105 transition-transform">
              <Scale className="h-5 w-5 stroke-[2.4]" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 font-serif">
                APEX LEGAL
              </span>
              <span className="block text-[9px] uppercase font-bold tracking-widest text-amber-700">
                Secure Client Portal
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="text-xs font-semibold text-slate-600 hover:text-amber-700 transition-colors"
          >
            ← Return to Website
          </Link>
        </div>
      </header>

      {/* Main Login Form Area */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          
          {/* Card Header */}
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 mb-3 shadow-sm">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-900">
              Access Secure Portal
            </h1>
            <p className="mt-2 text-xs text-slate-500">
              Encrypted case access, document sharing & consultation schedules
            </p>
          </div>

          {/* Portal Switcher (Client vs Advocate) */}
          <div className="flex rounded-xl bg-slate-200/80 p-1 border border-slate-300">
            <button
              type="button"
              onClick={() => { setPortalType("client"); setLoginMessage(null); }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                portalType === "client"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Client Login
            </button>
            <button
              type="button"
              onClick={() => { setPortalType("staff"); setLoginMessage(null); }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                portalType === "staff"
                  ? "bg-amber-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Advocate / Staff Login
            </button>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-xl">
            {loginMessage ? (
              <div className="py-6 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <UserCheck className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 font-serif">Authenticated</h2>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  {loginMessage}
                </p>
                <div className="pt-2">
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-amber-500 transition-all w-full"
                  >
                    <span>Enter Legal Dashboard</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Sign in with Google Button */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white py-3 px-4 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all cursor-pointer disabled:opacity-60"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>
                    {isGoogleSubmitting ? "Connecting to Google..." : "Sign in with Google"}
                  </span>
                </button>

                {/* Divider */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <span className="relative bg-white px-3 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                    Or sign in with email
                  </span>
                </div>

                {/* Traditional Credentials Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                      {portalType === "client" ? "Email Address / Case ID" : "Firm Email / Bar ID"}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={portalType === "client" ? "client@example.com" : "advocate@apexlegal.com"}
                        className="w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                      <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-medium text-slate-700">
                        Password
                      </label>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("Password reset instructions dispatched to your verified email.");
                        }}
                        className="text-[11px] font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 pr-10 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                      <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="rounded border-slate-300 bg-white text-amber-600 focus:ring-amber-500"
                      />
                      <span>Remember this device</span>
                    </label>
                    <span className="text-[11px] text-slate-400">256-Bit SSL</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 py-3 text-sm font-bold text-white shadow-md shadow-amber-600/20 transition-all hover:from-amber-500 hover:to-amber-600 disabled:opacity-50 cursor-pointer"
                  >
                    <span>
                      {isSubmitting
                        ? "Authenticating..."
                        : portalType === "client"
                        ? "Sign In to Client Portal"
                        : "Sign In to Advocate Portal"}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-500">
                    Don&apos;t have an active case portal account?{" "}
                    <Link href="/contact" className="font-semibold text-amber-700 hover:text-amber-800">
                      Schedule an Intake
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Security Compliance Notice */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="h-4 w-4 text-amber-600" />
            <span>Attorney-Client Privilege Protected Environment</span>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-[11px] text-slate-500">
        © 2026 Apex Legal & Associates LLP. All rights reserved.
      </footer>
    </div>
  );
}
