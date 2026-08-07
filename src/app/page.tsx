import Link from "next/link";
import { siteConfig } from "@/lib/site.config";

export default function HomePage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-4 text-xl text-gray-600">{siteConfig.motto}</p>
      <p className="mt-2 text-lg text-gray-500">
        Professional lawn care in {siteConfig.location.city},{" "}
        {siteConfig.location.state} since {siteConfig.sinceYear}.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="rounded-lg bg-brand-green px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-dark"
        >
          Request A Quote
        </Link>
        <a
          href={siteConfig.phone.tel}
          className="rounded-lg border border-brand-green px-6 py-3 text-base font-semibold text-brand-green transition-colors hover:bg-brand-green/5"
        >
          Call {siteConfig.phone.display}
        </a>
      </div>
    </section>
  );
}
