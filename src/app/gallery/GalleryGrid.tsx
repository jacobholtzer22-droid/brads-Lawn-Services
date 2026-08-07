"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "../../../content/images";
import { galleryCategories, galleryItems } from "../../../content/gallery";

type Filter = "All" | (typeof galleryCategories)[number];

/**
 * Category filter is progressive enhancement. Every image is server-rendered
 * into the initial HTML (this component SSRs with filter = "All"), so with
 * JavaScript disabled the full gallery is present and crawlable — only the
 * filter buttons stop working.
 */
export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...galleryCategories];
  const visible =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  return (
    <>
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
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className={`inline-flex min-h-[44px] flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-lg border px-4 text-sm font-semibold transition-colors ${
                active
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-brand-600 hover:text-brand-700"
              }`}
            >
              {f}
              <span className={active ? "text-brand-100" : "text-slate-400"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => {
          const img = images[item.slot as keyof typeof images];
          if (!img) return null;
          return (
            <li key={item.slot}>
              <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="text-sm text-slate-600">{img.alt}</span>
                  <span className="flex-shrink-0 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                    {item.category}
                  </span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </>
  );
}
