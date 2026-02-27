import { FadeIn } from "@/components/animations/FadeIn";

const sections = [
  {
    heading: "The problem",
    body: [
      "Commercial kitchens run on people doing the same motions thousands of times a day — flipping patties, dressing buns, plating orders. It\u2019s exhausting, error-prone, and expensive to staff consistently at the speed a modern QSR demands.",
      "The robots that exist today require you to rebuild your kitchen around them. New layouts, new equipment, months of downtime, and a system that\u2019s already obsolete the moment your menu changes. That\u2019s not automation \u2014 that\u2019s a renovation.",
    ],
  },
  {
    heading: "Our solution",
    body: [
      "BurgerBot installs into your kitchen as it stands today. No structural changes, no conveyor overhauls, no floor plan redesign. The robot comes to your process \u2014 not the other way around.",
      "Our assembly arm learns new recipes from a handful of live demonstrations. Once deployed, it improves with every shift \u2014 increasing throughput, tightening portion consistency, and flagging errors before they reach the pass. Up to 300 covers per hour, every hour.",
    ],
  },
  {
    heading: "How we got here",
    body: [
      "We spent years deploying robotics in some of the most demanding environments imaginable \u2014 autonomous drones, hospital logistics, military operations. The hardware always worked. The integration never did. Weeks of setup for systems that couldn\u2019t adapt when anything changed.",
      "We started asking a different question: what if the robot learned the job instead of the job being rebuilt for the robot? We tested the idea in a commercial kitchen, showed the arm how to build a burger a few times, and watched it replicate it perfectly on every subsequent order.",
      "We quit our jobs that afternoon and started BurgerBot.",
    ],
  },
  {
    heading: "Team",
    body: [
      "BurgerBot is built by engineers with deep roots in autonomous systems, computer vision, and large-scale AI. We came from aerospace, autonomous driving, hyperloop, and language model research \u2014 fields where reliability is non-negotiable.",
      "We\u2019re already on the ground with restaurants and QSR brands, running live kitchens and iterating fast. We\u2019re not building a demo. We\u2019re building the kitchen of the next decade.",
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
