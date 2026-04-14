export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  descriptor: string;
  body: string;
  href: string;
};

export type WritingEntry = {
  title: string;
  description: string;
  href?: string;
};

export type StackGroup = {
  name: string;
  items: string[];
};

export const hero = {
  name: "Connor Hepburn",
  subheading:
    "I build AI products, experimental tools, and clean software for the internet.",
  intro:
    "I’m interested in interfaces, agents, product design, and making complex systems feel clear. Most of my work sits somewhere between software, ideas, and experimentation.",
};

export const socialLinks: SocialLink[] = [
  { label: "X", href: "https://x.com/connorhpbrn" },
  { label: "GitHub", href: "https://github.com/connorhpbrn" },
  { label: "Insta", href: "https://instagram.com/connorhpbrn" },
  { label: "Email", href: "mailto:connorchepburn@gmail.com" },
];

export const projects: Project[] = [
  {
    name: "Praes",
    descriptor: "Mission control for AI agents.",
    body: "Praes started from a simple frustration: most agent tooling shows that something ran, but not what actually happened. I wanted a clearer layer between the user and the agent. Something that made runs, memory, tool calls, cost, and guardrails feel transparent instead of hidden behind logs.",
    href: "https://praes.app",
  },
  {
    name: "Modus",
    descriptor: "A more thoughtful take on workout tracking.",
    body: "Modus explored how fitness software could feel more motivating, more personal, and less mechanical. The focus was on clean design, better interaction, and making logging feel frictionless rather than repetitive.",
    href: "https://usemodus.app",
  },
  {
    name: "Kram AI",
    descriptor: "Study tools built around speed and clarity.",
    body: "Kram AI was built around the idea that studying software should feel lighter, faster, and more useful. Less bloated dashboards, more direct value. It was an experiment in building something practical while keeping the product experience simple.",
    href: "https://www.kramai.app",
  },
{
    name: "Creed",
    descriptor: "A .md file for agents to collab on context.",
    body: "A shared context file that agents can read and write to. Think of it like a collective memory that persists across sessions and agents.",
    href: "https://github.com/connorhpbrn/creed",
  },
];

export const writing: WritingEntry[] = [
  {
    title: "Agency Over Credentials",
    description:
      "A piece on why high-agency builders with real depth will outperform credential-heavy operators in an AI-shaped economy.",
    href: "https://x.com/connorhpbrn/status/2034227118272393583?s=20",
  },
  {
    title: "The New Luxury Is Being Unreachable",
    description:
      "A piece about status, attention, and why restraint is becoming the new signal.",
    href: "https://x.com/connorhpbrn/status/2033269746146091211?s=20",
  },
  {
    title: "The New Economy Depends on Human Surplus",
    description:
      "A take on how consumer tech is adapting to a world where more people have less leverage and more attention to monetize.",
    href: "https://x.com/connorhpbrn/status/2032566411009446028?s=20",
  },
  {
    title: "The Interface Layer",
    description:
      "An idea I keep returning to: the real opportunity is often not the model, but the layer that makes software legible and usable for both humans and agents.",
    href: "https://x.com/connorhpbrn/status/2032188825808879649?s=20",
  },
  {
    title: "Adoption Is the Bottleneck",
    description:
      "A note on why people and systems are the real limiter for AI progress, not just chips and raw compute.",
    href: "https://x.com/connorhpbrn/status/2034985232558956567?s=20",
  },
];

export const stackGroups: StackGroup[] = [
  {
    name: "Frontend",
    items: ["Next.js", "TypeScript", "shadcn"],
  },
  {
    name: "Backend / Infra",
    items: ["Supabase", "Vercel", "Postgres"],
  },
  {
    name: "Design",
    items: ["Figma", "Paper", "Tweakcn"],
  },
  {
    name: "AI / Tooling",
    items: ["OpenRouter", "LLM Arena", "OpenClaw"],
  },
];

export const aboutParagraphs = [
  "I like building software that feels clear, fast, and inevitable.",
  "A lot of what interests me sits at the edge of product, interface, and systems design. Especially now, when software is starting to shift from being designed only for people clicking buttons to also being designed for agents using tools.",
  "I’m drawn to products that reduce noise, expose the right layers, and make complex things feel obvious. That applies just as much to design as it does to infrastructure.",
  "This site is a snapshot of some of that work and thinking.",
];
