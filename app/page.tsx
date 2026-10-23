const navItems = [
  ["Works", "/works"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f7f4ee] text-[#111111]">
      <header className="border-b border-[#d8d1c6]">
        <nav className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-7" aria-label="Main navigation">
          <a className="font-bold" href="/">Yi-An Chen</a>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[#66615a]">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-[1180px] px-5 pb-24 pt-16 md:px-7 md:pt-24">
        <p className="mb-4 text-xs uppercase tracking-[0.12em] text-[#66615a]">Visual Artist · Luzern</p>
        <h1 className="text-[clamp(54px,10vw,124px)] font-normal leading-none tracking-[-0.04em]">Yi-An Chen</h1>

        <article className="relative left-1/2 mt-20 w-screen -translate-x-1/2 border-y border-[#d8d1c6]">
          <a className="group relative block aspect-square overflow-hidden bg-white" href="/corinthomaniac" aria-label="View Corinthomaniac">
            <video className="corinthomaniac-pan absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/videos/corinthomaniac-random-walk-fast-poster.jpg" aria-label="Fast-forwarded Corinthomaniac random-seed drawing process">
              <source src="/videos/corinthomaniac-random-walk-fast.mp4" type="video/mp4" />
            </video>
            <span className="absolute inset-0 bg-white/35 backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-white/20" aria-hidden="true" />
            <span className="absolute inset-x-0 top-0 mx-auto flex max-w-[1180px] items-start justify-between gap-6 px-5 pt-9 text-[#111111] md:px-7 md:pt-12">
              <span className="text-[clamp(42px,8vw,108px)] font-normal leading-[0.9]">Corinthomaniac</span>
              <span className="shrink-0 border-b border-current pb-1 text-sm">View project</span>
            </span>
          </a>
        </article>

        <div className="mt-16 border-y border-[#d8d1c6] py-6">
          <a className="flex items-baseline justify-between gap-5" href="/balloon-series">
            <span className="text-[clamp(28px,4vw,48px)]">Balloon Series</span>
            <span className="text-sm text-[#66615a]">View project →</span>
          </a>
        </div>
      </section>
    </main>
  );
}
