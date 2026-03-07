# CharityCode — Claude Instructions

## Project Overview
CharityCode is a Next.js 15 + Firebase full-stack social platform connecting developers with nonprofits.
Live site: https://charitycoder.com/

## Tech Stack
- Next.js 15 (App Router, standalone output for Azure)
- React 18 + TypeScript
- Firebase (Firestore + Auth + Admin SDK)
- Bootstrap 5 + Bootstrap Icons + SCSS
- date-fns, use-debounce

## Project Structure
```
app/
  components/
    auth/          # LoginCard, auth-buttons
    nav/           # NavBar, SideNav, SearchBar, MenuButton, Footer
    posts/         # ProjectPost, PostFeed, LikeButton, Submission, SubmissionFeed, SubmitForm
    dashboard/     # CreatePost, PersonalFeed, OldPost
    Avatar.tsx
  [postid]/        # Dynamic post detail page
  dashboard/       # User dashboard page
  explore/         # Browse projects page
  privacy/
  terms/
  layout.tsx
  page.tsx
  globals.css
```

## Commands
- `npm install` — install dependencies
- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint

## Rules

### Git
- Always ask before committing or pushing — never auto-commit or auto-push.

### Firebase
- Keep Firebase logic centralized; do not scatter Firestore/Auth calls throughout UI components.
- Never modify `.env.local` or expose environment variables.
- Be careful around auth flows (login, signup, session handling).

### Code Style
- Prefer editing existing files over creating new ones.
- Do not reformat code that wasn't directly changed.
- Use TypeScript strictly — no `any` unless absolutely necessary.
- Use npm, not yarn or pnpm.

### General
- Keep components focused; avoid mixing data-fetching with presentation when possible.
- Do not add features, refactors, or "improvements" beyond what is explicitly requested.
