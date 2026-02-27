import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative w-full h-[33vh] min-h-[500px]">
        <Image
          src="/contact.png"
          alt="Burgers being served in black boxes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="flex items-center justify-center px-8 py-16">
        <p className="text-lg font-semibold">Contact Page</p>
      </div>
    </main>
  );
}
