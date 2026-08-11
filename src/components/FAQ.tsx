/**
 * FAQ list built on <details>/<summary> so every question AND answer is in
 * the static HTML and fully usable with JavaScript disabled.
 * Server component — no client JS at all.
 */
export function FAQ({
  items,
  heading = "Frequently asked questions",
  id = "faq",
}: {
  items: readonly { q: string; a: string }[];
  heading?: string;
  id?: string;
}) {
  return (
    <section className="band" id={id}>
      <div className="section">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow text-brand-700">Questions</p>
          <h2 className="display-2 mt-3 text-ink">{heading}</h2>

          {/*
            Plain <details> rather than <dl>/<dt>/<dd>. A <dl> may only contain
            <dt>, <dd>, <div>, <script> or <template>, so wrapping each pair in
            <details> produced invalid markup that axe flagged. The machine-
            readable Q&A semantics come from the FAQPage JSON-LD, not the list
            element, so nothing is lost — and <h3> gives a correct heading
            hierarchy under the section's <h2>.
          */}
          <div className="mt-10 divide-y divide-line border-t border-line">
            {items.map((item) => (
              <details key={item.q} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading text-lg font-semibold text-ink sm:text-xl">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-colors group-hover:border-brand-300 group-open:border-accent-500 group-open:bg-accent-500 group-open:text-brand-950"
                  >
                    <svg
                      className="h-4 w-4 transition-transform group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="pb-6 pr-12 text-base leading-relaxed text-ink-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
