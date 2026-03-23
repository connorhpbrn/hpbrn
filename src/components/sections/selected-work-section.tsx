import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightText } from "@/components/ui/spotlight-text";
import { projects } from "@/content/site";

export function SelectedWorkSection() {
  return (
    <section id="work" className="section-wrap border-t border-zinc-900/80">
      <Reveal>
        <SectionHeading
          title="Selected Work"
          intro="A few things I’ve built or explored over time."
        />
      </Reveal>

      <div className="mt-8 divide-y divide-zinc-900/80 sm:mt-10">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 60}>
            <article className="py-5 sm:py-6">
              <h3 className="text-base font-medium tracking-tight text-zinc-100 sm:text-lg">
                <a
                  href={project.href}
                  className="story-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>
              </h3>
              <SpotlightText
                text={project.descriptor}
                className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]"
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
