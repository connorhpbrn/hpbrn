import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightText } from "@/components/ui/spotlight-text";
import { writing } from "@/content/site";

export function WritingSection() {
  return (
    <section id="writing" className="section-wrap border-t border-zinc-900/80">
      <Reveal>
        <SectionHeading
          title="Writing"
          intro="A few ideas and themes I keep coming back to."
        />
      </Reveal>

      <div className="mt-8 divide-y divide-zinc-900/80 sm:mt-10">
        {writing.map((entry, index) => (
          <Reveal key={entry.title} delay={index * 55}>
            <article className="py-5 sm:py-6">
              <h3 className="text-base font-medium tracking-tight text-zinc-100 sm:text-lg">
                {entry.href ? (
                  <a
                    href={entry.href}
                    className="story-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {entry.title}
                  </a>
                ) : (
                  entry.title
                )}
              </h3>
              <SpotlightText
                text={entry.description}
                className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]"
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
