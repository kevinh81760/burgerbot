import { SystemShowcase } from "@/components/landing/SystemShowcase";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { FadeIn } from "@/components/animations/FadeIn";

export function ContentSection() {
  return (
    <section className="flex flex-col bg-white">
      <div className="flex flex-col items-center gap-12 px-[160px] pt-[120px] pb-[80px]">
        <FadeIn>
          <h2 className="text-[#1a1a2e] text-[44px] font-semibold text-center">
            Built for the Kitchen
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-text-secondary text-[18px] text-center -mt-6">
            Drop-in automation that works in your kitchen today.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-col gap-8 max-w-[780px] w-full">
          <p className="text-text-secondary text-[18px] leading-[1.7]">
            Every burger, every time — assembled with the same precision,
            the same portioning, and the same speed. BurgerBot handles
            the line so your team can focus on what robots can&apos;t do.
          </p>
          <p className="text-text-secondary text-[18px] leading-[1.7]">
            No kitchen redesign. No months of downtime. No reprogramming
            when the menu changes. BurgerBot installs in a day and learns
            your recipes from a handful of live demonstrations.
          </p>
        </FadeIn>

        <FadeIn className="w-full max-w-[780px] mb-20">
          <VideoEmbed
            src="https://www.youtube.com/embed/qpEV-Glrq_Y?start=4"
            title="BurgerBot in action"
            className="w-full aspect-video overflow-hidden shadow-xl"
          />
        </FadeIn>

        <FadeIn className="w-full">
          <SystemShowcase />
        </FadeIn>
      </div>

      <FadeIn className="mb-6 mt-10">
          <div className="bg-bg-surface px-16 py-20 flex flex-col gap-4">
          <h3 className="text-[#1a1a2e] text-[40px] font-semibold leading-tight tracking-tight ml-23">
            Designed to integrate. <br /> Built for compatibility.
          </h3>
          <p className="text-text-secondary text-[18px] leading-relaxed font-medium ml-23">
            No complex installation. Our robots adapt to your existing environment.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
