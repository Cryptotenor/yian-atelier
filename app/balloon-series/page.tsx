const works = [
  { prefix: "Needle", title: "Needle" },
  { prefix: "Door", title: "Door" },
  { prefix: "Gallery", title: "Gallery" },
  { prefix: "Boy", title: "Boy" },
  { prefix: "Man", title: "Man" },
  { prefix: "Ballet", title: "Ballet" },
];

const navItems = [
  ["Works", "/works"],
  ["Audience", "/exhibition-views"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

export default function BalloonSeries() {
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
        <div className="mb-20 grid gap-10 border-b border-[#d8d1c6] pb-10 md:grid-cols-[1fr_440px]">
          <div>
            <a className="mb-5 inline-block text-sm text-[#66615a]" href="/works">Works /</a>
            <h1 className="text-[clamp(44px,8vw,104px)] font-normal leading-none">Balloon Series</h1>
          </div>
          <p className="self-end text-[17px] leading-relaxed text-[#66615a]">
            Each work in the Balloon Series contains one person and one blue balloon. The series invites viewers to temporarily take on the role of interpreter, bringing their own memories, questions and imagination into the images.
          </p>
        </div>

        <div className="space-y-28">
          {works.map((work, workIndex) => (
            <article key={work.prefix} id={work.prefix.toLowerCase()}>
              <div className="mb-6 flex items-baseline justify-between border-b border-[#d8d1c6] pb-4">
                <h2 className="text-[clamp(30px,4vw,52px)] font-normal">{work.title}</h2>
                <span className="text-sm text-[#66615a]">{String(workIndex + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}</span>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {[1, 2, 3].map((number) => (
                  <figure key={number}>
                    <img className="w-full bg-[#e8e1d8]" src={`/pictures/balloon-series/works/${work.prefix}${number}.jpg`} alt={`${work.title} ${number}`} />
                  </figure>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[#66615a]">
                Balloon Series, 2026<br />AI-assisted digital image<br />Pigment print on paper
              </p>
            </article>
          ))}
        </div>

        <nav className="mt-24 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#d8d1c6] pt-6 text-sm">
          <a className="border-b border-current" href="/works">All Works</a>
          <a className="border-b border-current" href="/corinthomaniac">Corinthomaniac</a>
          <a className="border-b border-current" href="/exhibition-views">Audience</a>
        </nav>
      </section>
    </main>
  );
}
