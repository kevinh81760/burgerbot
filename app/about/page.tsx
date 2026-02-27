import Image from "next/image";
import { AboutSection } from "@/components/about/AboutSection";
import { Footer } from "@/components/landing/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="relative w-full h-[33vh] min-h-[500px]">
        <Image
          src="/liz.png"
          alt="DJ performing at Burger Bots event"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end px-8 pb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/80 mb-3">
            About
          </p>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-white">
            BurgerBot
          </h1>
        </div>
      </div>
      <div className="flex-1">
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
