import clsx from "clsx";
import React from "react";

interface BackgroundGradient_v1Props {
  className?: string;
  children: React.ReactNode;
}
const BackgroundGradient_v1 = ({
  className,
  children,
}: BackgroundGradient_v1Props) => {
  return (
    <div
      className={clsx(
        "bg-gradient-to-r from-primary to-secondary min-h-screen",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BackgroundGradient_v1;
