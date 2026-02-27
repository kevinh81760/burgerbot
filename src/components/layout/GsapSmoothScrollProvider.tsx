"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useGsapSmoothScroll } from "@/hooks/useGsapSmoothScroll";

type GsapSmoothScrollProviderProps = {
  children: ReactNode;
};

export function GsapSmoothScrollProvider({
  children,
}: GsapSmoothScrollProviderProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateFromPreference = () => {
      setEnabled(!mediaQuery.matches);
    };

    updateFromPreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateFromPreference);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(updateFromPreference);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updateFromPreference);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(updateFromPreference);
      }
    };
  }, []);

  const pathname = usePathname();
  const { scrollBy, scrollTo, getMaxScroll } = useGsapSmoothScroll(enabled, pathname);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const isInteractiveElement = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      const tagName = target.tagName;
      const editable = target.isContentEditable;
      if (editable) return true;
      if (
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT" ||
        tagName === "BUTTON" ||
        tagName === "A"
      ) {
        return true;
      }
      const role = target.getAttribute("role");
      if (role === "textbox" || role === "combobox" || role === "button") {
        return true;
      }
      return false;
    };

    const handleWheel = (event: WheelEvent) => {
      if (!enabled) return;
      if (event.ctrlKey || event.metaKey) {
        // Allow zooming with ctrl/cmd + scroll
        return;
      }

      event.preventDefault();
      const speedMultiplier = 4;
      scrollBy(event.deltaY * speedMultiplier);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!enabled) return;
      if (isInteractiveElement(event.target)) return;

      let delta = 0;

      switch (event.key) {
        case "ArrowDown":
          delta = 140;
          break;
        case "ArrowUp":
          delta = -140;
          break;
        case "PageDown":
          delta = window.innerHeight;
          break;
        case "PageUp":
          delta = -window.innerHeight;
          break;
        case " ":
          delta = event.shiftKey ? -window.innerHeight : window.innerHeight;
          break;
        case "Home":
          event.preventDefault();
          scrollTo(0);
          return;
        case "End":
          event.preventDefault();
          scrollTo(getMaxScroll());
          return;
        default:
          return;
      }

      event.preventDefault();
      scrollBy(delta);
    };

    let touchStartY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      if (!enabled) return;
      if (event.touches.length !== 1) return;
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!enabled) return;
      if (event.touches.length !== 1) return;

      const currentY = event.touches[0].clientY;
      const deltaY = touchStartY - currentY;

      if (Math.abs(deltaY) < 2) return;

      event.preventDefault();
      scrollBy(deltaY);
      touchStartY = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [enabled, getMaxScroll, scrollBy, scrollTo]);

  return <>{children}</>;
}

