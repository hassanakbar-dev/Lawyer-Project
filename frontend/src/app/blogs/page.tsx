"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Search,
  CheckCircle2,
  Mail,
  Scale,
  Sparkles,
} from "lucide-react";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    "All Topics",
    "Corporate & M&A",
    "Criminal Defense",
    "Intellectual Property",
    "Family Law",
    "Commercial Litigation",
  ];

  const blogPosts = [
    {
      id: "federal-investigations-guide",
      title: "What to Do If You Are Subpoenaed or Contacted by Federal Investigators",
      excerpt:
        "Key initial steps to preserve attorney-client privilege, avoid costly disclosure mistakes, and assemble an aggressive defense posture before grand jury proceedings commence.",
      category: "Criminal Defense",
      date: "November 14, 2026",
      readTime: "7 min read",
      author: "Arthur Sterling, Esq.",
      authorRole: "Managing Partner & Senior Trial Advocate",
      tags: ["DOJ Subpoena", "Grand Jury", "Federal Defense", "Privilege"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      featured: true,
    },
    {
      id: "corporate-ma-due-diligence",
      title: "Key Due Diligence Pitfalls in 2026 Cross-Border Mergers and Acquisitions",
      excerpt:
        "Analyzing foreign direct investment regulatory clearances, tax structuring liabilities, and shareholder approval requirements under modern Delaware Chancery jurisprudence.",
      category: "Corporate & M&A",
      date: "November 08, 2026",
      readTime: "9 min read",
      author: "Marcus Vance, Esq.",
      authorRole: "Partner - Corporate Transactions",
      tags: ["M&A", "Delaware Law", "Cross-Border", "Due Diligence"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: "protecting-ip-and-trade-secrets",
      title: "Safeguarding Proprietary Software, AI Weights, and Core Trade Secrets",
      excerpt:
        "Practical enforcement strategies for non-disclosure covenants, Defend Trade Secrets Act (DTSA) emergency injunctions, and fast court filings against corporate espionage.",
      category: "Intellectual Property",
      date: "October 30, 2026",
      readTime: "6 min read",
      author: "Victoria Hayes, Esq.",
      authorRole: "Senior Partner - IP Litigation",
      tags: ["Trade Secrets", "DTSA", "AI Law", "Non-Compete"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: "high-net-worth-divorce-assets",
      title: "Forensic Asset Tracing and Offshore Equity in High-Net-Worth Marital Dissolutions",
      excerpt:
        "How forensic accountants and experienced matrimonial litigators identify concealed trust assets, executive stock options, and international real estate holdings.",
      category: "Family Law",
      date: "October 21, 2026",
      readTime: "8 min read",
      author: "Eleanor Vance, Esq.",
      authorRole: "Senior Family Counsel",
      tags: ["Matrimonial", "Asset Division", "Offshore Trusts", "Valuation"],
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: "commercial-contract-repudiation",
      title: "Enforcing Material Breach Remedies and Liquidated Damages in Volatile Supply Chains",
      excerpt:
        "A tactical evaluation of anticipatory repudiation, force majeure clauses, and expedited preliminary injunctions in high-value commercial supply disputes.",
      category: "Commercial Litigation",
      date: "October 15, 2026",
      readTime: "5 min read",
      author: "Arthur Sterling, Esq.",
      authorRole: "Managing Partner",
      tags: ["Contract Breach", "UCC § 2-610", "Liquidated Damages", "Litigation"],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: "sec-whistleblower-investigations",
      title: "Conducting Independent Internal Investigations in Response to SEC Whistleblower Tips",
      excerpt:
        "Best practices for audit committees and general counsel to preserve the attorney work-product doctrine and mitigate corporate criminal liability.",
      category: "Corporate & M&A",
      date: "October 02, 2026",
      readTime: "10 min read",
      author: "Marcus Vance, Esq.",
      authorRole: "Partner - Corporate Defense",
      tags: ["SEC", "Sarbanes-Oxley", "Internal Audit", "Whistleblower"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: "wire-fraud-defense-strategies",
      title: "Navigating Federal Wire Fraud Allegations: Early Pre-Indictment Interventions",
      excerpt:
        "Challenging the intent requirement under 18 U.S.C. § 1343 and securing evidentiary exclusions before the filing of a formal grand jury indictment.",
      category: "Criminal Defense",
      date: "September 24, 2026",
      readTime: "7 min read",
      author: "Victoria Hayes, Esq.",
      authorRole: "Senior Partner - Criminal Defense",
      tags: ["18 U.S.C. 1343", "Pre-Indictment", "White Collar", "Federal Trial"],
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
    {
      id: "shareholder-derivative-lawsuits",
      title: "Defending Against Shareholder Derivative Suits in Delaware Chancery Court",
      excerpt:
        "Applying the Business Judgment Rule and special litigation committees to dismiss claims alleging breach of the duty of loyalty and Caremark oversight failures.",
      category: "Commercial Litigation",
      date: "September 10, 2026",
      readTime: "8 min read",
      author: "Arthur Sterling, Esq.",
      authorRole: "Managing Partner",
      tags: ["Delaware Chancery", "Caremark", "Fiduciary Duty", "Shareholder Suits"],
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Topics" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

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
              <span className="text-slate-500">Legal Insights & Blog</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl font-serif">
              Apex Legal Insights & Analysis
            </h1>
            <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-600 leading-relaxed">
              Authoritative courtroom commentaries, regulatory compliance alerts, statutory interpretations, and strategic litigation guides authored by senior trial partners.
            </p>
          </div>
        </section>

        {/* Featured Editorial Post */}
        <section className="py-12 bg-slate-100/60 border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all">
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 mb-4">
                    <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                    Featured Partner Commentary
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-slate-900 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                      <User className="h-3.5 w-3.5 text-amber-600" />
                      {featuredPost.author} ({featuredPost.authorRole})
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    {featuredPost.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-amber-500 transition-colors"
                    >
                      <span>Read Full Advisory & Consult Counsel</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-amber-800 shadow">
                    Category: {featuredPost.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Controls & Search */}
        <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    type="button"
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search statutes, topics, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-10 pr-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
                <BookOpen className="h-10 w-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold font-serif text-slate-900">
                  No Legal Briefs Found Matching Your Query
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  Try adjusting your search keywords or reset category filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All Topics");
                    setSearchQuery("");
                  }}
                  className="mt-5 rounded-lg bg-amber-600 px-5 py-2 text-xs font-bold text-white hover:bg-amber-500"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Post Thumbnail */}
                      <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 rounded-lg bg-white/95 px-2.5 py-1 text-[10px] font-bold text-amber-800 shadow">
                          {post.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 font-serif leading-snug group-hover:text-amber-700 transition-colors">
                          {post.title}
                        </h3>

                        <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {post.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Author & Link */}
                    <div className="border-t border-slate-100 p-6 pt-4 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-slate-900">{post.author}</div>
                        <div className="text-[10px] text-slate-500">{post.authorRole}</div>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800"
                      >
                        <span>Discuss Case</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Regulatory Newsletter Subscription */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 mb-4">
              <Mail className="h-4 w-4 text-amber-600" />
              Executive Legal Briefings
            </div>
            <h2 className="text-3xl font-bold font-serif text-slate-900 sm:text-4xl">
              Subscribe to Courtroom & Regulatory Alerts
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Receive confidential monthly digests on Delaware Chancery corporate rulings, federal white-collar investigations, and landmark jury verdicts.
            </p>

            {subscribed ? (
              <div className="mt-8 rounded-2xl border border-emerald-300 bg-emerald-50 p-6 max-w-md mx-auto text-emerald-900">
                <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <div className="font-bold">Subscription Confirmed</div>
                <div className="text-xs text-emerald-700 mt-1">
                  You are registered for Apex Legal monthly executive briefings.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter executive email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-xs text-slate-900 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-amber-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-amber-500 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
