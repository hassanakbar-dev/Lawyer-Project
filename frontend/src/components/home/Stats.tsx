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
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-slate-100 pb-6 last:border-b-0 sm:border-b-0 sm:border-r sm:pr-6 last:border-r-0"
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-600 font-serif">
              {item.value}
            </span>
            <span className="mt-2 text-sm font-bold text-slate-900">
              {item.label}
            </span>
            <span className="mt-1 text-xs text-slate-500 leading-normal">
              {item.subtext}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
