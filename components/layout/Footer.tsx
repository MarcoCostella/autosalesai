import Link from "next/link";
import { legalNavigation, navigation } from "@/lib/navigation";
import Button from "@/components/ui/Button";
import BrandName from "@/components/ui/BrandName";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[1100px] px-6 py-16 lg:px-8">
        <div className="mb-12 border border-brand-gold/20 bg-brand-charcoal p-8 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold">
              Ready to see <BrandName /> in action?
            </h2>

            <p className="mt-3 text-brand-muted">
              Book a personalised demonstration for your dealership.
            </p>
          </div>

          <Button href="/book-demo" className="mt-6 md:mt-0">
            Book A Demo
          </Button>
        </div>

        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-heading text-3xl font-bold">
              <BrandName />
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-brand-muted">
              AI Sales Assistant and Market Intelligence platform for
              independent automotive retailers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Site
            </h3>

            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-muted transition hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              {legalNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-muted transition hover:text-brand-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
            © {new Date().getFullYear()} <BrandName />. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}