import { Hero } from "@/components/landing/Hero";
import { ContentSection } from "@/components/landing/ContentSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BURGERBOTS",
  description: "Industry robots. Simply deployed. Ready to work.",
};

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Hero />
      <ContentSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
