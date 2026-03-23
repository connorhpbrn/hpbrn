import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightText } from "@/components/ui/spotlight-text";
import { stackGroups } from "@/content/site";

export function StackSection() {
  return (
    <section id="stack" className="section-wrap border-t border-zinc-900/80">
      <Reveal>
        <SectionHeading
          title="Stack"
          intro="The tools and systems I keep returning to."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
        {stackGroups.map((group, index) => (
          <Reveal key={group.name} delay={index * 65}>
            <article className="rounded-2xl border border-zinc-900/80 bg-zinc-950/30 p-5 sm:p-6">
              <h3 className="text-sm font-semibold tracking-[0.08em] text-zinc-300">
                {group.name}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400 sm:text-[15px]">
                {group.items.map((item) => (
                  <li key={item}>
                    <SpotlightText as="span" text={item} />
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
