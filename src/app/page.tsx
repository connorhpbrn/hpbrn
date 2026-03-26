import { AboutSection } from "@/components/sections/about-section";
import { ElsewhereSection } from "@/components/sections/elsewhere-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { StackSection } from "@/components/sections/stack-section";
import { WritingSection } from "@/components/sections/writing-section";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen">
      <div className="mx-auto w-full max-w-3xl px-6 sm:px-8">
        <HeroSection />
        <SelectedWorkSection />
        <WritingSection />
        <StackSection />
        <AboutSection />
        <ElsewhereSection />
      </div>
    </main>
  );
}
