export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen md:grid-cols-2">

        <section className="flex items-center px-8 md:px-16">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
              Yian Atelier
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Balloon Series
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              Large-format prints, objects, and exhibitions.
            </p>
          </div>
        </section>

        <section className="relative">
          <img
            src="/01.webp"
            alt="Balloon"
            className="h-full w-full object-cover"
          />
        </section>

      </div>
    </main>
  );
}
