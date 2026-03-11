import { FadeIn } from "@/components/animations/FadeIn";

const sections = [
  {
    heading: "The system",
    body: [
      "BurgerBots is built around one idea: the robot should fit your kitchen, not the other way around. Every part of the system, from the arm to the software, is designed to work alongside your team, not replace it.",
      "It installs in hours, not weeks. No structural changes, no disruption. Your staff keeps working while it gets set up. Most kitchens are fully running the same day.",
      <br />
    ],
  },
  {
    heading: "The interface",
    body: [
      "One screen. Your team can see everything: what\u2019s in the queue, what\u2019s being assembled, how the shift is tracking. No logins, no dashboards, no IT department required.",
      "Built for an actual kitchen: readable under bright lights, usable with gloves on, and easy enough that nobody needs training to understand it.",
      <br />
    ],
  },
  {
    heading: "The assembly arm",
    body: [
      "Gentle enough to handle a brioche bun without crushing it. Precise enough to place a tomato the same way, every time, for a thousand orders straight.",
      "Show it a new build a few times and it learns. No programming, no specialist, no downtime. Your team teaches it the same way they\u2019d train a new hire, just faster.",
      <br />
    ],
  },
  {
    heading: "The dispensary",
    body: [
      "Every sauce, every topping, portioned the same way every time. Not approximately. Exactly. The kind of consistency that\u2019s impossible to maintain manually across a full service.",
      "Swapping out a module takes under ninety seconds. Menu changes, seasonal items, new builds. None of them mean stopping the line.",
      <br />
    ],
  },
  {
    heading: "The conveyor",
    body: [
      "A variable-speed belt system moves product between stations at a pace dictated by the current order queue. The conveyor self-adjusts based on downstream bottlenecks detected by the onboard vision system.",
      "Belt tension, alignment, and hygiene intervals are monitored continuously and flagged before they become downtime.",
      <br />
    ],
  },
  {
    heading: "The intelligence",
    body: [
      "BurgerBots gets better the longer it runs in your kitchen. It learns your rhythms, your peak times, your specific recipes. All of that happens locally, without sending anything to the cloud.",
      "When something looks off, it catches it before it becomes a problem. Wrong portion, missed step, timing drift. All flagged and handled before it ever reaches your team or your guests.",
      <br />
    ],
  },
  {
    heading: "Built to scale",
    body: [
      "One unit handles up to 300 covers an hour. Add more and they work together automatically, sharing the queue, balancing the load, keeping pace no matter how busy it gets.",
      "One location or four hundred, it works the same way. Getting a new site up and running takes less than a day.",
      <br />
    ],
  },
];

export function TechStackGrid() {
  return (
    <section className="px-8 py-20 max-w-5xl">
      {sections.map((section, i) => (
        <FadeIn key={section.heading}>
          <div
            className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 border-t border-dashed border-foreground/10 pt-12 ${
              i < sections.length - 1 ? "mb-20" : ""
            }`}
          >
            <h2 className="text-3xl font-semibold tracking-tight leading-tight">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/75">
              {section.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
