# Search visibility handover

Website work prepared locally; publishing and account verification are separate steps.

## Google Search Console
1. Open https://search.google.com/search-console and sign in with the business Google account.
2. Check whether autosalesai.co.uk is already listed. If it is, use that existing property.
3. Otherwise add a Domain property for autosalesai.co.uk. Google supplies a DNS TXT record. Add that exact record at the provider that actually manages the domain DNS (do not assume the email provider manages DNS).
4. Verify ownership. Keep the DNS record in place.
5. After this release is deployed, submit https://www.autosalesai.co.uk/sitemap.xml in Sitemaps.
6. Inspect the homepage, AI Sales Assistant, Market Intelligence, case study and guides. Request indexing of the main new pages where appropriate.
7. Review Page indexing, Performance and Core Web Vitals. Noindex on sample product screens and legal pages is intentional.

Alternative: a URL-prefix property for https://www.autosalesai.co.uk/ can use an HTML verification code. The site supports GOOGLE_SITE_VERIFICATION as a deployment environment variable. Set only the token from the supplied verification tag, then rebuild/redeploy. No code has been invented or configured.

## Bing Webmaster Tools
1. Open https://www.bing.com/webmasters and check for an existing property.
2. Import the verified Search Console property or follow Bing's ownership verification instructions.
3. Submit the same sitemap after deployment.
4. HTML verification is supported through BING_SITE_VERIFICATION (the token from msvalidate.01), followed by a rebuild/deployment.
5. IndexNow can be added after the verified property is available; it is not configured or submitted in this release.

## Content and measurement
- New guides cover maximum auction bids, preparation costs and after-hours enquiries.
- All examples use declared planning assumptions. No traffic volumes, customer performance results or search positions have been invented.
- Company and article structured data are present; product previews are excluded from indexing using noindex, not blocked from crawling.
- Sitemap includes canonical marketing pages and all three guides, excluding noindex pages.
- No new analytics cookies or tracking services have been installed. Use Search Console/Bing reports first; plan consent and privacy changes if adding analytics later.
- Track relevant non-brand search impressions/clicks and qualified demo enquiries. Record a baseline after verification and review monthly.
- Future case-study results require customer-approved evidence; seek relevant editorial mentions and partner links rather than buying links.

References:
https://developers.google.com/search/docs/fundamentals/seo-starter-guide
https://developers.google.com/search/docs/crawling-indexing/block-indexing
https://www.bing.com/webmasters/help/url-submission-62f2860b
