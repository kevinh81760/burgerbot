import Image from "next/image";

export function AboutSection() {
  return (
    <section className="px-8 py-20 max-w-5xl">
      {/* The problem */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 mb-20 border-t border-dashed border-foreground/10 pt-12">
        <h2 className="text-3xl font-semibold tracking-tight leading-tight">
          The problem
        </h2>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/75">
          <p>
            Commercial kitchens run on people doing the same motions thousands
            of times a day — flipping patties, dressing buns, plating orders.
            It&rsquo;s exhausting, error-prone, and expensive to staff consistently
            at the speed a modern QSR demands.
          </p>
          <p>
            The robots that exist today require you to rebuild your kitchen
            around them. New layouts, new equipment, months of downtime, and
            a system that&rsquo;s already obsolete the moment your menu changes.
            That&rsquo;s not automation — that&rsquo;s a renovation.
          </p>
        </div>
      </div>

      {/* Our solution */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 mb-20 border-t border-dashed border-foreground/10 pt-12">
        <h2 className="text-3xl font-semibold tracking-tight leading-tight">
          Our solution
        </h2>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/75">
          <p>
            BurgerBot installs into your kitchen as it stands today. No
            structural changes, no conveyor overhauls, no floor plan
            redesign. The robot comes to your process — not the other
            way around.
          </p>
          <p>
            Our assembly arm learns new recipes from a handful of live
            demonstrations. Once deployed, it improves with every shift —
            increasing throughput, tightening portion consistency, and
            flagging errors before they reach the pass. Up to 300 covers
            per hour, every hour.
          </p>
        </div>
      </div>

      {/* How we got here */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 mb-20 border-t border-dashed border-foreground/10 pt-12">
        <h2 className="text-3xl font-semibold tracking-tight leading-tight">
          How we got here
        </h2>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/75">
          <p>
            We spent years deploying robotics in some of the most demanding
            environments imaginable — autonomous drones, hospital logistics,
            military operations. The hardware always worked. The integration
            never did. Weeks of setup for systems that couldn&rsquo;t adapt when
            anything changed.
          </p>
          <p>
            We started asking a different question: what if the robot learned
            the job instead of the job being rebuilt for the robot? We tested
            the idea in a commercial kitchen, showed the arm how to build a
            burger a few times, and watched it replicate it perfectly on
            every subsequent order.
          </p>
          <p>
            We quit our jobs that afternoon and started BurgerBot.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-16 gap-y-6 border-t border-dashed border-foreground/10 pt-12">
        <h2 className="text-3xl font-semibold tracking-tight leading-tight">
          Team
        </h2>
        <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground/75">
          <p>
            BurgerBot is built by engineers with deep roots in autonomous
            systems, computer vision, and large-scale AI. We came from
            aerospace, autonomous driving, hyperloop, and language model
            research — fields where reliability is non-negotiable.
          </p>
          <p>
            We&rsquo;re already on the ground with restaurants and QSR brands,
            running live kitchens and iterating fast. We&rsquo;re not building
            a demo. We&rsquo;re building the kitchen of the next decade.
          </p>
        </div>
      </div>
    </section>
  );
}

