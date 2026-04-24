import Image from "next/image";
import { Footer } from "@/components/landing/Footer";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="relative w-full h-[33vh] min-h-[500px]">
        <Image
          src="/contact.png"
          alt="Burgers being served in black boxes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-12">
          <p className="text-white text-sm font-semibold tracking-[3px] uppercase mb-4">Contact</p>
          <h1 className="text-white text-6xl font-bold leading-tight">Get in Touch</h1>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-8 py-35">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
