import Image from "next/image";
import { Camera, MapPin } from "lucide-react";

export default function FirmGallery() {
  const images = [
    {
      title: "Supreme & Appellate Courtroom",
      subtitle: "Federal & State Trial Jurisdiction",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      span: "sm:col-span-2 lg:col-span-2",
    },
    {
      title: "Chambers Legal Archive",
      subtitle: "Over 50,000 Jurisprudence Volumes",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
      span: "sm:col-span-1 lg:col-span-1",
    },
    {
      title: "Private Executive Boardroom",
      subtitle: "Discreet High-Stakes Negotiations",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      span: "sm:col-span-1 lg:col-span-1",
    },
    {
      title: "Partner Consultation Suites",
      subtitle: "New York Financial District Chambers",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
      span: "sm:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800">
              <Camera className="h-4 w-4 text-amber-600" />
              Inside Our Practice
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl font-serif">
              Our Chambers & Trial Environment
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl">
              Where rigorous legal scholarship, extensive forensic research, and high-impact strategy converge.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-lg">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span>Chambers at 100 Constitution Ave, Suite 400</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className={`group relative h-80 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  {item.subtitle}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white font-serif">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
