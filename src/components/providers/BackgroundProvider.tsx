import clsx from "clsx";
import React from "react";
import "@/styles/components/gradient.css";
import BackgroundEffect_v1 from "../ui/backgrounds/BackgroundEffect_v1";
import BackgroundEffect_v2 from "../ui/backgrounds/BackgroundEffect_v2";
import BackgroundEffect_v4 from "../ui/backgrounds/BackgroundEffect_v4";

import BackgroundGradient_v2 from "../ui/backgrounds/BackgroundGradient_v2";
import BackgroundGradient_v3 from "../ui/backgrounds/BackgroundGradient_v3";
import BackgroundGradient_v1 from "../ui/backgrounds/BackgroundGradient_v1";
// import BackgroundGradient_v4 from "../ui/backgrounds/BackgroundGradient_v4";

type BackgroundVariants =
  | "gradient"
  | "image_effect"
  | "video"
  | "fade_Effect"
  | "gradient_v1"
  | "gradient_v2"
  | "gradient_v3";
// | "gradient_v4";

interface BackgroundProps {
  gradient?: string;
  className?: string;
  video?: {
    src: string;
    poster?: string;
    isLazy?: boolean;
    type?: string;
  };
  children: React.ReactNode;
  variants: BackgroundVariants;
}
const BackgroundProvider = ({
  gradient,
  children,
  variants,
  video,
  className,
}: BackgroundProps) => {
  const cssGradient =
    gradient || "linear-gradient(135deg, var(--primary), var(--secondary))";

  switch (variants) {
    case "gradient":
      return (
        <div
          className={clsx("w-full", className)}
          style={{ backgroundImage: cssGradient }}
        >
          {children}
        </div>
      );

    case "gradient_v1":
      return (
        <BackgroundGradient_v1 className={className}>
          {children}
        </BackgroundGradient_v1>
      );

    case "gradient_v2":
      return (
        <BackgroundGradient_v2 className={className}>
          {children}
        </BackgroundGradient_v2>
      );

    case "gradient_v3":
      return (
        <BackgroundGradient_v3 className={className}>
          {children}
        </BackgroundGradient_v3>
      );

    // case "gradient_v4":
    //   return (
    //     <BackgroundGradient_v4 className={className}>
    //       {children}
    //     </BackgroundGradient_v4>
    //   );

    case "image_effect":
      return (
        <BackgroundEffect_v1 className={className}>
          {children}
        </BackgroundEffect_v1>
      );

    case "video":
      return (
        <BackgroundEffect_v2 className={className} video={video}>
          {children}
        </BackgroundEffect_v2>
      );

    case "fade_Effect":
      return (
        <BackgroundEffect_v4 className={className} timer={20}>
          {children}
        </BackgroundEffect_v4>
      );

    default:
      return (
        <div className={clsx("bg-background text-foreground", className)}>
          {children}
        </div>
      );
  }
};

export default BackgroundProvider;
