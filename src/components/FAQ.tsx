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

          <dl className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
            {items.map((item) => (
              <div key={item.q} className="py-2">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                    <dt>{item.q}</dt>
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
                  <dd className="pb-5 pr-12 text-base leading-relaxed text-slate-600">
                    {item.a}
                  </dd>
                </details>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
