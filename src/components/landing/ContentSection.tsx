import Image from "next/image";

export function ContentSection() {
  return (
    <section className="flex flex-col items-center gap-12 bg-white px-[160px] py-[100px]">
      <h2 className="text-[#1a1a2e] text-[44px] font-bold text-center">
        Robots Ready to Work
      </h2>
      <p className="text-[#6b7280] text-[17px] text-center">
        Servo7 robots are simple and fast to implement.
      </p>
      <div className="flex flex-col gap-8 max-w-[780px] w-full">
        <p className="text-[#6b7280] text-base leading-[1.7]">
          Traditional automation means redesigning your entire facility for the
          robot to work. You need to change the floor plan, adjust conveyor
          belts, and re-educate your staff. This is inefficient and unnecessary.
        </p>
        <p className="text-[#6b7280] text-base leading-[1.7]">
          With Servo7, you don&apos;t have to do any of that. The implementation
          process is simple and fast, because our robots:
        </p>
      </div>
      <div className="relative w-full max-w-[780px] aspect-square overflow-hidden shadow-xl">
        <Image
          src="/robot-arm.png"
          alt="Burger Bots robotic arm assembling orders"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
