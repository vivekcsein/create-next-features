import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = (
  animation: (ctx: gsap.Context) => void
  // dependencies: unknown[] = []
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animation(ctx);
    }, containerRef);

    return () => ctx.revert();
  }, [animation]);

  return containerRef;
};

export { gsap, ScrollTrigger };
