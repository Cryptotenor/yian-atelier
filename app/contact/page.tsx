const navItems = [
  ["Works", "/balloon-series"],
  ["Audience", "/exhibition-views"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

export default function Contact() {
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
        <div className="mb-10 grid gap-10 border-b border-[#d8d1c6] pb-9 md:grid-cols-[1fr_440px]">
          <h1 className="text-[clamp(44px,8vw,104px)] font-normal leading-none">
            Contact
          </h1>
          <p className="self-end text-[17px] text-[#66615a]">
            For studio visits, exhibition inquiries, and related correspondence.
          </p>
        </div>

        <dl className="max-w-2xl">
          <div className="grid gap-2 border-b border-[#d8d1c6] py-5 md:grid-cols-[110px_1fr] md:gap-6">
            <dt className="text-[#66615a]">Email</dt>
            <dd>atelier@yian.ch</dd>
          </div>
          <div className="grid gap-2 border-b border-[#d8d1c6] py-5 md:grid-cols-[110px_1fr] md:gap-6">
            <dt className="text-[#66615a]">Instagram</dt>
            <dd>@yianchen1120</dd>
          </div>
          <div className="grid gap-2 border-b border-[#d8d1c6] py-5 md:grid-cols-[110px_1fr] md:gap-6">
            <dt className="text-[#66615a]">Website</dt>
            <dd>
              <a className="border-b border-current" href="https://atelier.yian.ch">
                atelier.yian.ch
              </a>
            </dd>
          </div>
        </dl>

        <nav className="mt-20 flex flex-wrap gap-x-7 gap-y-4 text-sm">
          <a className="border-b border-current" href="/">
            Home
          </a>
          <a className="border-b border-current" href="/balloon-series">
            Works
          </a>
        </nav>
      </section>
    </main>
  );
}
