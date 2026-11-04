This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## News CMS (Sanity)

News articles are managed in the embedded Sanity Studio at `/studio`. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID` to your Sanity project ID. The dataset defaults to `production`; `NEXT_PUBLIC_SANITY_API_VERSION` can remain at the example value.

If you don't have a Sanity project yet, run `npx sanity@latest init` from this project, create or connect a project, and select `/studio` as the Studio route. Keep the project ID and dataset in `.env.local`. Restart the development server after changing environment variables. The Studio includes a **News article** content type; publish an article with a title, slug, summary, publish date, and body. Published articles appear on the home page and at `/news`.

Copy `.env.example` to `.env.local` to configure the Sanity project before publishing. Without a project ID the site displays an empty news state and won't make Sanity requests.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
