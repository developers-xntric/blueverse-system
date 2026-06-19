import type { ReactNode } from "react";

import { ArrowUpRightIcon } from "@/components/home/icons";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  href = "#contact",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-brand-gradient text-white shadow-[0_8px_20px_rgba(17,145,208,0.18)] hover:brightness-105"
      : "bg-white text-brand-sky hover:bg-brand-ice";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[5px] border border-white px-6 py-3 font-heading text-[17px] font-medium leading-none transition duration-200 md:text-[20px] ${classes} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRightIcon className="size-4 md:size-[18px]" />
    </a>
  );
}
