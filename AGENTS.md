# AGENTS.md

## What this repo is

Documentation-only repo for **MBISE** (Mutiara Bangsa Integrated School Ecosystem) — a school infrastructure project. No application code lives here. `index.html` is a single-page technical proposal (static HTML + Tailwind CDN + vanilla JS).

## Structure

- `index.html` — The technical proposal site. Static HTML, no build step. Uses Tailwind CDN (`cdn.tailwindcss.com`) and Lucide icons via CDN.
- `README.md` / `PROXMOX_MIGRATION_BLUEPRINT.md` — Identical project docs.
- `.github/workflows/pages.yml` — Deploys root to GitHub Pages on push to `main`.

## Deploy

Push to `main` → GitHub Pages auto-deploys the root directory. No build, no artifacts.

## Conventions

- Language: Indonesian (Bahasa Indonesia).
- No framework, no package manager, no toolchain. Edit `index.html` directly.
- JS is inline in `index.html`. Tab switching, modal logic, and budget calculator are all in a single `<script>` block.
- Print styles: `.no-print` hides elements when printing; all tab panes display on print.
