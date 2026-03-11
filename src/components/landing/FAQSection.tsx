"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

const faqs = [
  {
    question: "What exactly does BurgerBots do?",
    answer:
      "BurgerBots takes on the repetitive assembly work: toasting buns, portioning sauces, stacking ingredients, plating orders. Your team isn't stuck doing the same motion hundreds of times a shift. It handles the grind. Your people handle the guests.",
  },
  {
    question: "Do I need to redesign my kitchen to install it?",
    answer:
      "No. BurgerBots is designed to work in the kitchen you already have. No construction, no conveyor overhauls, no floor plan changes. It shows up, fits in, and is running the same day, usually within a few hours.",
  },
  {
    question: "How does BurgerBots learn new menu items?",
    answer:
      "You show it a few times and it picks it up. No code, no specialist, no downtime. Your team does the demonstration, BurgerBots does the rest. Menu updates that used to take weeks now take an afternoon.",
  },
  {
    question: "How fast can it actually work?",
    answer:
      "One unit handles up to 300 covers per hour without breaking a sweat. If your volume grows, add another unit. They share the queue automatically and pick up the extra load. Your staff stays consistent even when the rush isn't.",
  },
  {
    question: "What happens if the robot makes a mistake?",
    answer:
      "It catches its own mistakes before your team or your guests ever see them. The onboard vision system watches every step. If something looks off, it flags the order and lets your team know right away. Nothing leaves the pass that shouldn't.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#e5e5e5]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[#1a1a2e] text-[15px] font-medium pr-8">{question}</span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center text-[#1a1a2e] text-xl font-light transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-text-secondary text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="bg-white px-[160px] py-[120px] mb-11">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-x-6 gap-y-12">
        <FadeIn>
          <h2 className="text-[#1a1a2e] text-[36px] font-semibold leading-tight tracking-tight">
            Your questions answered
          </h2>
        </FadeIn>
        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={i * 0.08}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </FadeIn>
          ))}
          <div className="border-t border-[#e5e5e5]" />
        </div>
      </div>
    </section>
  );
}
