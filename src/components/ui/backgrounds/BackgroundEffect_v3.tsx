//import css
import "@/styles/components/gradient.css";
import { cn } from "@/libs/utils/utils-shadcn";

interface BackgroundEffect_v3Props {
  className?: string;
  children: React.ReactNode;
}
const BackgroundEffect_v3 = ({
  children,
  className,
}: BackgroundEffect_v3Props) => {
  return (
    <div className={cn("bg_awesome min-h-screen", className)}>{children}</div>
  );
};

export default BackgroundEffect_v3;
