"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site.config";
import { images } from "../../content/images";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={images.logoSm.src}
            alt={images.logoSm.alt}
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12"
            priority
          />
          <span className="text-lg font-bold text-slate-900 sm:text-xl">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.phone.tel}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            {siteConfig.phone.display}
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Request A Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-slate-700 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
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

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <a
                href={siteConfig.phone.tel}
                className="text-center text-base font-semibold text-brand-600"
              >
                {siteConfig.phone.display}
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg bg-brand-600 px-4 py-3 text-center text-base font-semibold text-white shadow-sm"
              >
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
