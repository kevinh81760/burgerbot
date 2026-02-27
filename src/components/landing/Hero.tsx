import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <Image
        src="/burger.png"
        alt="Burger Bots packaging with a prepared burger"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-7 px-[120px]">
        <h1 className="text-white text-[72px] font-semibold text-center leading-tight">
          Restaurant Automation
        </h1>
        <p className="text-[#d4d4d5] text-[22px] text-center">
          Simply deployed. Ready to work.
        </p>
      </div>
    </section>
  );
}
