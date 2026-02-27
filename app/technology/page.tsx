import Image from "next/image";
import { TechStackGrid } from "@/components/technology/TechStackGrid";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative w-full h-[33vh] min-h-[500px]">
        <Image
          src="/technology.png"
          alt="Burger robot arm assembling orders in kitchen"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <TechStackGrid />
    </main>
  );
}
