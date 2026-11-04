import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { Metadata } from "next";
import { sanityClient } from "@/sanity/lib/client";
import { getNewsArticle } from "@/sanity/lib/news";

const imageBuilder = createImageUrlBuilder(sanityClient);
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = imageBuilder
        .image(value)
        .width(1200)
        .auto("format")
        .url();
      return (
        <figure className="my-10">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={1200}
            height={800}
            unoptimized
            className="h-auto w-full rounded-xl"
          />
          {value.alt ? (
            <figcaption className="mt-2 text-center text-sm text-slate-500">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={
          value?.href?.startsWith("http") ? "noopener noreferrer" : undefined
        }
        className="text-pink-700 underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
};

type NewsPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle(slug);
  if (!article) return { title: "News article not found | BS Mann Trucking" };

  return {
    title: `${article.title} | BS Mann Trucking`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white text-[#1f2238]">
      <article className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-20">
        <Link
          href="/news"
          className="text-sm font-medium text-pink-700 hover:underline"
        >
          ← Back to news
        </Link>
        <header className="mt-8">
          <time
            dateTime={article.publishedAt}
            className="text-sm text-slate-500"
          >
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(article.publishedAt))}
          </time>
          <h1 className="mt-4 text-4xl font-light leading-tight md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600">
            {article.excerpt}
          </p>
        </header>

        {article.coverImage?.url ? (
          <div className="relative mt-10 aspect-video overflow-hidden rounded-xl bg-slate-100">
            <Image
              src={article.coverImage.url}
              alt={article.coverImage.alt || ""}
              fill
              unoptimized
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        ) : null}

        {article.body?.length ? (
          <div className="prose prose-slate mt-10 max-w-none prose-headings:font-medium prose-a:text-pink-700 prose-blockquote:border-pink-700">
            <PortableText
              value={article.body as never}
              components={portableTextComponents}
            />
          </div>
        ) : null}
      </article>
    </main>
  );
}
