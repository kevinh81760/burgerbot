import { NavBar } from "../components/landing/NavBar";
import { Hero } from "../components/landing/Hero";
import { Footer } from "../components/landing/Footer";

export default function Home() {
  // #region agent log
  void fetch(
    "http://127.0.0.1:7377/ingest/bd73b505-9181-47e4-8cbb-594b91cd9852",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "ee2945",
      },
      body: JSON.stringify({
        sessionId: "ee2945",
        runId: "initial",
        hypothesisId: "H1",
        location: "src/app/page.tsx:Home",
        message: "Home page rendered",
        data: {},
        timestamp: Date.now(),
      }),
    },
  ).catch(() => {});
  // #endregion

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}

