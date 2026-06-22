import type { ReactNode } from "react";

import { ArrowUpRightIcon } from "@/components/home/icons";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "default" | "compact";
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  href = "#contact",
  variant = "primary",
  size = "default",
  className = "",
  onClick,
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-brand-gradient hover:bg-gradient-to-r hover:from-[#fff] hover:to-[#fff] hover:text-[#1191D0] text-white shadow-[0_8px_20px_rgba(17,145,208,0.18)] hover:brightness-105"
      : "bg-white text-brand-sky hover:text-white hover:bg-[#1191D0]";
  const sizeClasses =
    size === "compact"
      ? "px-4 py-2.5 text-[13px] md:text-[13px]"
      : "px-6 py-3 text-[13px] md:text-[20px]";
  const iconClasses = size === "compact" ? "size-4" : "size-4 md:size-[18px]";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-[5px] border border-white font-heading font-medium leading-none transition duration-200 ${classes} ${sizeClasses} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRightIcon className={iconClasses} />
    </a>
  );
}
