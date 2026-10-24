# Hack or Treat

Explore a fictional Halloween-day campus schedule and, during the workshop, add a personal saved-events list. The sample events are not an actual campus schedule. Saving an event is a bookmark in your browser—not registration or a seat reservation.

## Choose how to run it

Use either local development or GitHub Codespaces. You only need one path. A template is a starting point you copy into a new repository; it is different from cloning the instructor's repository. The terminal is the app where you type commands.

## Run locally

Use Node.js 22.22.1 (recommended) or 24.15.0+, then enable the pinned pnpm version:

```sh
corepack enable
corepack prepare pnpm@10.34.8 --activate
```

Install Node.js from [nodejs.org](https://nodejs.org/en/download/). Run `pnpm install --frozen-lockfile` on the machine where you will build or run the app. pnpm installs the appropriate native packages for that machine's operating system and CPU architecture.

Use the green **Use this template** button on GitHub to create your own repository, then clone that new repository and run these commands from its folder:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Stop the server with `Ctrl+C` in the terminal where it is running. If port 3000 is already in use, stop the other server or run `pnpm dev -- --port 3001` and open `http://localhost:3001`.

## Run in Codespaces

Create your own repository with **Use this template**, open its **Code → Codespaces** menu, and create a Codespace. Wait for setup to finish, then run:

```sh
pnpm dev
```

Open the forwarded **Hack or Treat** port preview. If the port does not forward, run `pnpm dev -- --hostname 0.0.0.0`. Stop the Codespace when finished from the Codespaces menu. Codespaces requires a GitHub account and is subject to current account allowances and billing rules; retained Codespaces may use storage allowance. See [GitHub Codespaces billing](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces).

Copilot extensions do not grant Copilot access; sign in separately if you have access. Copilot can help but is optional: read the issue, inspect the related components and hook, implement the acceptance criteria, then run the checks below.

## Run checks

| Command | Purpose |
|---|---|
| `pnpm lint` | Check code style and common issues |
| `pnpm typecheck` | Check TypeScript |
| `pnpm test` | Run tests once |
| `pnpm build` | Create a production build |

On a pull request, open its **Checks** tab to see the GitHub Actions results.

## Find your way around

- `src/data/events.ts` — fictional event data
- `src/components/event-card.tsx` — event presentation
- `src/hooks/use-saved-events.ts` — browser-only saved event persistence

The starter shows six event cards. The workshop issue adds save/remove buttons; follow-up exercises add a saved count or category filter. Copy an issue from `hack-or-treat-feature-issues.md` because GitHub does not copy template-repository issues into generated repositories.

Saved IDs stay in browser storage for the current site origin. Local and Codespaces previews are different origins and do not share saved selections. Browser data can be cleared. The app has no cloud sync or account system.

## Troubleshooting

- **Unsupported Node or pnpm:** use Node 22.22.1 (recommended) or 24.15.0+, then run the Corepack commands above.
- **Missing native module (for example, `lightningcss.darwin-arm64.node`):** run `pnpm install --frozen-lockfile` on the affected machine. The lockfile includes platform-specific optional packages, and pnpm selects the package for that machine.
- **Port 3000 is busy:** use the alternate port command shown in the local setup.
- **Dependencies are missing:** run `pnpm install --frozen-lockfile` and read the actual terminal error.
- **Codespaces setup failed:** inspect the setup log and fix the reported command or network issue; do not delete files or reset the repository as a first step.
- **Copilot is unavailable:** continue manually using the issue requirements and existing patterns. Running and editing this app does not require Copilot.
