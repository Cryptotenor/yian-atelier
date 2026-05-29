export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-8 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
          Yian Atelier
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
          Generative Art
          <br />
          Large Format Prints
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          AI-generated images, tactile editions, and large-scale print experiments
          from Luzern.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/gallery"
            className="rounded-full bg-white px-6 py-3 text-black transition hover:opacity-90"
          >
            View Gallery
          </a>
          <a
            href="/about"
            className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
          >
            About
          </a>
        </div>
      </section>
    </main>
  );
}
