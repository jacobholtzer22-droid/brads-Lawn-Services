"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import { images } from "../../content/images";
import { PhoneIcon, ChevronRightIcon } from "@/components/Icons";

const navLinks = [
  { label: "About", href: "/about-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Contact", href: "/contact" },
];

/**
 * Sticky header that starts transparent over the dark hero and transitions to
 * a translucent blurred white bar once scrolled — the pattern both reference
 * sites use.
 *
 * Every page in this site opens with a dark hero band, so the transparent
 * state is always legible. If a page is ever added without one, give it a dark
 * top band or this header will render white-on-white at scroll position 0.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The menu panel is opaque, so once open the bar must be solid too.
  const solid = scrolled || menuOpen;

  const close = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        solid
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-shrink-0 items-center" onClick={close}>
          {/*
            One logo file, two appearances. Over the dark hero the green
            wordmark is knocked out to white with a CSS filter rather than a
            second asset — the redesign brief freezes the image set, so no new
            files. brightness(0) crushes it to black, invert(1) flips it white.
          */}
          <Image
            src={images.logoSm.src}
            alt={siteConfig.name}
            width={200}
            height={60}
            className={`h-9 w-auto transition-[filter] duration-200 sm:h-11 ${
              solid ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* ---------- desktop nav ---------- */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                solid
                  ? "text-ink hover:bg-brand-50 hover:text-brand-700"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Services
              <ChevronRightIcon
                className={`h-4 w-4 rotate-90 transition-transform ${servicesOpen ? "-rotate-90" : "opacity-70"}`}
              />
            </button>

            <div
              className={`absolute left-0 top-full w-64 pt-2 ${servicesOpen ? "block" : "hidden"}`}
            >
              <ul className="overflow-hidden rounded-2xl border border-line bg-white py-1.5 shadow-card-hover">
                {siteConfig.services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      onClick={close}
                      className="block px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                solid
                  ? "text-ink hover:bg-brand-50 hover:text-brand-700"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
          <a
            href={siteConfig.phone.tel}
            data-tel-cta
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
              solid ? "text-brand-700 hover:text-brand-800" : "text-white hover:text-accent-400"
            }`}
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone.display}
          </a>
          <Link
            href="/request-a-quote"
            className={`inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-semibold transition-all hover:-translate-y-px ${
              solid
                ? "bg-brand-600 text-white hover:bg-brand-700"
                : "bg-accent-500 text-brand-950 hover:bg-accent-400"
            }`}
          >
            Request A Quote
          </Link>
        </div>

        {/* ---------- mobile toggle ---------- */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`-mr-2 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition-colors lg:hidden ${
            solid ? "text-ink hover:bg-brand-50" : "text-white hover:bg-white/10"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ---------- mobile menu ---------- */}
      {menuOpen && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden">
          <div className="space-y-1 px-4 pb-6 pt-3">
            <p className="eyebrow px-3 pb-1 pt-2 text-brand-700">Services</p>
            {siteConfig.services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                onClick={close}
                className="block rounded-xl px-3 py-2.5 text-base font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
              >
                {s.name}
              </Link>
            ))}

            <div className="!mt-4 border-t border-line pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={siteConfig.phone.tel}
              data-tel-cta
              onClick={close}
              className="btn-secondary !mt-4 w-full"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
