import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button"
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center border px-7 py-4 text-[12px] font-bold uppercase tracking-[0.32em] transition duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-black";

  const styles =
    variant === "primary"
      ? "border-brand-gold bg-transparent text-brand-gold hover:bg-brand-gold hover:text-black"
      : "border-white/20 bg-transparent text-white hover:border-brand-gold hover:text-brand-gold";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
