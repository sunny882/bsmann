import Link from "next/link";
import { getLatestNews } from "@/sanity/lib/news";
import NewsCard from "@/components/NewsCard";

export default async function LatestNews() {
  const articles = await getLatestNews();

  return (
    <section
      className="bg-slate-50 py-16 md:py-20"
      aria-labelledby="latest-news-heading"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-pink-700">
              From the road
            </p>
            <h2
              id="latest-news-heading"
              className="text-3xl font-light tracking-wide text-[#1f2238] md:text-4xl"
            >
              LATEST NEWS
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Company updates, safety notes, and stories from BS Mann Trucking.
            </p>
          </div>
          <Link
            href="/news"
            className="font-medium text-[#1f2238] underline decoration-pink-700 underline-offset-4 hover:text-pink-700"
          >
            All news <span aria-hidden="true">→</span>
          </Link>
        </div>

        {articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsCard key={article._id} article={article} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <p className="text-lg text-slate-700">
              News and updates are coming soon.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Check back for the latest from BS Mann Trucking.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
