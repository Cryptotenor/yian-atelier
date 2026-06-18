const navItems = [
  ["Works", "/balloon-series"],
  ["Audience", "/exhibition-views"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#111111]">
      <header className="sticky top-0 z-20 border-b border-[#d8d1c6] bg-[#f7f4ee]/95 backdrop-blur">
        <nav
          className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-7"
          aria-label="Main navigation"
        >
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

      <section className="mx-auto grid min-h-[calc(100vh-82px)] max-w-[1180px] items-end gap-12 px-5 py-14 md:grid-cols-[0.92fr_1.08fr] md:px-7 md:py-20">
        <div className="pb-4">
          <p className="mb-5 text-xs uppercase tracking-[0.12em] text-[#66615a]">
            Visual Artist
          </p>
          <h1 className="text-[clamp(44px,8vw,104px)] font-normal leading-none">
            Yi-An Chen
          </h1>
          <p className="mt-6 max-w-xl text-[clamp(18px,2vw,23px)] leading-snug text-[#66615a]">
            Visual artist based in Luzern, Switzerland
          </p>
          <div className="mt-8 max-w-2xl space-y-4 text-[17px] leading-relaxed text-[#2b2a27]">
            <p>My son received his first balloon.</p>

            <p>He did not want to keep it.</p>

            <p>He wanted to watch it fly.</p>

            <p>He asked for another.</p>

            <p>And another.</p>
            
            <p>They all fly.</p>

            <p>The last balloon came home with us.</p>

            <p>For a while, it floated</p>
            <p>quietly in our living room.</p>

            <p>Then, it fell asleep.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 text-sm">
            <a className="border-b border-current" href="/balloon-series">
              View Balloon Series
            </a>
            <a className="border-b border-current" href="/about">
              About the artist
            </a>
          </div>
        </div>

        <img
          className="max-h-[78vh] w-full bg-[#e8e1d8] object-cover"
          src="/pictures/balloon-series/works/Needle2.jpg"
          alt="Needle from Balloon Series"
        />
      </section>
    </main>
  );
}
