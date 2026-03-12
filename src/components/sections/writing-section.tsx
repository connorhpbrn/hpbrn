import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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
              <div className="flex items-start justify-between gap-4">
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
                {entry.href ? (
                  <a
                    href={entry.href}
                    className="story-link shrink-0 text-xs uppercase tracking-[0.14em] text-zinc-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read
                  </a>
                ) : (
                  <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-zinc-600">
                    Soon
                  </span>
                )}
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {entry.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
