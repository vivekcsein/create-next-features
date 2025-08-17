"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/libs/hooks/use-gsap";
import Scroll_indicator from "@/components/ui/custom/Scroll_indicator";

const heroTree = "/images/tree.jpg";

const Hero_v1 = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation
      const tl = gsap.timeline();

      tl.from(logoRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
      }).from(
        headlineRef.current,
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Scroll-triggered parallax and split animation
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        animation: gsap
          .timeline()
          .to(headlineRef.current, {
            y: -200,
            scale: 0.8,
            opacity: 0.3,
            duration: 1,
          })
          .to(
            backgroundRef.current,
            {
              scale: 1.2,
              y: 200,
              duration: 1,
            },
            0
          )
          .to(
            logoRef.current,
            {
              scale: 1.5,
              rotation: 360,
              duration: 1,
            },
            0
          ),
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroTree})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div ref={logoRef} className="mb-8">
          <h1 className="text-6xl font-bold text-gradient-bio tracking-wider">
            SparkVerse
          </h1>
          <p className="text-xl text-muted-foreground mt-2">
            Future of Technology
          </p>
        </div>

        <div ref={headlineRef} className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Where <span className="text-gradient-primary">Nature</span>
            <br />
            Meets <span className="text-gradient-bio">Innovation</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pioneering sustainable technology solutions that harmonize with the
            natural world, creating a future where innovation and ecology thrive
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="btn-hero">Explore the Future</button>
            <button className="btn-secondary">Watch Our Story</button>
          </div>
        </div>
      </div>

      <Scroll_indicator />
    </div>
  );
};

export default Hero_v1;
