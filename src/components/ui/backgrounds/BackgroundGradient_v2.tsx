import React from "react";
import { cn } from "@/libs/utils/utils-shadcn";

interface BackgroundGradient_v2Props {
  className?: string;
  children: React.ReactNode;
}
const BackgroundGradient_v2 = ({
  className,
  children,
}: BackgroundGradient_v2Props) => {
  return (
    <div className={cn("bg_awesome min-h-screen", className)}>{children}</div>
  );
};

export default BackgroundGradient_v2;
