# Legal policy review record — 11 November 2026

## Confirmed by the business
- Operator: AutosalesAI Ltd; company number 17396040.
- Business address: 195 Bramble Road, Benfleet, Essex, SS7 2UU.
- Enquiry retention: 12 months after last meaningful contact, except conversion to a customer record or necessary legal retention.
- Email provider: 123 Reg.

## Verified from the website
- DemoForm submits to Formspree endpoint /f/mreveovp. Name, dealership and email are required; other displayed fields are optional.
- Hosting is Vercel, confirmed by production deployments.
- Guided demonstration uses scripted fictional data and React page state, without a free-text customer-data submission.
- No analytics, advertising scripts, live chat embedding, or application cookie/localStorage/sessionStorage writes identified in the current active application.
- Production homepage checked: no Set-Cookie header, and listed scripts were local Next.js chunks.
- No real demo enquiry was submitted as part of this audit. No email was sent.

## Remaining factual checks before publication
1. Confirm provider-side optional analytics/security configuration in Vercel and whether the Formspree submission path sets device storage or invokes further subprocessors. Update the cookie inventory with actual identifiers, purposes and durations if present. No optional-cookie consent panel has been added because no optional tracker was found; do not add optional tools without a working choice mechanism.
2. Check the applicable Formspree, Vercel and 123 Reg data-processing agreements, subprocessors, actual processing locations and UK transfer mechanism. Record the applicable safeguard, not just the vendor privacy-policy URL. Do not assert a particular adequacy scheme or contract has been adopted without checking it.
3. Implement the agreed 12-month retention process across Formspree archives, notification emails, correspondence, any CRM copies and backup arrangements. This code change does not delete existing records or create an automated retention job. Set and document technical/security log retention periods from the actual plans and settings.
4. Confirm no additional CRM, newsletter, live chat, session replay, analytics, cookie consent service or advertising tools are enabled through account dashboards or outside this repository.
5. Confirm corporate registration details and whether the business address is also the registered office; the pages deliberately label the supplied address as the business address.
6. Review website terms against commercial service agreements. These terms deliberately do not invent subscription pricing, cancellation periods, service guarantees, a paid-service liability cap or a dealership data-processing agreement.
7. The public website previously described the product as GDPR compliant. This policy work does not certify that claim or audit separate dealership deployments.
8. Review legal drafting with an appropriately qualified UK adviser before final publication, particularly the liability clause, processing roles and actual international transfer disclosures.

## Publication handling
- These are substantive local review drafts, not deployed.
- Draft banner remains on legal pages and robots indexing is disabled for these routes during review.
- After factual checks and approval, replace draft-only cookie audit wording with confirmed operational disclosures, remove the draft banner, set the appropriate publication date and remove draft-only noindex directives.
- Backups: backups/legal-policies-20261111-164737.

## Sources reviewed
- ICO privacy information requirements: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/
- ICO storage/access technology exceptions (current guidance includes narrowly defined statistical and appearance exceptions): https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/
- Formspree privacy: https://formspree.io/legal/privacy-policy/
- Vercel privacy: https://vercel.com/legal/privacy-notice
- Vercel DPA: https://vercel.com/legal/dpa
- 123 Reg privacy: https://www.123-reg.co.uk/terms/privacy/
- 123 Reg DPA: https://www.123-reg.co.uk/terms/data-processing-addendum/

## Focused review — 15 November 2026
- Rejected conversion redesign restored from exact pre-edit backups; no redesign was published.
- Corrected punctuation and replaced historical cookie audit prose with the current known inventory.
- reCAPTCHA is deployed and user reported a successful checkbox response. End-to-end delivery and backend enforcement were not confirmed by that observation.
- Verified localStorage keys: autosalesai-preview-watchlist-v1, autosalesai-preview-stages-v1, autosalesai-preview-preferences-v1; no automatic expiry in the shared hook. The previous no-localStorage finding is superseded.
- Owner answered “Not sure” on operation of 12-month deletion in Formspree and email. Retention wording now distinguishes the adopted period from an unverified deletion process. No automated deletion asserted.
- Product-interest field belongs to the rejected redesign; not included in the retained enquiry disclosures.
- The public operational review notice remains. No certification of legal compliance, no invented cookie expiry or transfer safeguard.
- Still needed: account-specific DPAs/transfer arrangements, security-cookie browser inventory, preview persistence purpose/choice assessment, retention procedure and appropriate review of website liability terms.
- Source: ICO storage/access guidance https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/ ; Google reCAPTCHA FAQ https://developers.google.com/recaptcha/docs/faq/
