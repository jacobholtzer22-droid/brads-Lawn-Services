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
    <section className="py-20 sm:py-24" id={id}>
      <div className="section">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {heading}
          </h2>

          {/*
            Plain <details> rather than <dl>/<dt>/<dd>. A <dl> may only contain
            <dt>, <dd>, <div>, <script> or <template>, so wrapping each pair in
            <details> produced invalid markup that axe flagged. The machine-
            readable Q&A semantics come from the FAQPage JSON-LD, not the list
            element, so nothing is lost — and <h3> gives a correct heading
            hierarchy under the section's <h2>.
          */}
          <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
            {items.map((item) => (
              <details key={item.q} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors group-open:border-brand-600 group-open:bg-brand-600 group-open:text-white"
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
                <p className="pb-5 pr-12 text-base leading-relaxed text-slate-600">
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
