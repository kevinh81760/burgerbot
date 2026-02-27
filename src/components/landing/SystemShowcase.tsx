"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    number: "01.",
    title: "Assembler",
    description:
      "A six-axis robot arm that builds every burger to spec — bun, protein, toppings, sauces — with sub-millimeter consistency on every single order. Learns new recipes from a handful of live demonstrations.",
    image: "/robot-arm.png",
  },
  {
    number: "02.",
    title: "Dispensary",
    description:
      "Gram-level precision for every sauce, liquid, and dry topping. Portion consistency is guaranteed, not approximated. The module hot-swaps in under 90 seconds when you change the menu.",
    image: "/burger.png",
  },
  {
    number: "03.",
    title: "Conveyor",
    description:
      "A variable-speed belt that moves product between stations at a pace set by the live order queue. Self-adjusts to downstream bottlenecks detected by the onboard vision system.",
    image: "/technology.png",
  },
  {
    number: "04.",
    title: "Interface",
    description:
      "A single glove-friendly touchscreen gives operators full visibility into queue position, throughput, and system health in real time. No IT overhead, no proprietary software.",
    image: "/contact.png",
  },
];

export function SystemShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-[1100px]">
      {/* Left: item list */}
      <div className="flex flex-col">
        {items.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setActive(i)}
            className="text-left border-t border-[#e5e5e5] py-5 group transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <span
                  className={`text-xs font-medium mt-1 transition-colors duration-200 ${
                    active === i ? "text-[#1a1a2e]" : "text-[#c0c0c0]"
                  }`}
                >
                  {item.number}
                </span>
                <span
                  className={`text-lg font-semibold transition-colors duration-200 ${
                    active === i ? "text-[#1a1a2e]" : "text-[#c0c0c0]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
              {active === i && (
                <span className="text-[#1a1a2e] text-lg">→</span>
              )}
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                active === i ? "max-h-24 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-text-secondary text-sm leading-relaxed pl-8">
                {item.description}
              </p>
            </div>
          </button>
        ))}
        <div className="border-t border-[#e5e5e5]" />
      </div>

      {/* Right: image */}
      <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`absolute inset-0 transition-opacity duration-500 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
