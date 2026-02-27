const items = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export function TechStackGrid() {
  return (
    <section className="flex flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Technology</h1>
      <p className="max-w-xl text-sm text-foreground/70">
        A simple, modern stack ready for you to customize and extend.
      </p>
      <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-foreground/10 px-3 py-2 text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

