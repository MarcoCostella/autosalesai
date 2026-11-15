# Activate reCAPTCHA v2 for demo enquiries

## Prepared website behaviour
- The checkbox integration uses the public site key supplied by the owner, with an optional NEXT_PUBLIC_RECAPTCHA_SITE_KEY build-time override. No secret key belongs in website code, NEXT_PUBLIC variables or Git.
- Do not enable Formspree enforcement until the matching website key is deployed.
- With a key, the form requires a token before sending and includes it as g-recaptcha-response. A used token is cleared after every attempted network submission; errors/expiry also clear the token.
- The Google script loads only after the visitor chooses Load security check. The widget uses the compact layout for mobile. Script failure offers an email alternative and never silently bypasses verification.
- Formspree performs the authoritative server-side validation. Client-side checks are bypassable on their own.

## Owner setup
1. Register a reCAPTCHA v2 checkbox key for autosalesai.co.uk. Review/accept Google's registration terms yourself. Do not register v3, invisible v2 or an Enterprise-only assessment integration for this implementation.
2. The supplied public SITE KEY is configured in the form. Deploy this change before enabling enforcement. An optional NEXT_PUBLIC_RECAPTCHA_SITE_KEY override must also be public; register any preview hostnames before testing there.
3. In Formspree form mreveovp, CAPTCHA settings, choose Custom reCAPTCHA and enter the matching SECRET KEY directly there. Do not send the secret in chat. Keep enforcement off until the website key is live; enabling it before that can reject genuine enquiries.
4. After the keyed build is live and the checkbox is visible, enable/save the matching custom CAPTCHA in Formspree. Check the selected solution is custom v2, not Formspree-hosted/default or v3.
5. The owner completes any actual CAPTCHA challenge. Send one clearly marked test enquiry with permission, verify both the success page and delivery in Formspree/email. Check rejection without a valid token using mocks or an authorised test endpoint rather than flooding the live form.
6. Confirm expiry/retry, mobile appearance and error handling. No production CAPTCHA enforcement or Google key has been configured by this code change alone.

## Rollback
If genuine submissions fail, temporarily disable CAPTCHA enforcement in Formspree first, then remove the public site key and redeploy if needed. Keep Formshield and the honeypot enabled. Never expose the secret key to fix a front-end issue.
