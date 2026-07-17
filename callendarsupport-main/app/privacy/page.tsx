import type { Metadata } from "next";
import { privacyDocument } from "@/content/privacy";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for HRT Calendar — data we collect, how we use it, retention, security, and GDPR rights.",
};

export default function PrivacyPage() {
  return <LegalPage doc={privacyDocument} navPath="/privacy" />;
}
