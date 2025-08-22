"use client";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/libs/hooks/use-gsap";
import Scroll_indicator from "@/components/ui/custom/Scroll_indicator";
import { ImageProps } from "@/types/app";

const heroTree = "/images/tree.jpg";

interface BackgroundEffect_v1Props {
  image?: ImageProps;
  className?: string;
  children: React.ReactNode;
}
const BackgroundEffect_v1 = ({
  image,
  className,
  children,
}: BackgroundEffect_v1Props) => {
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
      className={
        (clsx(
          "relative h-screen flex items-center justify-center overflow-hidden"
        ),
        className)
      }
    >
      {/* Background Image */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image?.src || heroTree})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      {children}
      <Scroll_indicator />
      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundEffect_v1;
