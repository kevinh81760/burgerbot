export function Hero() {
  return (
    <section className="flex flex-col items-start gap-4 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">
        this is the landing page
      </h1>
      <p className="max-w-xl text-sm text-foreground/70">
        This starter keeps things minimal. Compose pages from modular components
        in the <code>src/components</code> folder and grow the design as you go.
      </p>
      <div className="mt-4 flex gap-3">
        <button className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background">
          Get Started
        </button>
        <button className="rounded-full border border-foreground/20 px-5 py-2 text-sm">
          View Components
        </button>
      </div>
    </section>
  );
}

