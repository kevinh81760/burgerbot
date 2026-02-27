"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type Props = {
  children: ReactNode;
};

export function GsapSmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 1,         // No interpolation — native-feeling scroll
      smoothWheel: true, // Lenis still manages wheel events and boundaries
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
