import type { Metadata } from "next";
import { getAllNews } from "@/sanity/lib/news";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "News | BS Mann Trucking",
  description:
    "Company updates, safety notes, and stories from BS Mann Trucking.",
};

export default async function NewsPage() {
  const articles = await getAllNews();

  return (
    <main className="min-h-screen bg-white text-[#1f2238]">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-pink-700">
          From the road
        </p>
        <h1 className="text-5xl font-light uppercase tracking-tight md:text-7xl">
          News &amp; Updates
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The latest company news, safety notes, and stories from the BS Mann
          Trucking team.
        </p>

        {articles.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsCard key={article._id} article={article} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-xl border border-dashed border-slate-300 px-6 py-16 text-center">
            <h2 className="text-xl font-medium">No news published yet</h2>
            <p className="mt-2 text-slate-600">
              Please check back soon for updates from BS Mann Trucking.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
