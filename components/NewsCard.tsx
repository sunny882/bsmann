import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/sanity/lib/news";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/news/${article.slug}`} className="block">
        {article.coverImage?.url ? (
          <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
            <Image
              src={article.coverImage.url}
              alt={article.coverImage.alt || ""}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="flex aspect-16/10 items-center justify-center bg-[#1f2238] text-sm uppercase tracking-[0.2em] text-white/70">
            BS Mann Trucking
          </div>
        )}
        <div className="p-6">
          <time
            dateTime={article.publishedAt}
            className="text-sm text-slate-500"
          >
            {formatDate(article.publishedAt)}
          </time>
          <h3 className="mt-3 text-xl font-medium leading-snug text-[#1f2238] group-hover:text-pink-700">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
            {article.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-medium text-pink-700">
            Read article <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
