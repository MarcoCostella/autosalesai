import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className={`mx-auto max-w-[1200px] px-6 md:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}