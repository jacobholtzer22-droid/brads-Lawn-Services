import Image from "next/image";
import { getImage } from "../../content/images";
import { beforeAfterPairs } from "../../content/gallery";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/Icons";

/**
 * Before / after pairs, side by side.
 *
 * Server component — no JS, no slider. A drag-slider looks clever but hides
 * half the evidence until the visitor discovers it; showing both frames at
 * once means the proof lands even on a fast scroll, and it degrades to two
 * stacked photos on mobile with no interaction to learn.
 *
 * Pairs come from content/gallery.ts, which is generated from the photo
 * manifest, so adding a pair there makes it appear here automatically.
 */
export function BeforeAfter({
  limit,
  heading = "Before and after",
  eyebrow = "The difference",
  intro = "Same property, same day. These are real jobs around Battle Creek.",
  filterLabel,
}: {
  limit?: number;
  heading?: string;
  eyebrow?: string;
  intro?: string;
  /** Restrict to one category, e.g. "Leaf Cleanup". */
  filterLabel?: string;
}) {
  const pairs = (
    filterLabel
      ? beforeAfterPairs.filter((p) => p.label === filterLabel)
      : beforeAfterPairs
  ).slice(0, limit ?? beforeAfterPairs.length);

  if (!pairs.length) return null;

  return (
    <section className="band bg-surface-tint">
      <div className="section">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brand-700">{eyebrow}</p>
          <h2 className="display-2 mt-3 text-ink">{heading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">{intro}</p>
        </Reveal>

        {/*
          One pair per row reads strongest, but a long run of them buries
          whatever follows — 12 pairs measured just under 10,000px on the
          gallery page. Past four, drop to two-up on large screens.
        */}
        <ul
          className={
            pairs.length > 4
              ? "mt-12 grid gap-6 lg:grid-cols-2"
              : "mt-12 space-y-8"
          }
        >
          {pairs.map((pair, i) => {
            const before = getImage(pair.before);
            const after = getImage(pair.after);
            if (!before || !after) return null;

            return (
              <Reveal as="li" key={pair.after} delay={(i % 2) * 70}>
                <div className="card overflow-hidden p-4 sm:p-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { img: before, tag: "Before", tone: "bg-ink/80" },
                      { img: after, tag: "After", tone: "bg-brand-600" },
                    ].map(({ img, tag, tone }) => (
                      <figure key={tag} className="relative">
                        <div className="overflow-hidden rounded-xl bg-brand-50">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.w}
                            height={img.h}
                            loading="lazy"
                            quality={62}
                            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <figcaption
                          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${tone}`}
                        >
                          {tag}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 px-1 text-sm text-ink-muted">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                      {pair.label}
                    </span>
                    {after.alt}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        {limit && limit < beforeAfterPairs.length && (
          <Reveal className="mt-10">
            <a href="/gallery" className="btn-secondary">
              See the full gallery
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
