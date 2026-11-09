"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import Logo from "@/components/Logo";

function getPhoneHref() {
  if (site.phone.startsWith("[")) return "/#contact";
  return `tel:${site.phone.replace(/[^\d+]/g, "")}`;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPathname, setMenuPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const phoneHref = getPhoneHref();
  const menuVisible = menuOpen && menuPathname === pathname;

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 8);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const updateActiveLink = () => {
      const currentHref = `${window.location.pathname}${window.location.hash}`;
      setActiveHref(
        site.navigation.find((item) => item.href === currentHref)?.href ??
          (pathname === "/" && !window.location.hash ? "/" : ""),
      );
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, [pathname]);

  useEffect(() => {
    if (!menuVisible) return;

    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;
      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [menuVisible]);

  const handleNavigation = (href: string) => {
    setActiveHref(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-background/90 backdrop-blur-md transition-colors ${
          scrolled ? "border-gold/60" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <span className="hidden sm:inline-flex" onClick={() => handleNavigation("/")}>
            <Logo variant="full" theme="dark" className="h-12 w-auto" />
          </span>
          <span className="sm:hidden" onClick={() => handleNavigation("/")}>
            <Logo variant="compact" theme="dark" className="h-11 w-11" />
          </span>

          <nav aria-label="Huvudmeny" className="hidden items-center gap-6 lg:flex">
            {site.navigation.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={activeHref === href ? "page" : undefined}
                onClick={() => handleNavigation(href)}
                className={`site-nav-link py-2 text-sm transition-colors hover:text-gold-light ${
                  activeHref === href ? "is-active text-gold-light" : "text-muted"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <Link href="/boka" className="btn-gold">
              Boka tid
            </Link>
            <a href={phoneHref} className="inline-flex items-center gap-2 text-sm text-white hover:text-gold-light">
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              Ring oss
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold-light lg:hidden"
            aria-label={menuVisible ? "Stäng meny" : "Öppna meny"}
            aria-expanded={menuVisible}
            aria-controls="mobile-navigation"
            onClick={() => {
              setMenuPathname(pathname);
              setMenuOpen(!menuVisible);
            }}
          >
            {menuVisible ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      {menuVisible && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          className="fixed inset-0 z-[60] flex flex-col bg-background px-6 pb-10 pt-5 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigationsmeny"
        >
          <div className="flex h-14 items-center justify-between">
            <span onClick={() => handleNavigation("/")}>
              <Logo variant="compact" theme="dark" className="h-11 w-11" />
            </span>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-gold hover:text-gold-light"
              aria-label="Stäng meny"
              onClick={() => {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobilmeny" className="flex flex-1 flex-col justify-center gap-2">
            {site.navigation.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={activeHref === href ? "page" : undefined}
                onClick={() => handleNavigation(href)}
                className={`site-nav-link w-fit py-3 text-3xl ${
                  activeHref === href ? "is-active text-gold-light" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4">
            <Link href="/boka" className="btn-gold w-full" onClick={() => setMenuOpen(false)}>
              Boka tid
            </Link>
            <a href={phoneHref} className="btn-outline w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Ring oss
            </a>
          </div>
        </div>
      )}

      <a
        href={phoneHref}
        className="fixed inset-x-0 bottom-0 z-40 flex min-h-14 items-center justify-center gap-2 border-t border-gold/50 bg-background/95 px-6 pb-[env(safe-area-inset-bottom)] text-base font-semibold text-gold-light backdrop-blur-md lg:hidden"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Ring oss
        {site.phone.startsWith("[") && <span className="font-normal text-muted">{site.phone}</span>}
      </a>
    </>
  );
}
