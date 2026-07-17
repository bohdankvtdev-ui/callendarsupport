import type { LegalDocument } from "@/lib/legal";

export const privacyDocument: LegalDocument = {
  title: "Privacy Policy for HRT Calendar",
  meta: "Last updated: April 24, 2026",
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "p",
          text: 'HRT Calendar ("we," "us," or "our") operates this Service. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service. If you do not agree with this Privacy Policy, do not use the Service.',
        },
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      blocks: [
        {
          type: "ul",
          items: [
            "Name",
            "Email address",
            "IP address",
            "Device information",
            "Usage data",
            "Location data",
            "Medication and schedule data",
            "Health log entries",
            "Plan board content",
            "Supplies and notes (health-adjacent calendar data)",
          ],
        },
        {
          type: "p",
          text: "We collect data when you provide it directly, use the Service, or through automated systems.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How we use your information",
      blocks: [
        {
          type: "ul",
          items: [
            "Operate and maintain the Service",
            "Improve and personalize functionality",
            "Analyze usage patterns",
            "Develop new features",
            "Communicate updates and support",
            "Prevent fraud and abuse",
            "Comply with legal obligations",
          ],
        },
      ],
    },
    {
      id: "retention",
      title: "Data retention",
      blocks: [
        {
          type: "p",
          text: "We retain personal data only as long as necessary for operational, legal, and compliance purposes.",
        },
      ],
    },
    {
      id: "security",
      title: "Data security",
      blocks: [
        {
          type: "p",
          text: "No system is fully secure. We use commercially reasonable measures to protect your data but cannot guarantee absolute security.",
        },
      ],
    },
    {
      id: "gdpr",
      title: "GDPR rights (EEA users)",
      blocks: [
        {
          type: "ul",
          items: [
            "Right to access",
            "Right to rectification",
            "Right to erasure",
            "Right to restrict processing",
            "Right to data portability",
            "Right to object",
          ],
        },
        {
          type: "p",
          text: "To exercise rights, contact bohdankvtdev@gmail.com.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes",
      blocks: [
        {
          type: "p",
          text: "We may update this policy. Changes will be posted here with an updated date.",
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
    "This document was generated from provided content and formatted for web use. It does not constitute legal advice.",
};
