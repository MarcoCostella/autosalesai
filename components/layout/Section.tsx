import { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = ""
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}