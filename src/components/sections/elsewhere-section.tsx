import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/content/site";

export function ElsewhereSection() {
  return (
    <section id="elsewhere" className="section-wrap border-t border-zinc-900/80 pb-16 sm:pb-20">
      <Reveal>
        <SectionHeading title="Elsewhere" />
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-7 sm:text-[15px]">
          Best place to find me is usually on the internet.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <ul className="mt-7 flex flex-wrap items-center gap-5 text-sm text-zinc-300 sm:mt-8">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="story-link inline-flex items-center"
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noreferrer"}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={160}>
        <footer className="mt-12 border-t border-zinc-900/80 pt-6 text-xs text-zinc-500 sm:mt-14 sm:pt-7">
          <p>Built with Next.js and TypeScript.</p>
          <p className="mt-2">Simple for now. Easy to expand later.</p>
        </footer>
      </Reveal>
    </section>
  );
}
