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
  supportingLine:
    "Currently building, writing, and exploring what better software looks like in an AI-native world.",
};

export const socialLinks: SocialLink[] = [
  { label: "X", href: "https://x.com/connorhpbrn" },
  { label: "GitHub", href: "https://github.com/connorhpbrn" },
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
    name: "Human or Token",
    descriptor: "A project around signal, noise, and internet behaviour.",
    body: "This was part curiosity, part product idea. I’m interested in how online systems change when more of the participants are automated, incentivised, or synthetic. The project explored that tension through a product lens.",
    href: "https://humanortoken.com",
  },
];

export const writing: WritingEntry[] = [
  {
    title: "The New Luxury Is Being Unreachable",
    description:
      "A piece about status, attention, and why restraint is becoming the new signal.",
  },
  {
    title: "The Interface Layer",
    description:
      "An idea I keep returning to: the real opportunity is often not the model, but the layer that makes software legible and usable for both humans and agents.",
    href: "https://x.com/connorhpbrn/status/2032188825808879649?s=20",
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
