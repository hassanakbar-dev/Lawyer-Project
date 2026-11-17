export default function Stats() {
  const stats = [
    {
      value: "25+",
      label: "Years of Trial Experience",
      subtext: "Practicing before state and federal courts",
    },
    {
      value: "98.4%",
      label: "Case Success Rate",
      subtext: "Consistent favorable verdicts & settlements",
    },
    {
      value: "$140M+",
      label: "Client Settlements Won",
      subtext: "Secured for clients and businesses",
    },
    {
      value: "1,500+",
      label: "Clients Defended",
      subtext: "From corporate entities to private individuals",
    },
  ];

  return (
    <section className="relative z-10 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-slate-800 pb-6 last:border-b-0 sm:border-b-0 sm:border-r sm:pr-6 last:border-r-0"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-serif">
              {item.value}
            </span>
            <span className="mt-2 text-sm font-semibold text-white">
              {item.label}
            </span>
            <span className="mt-1 text-xs text-slate-400 leading-normal">
              {item.subtext}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
