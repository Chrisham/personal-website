# Christof Hammel — Personal Website

Personal website for **Christof Hammel**.

Built as a modern, responsive single-page layout (Hero, About, Projects, Contact) with clean typography and subtle gradients.

## Tech Stack

- **Next.js** (App Router)
- **React** + **TypeScript**
- **Tailwind CSS**
- **next/font** (Google fonts: Inter + JetBrains Mono)

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Customize Content

Main content lives here:

- `src/app/page.tsx`

Things you’ll likely want to edit:

- **Tagline**: replace `I am a ...`
- **Links**: update GitHub / LinkedIn / email
- **Projects**: replace the placeholder `projects` array

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — run ESLint

## Deployment

This project works well on:

- **Vercel** (recommended for Next.js)
- **Netlify**

Typical Vercel settings:

- **Build command**: `npm run build`
- **Output**: handled automatically by Next.js

## License

All rights reserved unless you add a license.

## Additional Hints
