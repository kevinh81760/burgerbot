import Image from "next/image";
import { TechStackGrid } from "@/components/technology/TechStackGrid";
import { Footer } from "@/components/landing/Footer";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="relative w-full h-[33vh] min-h-[500px]">
        <Image
          src="/technology.png"
          alt="Burger robot arm assembling orders in kitchen"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-12">
          <p className="text-white text-sm font-semibold tracking-[3px] uppercase mb-4">Technology</p>
          <h1 className="text-white text-6xl font-bold leading-tight">How It Works</h1>
        </div>
      </div>
      <div className="flex-1">
        <TechStackGrid />
      </div>
      <Footer />
    </main>
  );
}
