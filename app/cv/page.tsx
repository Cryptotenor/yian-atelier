const navItems = [
  ["Works", "/balloon-series"],
  ["Audience", "/exhibition-views"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

export default function CV() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#111111]">
      <header className="sticky top-0 z-20 border-b border-[#d8d1c6] bg-[#f7f4ee]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <a className="font-bold" href="/">
            Yi-An Chen
          </a>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[#66615a]">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-[1180px] px-5 py-12 md:px-7 md:py-20">
        <div className="mb-8 grid gap-10 border-b border-[#d8d1c6] pb-9 md:grid-cols-[1fr_440px]">
          <h1 className="text-[clamp(44px,8vw,104px)] font-normal leading-none">
            CV
          </h1>
          <p className="self-end text-[17px] text-[#66615a]">
            Selected background and exhibition information.
          </p>
        </div>

        <section className="grid gap-3 border-b border-[#d8d1c6] py-8 md:grid-cols-[220px_1fr] md:gap-9">
          <h2 className="text-sm font-bold">Education</h2>
          <p className="text-[17px]">
            Master of Arts in Music, Taipei National University of the Arts,
            Taiwan
          </p>
        </section>
        <section className="grid gap-3 border-b border-[#d8d1c6] py-8 md:grid-cols-[220px_1fr] md:gap-9">
          <h2 className="text-sm font-bold">Selected Exhibition</h2>
          <p className="text-[17px]">
            2026 — Balloon Series, Atelier Yi-An, Lucerne, Switzerland
          </p>
        </section>
        <section className="grid gap-3 border-b border-[#d8d1c6] py-8 md:grid-cols-[220px_1fr] md:gap-9">
          <h2 className="text-sm font-bold">Professional Background</h2>
          <p className="text-[17px]">Tenor, Luzerner Theater, Switzerland</p>
        </section>

        <nav className="mt-20 flex flex-wrap gap-x-7 gap-y-4 text-sm">
          <a className="border-b border-current" href="/about">
            About
          </a>
          <a className="border-b border-current" href="/contact">
            Contact
          </a>
        </nav>
      </section>
    </main>
  );
}
