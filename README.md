# Mike Chara

Personal author website for Mike Chara, covering writing, projects, books, and recipes.

## Development

```bash
npm install
npm run dev
```

## Commands

```bash
npm run lint
npm run build
npm start
```

## Content

- Journal posts: `src/lib/content.ts`
- Recipes: `src/lib/recipes.ts`
- Images: `public/images/`
- SEO metadata: `src/lib/seo.ts`

## Contact form

The contact page uses Google reCAPTCHA and Resend.

Set these variables in a local `.env.local` file:

```text
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_google_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_google_recaptcha_secret_key
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Contact form <noreply@your-verified-domain.com>
```

Messages are delivered to `mikejchara@gmail.com`.
