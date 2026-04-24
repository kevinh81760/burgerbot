import type { Metadata } from "next";
import { PortalEntry } from "@/components/portal/PortalEntry";

export const metadata: Metadata = {
  title: "Burgerbots",
  description: "Choose a destination.",
};

export default function PortalPage() {
  return <PortalEntry />;
}
