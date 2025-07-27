import { useState, type ReactNode } from "react";

type ShinyButtonProps = {
  label?: string;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
  className?: string;
  children?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  label = "Hover Me",
  bgColor = "bg-blue-600",
  hoverColor = "hover:bg-blue-700",
  textColor = "text-white",
  className = "",
  children,
  ...props
}: ShinyButtonProps) {
  const [shinePosition, setShinePosition] = useState("-75%");

  return (
    <button
      className={`relative overflow-hidden font-semibold py-3 px-6 rounded-lg transition-all capitalize duration-300 ${bgColor} ${hoverColor} ${textColor} ${className}`}
      onMouseEnter={() => setShinePosition("125%")}
      onMouseLeave={() => setShinePosition("-75%")}
      style={{ position: "relative", overflow: "hidden" }}
      {...props}
    >
      <span
        style={{
          position: "absolute",
          top: 0,
          left: shinePosition,
          width: "50%",
          height: "100%",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.2) 100%)",
          transform: "skewX(-20deg)",
          transition: "left 1s ease-in-out",
          pointerEvents: "none",
        }}
      />
      {children || label}
    </button>
  );
}
