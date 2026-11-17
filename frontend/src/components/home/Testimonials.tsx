import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "David Vance",
      title: "Chief Executive Officer, Nexa Logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      content:
        "Apex Legal steered our company through an existential multi-million dollar patent lawsuit. Their courtroom composure, legal acumen, and tactical counter-claims resulted in a complete victory for us.",
      matter: "Corporate Defense",
    },
    {
      name: "Eleanor Martinez",
      title: "Real Estate Developer & Private Client",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      content:
        "When faced with an aggressive federal regulatory inquiry, Victoria Hayes and her defense team worked day and night to expose the flawed evidence. She saved my family and my career.",
      matter: "Federal Defense",
    },
    {
      name: "Marcus Sterling",
      title: "Managing Director, Sterling Asset Partners",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      content:
        "During a highly contested high-net-worth divorce involving international trusts, their family law division delivered exceptional results while maintaining absolute discretion.",
      matter: "Family & Asset Division",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
            Client Endorsements
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif">
            What Clients Say About Our Representation
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Real clients, landmark matters, and life-changing legal advocacy.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:border-amber-500/40 hover:bg-slate-900"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-slate-800" />

              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-300 italic">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-amber-500/40">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-serif">{review.name}</div>
                  <div className="text-xs text-slate-400">{review.title}</div>
                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                    {review.matter}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
