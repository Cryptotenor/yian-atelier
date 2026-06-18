const navItems = [
  ["Works", "/balloon-series"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

export default function About() {
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
        <div className="mb-14 grid gap-10 border-b border-[#d8d1c6] pb-9 md:grid-cols-[1fr_440px]">
          <h1 className="text-[clamp(44px,8vw,104px)] font-normal leading-none">
            About
          </h1>
          <p className="self-end text-[17px] text-[#66615a]">
            Yi-An Chen is a Taiwan-born artist based in Lucerne, Switzerland.
          </p>
        </div>

        <p className="max-w-3xl text-lg leading-relaxed text-[#2b2a27]">
          Yi-An Chen is a Taiwan-born artist based in Lucerne, Switzerland.
          Trained as a classical singer, he works across AI-generated imagery,
          installation, and participatory viewing situations. His visual
          practice explores interpretation, memory, tenderness, and the unstable
          relationship between holding on and letting go.
        </p>

        <nav className="mt-20 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#d8d1c6] pt-6 text-sm">
          <a className="border-b border-current" href="/balloon-series">
            Works
          </a>
          <a className="border-b border-current" href="/cv">
            CV
          </a>
        </nav>
      </section>
    </main>
  );
}
