const works = {
  needle: ["Needle", "Sewing the Sky"],
  door: ["Door", "Exit"],
  gallery: ["Gallery", "The Interpreter"],
  boy: ["Boy", "Reach"],
  man: ["Man", "The Reader"],
  ballet: ["Ballet", "Ballet"],
} as const;

type WorkSlug = keyof typeof works;

export function generateStaticParams() {
  return Object.keys(works).map((work) => ({ work }));
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ work: string }>;
}) {
  const { work } = await params;
  const item = works[work as WorkSlug] ?? works.needle;
  const [prefix, title] = item;

  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto bg-[#f7f4ee] text-[#111111]">
      <header className="fixed left-0 right-0 top-0 z-20 flex items-center justify-between gap-4 bg-[#f7f4ee]/90 px-5 py-4 text-sm backdrop-blur md:px-7">
        <a className="font-bold" href="/">
          Yi-An Chen
        </a>
        <span className="text-[#66615a]">{title}</span>
        <a className="border-b border-current" href="/balloon-series">
          Back to Works
        </a>
      </header>

      {[1, 2, 3].map((number) => (
        <section
          key={number}
          className="flex min-h-screen snap-start items-center justify-center px-4 py-20 md:px-10"
          aria-label={`${title} ${number}`}
        >
          <img
            className="max-h-[82vh] max-w-full object-contain"
            src={`/pictures/balloon-series/works/${prefix}${number}.jpg`}
            alt={`${title} ${number}`}
          />
        </section>
      ))}
    </main>
  );
}
