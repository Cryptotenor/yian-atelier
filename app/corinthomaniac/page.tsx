import Link from "next/link";
import ProjectVideo from "./ProjectVideo";
import NarrationAudio from "./NarrationAudio";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Corinthomaniac" };

const navItems = [
  ["Works", "/works"],
  ["Exhibition Views", "/exhibition-views"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

const feedbackLoop = [
  {
    number: "01",
    title: "Future",
    text: "A portrait is generated continuously in real time.",
  },
  {
    number: "02",
    title: "Observe",
    text: "When a face becomes visible, the system locates its facial regions.",
  },
  {
    number: "03",
    title: "Draw",
    text: "The drawing agent translates observed contours into marks on the Canvas.",
  },
  {
    number: "04",
    title: "Feedback",
    text: "The changing Canvas becomes an input to the next Future.",
  },
  {
    number: "05",
    title: "Look again",
    text: "The system observes the newly generated Future and begins another drawing cycle.",
  },
];

const experiments = [
  {
    image: "03-paul-baseline-comparison.png",
    title: "From observation to line",
    text: "The observed image becomes a sequence of partial, repeated and sometimes unstable marks.",
  },
  {
    image: "04-five-region-observation.png",
    title: "Partial looking",
    text: "Overlapping regions make looking iterative rather than a single complete view.",
  },
  {
    image: "06-three-seed-comparison.png",
    title: "Controlled drift",
    text: "Related Futures change over time without fixing the absent figure into one final image.",
  },
];

export default function Corinthomaniac() {
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
            <h1 className="break-words text-[clamp(42px,8.5vw,110px)] font-normal leading-[0.92]">Corinthomaniac</h1>
          </div>
          <div className="self-end space-y-5 text-[17px] leading-relaxed text-[#66615a]">
            <p className="text-xl leading-snug text-[#111111]">越是把你留下，<br />越不是我記得的樣子。</p>
            <p>The more I kept you, the less you were the person I knew.</p>
          </div>
        </header>

        <figure className="mt-14 border-y border-[#d8d1c6] py-7">
          <ProjectVideo />
          <figcaption className="mt-4 flex max-w-3xl flex-wrap gap-x-5 gap-y-1 text-sm leading-relaxed text-[#66615a]">
            <span>Original drawing duration: 2 hours</span>
            <span>Edited video: 90 seconds</span>
            <span>On-page playback: 3 minutes at 0.5×</span>
          </figcaption>
        </figure>

        <NarrationAudio />

        <section className="border-b border-[#d8d1c6] py-20">
          <h2 className="mb-12 text-3xl">A ritual entrusted to a machine</h2>
          <div className="max-w-3xl space-y-5 text-[18px] leading-relaxed">
            <p className="text-2xl font-bold leading-snug">
              I entrusted the ritual of missing someone to a machine.
            </p>
            <p>
              I wanted to draw a face I held in my mind. My drawings were clumsy;
              they never quite resembled her. The image in my mind would not stay still either.
              I built Corinthomaniac so that the act of drawing could continue after I left.
            </p>
            <p>
              The work brings two images into view: <em>Future</em>, a continuously
              generated face, and <em>Canvas</em>, the drawing made in response by
              Kibutades, the work’s digital drawing agent.
              The drawing changes the image it follows, while its own marks gradually fade.
            </p>
            <div className="border-l border-[#d8d1c6] pl-5">
              <h3 className="mb-2 text-xl">Drawing is access</h3>
              <p>Drawing gives me a way to return to the absent figure. There is no final portrait to arrive at; the connection takes the form of an ongoing act.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d8d1c6] py-20">
          <p className="mb-6 text-sm text-[#66615a]">The core loop</p>
          <p className="max-w-5xl text-[clamp(26px,4.5vw,56px)] leading-[1.08]">
            Absence → Drawing → Temporary presence → Fading → Drawing again
          </p>
          <figure className="mt-14 border-y border-[#111111] py-8" aria-labelledby="feedback-loop-title">
            <figcaption className="mb-8 grid gap-3 md:grid-cols-[0.7fr_1.3fr]">
              <h3 className="text-2xl" id="feedback-loop-title">How the system sees and draws</h3>
              <p className="max-w-2xl text-[15px] leading-relaxed text-[#66615a]">
                The drawing system works from snapshots, planning a group of strokes before observing again. Prompt, subject LoRA and interpolated noise also shape Future; Canvas is one of several inputs.
              </p>
            </figcaption>
            <a href="/pictures/corinthomaniac/feedback-cycle.png" target="_blank" rel="noreferrer" className="mb-8 block" aria-label="Open the feedback cycle diagram at full size">
              <img src="/pictures/corinthomaniac/feedback-cycle.png" width={1800} height={1350} alt="Future snapshot → locate facial regions and plan contours → draw and fade on Canvas → feed Canvas back to generate a new Future. Prompt, LoRA and interpolated noise also affect generation." className="h-auto w-full" />
            </a>
            <ol className="grid border-t border-[#d8d1c6] md:hidden" aria-label="Realtime Future and Canvas feedback cycle">
              {feedbackLoop.map((item, index) => (
                <li className="relative border-b border-[#d8d1c6] py-6 pr-10 last:border-b-0 md:border-b-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0 md:last:pr-0" key={item.number}>
                  <span className="text-xs text-[#66615a]">{item.number}</span>
                  <h4 className="mt-8 text-xl">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#66615a]">{item.text}</p>
                  <span className="absolute right-3 top-6 text-2xl font-light text-[#8a847b] md:-right-3 md:top-1/2 md:z-10 md:-translate-y-1/2 md:bg-[#f7f4ee] md:px-1" aria-hidden="true">
                    {index === feedbackLoop.length - 1 ? "↺" : "→"}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-right text-xs uppercase tracking-[0.12em] text-[#66615a]">Continuous observation</p>
          </figure>

        </section>

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">Let the action speak</h2>
          <div className="max-w-2xl space-y-5 text-[18px] leading-relaxed">
            <p>My approach to Corinthomaniac grows out of my experience as a performer. My teacher taught me to work through form—gesture, movement and action—without deliberately illustrating an emotion. Emotional meaning could emerge through the action itself.</p>
            <p>I came to understand this lesson partly through Symbolist theatre: a gesture can suggest an experience without illustrating it directly. My teacher also introduced me to Jerzy Grotowski; through that exploration, I later came to know Vsevolod Meyerhold indirectly. Their work opens two different perspectives on my own practice.</p>
            <p>I find one perspective in Grotowski’s exploration of inner impulse and physical action. Corinthomaniac began with longing, became an attempt to draw someone from memory, and eventually led me to build a machine. Although I am not physically present in the gallery, the machine continues an action that began with me. Perhaps I never entirely left the performance.</p>
            <p>I find another in Meyerhold’s understanding of the spectator as a participant in the creation of theatrical meaning. I do not ask the machine to perform sadness. I do not script a pause to make it appear hesitant. Its rhythm emerges from computation, observation and drawing. One viewer may recognise hesitation in a line; another may simply watch the movement.</p>
            <p>The action originates in my experience, but its meaning is not entirely mine to determine.</p>
            <p className="text-2xl leading-snug">What continues there—me, or something I once did?</p>
            <details className="border-t border-[#d8d1c6] pt-5 text-[15px] text-[#66615a]">
              <summary className="cursor-pointer text-[#111111]">Artistic Research &amp; References</summary>
              <div className="mt-4 space-y-4 leading-relaxed">
                <p>Further points of comparison in this research:</p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>William Forsythe: choreography and action structures beyond the original performer’s body.</li>
                  <li>Stefan Kaegi: the relation between a mechanical stand-in and an absent person.</li>
                  <li>Kris Verdonck: nonhuman performers, repeated actions and the meanings spectators bring to them.</li>
                </ul>
                <p>These are thematic connections, not claims of direct lineage. Audience interpretation is also distinct from the technical feedback loop between Future and Canvas: the current system does not establish reciprocal interaction with viewers.</p>
              </div>
            </details>
          </div>
        </section>

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">Stability is not truth</h2>
          <div className="max-w-2xl space-y-5 text-[18px] leading-relaxed">
            <p>A face becoming more consistent would not make it more faithful to the person I remember. The image is shaped by a model and by the traces the system itself has made. Recognition, for me, remains uncertain.</p>
            <p>The fading marks are a programmed condition of the work. They are not evidence that the machine remembers or forgets.</p>
            <p className="text-2xl leading-snug">When does remembering become replacing?</p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">Current presentation</h2>
          <div className="max-w-2xl space-y-5 text-[18px] leading-relaxed">
            <p>The current prototype is digital. The proposed exhibition installation presents Future and Canvas side by side within a single 27-inch monitor, allowing visitors to observe the generated image and the drawing process simultaneously.</p>
            <p>The installation is intended to operate continuously, with a short introductory text. Spoken narration and an experimental soundscape are being considered as additional elements.</p>
            <p>Kibutades currently draws on the digital Canvas. A future physical version would use a robotic arm to draw with water on a reusable water-writing surface. Evaporation would make the marks disappear, and a camera could return those changing traces to the generative system. The robotic arm, water-writing and camera feedback remain proposed developments, not completed features.</p>
          </div>
        </section>

        <section className="border-b border-[#d8d1c6] py-16" aria-labelledby="installation-title">
          <h2 id="installation-title" className="text-3xl">Imagining the installation</h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#66615a]">Concept visualisations, not photographs of realised exhibitions.</p>
          <figure className="mt-10">
            <img src="/pictures/corinthomaniac/dual-screen-installation-concept.png" width={1536} height={1024} loading="lazy" className="h-auto w-full" alt="Concept visualisation of a visitor watching Future and Canvas on two adjacent gallery screens." />
            <figcaption className="mt-4 text-sm leading-relaxed text-[#66615a]"><span className="font-semibold text-[#111111]">01 / Earlier two-screen concept.</span> An earlier arrangement, now superseded by the single-monitor proposal above.</figcaption>
          </figure>
          <figure className="mt-12">
            <img src="/pictures/corinthomaniac/robotic-installation-concept.png" width={1536} height={1024} loading="lazy" className="h-auto w-full" alt="Concept visualisation of a robotic arm drawing a portrait beneath a screen, watched by a visitor." />
            <figcaption className="mt-4 text-sm leading-relaxed text-[#66615a]"><span className="font-semibold text-[#111111]">02 / Proposed physical Kibutades.</span> A spatial study of the future robotic version, distinct from the existing digital drawing agent.</figcaption>
          </figure>
        </section>

        <section className="py-20">
          <div className="mb-10 flex items-end justify-between border-b border-[#d8d1c6] pb-5">
            <h2 className="text-3xl">Studies &amp; experiments</h2>
            <span className="text-sm text-[#66615a]">Ongoing</span>
          </div>
          <div className="space-y-20">
            {experiments.map((item, index) => (
              <article className="grid gap-6 md:grid-cols-[1.35fr_0.65fr]" key={item.image}>
                <img className="w-full bg-[#e8e1d8]" src={`/pictures/corinthomaniac/${item.image}`} alt={item.title} />
                <div>
                  <span className="text-xs text-[#66615a]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-2xl">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[#66615a]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <nav className="flex flex-wrap gap-x-7 gap-y-4 border-t border-[#d8d1c6] pt-6 text-sm">
          <a className="border-b border-current" href="/works">All Works</a>
          <a className="border-b border-current" href="/balloon-series">Balloon Series</a>
          <a className="border-b border-current" href="/about">About</a>
        </nav>
      </article>
    </main>
  );
}
