import { hero } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="top" className="pt-24 pb-10 sm:pt-32 sm:pb-14">
      <Reveal>
        <div className="max-w-3xl space-y-7 sm:space-y-8">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            {hero.name}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-200 sm:text-xl">
            {hero.subheading}
          </p>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {hero.intro}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
