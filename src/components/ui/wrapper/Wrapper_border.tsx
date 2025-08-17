import "@/styles/components/wrapper-border.css";

export type borderType =
  | "offset-top-left"
  | "offset-top-right"
  | "offset-bottom-left"
  | "offset-bottom-right";

export type borderSize = "small" | "medium" | "large";

const Wrapper_border = ({
  variant = "offset-bottom-left",
  size = "medium",
  className = "",
  children,
}: {
  variant?: borderType;
  size?: borderSize;
  className?: string;
  children?: React.ReactNode;
}) => {
  const sizeClass = size ? `${variant}-${size}` : "";
  const boxShadow = size ? `boxShadow-${size}` : "";

  return (
    <div className={`${boxShadow}  ${variant} ${sizeClass}  ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper_border;
