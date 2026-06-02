import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen md:grid-cols-2">

        <section className="flex items-center px-8 py-24 md:px-16">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-400">
              Yian Atelier
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Balloon Series
            </h1>

            <div className="mt-10 space-y-4 text-zinc-300">
              <p>
                12.06 – 17.06.2026
              </p>

              <p>
                Visits by appointment.
              </p>

              <p>
                <strong>Open Day</strong><br />
                14.06.2026<br />
                14:00 – 20:00
              </p>

              <p>
                Bleicherstrasse 14<br />
                6003 Luzern
              </p>

              <p>
                <a
                  href="mailto:yian@yian.ch"
                  className="underline underline-offset-4 hover:text-white"
                >
                  yian@yian.ch
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="relative min-h-[70vh] md:min-h-screen">
          <Image
            src="/pictures/01.png"
            alt="Balloon Series"
            fill
            priority
            className="object-cover"
          />
        </section>

      </div>
    </main>
  );
}
