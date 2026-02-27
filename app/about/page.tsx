import Image from "next/image";
import { AboutSection } from "@/components/about/AboutSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative w-full h-[33vh] min-h-[500px]">
        <Image
          src="/liz.png"
          alt="DJ performing at Burger Bots event"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <AboutSection />
    </main>
  );
}
