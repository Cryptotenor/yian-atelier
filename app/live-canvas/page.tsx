import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Canvas",
  description:
    "An interactive generative drawing project in which marks, prompts and machine interpretation continuously reshape one another.",
};

const navItems = [
  ["Works", "/works"],
  ["Exhibition Views", "/exhibition-views"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

const loop = [
  {
    number: "01",
    title: "Gesture",
    text: "A line is made directly on the iPad with the Apple Pencil. Pressure changes the weight of the mark.",
  },
  {
    number: "02",
    title: "Pause",
    text: "When drawing stops, the newest state of the canvas and the area around the recent marks are captured.",
  },
  {
    number: "03",
    title: "Interpretation",
    text: "The drawing becomes both an image and a spatial condition for a generative model.",
  },
  {
    number: "04",
    title: "Return",
    text: "The generated image appears beside the drawing and can become the ground for the next gesture.",
  },
];

export default function LiveCanvas() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#111111]">
      <header className="sticky top-0 z-20 border-b border-[#d8d1c6] bg-[#f7f4ee]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-[1180px] flex-col gap-4 px-5 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-7" aria-label="Main navigation">
          <Link className="font-bold" href="/">Yi-An Chen</Link>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[#66615a]">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
        </nav>
      </header>

      <article className="mx-auto max-w-[1180px] px-5 py-12 md:px-7 md:py-20">
        <header className="grid gap-10 md:grid-cols-[1fr_440px]">
          <div>
            <a className="mb-5 inline-block text-sm text-[#66615a]" href="/works">Works /</a>
            <h1 className="break-words text-[clamp(50px,10vw,124px)] font-normal leading-[0.9] tracking-[-0.04em]">Live Canvas</h1>
          </div>
          <div className="self-end space-y-4 text-[17px] leading-relaxed text-[#66615a]">
            <p className="text-xl leading-snug text-[#111111]">
              A line becomes an image.<br />The image becomes the next surface.
            </p>
            <p>2026 · Interactive generative drawing system · Ongoing</p>
          </div>
        </header>

        <figure className="relative left-1/2 mt-14 w-screen -translate-x-1/2 overflow-hidden border-y border-[#d8d1c6] bg-[#e8e1d8]">
          <div className="mx-auto aspect-[16/10] max-w-[1600px] overflow-hidden">
            <img
              className="h-full w-[155%] max-w-none -translate-x-[35%] object-cover object-right"
              src="/pictures/live-canvas/live-canvas-concept.png"
              alt="Live Canvas sketch and generated image shown side by side on an iPad"
            />
          </div>
          <figcaption className="mx-auto max-w-[1180px] px-5 py-4 text-sm text-[#66615a] md:px-7">
            Interface concept: drawing and generated image remain visible as parallel states rather than before and after.
          </figcaption>
        </figure>

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">Drawing as a negotiation</h2>
          <div className="max-w-3xl space-y-5 text-[18px] leading-relaxed">
            <p className="text-2xl font-bold leading-snug">
              Live Canvas is an interactive drawing project in which a human mark becomes both image and instruction.
            </p>
            <p>
              The hand draws on a digital canvas. After a short pause, the marks are passed into a generative process together with language. The returned image does not replace the drawing; both remain visible, allowing the artist to move between gesture and machine interpretation.
            </p>
            <p>
              Each new line can constrain, interrupt or redirect what the system proposes. The prompt introduces another kind of authorship: not a visible mark, but a field of expectation around the image.
            </p>
            <p className="text-2xl leading-snug">
              At what point does a line stop being a drawing and become an instruction?
            </p>
          </div>
        </section>

        <section className="border-b border-[#d8d1c6] py-20">
          <p className="mb-6 text-sm text-[#66615a]">The interaction loop</p>
          <p className="max-w-5xl text-[clamp(27px,4.8vw,58px)] leading-[1.08]">
            Gesture → Pause → Interpretation → Return → Gesture again
          </p>
          <ol className="mt-14 grid border-y border-[#d8d1c6] md:grid-cols-4" aria-label="Live Canvas interaction cycle">
            {loop.map((item, index) => (
              <li className="relative border-b border-[#d8d1c6] py-7 pr-10 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0" key={item.number}>
                <span className="text-xs text-[#66615a]">{item.number}</span>
                <h3 className="mt-9 text-2xl">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#66615a]">{item.text}</p>
                <span className="absolute right-3 top-7 text-2xl font-light text-[#8a847b] md:-right-3 md:top-1/2 md:z-10 md:-translate-y-1/2 md:bg-[#f7f4ee] md:px-1" aria-hidden="true">
                  {index === loop.length - 1 ? "↺" : "→"}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">The system as material</h2>
          <div className="max-w-3xl space-y-5 text-[18px] leading-relaxed">
            <p>
              The work uses an iPad, Apple Pencil and a private GPU server. Pencil pressure, the recent stroke area, written language, the previous generated image and controlled randomness all enter the image at different levels.
            </p>
            <p>
              A masked image-to-image process limits change to the region around the newest marks. Sketch-based spatial conditioning can hold the drawing more firmly, while denoising controls how far the returned image may depart from the existing surface.
            </p>
            <p>
              These settings are not hidden as neutral technical parameters. They determine how much authority remains with the hand, how much moves into language, and how much is given to the model.
            </p>
            <dl className="mt-10 grid gap-7 border-t border-[#d8d1c6] pt-7 sm:grid-cols-2">
              <div><dt className="text-xs uppercase tracking-[0.1em] text-[#66615a]">Interface</dt><dd className="mt-2">Web canvas, Pointer Events, PWA</dd></div>
              <div><dt className="text-xs uppercase tracking-[0.1em] text-[#66615a]">Image process</dt><dd className="mt-2">Masked img2img, ControlNet, LoRA</dd></div>
              <div><dt className="text-xs uppercase tracking-[0.1em] text-[#66615a]">Input</dt><dd className="mt-2">Pencil gesture, pressure, text</dd></div>
              <div><dt className="text-xs uppercase tracking-[0.1em] text-[#66615a]">State</dt><dd className="mt-2">Working prototype, ongoing</dd></div>
            </dl>
          </div>
        </section>

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">Keeping the hand present</h2>
          <div className="max-w-3xl space-y-5 text-[18px] leading-relaxed">
            <p>
              Generative systems often ask the user to wait for a finished image. Live Canvas keeps drawing active while the image is being interpreted. New strokes can continue to arrive, but outdated requests are discarded so that the system responds only to the most recent state.
            </p>
            <p>
              The project is not intended to automate drawing. It tests whether generation can become a responsive material—something resisted, guided and revised through repeated contact.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mb-10 flex items-end justify-between border-b border-[#d8d1c6] pb-5">
            <h2 className="text-3xl">Current study</h2>
            <span className="text-sm text-[#66615a]">Ongoing · 2026</span>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-[#d8d1c6] p-7">
              <p className="text-xs uppercase tracking-[0.1em] text-[#66615a]">Working</p>
              <p className="mt-5 text-[17px] leading-relaxed">Pressure-sensitive drawing, manual or pause-triggered generation, local redrawing, prompt and model controls, result comparison and iterative feedback.</p>
            </div>
            <div className="border border-[#d8d1c6] p-7">
              <p className="text-xs uppercase tracking-[0.1em] text-[#66615a]">In development</p>
              <p className="mt-5 text-[17px] leading-relaxed">Physical iPad documentation, measured response time, pressure-curve studies and a lighter continuous preview process.</p>
            </div>
          </div>
        </section>

        <nav className="flex flex-wrap gap-x-7 gap-y-4 border-t border-[#d8d1c6] pt-6 text-sm">
          <a className="border-b border-current" href="/works">All Works</a>
          <a className="border-b border-current" href="/corinthomaniac">Corinthomaniac</a>
          <a className="border-b border-current" href="/about">About</a>
        </nav>
      </article>
    </main>
  );
}
