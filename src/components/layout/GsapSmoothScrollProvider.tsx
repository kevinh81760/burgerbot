"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type Props = {
  children: ReactNode;
};

export function GsapSmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 1,
      smoothWheel: true,
      // Use Lenis-managed rAF so destroy() cancels the loop. A manual chain that
      // only cancelAnimationFrame(firstId) leaves rAFs running after unmount
      // (e.g. React Strict Mode) and breaks scrolling site-wide.
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
