"use client";

import { useEffect, useRef } from "react";

const LottieWrapper = ({
  loop,
  autoplay,
  height,
  width,
}: {
  loop: boolean;
  autoplay: boolean;
  height: number;
  width: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    import("lottie-web").then((lottie) => {
      if (!containerRef.current) return;
      if (animRef.current) {
        animRef.current.destroy();
      }
      animRef.current = lottie.default.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        path: "/confetti.json",
      });
    });

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [loop, autoplay]);

  return <div ref={containerRef} style={{ height, width }} />;
};

export default LottieWrapper;
