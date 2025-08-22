import clsx from "clsx";
import React from "react";

interface BackgroundEffect_v2Props {
  className?: string;
  children: React.ReactNode;
}

const BackgroundEffect_v2 = ({
  children,
  className,
}: BackgroundEffect_v2Props) => {
  return <div className={clsx("", className)}>{children}</div>;
};

export default BackgroundEffect_v2;
