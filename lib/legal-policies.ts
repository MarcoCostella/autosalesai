export type LegalSection = { id: string; title: string; paragraphs?: string[]; bullets?: string[]; table?: { headings: string[]; rows: string[][] } };
export type LegalPolicy = { title: string; description: string; summary: string[]; sections: LegalSection[] };

export const privacyPolicy: LegalPolicy = {
  title: "Privacy Policy",
  description: "How we use personal information when you visit AutoSalesAI, contact us or request a demonstration.",
  summary: ["AutosalesAI Ltd is responsible for enquiries made through this website.", "Our enquiry form uses Formspree; our website is hosted on Vercel.", "The guided product demonstration uses fictional profiles and sample conversations. Google reCAPTCHA loads only when you request the form security check."],
  sections: [
    { id: "who-we-are", title: "1. Who we are and how to contact us", paragraphs: ["AutoSalesAI is operated by AutosalesAI Ltd, registered in England and Wales under company number 17396040. Our business address is 195 Bramble Road, Benfleet, Essex, SS7 2UU, United Kingdom.", "For personal information handled for our own website enquiries and business communications, AutosalesAI Ltd is the controller. Contact contact@autosalesai.co.uk or write to the address above, marking your message ‘Privacy’. You can also telephone 07929 023079.", "This policy covers our marketing website and communications with us. Where a dealership uses an assistant to handle its customers’ information, the dealership’s privacy notice and the applicable service and data-processing arrangements explain that separate processing. The dealership normally determines the purposes of its customer enquiries; our role depends on the agreed service."] },
    { id: "information", title: "2. Information we collect", bullets: ["Enquiry information: your name, dealership name and email address, plus any phone number, website, stock volume, current chat provider and message you choose to submit.", "Correspondence: information you provide by email, telephone or other direct business communication, including requests, preferences and records needed to follow up.", "Technical information: hosting and form-delivery services may process IP address, browser and device information, request times, pages requested, referrer information and security or diagnostic records to deliver and protect the service.", "Business relationship information: relevant contact, proposal and service correspondence if an enquiry develops into a customer relationship.", "Preview preferences: Market Intelligence sample watchlists, workflow stages and preferences are saved in this browser. The preferences may include a dealership label you enter. Do not put confidential or personal customer information into these previews."], paragraphs: ["We obtain enquiry details directly from you. We may use the dealership website you provide to prepare for your requested demonstration. Please do not send customer lists, passwords, payment-card details, identity documents or sensitive personal information through the marketing enquiry form.", "The form marks name, dealership name and email as required so we can respond meaningfully. Other fields are optional. If you do not provide the required details, you can still contact us directly by email or telephone."] },
    { id: "purposes", title: "3. Why we use information and our lawful bases", table: { headings: ["Purpose", "Information used", "Lawful basis"], rows: [
      ["Respond to an enquiry and arrange or tailor a demonstration", "Contact details, dealership details and message", "Legitimate interests in responding to business enquiries and explaining our services. Where you personally seek to enter a contract with us, necessary steps at your request before a contract."],
      ["Manage a business relationship and provide requested support", "Business correspondence and relevant contact details", "Legitimate interests in managing customer relationships; contract where the individual is a party to that contract."],
      ["Deliver, troubleshoot and protect the website and form", "Technical, request and security information", "Legitimate interests in operating a secure and reliable website and preventing misuse."],
      ["Meet applicable legal duties and handle disputes or rights requests", "Relevant correspondence and records", "Legal obligation where a specific duty applies; legitimate interests in establishing, exercising or defending legal claims."],
    ] }, paragraphs: ["When relying on legitimate interests, we consider whether our use is necessary and proportionate and balance it against your interests and rights. You may object to processing based on legitimate interests.", "Requesting a demonstration does not automatically subscribe you to a newsletter. Any separate marketing activity must have an appropriate lawful basis and comply with applicable electronic-marketing rules. You can ask us to stop marketing at any time; an objection to direct marketing will be respected."] },
    { id: "sharing", title: "4. Who receives information", paragraphs: ["Access is limited to people and service providers who need the information for the relevant purpose. Our marketing website uses the following providers:"], table: { headings: ["Recipient", "Purpose"], rows: [["Google reCAPTCHA (when enabled and loaded)", "Provides the enquiry form security check. Google receives technical/browser information and a verification response; Formspree validates the token. The check is loaded only after you choose Load security check."],["Formspree", "Receives and processes the information you submit through our demo enquiry form, supporting delivery, storage and spam or security handling."],["Vercel", "Hosts and delivers the website and processes technical information needed to operate, secure and troubleshoot it."],["123 Reg email services", "Deliver enquiry notifications and communications with you."],["Professional advisers and competent authorities", "Receive relevant records when reasonably needed for professional advice, legal obligations or legal claims."]] }, bullets: ["We do not sell your personal information.", "We do not publish your enquiry or add your details to a public lead list.", "A business reorganisation may require relevant information to be shared with advisers or a successor, with appropriate confidentiality and legal protections." ] },
    { id: "transfers", title: "5. International processing", paragraphs: ["Our service providers may process information outside the United Kingdom, including in the United States. Formspree, Vercel and Google use international infrastructure or service providers. The locations and safeguards relevant to a particular service depend on its applicable terms and configuration.", "A restricted international transfer requires an applicable UK adequacy arrangement or other lawful transfer mechanism, such as appropriate contractual safeguards, together with any assessment and supplementary measures required by law. You can contact us for information about the safeguards applicable to your information. We are checking the provider-specific agreements and transfer arrangements for our accounts. This notice does not claim that a particular adequacy certification or contractual safeguard has been verified. Contact us for the current position and, where available, a copy of the relevant safeguards."] },
    { id: "retention", title: "6. How long information is kept", paragraphs: ["We keep personal information only for as long as needed for the purpose for which it was collected. Our adopted retention period for demo enquiries is 12 months after the last meaningful contact, unless the enquiry becomes a customer record or retention is necessary for a legal obligation or an actual or reasonably anticipated legal claim.", "If you become a customer, relevant information may become part of the customer record and be kept under the applicable service, accounting and legal requirements. Security records are kept for the operational and security period relevant to the provider and our configuration. Records subject to a genuine legal preservation requirement may be kept longer.", "Retention reviews need to cover Formspree submissions, notification emails, correspondence and any CRM copies, rather than deleting only one copy. The 12-month period applies across enquiry records held in Formspree, email and any other retained copies. Deletion is not automatically performed by this website. We are verifying the account-level deletion arrangements; contact us if you want us to review or erase a particular enquiry."] },
    { id: "security", title: "7. Keeping information secure", paragraphs: ["We use appropriate organisational and technical measures proportionate to the information and risks involved. These include restricting access, using secure service connections and selecting providers suitable for the task. No internet service can guarantee absolute security.", "If you believe information has been sent to the wrong place or there is a security issue affecting our website, email contact@autosalesai.co.uk promptly. Do not include passwords or sensitive documents in the initial report."] },
    { id: "rights", title: "8. Your data protection rights", bullets: ["Ask for access to your personal information and a copy of it.", "Ask us to correct inaccurate information or complete incomplete information.", "Ask for erasure or restriction where the relevant legal conditions are met.", "Object to processing based on legitimate interests, and object to direct marketing at any time.", "Request data portability where the processing is automated and based on consent or a contract with you.", "Withdraw consent at any time where we rely on consent, without affecting the lawfulness of earlier processing."], paragraphs: ["These rights depend on the circumstances and may be subject to lawful exceptions. Contact us using the details above. We may ask for proportionate information to verify identity or clarify a request. Requests are normally free, and we aim to respond within one month; we will explain any lawful extension or other applicable time adjustment."] },
    { id: "complaints", title: "9. Questions and complaints", paragraphs: ["Please contact us first so we can investigate your concern. You also have the right to complain to the Information Commissioner’s Office (ICO), the UK data protection regulator, at ico.org.uk/make-a-complaint/ or on 0303 123 1113. You do not have to complete our complaints process before contacting the ICO."] },
    { id: "ai-demo", title: "10. Demonstrations, AI and automated decisions", paragraphs: ["The guided demonstration on this marketing website runs through scripted sample scenarios. Its customer profiles, vehicle examples, contact details and appointment choices are illustrative. Choosing a reply does not submit an enquiry or create a real booking, and the demonstration does not ask you to enter your personal details.", "We do not use this guided demonstration to make decisions about you that have legal or similarly significant effects. Real dealership deployments may use different integrations and workflows, which must be described under the relevant dealership privacy notice and service arrangements."] },
    { id: "children", title: "11. Children and third-party websites", paragraphs: ["This website is aimed at automotive businesses and is not directed at children. If you think a child has provided personal information through our enquiry form, please contact us.", "Links to dealership websites and other third-party services lead to sites with their own privacy and cookie practices. Review their notices before providing information."] },
    { id: "updates", title: "12. Changes to this policy", paragraphs: ["We review this policy when our services, providers or processing change. The review date appears at the top of this page. Where a change requires additional information or a fresh choice, we will provide it in an appropriate way. Our Cookie Policy explains storage and similar technologies separately."] },
  ],
};

export const termsOfUse: LegalPolicy = {
  title: "Terms of Use", description: "The terms for using our marketing website, exploring demonstrations and making an enquiry.",
  summary: ["This is a business information website; requesting a demo does not purchase a service.","AI outputs and market examples require independent verification. Estimated gross headroom is not net profit.","Paid services, subscriptions and dealership deployments require separate agreed terms."],
  sections: [
    { id: "operator", title: "1. Website operator and scope", paragraphs: ["This website is operated by AutosalesAI Ltd, a company registered in England and Wales under number 17396040. Our business address is 195 Bramble Road, Benfleet, Essex, SS7 2UU, United Kingdom. Contact contact@autosalesai.co.uk or telephone 07929 023079.","These terms apply to your use of autosalesai.co.uk and its marketing pages and demonstrations. Please read them before using the site. If you do not agree, do not use the website. Keep a copy of the terms relevant to your use."] },
    { id: "services", title: "2. Website information and separate service agreements", paragraphs: ["The website describes products and capabilities for independent automotive retailers. Content is for general business information. A product description, demo request or conversation with us does not by itself create a paid subscription, promise a deployment date or enter you into a vehicle transaction.","Any paid service, implementation, subscription, support commitment, service level, pricing, cancellation arrangement and processing of dealership customer data must be agreed separately. Where an applicable signed service agreement conflicts with these website terms on the services it covers, that agreement takes priority.","You must have authority to act for a business when requesting work or entering an agreement on its behalf. Nothing in these terms removes mandatory rights that apply to you under law."] },
    { id: "demonstrations", title: "3. Examples, demonstrations and case studies", paragraphs: ["Interactive demonstrations are illustrative and may use scripted conversations, fictional contact details, sample vehicles, prices, valuations and appointment slots. They do not establish current stock availability, reserve a vehicle, book a real viewing, approve finance or send an enquiry to a dealership unless a feature explicitly says otherwise.","Illustrative assistant screenshots show examples of an experience and may be composited or edited. Case study comments and implementation times relate to the customer and circumstances described. They are not a guarantee of equivalent outcomes, revenue, conversion, profit or implementation timing for another business.","Check any real vehicle specification, advertised price, availability and appointment directly with the relevant dealership. A demonstration is not a replacement for that confirmation."] },
    { id: "ai-information", title: "4. AI outputs, valuations and market intelligence", paragraphs: ["AI-generated responses and data-led estimates may be incomplete, inaccurate, out of date or unsuitable for a particular transaction. Data availability, vehicle condition, provenance, local demand, fees, preparation costs and market changes can affect an assessment.","Scores, buy/review/avoid indicators, target bids, retail estimates, projected profit, ROI and similar outputs are decision-support information, not guarantees or instructions to transact. Independently verify the source data, vehicle condition, total costs and commercial assumptions before making a decision.","In worked examples, estimated gross headroom is assumed retail less purchase price, buyer fee, preparation allowance and transport. VAT or tax, warranty, finance, holding costs, advertising, overheads and unassessed mechanical work are not included unless explicitly shown. Condition grades are budgeting assumptions, not inspection reports. Sample scores are illustrative indicators, not a probability of profit or a verified prediction.","Website content is not personalised financial, investment, credit, tax or legal advice. Finance examples do not constitute a finance offer or an eligibility assessment. Obtain the appropriate advice and confirmations for your circumstances."] },
    { id: "acceptable-use", title: "5. Acceptable use", bullets: ["Use the website lawfully and provide accurate information when making a genuine enquiry.","Do not introduce malware, disrupt services, overload systems, bypass access controls or attempt unauthorised access.","Do not impersonate another person, submit spam, harvest personal data or use the site to send unlawful or abusive content.","Do not systematically extract, republish or commercially exploit protected content or data without permission or another lawful basis.","Do not upload confidential dealership customer information, credentials or sensitive documents to a public enquiry form."], paragraphs: ["We may take proportionate steps to investigate misuse, restrict access, remove unlawful material or cooperate with competent authorities where permitted or required by law."] },
    { id: "content-rights", title: "6. Content and intellectual property", paragraphs: ["Unless stated otherwise, rights in our website design, text, branding, software and original materials belong to us or our licensors. Third-party names, marks, photographs and materials remain the property of their respective owners.","You may view and print reasonable extracts for your own internal business evaluation, retaining copyright and attribution notices. Other reproduction, modification, resale or distribution requires permission unless authorised by law. Mention of a third-party platform does not by itself imply endorsement, partnership or a guaranteed integration."] },
    { id: "submissions", title: "7. Your enquiries and submissions", paragraphs: ["Only provide information you are entitled to share. We may use your enquiry information to respond, prepare a demonstration and discuss the requested services, as described in our Privacy Policy.","We do not acquire ownership of your business materials merely because you send an enquiry. You allow us to handle the submitted material to the extent needed to deal with that enquiry. Do not send commercially sensitive or confidential material unless suitable arrangements have been agreed."] },
    { id: "availability", title: "8. Availability and changes", paragraphs: ["We aim to keep the website useful and available, but do not promise uninterrupted or error-free access. Pages, demonstrations and features may be updated, suspended or withdrawn. Access may also be affected by maintenance, third-party failures or events outside our reasonable control.","We may revise these website terms prospectively. Check the review date when returning to the website. A change to these website terms does not retrospectively vary a separate signed service agreement."] },
    { id: "links", title: "9. Third-party websites and services", paragraphs: ["Links to dealerships, auction platforms, form services and other websites are provided for context or convenience. We do not control those sites and their terms and notices apply when you use them. We do not sell the vehicles shown on third-party sites or act as the seller merely by linking to them.","Linking to our public pages is permitted in a fair and lawful way that does not falsely imply an endorsement or association. Do not frame or present our material misleadingly."] },
    { id: "liability", title: "10. Responsibility and liability", paragraphs: ["Nothing in these terms excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any liability or right that cannot lawfully be excluded or restricted.","Subject to that protection and to the extent permitted by law, the marketing website is provided without warranties as to completeness, accuracy, fitness for a particular purpose or uninterrupted availability. For business users, we exclude liability for loss of profit, revenue, business opportunities, anticipated savings or goodwill, and indirect or consequential loss arising from use of or inability to use the marketing website.","This section does not replace the liability arrangements for paid services under a separate agreement, or exclude responsibility where doing so would be unlawful. You remain responsible for your commercial decisions and for independently checking information used in a transaction."] },
    { id: "privacy", title: "11. Privacy and cookies", paragraphs: ["Our Privacy Policy explains how we handle personal information collected through the marketing website. Our Cookie Policy explains device storage and similar technologies. Agreeing to these terms or continuing to browse is not consent to optional cookies or marketing."] },
    { id: "disputes", title: "12. Governing law and questions", paragraphs: ["These website terms are governed by the law of England and Wales. For business users, the courts of England and Wales have exclusive jurisdiction over disputes relating to these terms. If mandatory consumer law applies to you, this clause does not remove protections or court rights you have under that law.","Please raise website concerns or questions with contact@autosalesai.co.uk. If a provision is found unenforceable, the remaining provisions continue to apply to the extent permitted by law. A delay in exercising a right does not by itself waive that right."] },
  ],
};

export const cookiePolicy: LegalPolicy = {
  "title": "Cookie Policy",
  "description": "Cookies, security checks and browser storage used on the AutoSalesAI marketing website and product previews.",
  "summary": [
    "Google reCAPTCHA loads only after you choose Load security check on the enquiry form.",
    "Market Intelligence previews save watchlists, workflow stages and preferences in this browser.",
    "No analytics or advertising tracker was identified in the reviewed application code. Provider-side settings and security-cookie durations still need verification."
  ],
  "sections": [
    {
      "id": "about",
      "title": "1. Who is responsible",
      "paragraphs": [
        "This website is operated by AutosalesAI Ltd, company number 17396040. Our business address is 195 Bramble Road, Benfleet, Essex, SS7 2UU, United Kingdom. Email contact@autosalesai.co.uk with questions about cookies or browser storage. Our Privacy Policy explains how we handle personal information."
      ]
    },
    {
      "id": "technologies",
      "title": "2. What cookies and browser storage do",
      "paragraphs": [
        "Cookies store small amounts of information on your device. Local storage keeps information in your browser between visits and normally has no automatic expiry. Similar storage or access technologies may also be subject to privacy rules.",
        "Temporary page memory is different: the guided Sales Assistant demonstration keeps sample replies and its lead summary in the current page, rather than intentionally saving them to cookies or local storage."
      ]
    },
    {
      "id": "inventory",
      "title": "3. Website storage and security inventory",
      "paragraphs": [
        "This inventory reflects the reviewed application code and the reCAPTCHA integration as at 15 November 2026. It is not a complete browser audit of every provider response. Security technology used by hosting and form providers can depend on their account settings."
      ],
      "table": {
        "headings": [
          "Feature or identifier",
          "Purpose and when used",
          "Duration and controls"
        ],
        "rows": [
          [
            "Google reCAPTCHA v2 / _GRECAPTCHA",
            "Checks for automated enquiry submissions. Google scripts load after you choose Load security check; Formspree receives the verification token with your enquiry.",
            "Google controls the security cookie expiry. We have not independently verified its current duration in a completed browser audit. Inspect it in your browser site-data settings; you can email us instead of loading the check."
          ],
          [
            "autosalesai-preview-watchlist-v1",
            "Local storage for saved sample vehicles in the Market Intelligence preview.",
            "No application-set expiry. Persists until overwritten, removed through applicable preview controls or cleared in browser site-data settings."
          ],
          [
            "autosalesai-preview-stages-v1",
            "Local storage for sample portfolio and workflow stage choices.",
            "No application-set expiry. Clear this website\u2019s local storage in browser site-data settings."
          ],
          [
            "autosalesai-preview-preferences-v1",
            "Local storage for preview preferences, including a dealership label, auction source, target headroom and maximum selling-time preference.",
            "No application-set expiry. Clear this website\u2019s local storage in browser site-data settings."
          ],
          [
            "Guided Sales Assistant demonstration",
            "Temporary state for fictional replies, vehicle choices and a sample lead summary.",
            "Current page memory; no intentional persistent storage by this demonstration."
          ],
          [
            "Vercel hosting and Formspree security",
            "Website delivery, enquiry processing and abuse prevention. Provider configurations may affect storage or access technologies.",
            "Provider-specific identifiers and durations have not been fully verified. Contact us for the current review status."
          ],
          [
            "Analytics and advertising",
            "No analytics, advertising pixel or session-replay integration identified in the reviewed active application code.",
            "No optional tracking preference panel is currently implemented. This code review does not confirm every provider dashboard setting."
          ]
        ]
      }
    },
    {
      "id": "captcha-security",
      "title": "4. Your enquiry security check",
      "paragraphs": [
        "Selecting Load security check loads Google reCAPTCHA. Google processes technical and browser information to assess automated activity. Its documentation identifies _GRECAPTCHA as a security cookie used for risk analysis.",
        "The initial script uses recaptcha.net. This remains a Google service and may contact Google resources. Google\u2019s Privacy Policy and Terms of Service apply. Formspree validates the response; the secret key is not included in website code.",
        "You may contact contact@autosalesai.co.uk without loading the check. Loading reCAPTCHA is a request for this security feature; it is not agreement to marketing or unrelated tracking."
      ]
    },
    {
      "id": "choices",
      "title": "5. Managing your choices",
      "paragraphs": [
        "You can inspect and delete cookies and local storage through your browser\u2019s privacy or site-data settings. Choose autosalesai.co.uk and remove its stored data to clear preview preferences and sample saved vehicles. This may reset the preview experience.",
        "Blocking storage may stop preferences being remembered. Deleting browser data does not delete an enquiry already received by Formspree or an email already delivered; contact us for a personal-information request.",
        "The Market Intelligence preview currently reads and writes its saved state through local storage. It does not offer a separate on-site remember-my-choices switch. We are reviewing whether persistent storage is necessary for each requested feature and whether an additional choice is required."
      ]
    },
    {
      "id": "consent",
      "title": "6. Necessary technology and optional tracking",
      "paragraphs": [
        "UK privacy rules apply to cookies and similar device storage. An exception depends on the purpose and circumstances; describing a feature as functional or secure does not by itself establish that consent is unnecessary.",
        "Where consent is required, storage or access must wait for a valid choice. Browsing the site, requesting a demo or agreeing to website terms is not consent to unrelated tracking. Optional analytics or advertising must not be introduced without the appropriate information and working controls.",
        "Outstanding checks include provider-side security storage, actual cookie lifetimes and the treatment of persistent preview preferences. The operational review notice remains until these points have been resolved."
      ]
    },
    {
      "id": "external",
      "title": "7. External websites and policy updates",
      "paragraphs": [
        "Website screenshots and platform logos do not by themselves load those platforms\u2019 live widgets. External links take you to services with their own privacy and cookie practices. A live assistant on a dealership\u2019s website may use different technologies and is outside this marketing-site inventory.",
        "We update this policy when integrations, storage or purposes change. Contact contact@autosalesai.co.uk with questions, or consult the Information Commissioner\u2019s Office at ico.org.uk for information about your rights."
      ]
    }
  ]
};
