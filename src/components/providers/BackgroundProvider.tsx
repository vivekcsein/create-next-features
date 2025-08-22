import clsx from "clsx";
import React from "react";
import BackgroundEffect_v0 from "../ui/backgrounds/BackgroundEffect_v0";
import BackgroundEffect_v1 from "../ui/backgrounds/BackgroundEffect_v1";
import BackgroundEffect_v3 from "../ui/backgrounds/BackgroundEffect_v3";
import BackgroundEffect_v2 from "../ui/backgrounds/BackgroundEffect_v2";

type BackgroundVariants = "gradient" | "image" | "video" | "awesome";

interface BackgroundProps {
  className?: string;
  children: React.ReactNode;
  variants: BackgroundVariants;
}
const BackgroundProvider = ({
  children,
  variants,
  className,
}: BackgroundProps) => {
  switch (variants) {
    case "gradient":
      return <BackgroundEffect_v0>{children}</BackgroundEffect_v0>;

    case "image":
      return (
        <BackgroundEffect_v1 className={className}>
          {children}
        </BackgroundEffect_v1>
      );

    case "video":
      return (
        <BackgroundEffect_v2 className={className}>
          {children}
        </BackgroundEffect_v2>
      );

    case "awesome":
      return (
        <BackgroundEffect_v3 className={className}>
          {children}
        </BackgroundEffect_v3>
      );

    default:
      return <div className={clsx("", className)}>{children}</div>;
  }
};

export default BackgroundProvider;
