import { FadeIn } from "@/components/animations/FadeIn";

const sections = [
  {
    heading: "The problem",
    body: [
      "Kitchen work is hard. Not hard in a way that builds character. Hard in a way that burns people out. The same motion, hundreds of times a shift, under heat and pressure and time. The best people leave. The ones who stay get worn down.",
      "The robots that came before us made things worse. They asked kitchens to rebuild around them: new layouts, new equipment, months of downtime. You\u2019d spend a year integrating a system only to find it couldn\u2019t handle a single menu update.",
    ],
  },
  {
    heading: "Our solution",
    body: [
      "BurgerBots comes to your kitchen, not the other way around. No structural changes, no disruption to your team, no months offline. It fits into what you already have and starts working the same day.",
      "Your staff shows it a recipe a few times. After that, it handles that part of the line. Consistently, tirelessly, without complaint. Your team gets to focus on the work that actually needs a person: the guests, the judgment calls, the things that matter.",
    ],
  },
  {
    heading: "How we got here",
    body: [
      "We spent years deploying robotics in some of the most demanding environments imaginable \u2014 autonomous drones, hospital logistics, military operations. The hardware always worked. The integration never did. Weeks of setup for systems that couldn\u2019t adapt when anything changed.",
      "We started asking a different question: what if the robot learned the job instead of the job being rebuilt for the robot? We tested the idea in a commercial kitchen, showed the arm how to build a burger a few times, and watched it replicate it perfectly on every subsequent order.",
      "We quit our jobs that afternoon and started BurgerBots.",
    ],
  },
  {
    heading: "Team",
    body: [
      "We\u2019re engineers from aerospace, autonomous vehicles, and AI research. Fields where things have to work, every time, without exception. We brought that same standard to the kitchen.",
      "We\u2019re already running live with restaurants and QSR brands. Real kitchens, real volume, real feedback. We\u2019re not building a pitch deck. We\u2019re building something your team can actually rely on.",
    ],
  },
];

export function AboutSection() {
  return (
    <section className="px-8 py-20 max-w-5xl">
      {sections.map((section, i) => (
        <FadeIn key={section.heading}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 border-t border-dashed border-foreground/10 pt-12">
            <h2 className="text-3xl font-semibold tracking-tight leading-tight">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/75">
              {section.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
          {i < sections.length - 1 && <div className="mt-20" />}
        </FadeIn>
      ))}
    </section>
  );
}
