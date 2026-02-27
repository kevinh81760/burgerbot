const sections = [
  {
    heading: "The system",
    body: [
      "BurgerBot is a fully integrated robotics platform designed from the ground up for commercial kitchen environments. Every component is engineered to work in concert — from the moment an order is placed to the moment it leaves the pass.",
      "The system requires no structural modifications to your kitchen. It installs in hours, not weeks, and operates alongside your existing staff without friction.",
    ],
  },
  {
    heading: "The interface",
    body: [
      "A single touchscreen panel gives operators full visibility into every active task, queue position, and throughput metric in real time. No proprietary software licenses, no IT overhead.",
      "The interface is designed for kitchens — glove-friendly, grease-resistant, and readable under commercial lighting conditions.",
    ],
  },
  {
    heading: "The assembly arm",
    body: [
      "Six degrees of freedom, sub-millimeter repeatability, and a soft-grip end effector that handles everything from a brioche bun to a sliced tomato without crushing or misalignment.",
      "The arm learns new ingredient placements from a handful of demonstrations. No jigs, no fixtures, no reprogramming cycles.",
    ],
  },
  {
    heading: "The dispensary",
    body: [
      "Sauces, liquids, and dry toppings are dispensed with gram-level precision on every cycle. Portion consistency is built in — not a goal, a guarantee.",
      "The dispensary module hot-swaps in under ninety seconds, so a menu change never means a line stoppage.",
    ],
  },
  {
    heading: "The conveyor",
    body: [
      "A variable-speed belt system moves product between stations at a pace dictated by the current order queue. The conveyor self-adjusts based on downstream bottlenecks detected by the onboard vision system.",
      "Belt tension, alignment, and hygiene intervals are monitored continuously and flagged before they become downtime.",
    ],
  },
  {
    heading: "The intelligence",
    body: [
      "Every BurgerBot unit runs a local inference model trained on millions of food-preparation sequences. It improves with every shift, surfacing efficiency gains without requiring a cloud connection.",
      "Anomaly detection catches deviations in portion weight, assembly order, and cycle time before they compound. The system learns what normal looks like for your specific operation.",
    ],
  },
  {
    heading: "Built to scale",
    body: [
      "A single unit handles up to 300 covers per hour. Multiple units share a unified task queue and balance load dynamically — add capacity without adding complexity.",
      "Whether you operate one location or four hundred, the architecture is the same. Onboarding a new site takes less than a day.",
    ],
  },
];

export function TechStackGrid() {
  return (
    <section className="px-8 py-20 max-w-5xl">
      {sections.map((section, i) => (
        <div
          key={section.heading}
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
      ))}
    </section>
  );
}
