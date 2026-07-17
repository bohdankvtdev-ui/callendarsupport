import type { Metadata } from "next";
import { termsDocument } from "@/content/terms";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for HRT Calendar — acceptable use, IP, user content, liability, and contact.",
};

export default function TermsPage() {
  return <LegalPage doc={termsDocument} navPath="/terms" />;
}
