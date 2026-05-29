# madebyquent.in - portfolio

Personal portfolio of **Quentin Ratinaud**, a creative full-stack developer based in Rennes, FR. A single codebase that serves two audience-specific variants of the site from the same content.

🔗 **Live:** [madebyquent.in](https://madebyquent.in)

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, React Server Components, Server Actions)
- **[React 19](https://react.dev)** with the React Compiler enabled
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **TypeScript** (strict mode)
- **[Cloudflare Workers](https://workers.cloudflare.com)** via **[OpenNext](https://opennext.js.org/cloudflare)**
- **[Resend](https://resend.com)** for the contact form

## Features

- **Audience-aware variants** - the same routes render a `web` variant (e.g. `web.madebyquent.in`) or the default variant, resolved server-side from the host or an `x-site-target` header. See [`src/lib/site-target.ts`](src/lib/site-target.ts).
- **Dynamic case studies** - server-rendered project pages under [`src/app/work/[slug]`](src/app/work), driven by typed data in [`src/lib/data`](src/lib/data).
- **Contact form** - progressive-enhancement form backed by a Server Action that sends email through Resend, with honeypot spam protection. See [`src/app/contact/actions.ts`](src/app/contact/actions.ts).
- **SEO** - dynamic metadata, generated OpenGraph image, favicon, `robots.txt`, and `sitemap.xml`.

## Getting started

Requires **Node.js 18.18+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

The contact form needs a Resend API key. For local development, copy the example file and fill it in:

```bash
cp .dev.vars.example .dev.vars
# then set RESEND_API_KEY=... in .dev.vars
```

`.dev.vars` is gitignored. The `from` address must use a domain verified in your Resend account.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (webpack) |
| `npm run lint` | Lint with ESLint (flat config) |
| `npm run typecheck` | Type-check with `tsc --noEmit` |
| `npm run preview` | Build and preview the Cloudflare Worker locally |
| `npm run deploy` | Build and deploy to Cloudflare Workers |
| `npm run cf-typegen` | Regenerate Cloudflare env types |

## Deployment

Deployed to Cloudflare Workers with OpenNext. Set the production secret once:

```bash
npx wrangler secret put RESEND_API_KEY
npm run deploy
```

## License

[MIT](LICENSE) © Quentin Ratinaud
