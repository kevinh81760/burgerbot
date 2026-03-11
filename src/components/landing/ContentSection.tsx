import { SystemShowcase } from "@/components/landing/SystemShowcase";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { FadeIn } from "@/components/animations/FadeIn";

export function ContentSection() {
  return (
    <section className="flex flex-col bg-white">
      <div className="flex flex-col items-center gap-12 px-[160px] pt-[120px] pb-[80px]">
        <FadeIn>
          <h2 className="text-[#1a1a2e] text-[42px] font-semibold text-center">
            Robots runs the line. People run the room.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-text-secondary text-[18px] text-center -mt-6">
            We handle the repetitive stuff. Your people handle the rest.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-col gap-8 max-w-[780px] w-full">
          <p className="text-text-secondary text-[18px] leading-[1.7]">
            The grill doesn&apos;t take breaks. Neither does BurgerBots, and
            that&apos;s exactly the point. Consistent portions, consistent speed,
            consistent quality on every single order. The repetitive work
            gets handled. Your team gets to breathe.
          </p>
          <p className="text-text-secondary text-[18px] leading-[1.7]">
            No rebuilding your kitchen. No weeks of setup. No specialist
            required when the menu changes. BurgerBots fits into the kitchen
            you already have and learns your recipes from a few live
            demonstrations, usually in a single day.
          </p>
        </FadeIn>

        <FadeIn className="w-full max-w-[780px] mb-20">
          <VideoEmbed
            src="https://www.youtube.com/embed/qpEV-Glrq_Y?start=4"
            title="BurgerBots in action"
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
            Fits your kitchen. <br /> Works with your team.
          </h3>
          <p className="text-text-secondary text-[18px] leading-relaxed font-medium ml-23">
            No retrofits. No disruption. BurgerBots slots into what you already have.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
