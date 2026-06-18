const navItems = [
  ["Works", "/balloon-series"],
  ["Audience", "/exhibition-views"],
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

export default function ExhibitionViews() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#111111]">
      <Header />
      <section className="mx-auto max-w-[1180px] px-5 py-12 md:px-7 md:py-20">
        <div className="mb-14 grid gap-10 border-b border-[#d8d1c6] pb-9 md:grid-cols-[1fr_440px]">
          <h1 className="text-[clamp(44px,8vw,104px)] font-normal leading-none">
            Exhibition Views
          </h1>
          <p className="self-end text-[17px] leading-relaxed text-[#66615a]">
            Balloon Series was first presented at Atelier Yi-An in Lucerne in
            2026. Each visitor received a blue helium balloon before entering
            the exhibition space. The photographs below document how viewers
            moved through the works, held the balloons, looked closely, and
            brought their own interpretations into the images.
          </p>
        </div>

        <div className="columns-1 gap-7 md:columns-2 lg:columns-3">
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/Gallery A2.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/Door A.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/A1.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/Gallery A1.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/Ballet A1.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/A2.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/Boy A.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/Ballet A2.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/Needle A.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
          <figure className="mb-11 break-inside-avoid">
            <img
              className="w-full bg-[#e8e1d8]"
              src="/pictures/balloon-series/audience/Gallery A3.jpg"
              alt="Balloon Series exhibition view"
            />
            <figcaption className="mt-3 text-[13px] leading-relaxed text-[#66615a]">
              Balloon Series, Atelier Yi-An, Lucerne, 2026
            </figcaption>
          </figure>
        </div>

        <nav className="mt-20 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#d8d1c6] pt-6 text-sm">
          <a className="border-b border-current" href="/balloon-series">
            Works
          </a>
          <a className="border-b border-current" href="/about">
            About
          </a>
        </nav>
      </section>
    </main>
  );
}
