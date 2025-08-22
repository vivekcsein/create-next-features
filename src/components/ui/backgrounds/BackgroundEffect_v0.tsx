import clsx from "clsx";
import React from "react";

interface BackgroundEffect_v0Props {
  className?: string;
  children: React.ReactNode;
}

const BackgroundEffect_v0 = ({
  className,
  children,
}: BackgroundEffect_v0Props) => {
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

export default BackgroundEffect_v0;
