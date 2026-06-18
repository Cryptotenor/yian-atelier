const works = [
  ["needle", "Needle2.jpg", "Needle"],
  ["door", "Door2.jpg", "Door"],
  ["gallery", "Gallery2.jpg", "Gallery"],
  ["boy", "Boy2.jpg", "Boy"],
  ["man", "Man2.jpg", "Man"],
  ["ballet", "Ballet2.jpg", "Ballet"],
];

const navItems = [
  ["Works", "/balloon-series"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

function Header() {
  return (
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
  );
}

export default function BalloonSeries() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#111111]">
      <Header />
      <section className="mx-auto max-w-[1180px] px-5 py-12 md:px-7 md:py-20">
        <div className="mb-14 grid gap-10 border-b border-[#d8d1c6] pb-9 md:grid-cols-[1fr_440px]">
          <h1 className="text-[clamp(44px,8vw,104px)] font-normal leading-none">
            Balloon Series
          </h1>
          <p className="self-end text-[17px] leading-relaxed text-[#66615a]">
            Each work in the Balloon Series contains one person and one blue
            balloon. The series invites viewers to temporarily take on the role
            of interpreter, bringing their own memories, questions, and
            imagination into the images.
          </p>
        </div>

        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {works.map(([slug, filename, title]) => (
            <figure key={filename}>
              <a href={`/balloon-series/${slug}`} aria-label={`View ${title}`}>
                <img
                  className="w-full bg-[#e8e1d8] transition-opacity hover:opacity-85"
                  src={`/pictures/balloon-series/works/${filename}`}
                  alt={title}
                />
              </a>
              <figcaption className="mt-4 text-sm leading-relaxed">
                <a className="block font-bold" href={`/balloon-series/${slug}`}>
                  {title}
                </a>
                <span className="block text-[#66615a]">
                  Balloon Series, 2026
                </span>
                <span className="block text-[#66615a]">
                  AI-assisted digital image
                </span>
                <span className="block text-[#66615a]">
                  Pigment print on paper
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <nav className="mt-20 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#d8d1c6] pt-6 text-sm">
          <a className="border-b border-current" href="/">
            Home
          </a>
          <a className="border-b border-current" href="/about">
            About
          </a>
        </nav>
      </section>
    </main>
  );
}
