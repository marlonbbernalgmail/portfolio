# Developer Guide

## Project
This repo is a Next.js (App Router) portfolio/catalog site. Most content is static data in `data/*.ts`, rendered by pages in `app/` and components in `components/`.

## Development Contract (Current)
This is the definition of "done" for code work in this repo.

### 1) Every new code path must have a test
- Any change that adds or modifies runtime behavior must include automated test coverage.
- Documentation/content-only changes are exempt.
- If you believe a test is not feasible, document why in the PR/commit message and get agreement before merging.

### 2) "Finished" means lint + tests are green
Before calling work finished:
1. Run `npm run lint` and ensure it completes without errors.
2. Run `npm test` and ensure it passes.

### 3) Commit after checks pass
- After `lint` and `test` are green, commit your changes.
- Prefer small, focused commits with clear messages.

## Commands
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Tests (CI-style): `npm test`
- Build: `npm run build`

## Testing Conventions
- Prefer colocated tests: `components/Foo.test.tsx`, `data/bar.test.ts`, etc.
- Use user-visible behavior tests for UI (avoid snapshot-heavy tests).

