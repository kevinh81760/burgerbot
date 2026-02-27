"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  className?: string;
};

export function VideoEmbed({ src, title, className = "" }: Props) {
  const [active, setActive] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    window.dispatchEvent(
      new WheelEvent("wheel", {
        deltaY: e.deltaY,
        deltaX: e.deltaX,
        deltaMode: e.deltaMode,
        bubbles: true,
        cancelable: true,
      })
    );
  };

  return (
    <div className={`relative ${className}`}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
      {/* Overlay: intercepts wheel events to keep Lenis smooth scroll working.
          Disappears on click so the video is fully interactive, comes back on mouse leave. */}
      {!active && (
        <div
          ref={overlayRef}
          className="absolute inset-0 cursor-pointer"
          onWheel={handleWheel}
          onClick={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        />
      )}
    </div>
  );
}
