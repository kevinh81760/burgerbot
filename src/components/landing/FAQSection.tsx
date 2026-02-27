"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

const faqs = [
  {
    question: "What exactly does BurgerBot do?",
    answer:
      "BurgerBot is a fully autonomous kitchen robot that assembles burgers from scratch — toasting buns, dispensing sauces, stacking ingredients, and plating orders with sub-millimeter precision. It handles the repetitive, high-volume work so your team can focus on hospitality.",
  },
  {
    question: "Do I need to redesign my kitchen to install it?",
    answer:
      "No. BurgerBot is built to fit into your existing kitchen footprint without structural changes. There are no conveyor retrofits, no floor plan redraws, and no construction downtime. Installation typically completes in under a day.",
  },
  {
    question: "How does BurgerBot learn new menu items?",
    answer:
      "Show it a few times. BurgerBot uses an AI model that learns new assemblies from a handful of live demonstrations — no code, no reprogramming, no specialist required. Once trained, it replicates the assembly consistently on every order.",
  },
  {
    question: "How fast can it actually work?",
    answer:
      "A single BurgerBot unit can handle up to 300 covers per hour. Multiple units share a unified order queue and balance load automatically, so throughput scales linearly as your volume grows.",
  },
  {
    question: "What happens if the robot makes a mistake?",
    answer:
      "BurgerBot's onboard vision system monitors every step of the assembly process in real time. If a deviation is detected — wrong portion weight, misaligned ingredient, missed step — it flags the order and alerts your team before it reaches the pass.",
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
