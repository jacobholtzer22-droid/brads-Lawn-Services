"use client";

import { useState } from "react";
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2">
          <Image
            src={images.logoSm.src}
            alt={images.logoSm.alt}
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12"
            priority
          />
          <span className="text-base font-bold leading-tight text-slate-900 sm:text-lg">
            Brad&rsquo;s Lawn
            <br className="hidden sm:block" /> Services
          </span>
        </Link>

        {/* ---------- desktop nav ---------- */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {/* Services dropdown. Hover on pointer devices, click/focus for
              keyboard — group-hover plus explicit open state. */}
          <div
            className="group relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-700"
            >
              Services
              <ChevronRightIcon
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-90" : "rotate-90 opacity-60"}`}
              />
            </button>

            <div
              className={`absolute left-0 top-full w-64 pt-1 ${servicesOpen ? "block" : "hidden"}`}
            >
              <ul className="overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                {siteConfig.services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/${s.slug}`}
                      onClick={close}
                      className="block px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-700"
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
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
          <a
            href={siteConfig.phone.tel}
            data-tel-cta
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone.display}
          </a>
          <Link
            href="/request-a-quote"
            className="inline-flex min-h-[44px] items-center rounded-lg bg-brand-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Request A Quote
          </Link>
        </div>

        {/* ---------- mobile toggle ---------- */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="-mr-2 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md text-slate-700 lg:hidden"
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

      {/* ---------- mobile menu ---------- */}
      {menuOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 pb-6 pt-3">
            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Services
            </p>
            {siteConfig.services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                onClick={close}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-700"
              >
                {s.name}
              </Link>
            ))}

            <div className="!mt-4 border-t border-slate-200 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={siteConfig.phone.tel}
              data-tel-cta
              onClick={close}
              className="!mt-4 flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-brand-600 text-base font-semibold text-brand-700"
            >
              <PhoneIcon className="h-5 w-5" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
