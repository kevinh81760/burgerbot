import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <Image
        src="/burgerbotthumbnail.jpg"
        alt="BurgerBot robot arm assembling a burger"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-7 px-[160px]">
        <h1 className="text-white text-[96px] font-semibold text-center leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
          BURGERBOT<span className="text-[40px] align-super">©</span>
        </h1>
        <p className="text-[#d4d4d5] text-[24px] text-center font-medium">
        Building the automation of the future.
        </p>
      </div>
    </section>
  );
}
