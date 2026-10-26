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

### Contact form configuration

The contact form sends email through Resend from the server route at `src/app/api/contact/route.ts`. No API key is stored in this repository and no local `.env` file is required for deployed environments.

Before testing a Vercel deployment:

1. Verify `doxantro.com` in Resend and make sure `info@doxantro.com` is allowed as a sender.
2. In **Vercel → Project → Settings → Environment Variables**, create these as **Secret** values:

   | Name | Value |
   | --- | --- |
   | `RESEND_API_KEY` | The Resend sending-only API key |
   | `CONTACT_FROM_EMAIL` | `Doxantro Website <info@doxantro.com>` |
   | `CONTACT_TO_EMAIL` | `info@doxantro.com` |

3. Add all three values to **Preview** so collaborators can test `revamped-design`, and to **Production** for the live site.
4. Redeploy after adding or changing a value. Existing deployments do not automatically receive newly added secrets.

The API key is read only in server-side code. Never prefix it with `NEXT_PUBLIC_`.

### Ticha waitlist

The `/ticha` form posts to `/api/ticha/waitlist` and saves email addresses in a dedicated Resend segment. It does not subscribe visitors to Field Notes. Success is returned only after storage and segment assignment succeed. Existing global unsubscribe preferences are preserved.

Configure in local server environment and Vercel before enabling live signups:

- `RESEND_API_KEY`: the existing Resend key, with contacts read/write access. A sending-only key is insufficient. Optional `TICHA_RESEND_API_KEY` overrides this for a separate account/key.
- The Ticha Waitlist segment is `b5fa3d8d-bf1d-49cb-80b1-d27a0be8148a`. Optional `TICHA_WAITLIST_SEGMENT_ID` overrides it for another environment.
- In Resend, create string contact properties `ticha_role` and `ticha_consent_at`. The required role and latest consent timestamp are stored here.

Use the Ticha segment for launch broadcasts and include Resend's unsubscribe link. No confirmation emails are sent automatically. Rate limiting is a lightweight per-instance guard; configure platform-level protection if traffic requires it. Without configuration, signups return an honest unavailable message and are not reported as saved. Test with a controlled address only after configuration; do not submit real visitor details for testing.
