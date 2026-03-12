import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/site";

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      className="border-t border-zinc-900/80 pt-14 pb-20 sm:pt-16 sm:pb-24"
    >
      <Reveal>
        <SectionHeading
          title="Selected Work"
          intro="A few things I’ve built or explored over time."
        />
      </Reveal>

      <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 60}>
            <article className="rounded-2xl border border-zinc-900/80 bg-zinc-950/40 p-6 sm:p-7">
              <div className="space-y-2">
                <h3 className="text-base font-semibold tracking-tight text-zinc-100 sm:text-lg">
                  {project.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 sm:text-[11px]">
                  {project.descriptor}
                </p>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                {project.body}
              </p>

              <a
                href={project.href}
                className="story-link mt-5 inline-flex items-center text-sm text-zinc-300"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
