import clsx from "clsx";
import React from "react";

interface BackgroundGradient_v4Props {
  className?: string;
  children: React.ReactNode;
}
const BackgroundGradient_v4 = ({
  className,
  children,
}: BackgroundGradient_v4Props) => {
  return (
    <div className={clsx("bg_gradient_v4 min-h-screen", className)}>
      <div className="bg_gradient_v4_radial_light"></div>
      {children}
    </div>
  );
};

export default BackgroundGradient_v4;
