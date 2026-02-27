import { SystemShowcase } from "@/components/landing/SystemShowcase";

export function ContentSection() {
  return (
    <section className="flex flex-col bg-white">
      <div className="flex flex-col items-center gap-12 px-[160px] pt-[120px] pb-[80px]">
        <h2 className="text-[#1a1a2e] text-[44px] font-semibold text-center">
          Built for the Kitchen
        </h2>
        <p className="text-text-secondary text-[17px] text-center -mt-6">
          Drop-in automation that works in your kitchen today.
        </p>
        <div className="flex flex-col gap-8 max-w-[780px] w-full">
          <p className="text-text-secondary text-base leading-[1.7]">
            Every burger, every time — assembled with the same precision,
            the same portioning, and the same speed. BurgerBot handles
            the line so your team can focus on what robots can&apos;t do.
          </p>
          <p className="text-text-secondary text-base leading-[1.7]">
            No kitchen redesign. No months of downtime. No reprogramming
            when the menu changes. BurgerBot installs in a day and learns
            your recipes from a handful of live demonstrations.
          </p>
        </div>
        <div className="relative w-full max-w-[780px] aspect-video overflow-hidden shadow-xl mb-20 rounded-xl">
          <iframe
            src="https://www.youtube.com/embed/qpEV-Glrq_Y?start=4"
            title="BurgerBot in action"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <SystemShowcase />
      </div>

      <div className="mx-6 mb-6 bg-bg-surface rounded-2xl px-16 py-14 flex flex-col gap-4 mt-10">
        <h3 className="text-[#1a1a2e] text-[32px] font-bold leading-tight tracking-tight">
          Don&apos;t redesign your facility.<br />Just deploy robots.
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          No complex installation. Our robots adapt to your existing environment.
        </p>
      </div>
    </section>
  );
}
