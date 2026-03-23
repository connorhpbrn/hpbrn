import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightText } from "@/components/ui/spotlight-text";
import { aboutParagraphs } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="section-wrap border-t border-zinc-900/80">
      <Reveal>
        <SectionHeading title="About" />
      </Reveal>

      <div className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-zinc-400 sm:mt-10 sm:text-[15px]">
        {aboutParagraphs.map((paragraph, index) => (
          <Reveal key={paragraph.slice(0, 24)} delay={index * 45}>
            <SpotlightText text={paragraph} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
