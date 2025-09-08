import clsx from "clsx";
import React from "react";

interface BackgroundGradient_v3Props {
  className?: string;
  children: React.ReactNode;
}
const BackgroundGradient_v3 = ({
  className,
  children,
}: BackgroundGradient_v3Props) => {
  return (
    <div className={clsx("bg_gradient_v3", className)}>
      <div className="bg_gradient_v3_light-effect"></div>
      {children}
    </div>
  );
};

export default BackgroundGradient_v3;
