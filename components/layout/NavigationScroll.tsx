"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Explicit link navigation starts at the top; anchors and history keep their own scrolling. */
export default function NavigationScroll() {
  const pathname = usePathname();
  const destination = useRef<string | null>(null);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement) || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // A subsequent anchor click must cancel any pending top reset.
      destination.current = null;
      if (url.hash || link.getAttribute("data-scroll") === "preserve") return;
      if (url.pathname === window.location.pathname) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } else {
        destination.current = url.pathname;
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useLayoutEffect(() => {
    if (destination.current !== pathname) return;
    destination.current = null;
    const frame = requestAnimationFrame(() => {
      if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
