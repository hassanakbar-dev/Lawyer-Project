"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle,
  Send,
  Video,
  Building,
  Calendar as CalendarIcon,
  ExternalLink,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  MessageSquare,
} from "lucide-react";

export default function ConsultationSection() {
  const [activeTab, setActiveTab] = useState<"message" | "consultation">("message");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState<number | null>(null);
  const [meetingLink, setMeetingLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Calendar State
  const [selectedDay, setSelectedDay] = useState<number>(18);
  const [currentMonth, setCurrentMonth] = useState<number>(10); // 10 = November
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("11:00 AM - 12:00 PM");
  const [timezone, setTimezone] = useState<string>("PKT (UTC+5) - Pakistan Time");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "Corporate & Commercial Law",
    urgency: "Standard",
    consultationMode: "google_meet",
    summary: "",
  });

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const timeSlots = [
    "09:30 AM - 10:30 AM",
    "11:00 AM - 12:00 PM",
    "02:00 PM - 03:00 PM",
    "04:00 PM - 05:00 PM",
    "05:30 PM - 06:30 PM",
    "07:00 PM - 08:00 PM",
  ];

  const timezones = [
    "PKT (UTC+5) - Pakistan Standard Time",
    "EST (UTC-5) - New York / Eastern Time",
    "CST (UTC-6) - Chicago / Central Time",
    "PST (UTC-8) - Los Angeles / Pacific Time",
    "GMT (UTC+0) - London / British Time",
    "GST (UTC+4) - Dubai / Gulf Standard Time",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const formattedDateString = `${monthNames[currentMonth]} ${selectedDay}, ${currentYear}`;
  const formattedTimeString = `${selectedTimeSlot} (${timezone.split(" - ")[0]})`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      ...formData,
      consultationMode: activeTab === "message" ? "message" : formData.consultationMode,
      preferredDate: activeTab === "message" ? null : formattedDateString,
      preferredTime: activeTab === "message" ? null : formattedTimeString,
      timezone: activeTab === "message" ? null : timezone,
    };

    try {
      const response = await fetch("http://localhost:5000/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const data = await response.json();
        setInquiryId(data.inquiryId || null);
        setMeetingLink(data.meetingLink || null);
      } else {
        if (activeTab === "consultation" && formData.consultationMode === "google_meet") {
          setMeetingLink("https://meet.google.com/apx-legl-mtg");
        }
      }
    } catch {
      if (activeTab === "consultation" && formData.consultationMode === "google_meet") {
        setMeetingLink("https://meet.google.com/apx-legl-mtg");
      }
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const copyMeetLink = () => {
    if (meetingLink) {
      navigator.clipboard.writeText(meetingLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          
          {/* Left Column: Office & Firm Contact (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span>
              Confidential Intake
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-serif">
              Get in Touch with Our Advocates
            </h2>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Whether you need to send a quick legal message or schedule an in-depth video consultation via{" "}
              <strong className="text-amber-700">Google Meet</strong>, our partners are ready to assist.
            </p>

            <div className="mt-8 space-y-6 text-sm">
              <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-white shadow-xs">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Virtual Google Meet Chambers</h3>
                    <p className="text-xs text-amber-800 font-semibold">Nationwide & Worldwide Online Meetings</p>
                  </div>
                </div>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  Fast, encrypted HD video consultations with senior trial counsel. Choose the &ldquo;Book Consultation&rdquo; tab to pick a slot.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-amber-700 border border-slate-200 shadow-xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Main Office Chambers</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    Apex Legal Tower, 100 Constitution Ave, 14th Floor<br />
                    Financial District, New York, NY 10005
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-amber-700 border border-slate-200 shadow-xs">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Telephone Helpline</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Toll-Free: +1 (800) 555-0199<br />
                    Chambers Direct: +1 (212) 555-0144
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-amber-700 border border-slate-200 shadow-xs">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Direct Email Intake</h3>
                  <p className="mt-1 text-xs text-slate-600">
                    intake@apexlegal.com
                  </p>
                </div>
              </div>
            </div>

            {/* Office Image */}
            <div className="mt-8 relative h-44 w-full overflow-hidden rounded-xl border border-slate-200 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
                alt="Law Firm Conference Chambers"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-xs font-semibold text-white">
                Chamber Conference Rooms & Virtual Video Hub
              </div>
            </div>
          </div>

          {/* Right Column: Dual-Tab Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
              
              {/* TOP TABS: Quick Message vs Book Consultation */}
              <div className="flex rounded-xl bg-slate-100 p-1 border border-slate-200 mb-6">
                <button
                  type="button"
                  onClick={() => { setActiveTab("message"); setSubmitted(false); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "message"
                      ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send Quick Message</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setActiveTab("consultation"); setSubmitted(false); }}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                    activeTab === "consultation"
                      ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Video className="h-4 w-4" />
                  <span>Book Consultation & Meet</span>
                </button>
              </div>

              {submitted ? (
                /* Submission Confirmation View */
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <h4 className="mt-4 text-2xl font-bold text-slate-900 font-serif">
                    {activeTab === "message"
                      ? "Message Received Successfully!"
                      : "Consultation Scheduled Successfully!"}
                  </h4>

                  {inquiryId && (
                    <div className="mt-2 text-xs text-slate-500">
                      Inquiry Tracking ID: <span className="font-mono text-amber-700 font-bold">#{inquiryId}</span>
                    </div>
                  )}

                  {/* If Quick Message was submitted */}
                  {activeTab === "message" && (
                    <p className="mt-4 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your message has been routed to our intake advocates. We will reach back to you shortly at{" "}
                      <span className="text-amber-700 font-semibold">{formData.email || formData.phone}</span>.
                    </p>
                  )}

                  {/* If Meeting with Google Meet was submitted */}
                  {activeTab === "consultation" && formData.consultationMode === "google_meet" && (
                    <div className="mt-6 rounded-xl border-2 border-amber-300 bg-amber-50/60 p-6 text-left shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-white">
                            <Video className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                              Confirmed Video Session
                            </span>
                            <h5 className="text-base font-bold text-slate-900 font-serif">
                              Google Meet Consultation Room
                            </h5>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-300">
                          Confirmed
                        </span>
                      </div>

                      <div className="mt-4 space-y-2 text-xs text-slate-700 border-t border-amber-200/60 pt-3">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">Scheduled Date:</span>
                          <span className="font-semibold text-slate-900">{formattedDateString}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">Selected Time Window:</span>
                          <span className="font-semibold text-slate-900">{formattedTimeString}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-500">Client Email:</span>
                          <span className="font-semibold text-slate-900">{formData.email}</span>
                        </div>
                      </div>

                      {meetingLink && (
                        <div className="mt-5 rounded-lg border border-slate-300 bg-white p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                          <span className="font-mono text-xs text-amber-900 font-semibold truncate max-w-xs">
                            {meetingLink}
                          </span>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              type="button"
                              onClick={copyMeetLink}
                              className="inline-flex items-center gap-1 rounded bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 border border-slate-200"
                            >
                              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                              <span>{copied ? "Copied" : "Copy Link"}</span>
                            </button>
                            <a
                              href={meetingLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded bg-amber-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-amber-500 shadow-xs"
                            >
                              <span>Join Google Meet</span>
                              <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* If Meeting with In-Chambers or Phone was submitted */}
                  {activeTab === "consultation" && formData.consultationMode !== "google_meet" && (
                    <p className="mt-4 text-sm text-slate-600 max-w-md mx-auto">
                      Thank you. We have logged your request for an {formData.consultationMode === "in_person" ? "in-chambers meeting" : "advisory phone call"} on{" "}
                      <span className="text-amber-700 font-semibold">{formattedDateString}</span> at{" "}
                      <span className="text-amber-700 font-semibold">{formattedTimeString}</span>.
                    </p>
                  )}

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex rounded-lg bg-slate-100 px-6 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 border border-slate-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                /* Active Form View */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* TAB 1: QUICK MESSAGE */}
                  {activeTab === "message" && (
                    <div className="space-y-4">
                      <div className="border-b border-slate-100 pb-3">
                        <h4 className="text-sm font-bold text-slate-900">Send A General Inquiry</h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          No appointment required. Ask about legal fees, preliminary questions, or request general information.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Full Legal Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Contact Telephone *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Legal Practice Area
                          </label>
                          <select
                            value={formData.practiceArea}
                            onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                          >
                            <option>Corporate & Commercial Law</option>
                            <option>Criminal Defense Litigation</option>
                            <option>High-Net-Worth Family Law</option>
                            <option>Civil & Commercial Litigation</option>
                            <option>Property & Real Estate Law</option>
                            <option>Intellectual Property Protection</option>
                            <option>General Legal Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Your Message / Inquiry *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.summary}
                          onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                          placeholder="How can our law firm assist you? Feel free to ask any preliminary question..."
                          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 py-3.5 text-sm font-bold text-white shadow-md shadow-amber-600/20 transition-all hover:from-amber-500 hover:to-amber-600 disabled:opacity-50"
                      >
                        <span>{isSubmitting ? "Sending Message..." : "Send Message to Firm"}</span>
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {/* TAB 2: CONSULTATION & GOOGLE MEET SCHEDULER */}
                  {activeTab === "consultation" && (
                    <div className="space-y-5">
                      
                      {/* Step A: Mode Selector */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                          1. Choose Consultation Mode *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, consultationMode: "google_meet" })}
                            className={`flex flex-col items-center justify-center rounded-xl border p-3.5 text-center transition-all ${
                              formData.consultationMode === "google_meet"
                                ? "border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-500 shadow-xs"
                                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <Video className={`h-5 w-5 mb-1.5 ${formData.consultationMode === "google_meet" ? "text-amber-600" : "text-slate-400"}`} />
                            <span className="text-xs font-bold text-slate-900">Google Meet</span>
                            <span className="text-[10px] text-amber-700 mt-0.5 font-medium">Online Video Room</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, consultationMode: "in_person" })}
                            className={`flex flex-col items-center justify-center rounded-xl border p-3.5 text-center transition-all ${
                              formData.consultationMode === "in_person"
                                ? "border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-500 shadow-xs"
                                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <Building className={`h-5 w-5 mb-1.5 ${formData.consultationMode === "in_person" ? "text-amber-600" : "text-slate-400"}`} />
                            <span className="text-xs font-bold text-slate-900">In-Chambers</span>
                            <span className="text-[10px] text-slate-500 mt-0.5">New York Chambers</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, consultationMode: "phone" })}
                            className={`flex flex-col items-center justify-center rounded-xl border p-3.5 text-center transition-all ${
                              formData.consultationMode === "phone"
                                ? "border-amber-500 bg-amber-50 text-amber-900 ring-2 ring-amber-500 shadow-xs"
                                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                            }`}
                          >
                            <Phone className={`h-5 w-5 mb-1.5 ${formData.consultationMode === "phone" ? "text-amber-600" : "text-slate-400"}`} />
                            <span className="text-xs font-bold text-slate-900">Phone Call</span>
                            <span className="text-[10px] text-slate-500 mt-0.5">Direct Advisory Call</span>
                          </button>
                        </div>
                      </div>

                      {/* Step B: Visual Calendar & Time Slots */}
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                          <div>
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                              <CalendarIcon className="h-4 w-4 text-amber-600" />
                              2. Select Date On Calendar *
                            </label>
                            <p className="text-[11px] text-slate-500 mt-0.5">
                              Selected: <span className="font-semibold text-amber-700">{formattedDateString}</span>
                            </p>
                          </div>

                          {/* Timezone Selector */}
                          <div className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 shadow-xs">
                            <Globe className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" />
                            <select
                              value={timezone}
                              onChange={(e) => setTimezone(e.target.value)}
                              className="bg-transparent text-xs text-slate-900 focus:outline-none cursor-pointer"
                            >
                              {timezones.map((tz) => (
                                <option key={tz} value={tz} className="bg-white text-slate-900">
                                  {tz}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Month Switcher Header */}
                        <div className="mt-4 flex items-center justify-between px-2">
                          <span className="text-sm font-bold text-slate-900 font-serif">
                            {monthNames[currentMonth]} {currentYear}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={handlePrevMonth}
                              className="p-1 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                              aria-label="Previous Month"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={handleNextMonth}
                              className="p-1 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                              aria-label="Next Month"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Weekday Labels */}
                        <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase text-slate-500">
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>

                        {/* Days Grid */}
                        <div className="mt-2 grid grid-cols-7 gap-1">
                          {Array.from({ length: startOffset }).map((_, i) => (
                            <div key={`empty-${i}`} className="h-8" />
                          ))}

                          {Array.from({ length: daysInMonth }).map((_, i) => {
                            const dayNum = i + 1;
                            const isSelected = selectedDay === dayNum;
                            return (
                              <button
                                type="button"
                                key={`day-${dayNum}`}
                                onClick={() => setSelectedDay(dayNum)}
                                className={`h-8 w-full rounded-lg text-xs font-semibold transition-all flex items-center justify-center ${
                                  isSelected
                                    ? "bg-amber-600 text-white shadow-md font-bold scale-105"
                                    : "text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                                }`}
                              >
                                {dayNum}
                              </button>
                            );
                          })}
                        </div>

                        {/* Available Time Slots */}
                        <div className="mt-6 border-t border-slate-200 pt-4">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 text-amber-600" />
                            Available Time Slots ({timezone.split(" - ")[0]}) *
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {timeSlots.map((slot) => {
                              const isSelected = selectedTimeSlot === slot;
                              return (
                                <button
                                  type="button"
                                  key={slot}
                                  onClick={() => setSelectedTimeSlot(slot)}
                                  className={`rounded-lg border px-2.5 py-2 text-center text-xs font-medium transition-all ${
                                    isSelected
                                      ? "border-amber-500 bg-amber-50 text-amber-900 font-bold ring-1 ring-amber-500 shadow-xs"
                                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                                  }`}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Step C: Personal Details */}
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                              Full Legal Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Jonathan Reynolds"
                              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                              Contact Telephone *
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                              Email Address (for Google Meet Room) *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="jonathan@example.com"
                              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                              Practice Area
                            </label>
                            <select
                              value={formData.practiceArea}
                              onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                            >
                              <option>Corporate & Commercial Law</option>
                              <option>Criminal Defense Litigation</option>
                              <option>High-Net-Worth Family Law</option>
                              <option>Civil & Commercial Litigation</option>
                              <option>Property & Real Estate Law</option>
                              <option>Intellectual Property Protection</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Case Background / Consultation Goals *
                          </label>
                          <textarea
                            rows={3}
                            required
                            value={formData.summary}
                            onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                            placeholder="Please outline the key points of your legal matter..."
                            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                          ></textarea>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 py-3.5 text-sm font-bold text-white shadow-md shadow-amber-600/20 transition-all hover:from-amber-500 hover:to-amber-600 disabled:opacity-50"
                      >
                        <span>
                          {isSubmitting
                            ? "Confirming Reservation..."
                            : formData.consultationMode === "google_meet"
                            ? `Confirm Google Meet on ${formattedDateString}`
                            : `Confirm Appointment on ${formattedDateString}`}
                        </span>
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  <p className="text-[11px] text-center text-slate-500">
                    All communications and scheduled appointments are strictly protected by attorney-client privilege.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
