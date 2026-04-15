export default function Home() {
  const topCards = [
    {
      rating: "90",
      name: "Vinicius Junior",
      country: "Brasil",
      countryCode: "BR",
      position: "EXT",
      color: "from-amber-300 via-yellow-500 to-amber-700",
    },
    {
      rating: "88",
      name: "Griezmann",
      country: "Francia",
      countryCode: "FR",
      position: "MP",
      color: "from-cyan-300 via-blue-500 to-blue-700",
    },
    {
      rating: "87",
      name: "Lautaro",
      country: "Argentina",
      countryCode: "AR",
      position: "DC",
      color: "from-sky-200 via-sky-400 to-cyan-600",
    },
    {
      rating: "89",
      name: "Pedri",
      country: "Espana",
      countryCode: "ES",
      position: "MC",
      color: "from-orange-300 via-red-500 to-red-700",
    },
    {
      rating: "87",
      name: "Saka",
      country: "Inglaterra",
      countryCode: "EN",
      position: "ED",
      color: "from-indigo-300 via-violet-500 to-violet-700",
    },
    {
      rating: "91",
      name: "Messi",
      country: "Argentina",
      countryCode: "AR",
      position: "MCO",
      color: "from-slate-200 via-slate-400 to-slate-700",
    },
  ];

  const bottomCards = [
    {
      rating: "89",
      name: "Neymar",
      country: "Brasil",
      countryCode: "BR",
      position: "EI",
      color: "from-blue-300 via-blue-500 to-indigo-700",
    },
    {
      rating: "87",
      name: "Nico Williams",
      country: "Espana",
      countryCode: "ES",
      position: "ED",
      color: "from-amber-300 via-orange-500 to-amber-700",
    },
    {
      rating: "88",
      name: "Bellingham",
      country: "Inglaterra",
      countryCode: "EN",
      position: "MC",
      color: "from-amber-300 via-yellow-500 to-orange-700",
    },
    {
      rating: "90",
      name: "Yamal",
      country: "Espana",
      countryCode: "ES",
      position: "ED",
      color: "from-cyan-300 via-sky-500 to-blue-700",
    },
    {
      rating: "86",
      name: "Musiala",
      country: "Alemania",
      countryCode: "DE",
      position: "MCO",
      color: "from-violet-300 via-violet-500 to-indigo-700",
    },
    {
      rating: "90",
      name: "Alisson",
      country: "Brasil",
      countryCode: "BR",
      position: "POR",
      color: "from-emerald-300 via-emerald-500 to-green-700",
    },
  ];

  const countries = [
    "BR",
    "FR",
    "AR",
    "ES",
    "EN",
    "DE",
    "IT",
    "PT",
    "UY",
    "US",
    "JP",
    "KR",
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#3fbb55_0%,_#1d5f2f_45%,_#0f2418_100%)] px-4 py-6 text-white md:px-6">
      <main className="mx-auto w-full max-w-7xl rounded-3xl border border-lime-300/40 bg-[linear-gradient(160deg,_rgba(20,77,46,0.92)_0%,_rgba(10,45,28,0.95)_65%)] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:p-5">
        <section className="overflow-hidden rounded-2xl border border-lime-300/40 bg-[linear-gradient(120deg,_#0f3f24_0%,_#1f6f3e_40%,_#0a2f1e_100%)] px-4 py-6 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-lime-200/70">
            Football Card Album
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <h1 className="text-3xl font-black uppercase tracking-tight text-lime-50 md:text-5xl">
              Mundial NextUp
            </h1>
            <div className="rounded-full border border-lime-300/40 bg-black/20 px-4 py-1 text-sm font-bold text-lime-100">
              Nivel 18 · 5a50
            </div>
          </div>
        </section>

        <section className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-lime-300/30 bg-black/20 px-3 py-2 md:px-4">
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            {[
              "Mi coleccion",
              "Sobres",
              "Intercambios",
              "Clasificacion",
            ].map((tab, index) => (
              <button
                key={tab}
                className={`rounded-lg border px-3 py-1.5 transition ${
                  index === 0
                    ? "border-lime-300/80 bg-lime-500/25 text-lime-50"
                    : "border-lime-200/25 bg-black/15 text-lime-100 hover:bg-lime-500/20"
                }`}
                type="button"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="text-sm font-semibold text-lime-100">Usuario: Seobus</div>
        </section>

        <section className="mt-4 grid gap-4 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-4">
            <article className="rounded-2xl border border-lime-300/30 bg-[linear-gradient(170deg,_rgba(25,100,53,0.9)_0%,_rgba(16,54,34,0.95)_100%)] p-4 shadow-lg">
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-lime-50">
                Francia
              </h2>
              <div className="mt-4 rounded-xl border border-lime-200/30 bg-black/25 p-4">
                <p className="text-sm text-lime-100/80">Completado</p>
                <p className="text-3xl font-black text-lime-50">10 / 18</p>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-xl border border-yellow-300/70 bg-gradient-to-r from-yellow-300 to-amber-500 px-4 py-2 text-base font-black uppercase text-black"
              >
                Reclamar premio
              </button>
            </article>

            <article className="rounded-2xl border border-lime-300/30 bg-black/30 p-4">
              <h3 className="text-lg font-black uppercase text-lime-50">Logros</h3>
              <div className="mt-3 rounded-xl border border-lime-200/25 bg-[linear-gradient(140deg,_rgba(47,137,73,0.8)_0%,_rgba(10,41,26,0.95)_100%)] p-3">
                <p className="text-sm font-semibold text-lime-100">Brasil completado</p>
                <p className="mt-1 text-xs text-lime-100/80">
                  Desbloquea una carta iconica de leyenda.
                </p>
              </div>
            </article>
          </aside>

          <div className="rounded-2xl border border-lime-300/30 bg-black/25 p-3 md:p-4">
            <header className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-lime-300/40 bg-[linear-gradient(90deg,_rgba(123,201,71,0.45)_0%,_rgba(63,136,62,0.38)_100%)] px-4 py-2">
              <h2 className="text-center text-xl font-black uppercase tracking-wide text-lime-50">
                World Cup 2024
              </h2>
              <span className="rounded-full border border-lime-200/40 bg-black/20 px-3 py-1 text-xs font-semibold uppercase text-lime-100">
                Coleccionado
              </span>
            </header>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {topCards.map((card) => (
                <article
                  key={card.name}
                  className="rounded-xl border border-white/30 bg-white/10 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                >
                  <div
                    className={`rounded-lg border border-white/50 bg-gradient-to-b ${card.color} p-3 text-white`}
                  >
                    <div className="flex items-center justify-between text-xs font-black">
                      <span>{card.rating}</span>
                      <span>{card.position}</span>
                    </div>
                    <div className="mt-8 h-16 rounded-md border border-white/30 bg-black/15" />
                  </div>
                  <p className="mt-2 truncate text-sm font-black uppercase text-lime-50">
                    {card.name}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-lime-100/85">
                    {card.country} ({card.countryCode})
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {bottomCards.map((card) => (
                <article
                  key={card.name}
                  className="rounded-xl border border-white/30 bg-white/10 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                >
                  <div
                    className={`rounded-lg border border-white/50 bg-gradient-to-b ${card.color} p-3 text-white`}
                  >
                    <div className="flex items-center justify-between text-xs font-black">
                      <span>{card.rating}</span>
                      <span>{card.position}</span>
                    </div>
                    <div className="mt-8 h-16 rounded-md border border-white/30 bg-black/15" />
                  </div>
                  <p className="mt-2 truncate text-sm font-black uppercase text-lime-50">
                    {card.name}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-lime-100/85">
                    {card.country} ({card.countryCode})
                  </p>
                </article>
              ))}
            </div>

            <footer className="mt-4 flex flex-wrap gap-2 rounded-xl border border-lime-300/25 bg-black/20 p-2">
              {countries.map((code) => (
                <span
                  key={code}
                  className="rounded-md border border-lime-200/30 bg-lime-600/20 px-2 py-1 text-xs font-black tracking-wide text-lime-50"
                >
                  {code}
                </span>
              ))}
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
