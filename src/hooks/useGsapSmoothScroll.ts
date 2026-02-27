"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";

type ScrollState = {
  y: number;
};

type ScrollOptions = {
  duration?: number;
};

export function useGsapSmoothScroll(enabled: boolean) {
  const scrollStateRef = useRef<ScrollState>({ y: 0 });
  const maxScrollRef = useRef(0);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const updateMaxScroll = () => {
      const doc = document.documentElement;
      maxScrollRef.current = Math.max(
        0,
        doc.scrollHeight - window.innerHeight
      );
    };

    const syncScrollFromWindow = () => {
      scrollStateRef.current.y =
        window.scrollY || window.pageYOffset || scrollStateRef.current.y;
    };

    syncScrollFromWindow();
    updateMaxScroll();

    window.addEventListener("resize", updateMaxScroll);
    window.addEventListener("scroll", syncScrollFromWindow, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", updateMaxScroll);
      window.removeEventListener("scroll", syncScrollFromWindow);
      if (tweenRef.current) {
        tweenRef.current.kill();
        tweenRef.current = null;
      }
    };
  }, [enabled]);

  const scrollTo = useCallback(
    (targetY: number, options?: ScrollOptions) => {
      if (!enabled) {
        if (typeof window !== "undefined") {
          window.scrollTo(0, targetY);
        }
        return;
      }

      if (typeof window === "undefined") return;

      const max = maxScrollRef.current;
      const clamped = Math.max(0, Math.min(targetY, max));

      if (tweenRef.current) {
        tweenRef.current.kill();
      }

      tweenRef.current = gsap.to(scrollStateRef.current, {
        y: clamped,
        duration: options?.duration ?? 0.2,
        ease: "power3.out",
        overwrite: "auto",
        onUpdate: () => {
          window.scrollTo(0, scrollStateRef.current.y);
        },
      });
    },
    [enabled]
  );

  const scrollBy = useCallback(
    (deltaY: number, options?: ScrollOptions) => {
      const currentY = scrollStateRef.current.y;
      scrollTo(currentY + deltaY, options);
    },
    [scrollTo]
  );

  const getMaxScroll = useCallback(() => {
    return maxScrollRef.current;
  }, []);

  return {
    scrollBy,
    scrollTo,
    getMaxScroll,
  };
}

