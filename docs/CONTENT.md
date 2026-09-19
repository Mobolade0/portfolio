# Content maintenance

The current master Google Doc was read on 19 September 2026; the provider reported modification at 2026-09-19T13:05:38.133Z. See `content/source.ts` for provenance. This is a curated import, not a complete copy or automatic sync.

## Adding a project
1. Read the current source and confirm dates, role, decisions and outcomes.
2. Add a unique lowercase slug in `content/projects.ts`, conforming to `Project` in `content/types.ts`.
3. Separate personal contributions from team outcomes; retain evidence limitations.
4. Add only supplied and verified media with descriptive alt text. Empty media arrays render no placeholder or broken asset.
5. Check `/projects`, `/projects/<slug>` and the homepage. Records feed all three automatically.
6. Run type checking, lint and production build. Check unknown slugs return 404.

Four leading physical projects and the IBM internship are imported in this foundation. Remaining candidates: inverted pendulum, assistive exoskeleton, wind sensor and ingredient detection. Other employment and leadership entries remain to be curated. Final homepage selection, detailed report evidence, project media and cinematic design are unfinished.

Do not silently strengthen source claims. The Tree Climbing Robot remains a partial success. IBM's internship toolkit is separate from the DR-Hex university project. Source metadata is for maintainers, not visitor-facing copy.
