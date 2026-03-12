type SectionHeadingProps = {
  title: string;
  intro?: string;
};

export function SectionHeading({ title, intro }: SectionHeadingProps) {
  return (
    <header className="max-w-2xl space-y-3">
      <h2 className="text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl">
        {title}
      </h2>
      {intro ? (
        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{intro}</p>
      ) : null}
    </header>
  );
}
