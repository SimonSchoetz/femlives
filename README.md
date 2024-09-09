# Femlives

A platform dedicated to women's health

## Setup

- run `npm i`

## Conventions

### Version control workflow

Following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, we prefix our commits with e.g. `feat`, `fix`, ect. Additionally, we tie the ticket id of the task to the name following the pattern `<type>[optional scope]:(<ticket-id>) <description>`. With the current usage of Jira, a commit message could look like this:

```text
feat:(FL-2) set up github
```

The commit messages will be automatically prefixed when the branch naming follows the convention `<type>[optional scope]/(<ticket-id>)-<description>`. Here is an example:

```text
feat/(FL-10)-automatic-commit-msg-prefix
```

---

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
