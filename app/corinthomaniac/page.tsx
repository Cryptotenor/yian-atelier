import ProjectVideo from "./ProjectVideo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Corinthomaniac" };

const navItems = [
  ["Works", "/works"],
  ["Exhibition Views", "/exhibition-views"],
  ["About", "/about"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
];

const systemTerms = [
  {
    number: "01",
    title: "Future",
    text: "The face the system can see at this moment. It is shaped by the character model, the current Canvas and the ongoing act of generation.",
  },
  {
    number: "02",
    title: "Canvas",
    text: "The evolving drawing surface. Its marks shape the next Future, but gradually fade, preventing the image from becoming permanent.",
  },
  {
    number: "03",
    title: "Kibutades",
    text: "The drawing body. It observes the Future and translates a temporary digital image into physical marks shaped by time, resistance and disappearance.",
  },
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
    text: "Kibutades translates what it sees into marks on the Canvas.",
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
          <a className="font-bold" href="/">Yi-An Chen</a>
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

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">Corinthomaniac</h2>
          <div className="max-w-2xl space-y-7 text-[clamp(20px,2.2vw,28px)] leading-[1.45] tracking-[-0.01em]">
            <p>I miss you, so I try to draw you, like the lady from Corinth.</p>

            <p>
              I thought I remembered your face. so I tried to draw you,
            </p>

            <p>
              Before I began, I could see you clearly. Your eyes, your nose,
              your lips, your face.
            </p>

            <p>
              But every time I put something down on paper,<br />
              the drawing was different from what I remembered.
            </p>

            <p>So I corrected it.</p>

            <p>Again and again</p>

            <p>
              But the more I corrected you,<br />
              the less certain I became. “Are your eyes brown or green?”, “Did
              you ever smile that calm?” “What are you looking at in that day?”
            </p>

            <p>
              At some point, I could no longer tell<br />
              whether I was drawing the person I remembered,
            </p>

            <p>or remembering the person I had drawn.</p>

            <p>
              Years later, I began building a machine<br />
              that does the same thing.
            </p>

            <p>
              It draws so that it can recall her face, as long as it keeps
              drawing
            </p>

            <p>She is there</p>

            <p>But nothing it draws can stay.</p>

            <p>
              So it draws<br />
              Again and again
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">Drawing is access</h2>
          <div className="max-w-2xl space-y-5 text-[18px] leading-relaxed">
            <p>Corinthomaniac begins with an attempt to draw someone who is absent. It is not a machine designed to complete portraits. Through the act of drawing, an absent figure becomes temporarily visible.</p>
            <p>The relationship between the drawing system and the absent person remains one-sided, yet the act continues. Its emotional force comes from repetition, not from any claim that the machine itself loves, remembers or grieves.</p>
            <p className="text-2xl leading-snug">The person is absent, but the relationship continues as an activity.</p>
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
                Future is not a fixed reference image. It is continuously regenerated from the evolving Canvas. Each new Future is observed and drawn again, creating a feedback loop between the imagined face and the marks already made.
              </p>
            </figcaption>
            <ol className="grid border-t border-[#d8d1c6] md:grid-cols-5" aria-label="Realtime Future and Canvas feedback cycle">
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
          <div className="mt-12 grid gap-7 border-t border-[#d8d1c6] pt-7 md:grid-cols-3">
            {systemTerms.map((item) => (
              <section key={item.title}>
                <p className="text-xs text-[#66615a]">{item.number}</p>
                <h3 className="mt-3 text-2xl">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#66615a]">{item.text}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-b border-[#d8d1c6] py-20 md:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-3xl">Stability is not truth</h2>
          <div className="max-w-2xl space-y-5 text-[18px] leading-relaxed">
            <p>As the Canvas feeds back into the Future, the face may gradually become more stable. But stability does not mean greater fidelity to the absent person. The system may instead be converging on a figure shaped by its own repeated traces.</p>
            <p>The marks on the Canvas slowly disappear. As their support weakens, the machine must continue drawing to maintain the face that has begun to appear. Fading is a material rule of the work; memory, longing and loss remain possible readings rather than measured machine emotions.</p>
            <p className="text-2xl leading-snug">When does remembering become replacing?</p>
          </div>
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
