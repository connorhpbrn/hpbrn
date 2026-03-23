import { SpotlightText } from "@/components/ui/spotlight-text";

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
        <SpotlightText
          as="span"
          text={intro}
          className="block text-sm leading-relaxed text-zinc-400 sm:text-base"
        />
      ) : null}
    </header>
  );
}
