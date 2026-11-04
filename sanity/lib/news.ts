import { defineQuery } from "next-sanity";
import { isSanityConfigured, sanityClient } from "./client";

export type NewsArticle = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: { url?: string; alt?: string };
  body?: Array<Record<string, unknown>>;
};

const LATEST_NEWS_QUERY =
  defineQuery(`*[_type == "newsArticle" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc)[0...3]{
  _id, title, "slug": slug.current, excerpt, publishedAt,
  coverImage {"url": asset->url, alt}
}`);

const ALL_NEWS_QUERY =
  defineQuery(`*[_type == "newsArticle" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, publishedAt,
  coverImage {"url": asset->url, alt}
}`);

const NEWS_BY_SLUG_QUERY =
  defineQuery(`*[_type == "newsArticle" && slug.current == $slug && publishedAt <= now()][0]{
  _id, title, "slug": slug.current, excerpt, publishedAt,
  coverImage {"url": asset->url, alt}, body
}`);

async function fetchNews<T>(
  query: string,
  params: Record<string, string> = {},
) {
  if (!isSanityConfigured) return null;

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error("Unable to load news from Sanity:", error);
    return null;
  }
}

export async function getLatestNews(): Promise<NewsArticle[]> {
  return (await fetchNews<NewsArticle[]>(LATEST_NEWS_QUERY)) || [];
}

export async function getAllNews(): Promise<NewsArticle[]> {
  return (await fetchNews<NewsArticle[]>(ALL_NEWS_QUERY)) || [];
}

export async function getNewsArticle(
  slug: string,
): Promise<NewsArticle | null> {
  return fetchNews<NewsArticle | null>(NEWS_BY_SLUG_QUERY, { slug });
}
