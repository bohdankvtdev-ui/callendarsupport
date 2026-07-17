import type { LegalDocument } from "@/lib/legal";

export const termsDocument: LegalDocument = {
  title: "Terms of Service for HRT Calendar",
  meta: "Last updated: April 24, 2026",
  sections: [
    {
      id: "agreement",
      title: "Agreement to terms",
      blocks: [
        {
          type: "p",
          text: "By accessing or using HRT Calendar, you agree to be bound by these Terms. If you do not agree, do not use the Service.",
        },
      ],
    },
    {
      id: "use-of-service",
      title: "Use of Service",
      blocks: [
        {
          type: "p",
          text: "You agree to use the Service only for lawful purposes. You must not:",
        },
        {
          type: "ul",
          items: [
            "Violate any applicable laws or regulations",
            "Transmit harmful, abusive, or illegal content",
            "Attempt unauthorized access to systems or data",
            "Infringe on rights of others",
            "Use automated systems to overload or abuse the Service",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: "All Service content, features, and functionality are owned by HRT Calendar and are protected by applicable intellectual property laws.",
        },
      ],
    },
    {
      id: "user-content",
      title: "User content",
      blocks: [
        {
          type: "p",
          text: "You retain ownership of content you submit. You grant us a license to use it solely to operate and improve the Service.",
        },
      ],
    },
    {
      id: "termination",
      title: "Termination",
      blocks: [
        {
          type: "p",
          text: "We may suspend or terminate access to the Service at any time if you violate these Terms or for operational reasons.",
        },
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "The Service is provided without warranties. We are not liable for indirect or consequential damages, including loss of data or profits.",
        },
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      blocks: [
        {
          type: "p",
          text: 'The Service is provided "as is" without warranties of any kind.',
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing law",
      blocks: [
        {
          type: "p",
          text: "These Terms are governed by applicable laws of the jurisdiction in which the Service operates, including relevant EU consumer protection laws where applicable.",
        },
      ],
    },
    {
      id: "changes-terms",
      title: "Changes to Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms. Continued use of the Service after changes means acceptance of the updated Terms.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: "Email: bohdankvtdev@gmail.com",
        },
      ],
    },
  ],
  footer:
    "This document is for informational purposes only and does not constitute legal advice.",
};
