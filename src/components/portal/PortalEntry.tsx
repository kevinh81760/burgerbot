"use client";

import Link from "next/link";
import gsap from "gsap";
import { useCallback, useLayoutEffect, useRef } from "react";
import { portalLinks, isExternalHref } from "@/lib/portalLinks";

/** After the intro video: title fades in, then each circle one-by-one (opacity only) */
const portalPostVideoFade = {
  ease: "power2.out" as const,
  titleDuration: 1,
  circleDuration: 0.35,
  /** Pause after title before the first circle */
  gapAfterTitle: 0.15,
} as const;

const circleBase =
  "flex shrink-0 items-center justify-center rounded-full border-2 border-white/70 bg-white/15 text-sm font-semibold text-white transition-[transform,box-shadow,border-color,background-color,color] duration-300";

const sideSize =
  "h-[min(28vw,176px)] w-[min(28vw,176px)] sm:h-44 sm:w-44 md:h-[220px] md:w-[220px]";

const centerSize =
  "h-[min(44vw,280px)] w-[min(44vw,280px)] sm:h-56 sm:w-56 md:h-[280px] md:w-[280px]";

const sideCircleClass = `${circleBase} ${sideSize}`;

const circleInteractive = (sizeClass: string) =>
  `${circleBase} ${sizeClass} cursor-pointer hover:border-white hover:bg-white/30 hover:text-white hover:shadow-lg hover:shadow-black/30 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`;

const circleDisabledClass = `${sideCircleClass} cursor-not-allowed opacity-60`;

const PORTAL_BG_VIDEO_SRC = "/Burger%20Bots%20Animation.mp4";

const sideCircleTextClass =
  "max-w-[92%] text-balance px-1.5 text-center text-[8px] font-semibold uppercase leading-[1.15] tracking-wide text-white sm:px-2 sm:text-[9px] md:text-[10px]";

const centerCircleTextClass =
  "max-w-[88%] text-balance px-3 text-center text-[11px] font-semibold uppercase leading-snug tracking-wide text-white sm:text-xs md:text-sm";

function SideCircle({ href, text }: { href: string | undefined; text: string }) {
  const inner = <span className={sideCircleTextClass}>{text}</span>;

  if (!href) {
    return (
      <span
        className={circleDisabledClass}
        aria-disabled="true"
        aria-label={`${text}. Link not configured.`}
        title="Link not configured"
      >
        {inner}
      </span>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={circleInteractive(sideSize)}
        aria-label={`${text} (opens in new tab)`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={circleInteractive(sideSize)} aria-label={text}>
      {inner}
    </Link>
  );
}

export function PortalEntry() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const circlesRowRef = useRef<HTMLDivElement>(null);
  const postVideoRevealDoneRef = useRef(false);

  useLayoutEffect(() => {
    const h1 = titleRef.current;
    const row = circlesRowRef.current;
    if (h1) gsap.set(h1, { opacity: 0 });
    if (row) gsap.set(row.children, { opacity: 0 });
  }, []);

  const handleVideoEnded = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    v.pause();
    v.currentTime = 0.25;

    if (postVideoRevealDoneRef.current) return;
    postVideoRevealDoneRef.current = true;

    const h1 = titleRef.current;
    const row = circlesRowRef.current;
    if (!h1 || !row || row.children.length === 0) return;

    const tl = gsap.timeline();
    tl.to(h1, {
      opacity: 1,
      duration: portalPostVideoFade.titleDuration,
      ease: portalPostVideoFade.ease,
    });
    tl.to(
      row.children,
      {
        opacity: 1,
        duration: portalPostVideoFade.circleDuration,
        ease: portalPostVideoFade.ease,
        // Next circle starts when the previous fade finishes
        stagger: portalPostVideoFade.circleDuration,
      },
      `+=${portalPostVideoFade.gapAfterTitle}`
    );
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-6 pb-24 pt-12 text-white sm:pt-16 md:pt-20">
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full min-h-full w-full min-w-full object-cover"
        aria-hidden="true"
        autoPlay
        muted
        playsInline
        preload="auto"
        src={PORTAL_BG_VIDEO_SRC}
        onEnded={handleVideoEnded}
      />

      <div className="relative z-10 flex min-h-0 w-full max-w-4xl flex-1 flex-col items-center">
        <h1
          ref={titleRef}
          className="shrink-0 pt-2 text-center text-6xl font-semibold tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:pt-0 sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-inter-tight), Inter, sans-serif" }}
        >
          Burgerbots
        </h1>

        <div
          ref={circlesRowRef}
          className="flex min-h-0 w-full flex-1 flex-row items-center justify-center gap-5 py-6 sm:gap-8 md:gap-12 lg:gap-16"
        >
          <SideCircle
            href={portalLinks.left}
            text="Interested in investing in the future of food"
          />

          <Link
            href={portalLinks.center}
            className={`${circleInteractive(centerSize)} border-white/90 bg-white/20 hover:bg-white/35`}
            aria-label="Want to see a BurgerBot in action?"
          >
            <span className={centerCircleTextClass}>Want to see a BurgerBot in action?</span>
          </Link>

          <SideCircle href={portalLinks.right} text="Want BurgerBots in your restaurant?" />
        </div>
      </div>
    </main>
  );
}
