# AutoSalesAI security maintenance

## This release
- Patches the dependency tree and records exact Next.js/React versions in package.json plus the lockfile.
- Adds an enforced resource allowlist, anti-framing policy, MIME-sniffing protection, referrer policy and restricted browser device permissions.
- Production excludes unsafe-eval. Inline scripts and styles remain permitted for the existing static Next.js rendering; CSP is defence in depth, not complete XSS protection. Review this policy before adding analytics, embeds or new third-party resources.
- Adds Formspree's _gotcha honeypot, bounded field sizes, duplicate-submit prevention, a request timeout and a clearer rate-limit response. Client limits can be bypassed; this does not implement server-side rate limiting or bot verification.
- Adds weekly Dependabot update proposals. No automatic merging or production publishing is enabled.

## Account checks to complete with the owner
1. Enable passkeys/2FA for Vercel, GitHub, Google, domain registrar and business email. Save recovery codes privately. Never put credentials or recovery codes in this repository.
2. Review Vercel team members and deployment access. Use Standard Deployment Protection for preview/deployment URLs; keep the public production domain available to customers and search engines.
3. Review Vercel firewall logs and available managed protections. Do not blanket-block crawlers or turn on an all-site challenge without testing SEO and enquiry access.
4. In Formspree, inspect spam filtering and submission restrictions. Add appropriate provider-side origin/domain restrictions if supported and review the provider's CAPTCHA/bot protection and rate limits. Origin restrictions alone do not stop direct scripted abuse. Test any challenge before enabling it for customers. No provider account settings have been changed by this release.
5. In GitHub, verify Dependabot security alerts are enabled; review repository collaborators and protect master against unreviewed or force pushes. Enforce a suitable build/check workflow before changing branch requirements. No remote repository settings have been changed.
6. Review business email SPF/DKIM/DMARC with 123 Reg. Preserve existing DNS and verification records.

## Updates and recovery
- Review dependency alerts promptly. Apply patches, run npm audit, TypeScript and a production build, then smoke-test customer journeys before deployment.
- Run npm ci in a clean checkout when checking the lockfile. Inspect lifecycle scripts when adding new dependencies.
- Keep source in GitHub and pre-edit backups. Source control is not a backup for Formspree submissions, email or future customer databases; follow their retention/export arrangements.
- For a bad release, use Vercel's previous known-good deployment or revert the relevant commit and deploy. Do not delete DNS or email records as a recovery step.
- For suspected compromise: secure the controlling accounts, revoke affected sessions/tokens, preserve logs, check deployments and DNS, rotate exposed secrets and restore a known-good release. Assess any personal-data incident separately.
- This work is code/dependency hardening, not a penetration test, incident investigation or guarantee against compromise. The dealership widget/product is a separate project and needs its own review.

## Verification additions
- security:check uses mocked Formspree responses; it never sends a real enquiry.
- GitHub Actions checks the lockfile install, audit, form handling, TypeScript and production build on pull requests and master pushes. It does not publish or merge changes.
- A scoped minimatch 11.0.8 override patches the development-only TypeScript ESLint parser dependency; remove it when upstream ships a compatible patched dependency. Parser smoke checks passed on Node 24.
