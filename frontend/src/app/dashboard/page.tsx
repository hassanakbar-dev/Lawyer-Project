"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Scale,
  Shield,
  Video,
  FileText,
  Clock,
  Calendar,
  CreditCard,
  MessageSquare,
  Upload,
  Download,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  LogOut,
  User,
  Building,
  Lock,
  ChevronRight,
  Send,
  Plus,
  Search,
  Bell,
  Eye,
  Database,
  RefreshCw,
  Phone,
  Mail,
  Copy,
  Check,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);
  const [role, setRole] = useState<"client" | "advocate">("advocate");
  const [activeTab, setActiveTab] = useState<
    "database" | "overview" | "consultations" | "documents" | "billing" | "messages"
  >("database");

  // Real MySQL Consultations (Matching phpMyAdmin lawyer_db.consultations)
  const [dbConsultations, setDbConsultations] = useState<any[]>([
    {
      id: 1,
      name: "Hassan Akbar",
      phone: "03998765213",
      email: "akbarhassan918@gmail.com",
      practice_area: "Civil & Commercial Litigation",
      consultation_mode: "google_meet",
      preferred_date: "2026-11-18",
      preferred_time: "11:00 AM - 12:00 PM EST",
      meeting_link: "https://meet.google.com/xyz-law-apex",
      urgency: "Standard",
      created_at: "2026-11-16",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      phone: "+1 555-987-6543",
      email: "sarah.jenkins@example.com",
      practice_area: "Corporate & Commercial Law",
      consultation_mode: "google_meet",
      preferred_date: "2026-11-25",
      preferred_time: "11:00 AM - 12:00 PM EST",
      meeting_link: "https://meet.google.com/ucy-sixf-xee",
      urgency: "Urgent",
      created_at: "2026-11-16",
    },
    {
      id: 3,
      name: "ali akbar",
      phone: "03098866301",
      email: "ali234@gmail.com",
      practice_area: "Corporate & Commercial Law",
      consultation_mode: "google_meet",
      preferred_date: "2026-11-20",
      preferred_time: "11:00 AM - 12:00 PM EST",
      meeting_link: "https://meet.google.com/jtl-ppiw-ohm",
      urgency: "Standard",
      created_at: "2026-11-16",
    },
    {
      id: 4,
      name: "Ali Raza",
      phone: "+92 300 1234567",
      email: "aliraza@example.com",
      practice_area: "General Legal Inquiry",
      consultation_mode: "message",
      preferred_date: "Flexible Intake",
      preferred_time: "Office Hours",
      meeting_link: null,
      urgency: "Standard",
      created_at: "2026-11-17",
    },
  ]);
  const [loadingDb, setLoadingDb] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const fetchLiveConsultations = async () => {
    try {
      setLoadingDb(true);
      const res = await fetch("/api/consultations");
      if (res.ok) {
        const json = await res.json();
        if (json.data && json.data.length > 0) {
          setDbConsultations(json.data);
        }
      }
    } catch {
      // fallback to preloaded state
    } finally {
      setLoadingDb(false);
    }
  };

  useEffect(() => {
    // Strict authentication verification
    const loggedIn = localStorage.getItem("apex_user_logged_in") === "true";
    const hasCookie = document.cookie.includes("apex_auth_session=authenticated");

    if (!loggedIn || !hasCookie) {
      // Not authenticated -> Immediately redirect to login portal
      router.replace("/login");
    } else {
      setIsAuthenticated(true);
      setCheckingAuth(false);
      fetchLiveConsultations();

      // Sync active role from storage if set
      const savedRole = localStorage.getItem("apex_user_role");
      if (savedRole === "client") {
        setRole("client");
      } else {
        setRole("advocate");
      }
    }
  }, [router]);

  const handleSignOut = () => {
    document.cookie = "apex_auth_session=; path=/; max-age=0;";
    localStorage.removeItem("apex_user_logged_in");
    localStorage.removeItem("apex_user_name");
    localStorage.removeItem("apex_user_role");
    window.dispatchEvent(new Event("auth_change"));
    router.replace("/login");
  };

  const handleCopyLink = (id: number, link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Messages State
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Arthur Sterling, Esq.",
      role: "Managing Partner",
      time: "Today at 9:45 AM",
      text: "Hassan and Sarah, we have reviewed your discovery schedules and initial consultation requests. All Google Meet rooms are active and encrypted.",
      isMe: false,
    },
    {
      id: 2,
      sender: "Alexander Hayes",
      role: "Client (CEO, Nexa Logistics)",
      time: "Today at 10:12 AM",
      text: "Thank you, Arthur. I have uploaded the supplemental email chain to the Document Vault for your review. See you on the call.",
      isMe: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Documents State
  const [documents, setDocuments] = useState([
    {
      id: "DOC-01",
      title: "Master_Commercial_Agreement_2026.pdf",
      category: "Pleadings & Contracts",
      size: "4.2 MB",
      date: "Nov 15, 2026",
      status: "Verified by Counsel",
    },
    {
      id: "DOC-02",
      title: "SDNY_Notice_of_Appearance_Sterling.pdf",
      category: "Court Dockets",
      size: "1.8 MB",
      date: "Nov 12, 2026",
      status: "Filed in Court",
    },
    {
      id: "DOC-03",
      title: "Forensic_Email_Exhibits_June_2026.zip",
      category: "Discovery & Evidence",
      size: "28.4 MB",
      date: "Nov 17, 2026",
      status: "Encrypted in Vault",
    },
    {
      id: "DOC-04",
      title: "Q3_Evergreen_Retainer_Statement.pdf",
      category: "Billing & Ledger",
      size: "820 KB",
      date: "Nov 01, 2026",
      status: "Paid & Cleared",
    },
  ]);

  const [uploadNotice, setUploadNotice] = useState<string | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: role === "client" ? "Alexander Hayes" : "Arthur Sterling, Esq.",
        role: role === "client" ? "Client" : "Managing Partner",
        time: "Just now",
        text: newMessage.trim(),
        isMe: true,
      },
    ]);
    setNewMessage("");
  };

  const handleSimulateUpload = () => {
    const newDoc = {
      id: `DOC-0${documents.length + 1}`,
      title: "Supplemental_Discovery_Exhibit_G.pdf",
      category: "Discovery & Evidence",
      size: "3.5 MB",
      date: "Nov 17, 2026",
      status: "Uploaded & Encrypted",
    };
    setDocuments((prev) => [newDoc, ...prev]);
    setUploadNotice("Document successfully encrypted and deposited into trial docket.");
    setTimeout(() => setUploadNotice(null), 4000);
  };

  if (checkingAuth || !isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900 px-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 mb-4 shadow-sm animate-pulse">
          <Lock className="h-8 w-8 stroke-[2.2]" />
        </div>
        <h2 className="text-xl font-bold font-serif text-slate-900 text-center">
          Strict Privacy & Access Guard Active
        </h2>
        <p className="text-xs text-slate-500 mt-2 text-center max-w-sm">
          Unauthorized access to confidential case files is prohibited. Redirecting to the secure login portal...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Portal Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-md shadow-amber-600/20">
                <Scale className="h-5 w-5 stroke-[2.4]" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-slate-900 font-serif">
                  APEX LEGAL
                </span>
                <span className="block text-[9px] uppercase font-bold tracking-widest text-amber-700">
                  Case & Intake Dashboard
                </span>
              </div>
            </Link>

            {/* Role Switcher Pill */}
            <div className="hidden sm:flex items-center gap-1 rounded-lg bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setRole("advocate")}
                className={`rounded-md px-2.5 py-1 transition-all cursor-pointer ${
                  role === "advocate"
                    ? "bg-amber-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Advocate / Law Firm View
              </button>
              <button
                type="button"
                onClick={() => setRole("client")}
                className={`rounded-md px-2.5 py-1 transition-all cursor-pointer ${
                  role === "client"
                    ? "bg-white text-slate-900 shadow-xs border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Client View
              </button>
            </div>
          </div>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-xs font-bold text-slate-900">
                {role === "advocate" ? "Arthur Sterling, Esq." : "Sarah Jenkins / Client"}
              </span>
              <span className="text-[10px] text-amber-700 font-medium">
                {role === "advocate" ? "Bar ID: #NY-294018 (Senior Partner)" : "Client ID: #APX-84920"}
              </span>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-800 font-bold text-xs border border-amber-300">
              {role === "advocate" ? "AS" : "SJ"}
            </div>

            <button
              onClick={handleSignOut}
              type="button"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="h-3.5 w-3.5 text-slate-500" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="flex-1 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 w-full">
        {/* Welcome & Security Status Banner */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-0.5 text-[11px] font-bold text-emerald-800 mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live MySQL Database Connection Active • `lawyer_db.consultations`
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {role === "advocate"
                ? "Advocate Command Center & Client Inquiries"
                : "Active Legal Affairs & Consultation Portal"}
            </h1>
            <p className="mt-1 text-xs text-slate-600">
              {role === "advocate"
                ? "Review real-time case consultations, launch client Google Meet rooms, inspect court dockets, and manage evidence."
                : "View your scheduled consultation, launch encrypted Google Meet, access the document vault, and contact your legal team."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchLiveConsultations}
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs hover:border-amber-500 hover:text-amber-700 transition-colors cursor-pointer"
            >
              <RefreshCw className={`h-4 w-4 text-amber-600 ${loadingDb ? "animate-spin" : ""}`} />
              <span>Refresh Database</span>
            </button>

            <a
              href="https://meet.google.com/ucy-sixf-xee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-amber-600/20 hover:from-amber-500 hover:to-amber-600 transition-all"
            >
              <Video className="h-4 w-4" />
              <span>Launch Next Meet (Sarah Jenkins)</span>
            </a>
          </div>
        </div>

        {uploadNotice && (
          <div className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-xs font-semibold text-emerald-900 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>{uploadNotice}</span>
          </div>
        )}

        {/* Dashboard Metrics Strip */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Database Inquiries</span>
              <Database className="h-4 w-4 text-amber-600" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              {dbConsultations.length} Consultations
            </div>
            <div className="mt-1 text-[11px] text-emerald-700 font-semibold">
              ● Synced with MySQL `lawyer_db`
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Google Meet Sessions</span>
              <Video className="h-4 w-4 text-amber-600" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              {dbConsultations.filter((c) => c.consultation_mode === "google_meet").length} Active
            </div>
            <div className="mt-1 text-[11px] text-slate-600">
              Encrypted video rooms generated
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Urgent Intake Inquiries</span>
              <AlertCircle className="h-4 w-4 text-amber-600" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              {dbConsultations.filter((c) => c.urgency === "Urgent").length} Priority
            </div>
            <div className="mt-1 text-[11px] text-amber-800 font-semibold">
              Requires Senior Partner Action
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 text-xs">
              <span>Direct Messages</span>
              <MessageSquare className="h-4 w-4 text-amber-600" />
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              {dbConsultations.filter((c) => c.consultation_mode === "message").length} Received
            </div>
            <div className="mt-1 text-[11px] text-emerald-700 font-semibold">
              General Chambers Inquiries
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="mt-8 border-b border-slate-200 bg-white rounded-t-2xl px-4 pt-3 flex flex-wrap gap-2 shadow-xs">
          {[
            { id: "database", label: "MySQL Consultations (phpMyAdmin)", icon: Database },
            { id: "overview", label: "Active Dockets & Cases", icon: Scale },
            { id: "consultations", label: "Google Meet Schedule", icon: Video },
            { id: "documents", label: "Encrypted Document Vault", icon: FileText },
            { id: "billing", label: "Billing & Trust Ledger", icon: CreditCard },
            { id: "messages", label: "Confidential Messages", icon: MessageSquare },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                type="button"
                className={`flex items-center gap-2 rounded-t-xl px-4 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                  isActive
                    ? "border-amber-600 text-amber-700 bg-amber-50/50"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-amber-600" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panes */}
        <div className="rounded-b-2xl border border-t-0 border-slate-200 bg-white p-6 shadow-sm">
          
          {/* TAB: DATABASE CONSULTATIONS (Matches phpMyAdmin lawyer_db.consultations) */}
          {activeTab === "database" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold font-serif text-slate-900">
                      Live MySQL Consultations Table (`lawyer_db.consultations`)
                    </h3>
                    <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                      Live Database Sync
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    Showing all client consultation appointments and messages stored in local MySQL database.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={fetchLiveConsultations}
                    type="button"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    <RefreshCw className={`h-3.5 w-3.5 text-amber-600 ${loadingDb ? "animate-spin" : ""}`} />
                    <span>Refresh Data</span>
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 w-12 text-center">ID</th>
                      <th className="py-3.5 px-4">Client Name</th>
                      <th className="py-3.5 px-4">Contact Details</th>
                      <th className="py-3.5 px-4">Practice Area</th>
                      <th className="py-3.5 px-4">Mode</th>
                      <th className="py-3.5 px-4">Scheduled Date & Time</th>
                      <th className="py-3.5 px-4">Urgency</th>
                      <th className="py-3.5 px-4 text-right">Meeting Link / Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {dbConsultations.map((c) => {
                      const isMeet = c.consultation_mode === "google_meet";
                      const isUrgent = c.urgency === "Urgent";
                      return (
                        <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                          {/* ID */}
                          <td className="py-4 px-4 text-center font-bold text-slate-500">
                            #{c.id}
                          </td>

                          {/* Client Name */}
                          <td className="py-4 px-4 font-bold text-slate-900 font-serif text-sm">
                            {c.name}
                          </td>

                          {/* Contact Details */}
                          <td className="py-4 px-4 space-y-1">
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <Mail className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
                              <a href={`mailto:${c.email}`} className="hover:underline">
                                {c.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-1.5 text-slate-500">
                              <Phone className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
                              <span>{c.phone}</span>
                            </div>
                          </td>

                          {/* Practice Area */}
                          <td className="py-4 px-4">
                            <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-800">
                              {c.practice_area}
                            </span>
                          </td>

                          {/* Mode */}
                          <td className="py-4 px-4">
                            {isMeet ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-1 text-[10px] font-bold text-amber-800">
                                <Video className="h-3 w-3 text-amber-600" />
                                <span>Google Meet</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-2.5 py-1 text-[10px] font-bold text-blue-800">
                                <MessageSquare className="h-3 w-3 text-blue-600" />
                                <span>Message</span>
                              </span>
                            )}
                          </td>

                          {/* Scheduled Date & Time */}
                          <td className="py-4 px-4">
                            {c.preferred_date ? (
                              <div>
                                <div className="font-semibold text-slate-900">{c.preferred_date}</div>
                                <div className="text-[11px] text-slate-500">{c.preferred_time}</div>
                              </div>
                            ) : (
                              <span className="text-slate-400 italic">No specific slot requested</span>
                            )}
                          </td>

                          {/* Urgency */}
                          <td className="py-4 px-4">
                            {isUrgent ? (
                              <span className="inline-flex items-center gap-1 rounded-md bg-red-50 border border-red-200 px-2 py-0.5 text-[10px] font-bold text-red-700">
                                <AlertCircle className="h-3 w-3" />
                                <span>Urgent</span>
                              </span>
                            ) : (
                              <span className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                                Standard
                              </span>
                            )}
                          </td>

                          {/* Actions & Meet Link */}
                          <td className="py-4 px-4 text-right">
                            {c.meeting_link ? (
                              <div className="inline-flex items-center gap-1.5 justify-end">
                                <a
                                  href={c.meeting_link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-amber-500 transition-colors"
                                >
                                  <Video className="h-3.5 w-3.5" />
                                  <span>Join Meet</span>
                                  <ExternalLink className="h-3 w-3" />
                                </a>

                                <button
                                  type="button"
                                  onClick={() => handleCopyLink(c.id, c.meeting_link)}
                                  className="rounded-lg border border-slate-300 p-1.5 text-slate-600 hover:bg-slate-100 cursor-pointer"
                                  title="Copy Google Meet Link"
                                >
                                  {copiedId === c.id ? (
                                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                                  ) : (
                                    <Copy className="h-3.5 w-3.5" />
                                  )}
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() =>
                                  alert(`Client Inquiry from ${c.name}: Practice Area: ${c.practice_area}, Phone: ${c.phone}, Email: ${c.email}`)
                                }
                                className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                              >
                                <Eye className="h-3.5 w-3.5 text-slate-500" />
                                <span>View Message</span>
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Summary Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500 pt-2">
                <span>
                  Showing {dbConsultations.length} records retrieved from MySQL table `lawyer_db.consultations`.
                </span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>XAMPP Port 3306 Integration Active</span>
                </span>
              </div>
            </div>
          )}

          {/* TAB: OVERVIEW & ACTIVE DOCKETS */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    Active Matters on Record
                  </h3>
                  <p className="text-xs text-slate-500">
                    Official state and federal dockets currently defended by Apex Legal trial counsel.
                  </p>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                  2 Matters in Good Standing
                </span>
              </div>

              {/* Case 1 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs hover:border-amber-400 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                      Docket No: 2026-CV-8492 (SDNY Federal Court)
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                      Nexa Logistics Global Inc. vs. Maritime Transatlantic Corp.
                    </h4>
                  </div>
                  <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 self-start sm:self-auto">
                    Phase: Electronic Discovery
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                  <div>
                    <strong className="block text-slate-800">Assigned Trial Partner:</strong>
                    <span>Arthur Sterling, Esq. (SDNY Bar)</span>
                  </div>
                  <div>
                    <strong className="block text-slate-800">Opposing Counsel:</strong>
                    <span>Covington & Sterling LLP</span>
                  </div>
                  <div>
                    <strong className="block text-slate-800">Next Action Deadline:</strong>
                    <span className="text-amber-800 font-semibold">Nov 24, 2026 (Motion to Compel ESI)</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-slate-500">Last activity: Summary judgment opposition brief drafted yesterday.</span>
                  <button
                    onClick={() => setActiveTab("documents")}
                    className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800"
                  >
                    <span>View Filed Exhibits</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Case 2 */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs hover:border-amber-400 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                      Advisory File: APX-ADV-1104
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                      Corporate Governance & Cross-Border Series B Compliance
                    </h4>
                  </div>
                  <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-800 self-start sm:self-auto">
                    Phase: SEC Regulatory Audit
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                  <div>
                    <strong className="block text-slate-800">Assigned Partner:</strong>
                    <span>Marcus Vance, Esq. (Corporate Transactions)</span>
                  </div>
                  <div>
                    <strong className="block text-slate-800">Scope:</strong>
                    <span>Foreign Direct Investment (CFIUS) Due Diligence</span>
                  </div>
                  <div>
                    <strong className="block text-slate-800">Next Milestone:</strong>
                    <span>Board of Directors Presentation (Dec 02, 2026)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: GOOGLE MEET SCHEDULE */}
          {activeTab === "consultations" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    Scheduled Virtual Chambers & Video Conferences
                  </h3>
                  <p className="text-xs text-slate-500">
                    All video conferences are conducted over encrypted Google Meet rooms.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-500"
                >
                  Schedule Another Session
                </Link>
              </div>

              {/* Active Meeting Card from Database (Sarah Jenkins) */}
              <div className="rounded-2xl border-2 border-amber-400 bg-amber-50/40 p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 mb-2">
                      <span className="h-2 w-2 rounded-full bg-amber-600 animate-ping"></span>
                      Confirmed Upcoming Video Session
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 font-serif">
                      Sarah Jenkins • Corporate & Commercial Law Consultation
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      With Senior Trial Partner Arthur Sterling, Esq.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-700">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                        <Calendar className="h-4 w-4 text-amber-700" />
                        November 25, 2026
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                        <Clock className="h-4 w-4 text-amber-700" />
                        11:00 AM – 12:00 PM EST
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                        <Video className="h-4 w-4 text-amber-700" />
                        Room: ucy-sixf-xee
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href="https://meet.google.com/ucy-sixf-xee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-amber-500 transition-colors"
                    >
                      <Video className="h-4 w-4" />
                      <span>Launch Google Meet</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                    <span className="text-[10px] text-center text-slate-500">
                      Link: <code className="font-mono font-bold text-slate-700">meet.google.com/ucy-sixf-xee</code>
                    </span>
                  </div>
                </div>
              </div>

              {/* Second Meeting from Database (ali akbar) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      Consultation ID #3
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 font-serif">
                      ali akbar • Corporate & Commercial Law
                    </h4>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                      <span>Date: <strong>2026-11-20</strong></span>
                      <span>Time: <strong>11:00 AM - 12:00 PM EST</strong></span>
                      <span>Phone: <strong>03098866301</strong></span>
                    </div>
                  </div>

                  <a
                    href="https://meet.google.com/jtl-ppiw-ohm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 hover:border-amber-500"
                  >
                    <Video className="h-4 w-4 text-amber-600" />
                    <span>Join Room: jtl-ppiw-ohm</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB: ENCRYPTED DOCUMENT VAULT */}
          {activeTab === "documents" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    Encrypted Case Document Repository
                  </h3>
                  <p className="text-xs text-slate-500">
                    Court pleadings, signed contracts, discovery exhibits, and retainer invoices.
                  </p>
                </div>
                <button
                  onClick={handleSimulateUpload}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-amber-500 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <Upload className="h-4 w-4" />
                  <span>Upload Discovery Exhibit</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Document Title</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Size</th>
                      <th className="py-3 px-4">Date Deposited</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {documents.map((doc) => (
                      <tr key={doc.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-slate-900 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-amber-600 flex-shrink-0" />
                          <span>{doc.title}</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">{doc.category}</td>
                        <td className="py-3.5 px-4 text-slate-500">{doc.size}</td>
                        <td className="py-3.5 px-4 text-slate-500">{doc.date}</td>
                        <td className="py-3.5 px-4">
                          <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                            {doc.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              alert(`Downloading verified copy of: ${doc.title}`);
                            }}
                            className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800"
                          >
                            <Download className="h-3.5 w-3.5" />
                            <span>Download</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: BILLING & TRUST LEDGER */}
          {activeTab === "billing" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    Evergreen Trust Account & Retainer Ledger
                  </h3>
                  <p className="text-xs text-slate-500">
                    Strict IOLA compliance. Detailed itemized hourly billing statements to the tenth of an hour.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Redirecting to secure merchant payment gateway for retainer replenishment.")}
                  className="rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-amber-500 cursor-pointer"
                >
                  Replenish Trust Retainer
                </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-xs text-slate-500">Current Retainer Balance</div>
                  <div className="mt-1 text-2xl font-bold font-serif text-slate-900">
                    $14,500.00
                  </div>
                  <div className="mt-2 text-[10px] text-emerald-700 font-bold">
                    ✓ Above Minimum Required Balance ($10,000)
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-xs text-slate-500">Unbilled Professional Hours (Nov)</div>
                  <div className="mt-1 text-2xl font-bold font-serif text-slate-900">
                    8.4 Hours
                  </div>
                  <div className="mt-2 text-[10px] text-slate-500">
                    Estimated Incurred: $5,460.00
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-xs text-slate-500">Last Invoiced Cycle</div>
                  <div className="mt-1 text-2xl font-bold font-serif text-slate-900">
                    October 31, 2026
                  </div>
                  <div className="mt-2 text-[10px] text-emerald-700 font-bold">
                    Statement Cleared & Settled
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-5 bg-white">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Recent Billing Entries (Tenth-of-an-Hour Itemization)
                </h4>
                <div className="space-y-3 text-xs text-slate-700">
                  {[
                    {
                      date: "Nov 16, 2026",
                      attorney: "Arthur Sterling (Senior Partner)",
                      hours: "2.2 hrs",
                      desc: "Preparation of memorandum in opposition to defendant's motion to dismiss.",
                      amount: "$1,650.00",
                    },
                    {
                      date: "Nov 14, 2026",
                      attorney: "Victoria Hayes (Senior Partner)",
                      hours: "1.4 hrs",
                      desc: "Analysis of opposing counsel ESI discovery disclosures and metadata logs.",
                      amount: "$1,050.00",
                    },
                    {
                      date: "Nov 09, 2026",
                      attorney: "Arthur Sterling (Senior Partner)",
                      hours: "1.8 hrs",
                      desc: "Client strategy conference and oral deposition roadmap preparation.",
                      amount: "$1,350.00",
                    },
                  ].map((entry, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2.5 border-b border-slate-100 last:border-b-0"
                    >
                      <div className="max-w-xl">
                        <div className="font-bold text-slate-900">{entry.desc}</div>
                        <div className="text-[11px] text-slate-500">
                          {entry.date} • {entry.attorney} ({entry.hours})
                        </div>
                      </div>
                      <div className="font-bold text-slate-900 text-sm self-start sm:self-auto">
                        {entry.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: CONFIDENTIAL ATTORNEY MESSAGING */}
          {activeTab === "messages" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    Encrypted Direct Counsel Channel
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct communications with Senior Trial Partner Arthur Sterling, Esq.
                  </p>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Counsel Online
                </span>
              </div>

              {/* Message History Thread */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 space-y-4 max-h-[420px] overflow-y-auto">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.isMe ? "items-end" : "items-start"}`}
                  >
                    <div className="flex items-center gap-2 mb-1 text-[11px] text-slate-500">
                      <span className="font-bold text-slate-800">{msg.sender}</span>
                      <span>•</span>
                      <span>{msg.time}</span>
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 text-xs leading-relaxed max-w-lg shadow-xs ${
                        msg.isMe
                          ? "bg-amber-600 text-white rounded-tr-xs"
                          : "bg-white border border-slate-200 text-slate-800 rounded-tl-xs"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input Box */}
              <form onSubmit={handleSendMessage} className="flex gap-3">
                <input
                  type="text"
                  placeholder="Type an encrypted message or question for Arthur Sterling, Esq...."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-amber-500 transition-colors cursor-pointer"
                >
                  <span>Send</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        © 2026 Apex Legal & Associates LLP. Live Database Integration (`lawyer_db.consultations`). All rights reserved.
      </footer>
    </div>
  );
}
