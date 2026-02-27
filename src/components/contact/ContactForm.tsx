"use client";

export function ContactForm() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#1a1a2e] mb-4">
        Let&apos;s talk
      </h1>
      <p className="text-center text-text-secondary mb-10 leading-relaxed">
        Tell us about your operations and we&apos;ll get back to you within an
        hour. Or{" "}
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1a1a2e] underline font-medium hover:opacity-70 transition-opacity"
        >
          book a call
        </a>{" "}
        directly.
      </p>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#1a1a2e]">
            Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-full border border-[#d4d4d5] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder:text-[#d4d4d5] outline-none focus:ring-2 focus:ring-[#1a1a2e]/20 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#1a1a2e]">
            Work Email <span className="text-orange-500">*</span>
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            required
            className="w-full border border-[#d4d4d5] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder:text-[#d4d4d5] outline-none focus:ring-2 focus:ring-[#1a1a2e]/20 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#1a1a2e]">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="(optional)"
            className="w-full border border-[#d4d4d5] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder:text-[#d4d4d5] outline-none focus:ring-2 focus:ring-[#1a1a2e]/20 transition"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#1a1a2e]">
            Tell us about your operations
          </label>
          <textarea
            placeholder="What tasks are you looking to automate?"
            rows={5}
            className="w-full border border-[#d4d4d5] rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder:text-[#d4d4d5] outline-none focus:ring-2 focus:ring-[#1a1a2e]/20 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1a1a2e] text-white font-semibold text-sm py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
