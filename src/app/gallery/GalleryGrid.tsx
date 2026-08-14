"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "../../../content/images";
import { galleryCategories, galleryItems } from "../../../content/gallery";
import { CheckIcon, ChevronRightIcon } from "@/components/Icons";

type Filter = "All" | (typeof galleryCategories)[number];

/**
 * Filterable gallery with a lightbox.
 *
 * Both the filter and the lightbox are progressive enhancement. Every image is
 * server-rendered into the initial HTML (this component SSRs with filter =
 * "All"), so with JavaScript disabled the full gallery is present, crawlable,
 * and every figure keeps its caption — only the buttons stop working.
 *
 * The image set and alt text are frozen by the redesign brief: same files,
 * same alts, presentation only.
 */
export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const filters: Filter[] = ["All", ...galleryCategories];
  const visible =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  const close = useCallback(() => {
    setOpenIndex(null);
    lastFocused.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + visible.length) % visible.length,
      ),
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);

    // Stop the page scrolling behind the lightbox.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, step]);

  const open = (i: number, el: HTMLElement) => {
    lastFocused.current = el;
    setOpenIndex(i);
  };

  const current = openIndex === null ? null : visible[openIndex];
  const currentImg = current ? images[current.slot as keyof typeof images] : null;

  return (
    <>
      {/* ---------- category filter ---------- */}
      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filters.map((f) => {
          const active = f === filter;
          const count =
            f === "All"
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === f).length;
          return (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setOpenIndex(null);
              }}
              aria-pressed={active}
              className={`inline-flex min-h-[44px] flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors ${
                active
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-line bg-surface-card text-ink hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              {active && <CheckIcon className="h-4 w-4" />}
              {f}
              <span className={active ? "text-brand-100" : "text-ink-muted"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ---------- grid ---------- */}
      <ul key={filter} className="grid-swap mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, i) => {
          const img = images[item.slot as keyof typeof images];
          if (!img) return null;
          return (
            <li key={item.slot}>
              <figure className="card group h-full overflow-hidden">
                <button
                  type="button"
                  onClick={(e) => open(i, e.currentTarget)}
                  className="block w-full text-left"
                  aria-label={`View larger: ${img.alt}`}
                >
                  <div className="card-media aspect-[4/3]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="card-zoom-img"
                    />
                  </div>
                </button>
                <figcaption className="flex items-start justify-between gap-3 px-4 py-3.5">
                  <span className="text-sm leading-relaxed text-ink-muted">
                    {img.alt}
                  </span>
                  <span className="flex-shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      {/* ---------- lightbox ---------- */}
      {current && currentImg && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentImg.alt}
          className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {visible.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous image"
                className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              >
                <ChevronRightIcon className="h-6 w-6 rotate-180" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next image"
                className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </>
          )}

          <figure
            className="lightbox-figure max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-900">
              <Image
                src={currentImg.src}
                alt={currentImg.alt}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-400">
                {current.category}
              </span>
              <span className="text-sm text-brand-100">{currentImg.alt}</span>
              <span className="text-xs text-brand-300">
                {openIndex! + 1} of {visible.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
