const navItems = [
  ["Works", "/works"],
  ["Audience", "/exhibition-views"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

const series = [
  {
    title: "Corinthomaniac",
    href: "/corinthomaniac",
    image: "/pictures/corinthomaniac/02-robot-canvas-and-future.png",
    alt: "Corinthomaniac Canvas and Future interface",
    description:
      "An evolving drawing system in which a generated Future is repeatedly observed, drawn and fed back into what appears next.",
  },
  {
    title: "Balloon Series",
    href: "/balloon-series",
    image: "/pictures/balloon-series/works/Needle2.jpg",
    alt: "Needle from Balloon Series",
    description:
      "One person, one blue balloon, and a sequence of images open to memory, projection and interpretation.",
  },
];

export default function Works() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#111111]">
      <header className="sticky top-0 z-20 border-b border-[#d8d1c6] bg-[#f7f4ee]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-7" aria-label="Main navigation">
          <a className="font-bold" href="/">Yi-An Chen</a>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[#66615a]">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-[1180px] px-5 py-12 md:px-7 md:py-20">
        <h1 className="mb-14 border-b border-[#d8d1c6] pb-9 text-[clamp(56px,10vw,132px)] font-normal leading-none">Works</h1>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {series.map((item) => (
            <article key={item.href}>
              <a href={item.href} aria-label={`View ${item.title}`}>
                <div className="aspect-[4/5] overflow-hidden bg-[#e8e1d8]">
                  <img className="h-full w-full object-cover transition duration-500 hover:scale-[1.015] hover:opacity-90" src={item.image} alt={item.alt} />
                </div>
              </a>
              <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1.15fr]">
                <h2 className="text-2xl"><a href={item.href}>{item.title}</a></h2>
                <p className="text-[15px] leading-relaxed text-[#66615a]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
