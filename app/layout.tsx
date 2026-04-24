import type { Metadata } from "next";
import { interTight, spaceGrotesk } from "@/fonts";
import "./globals.css";
import { GsapSmoothScrollProvider } from "@/components/layout/GsapSmoothScrollProvider";

export const metadata: Metadata = {
  title: "BURGERBOTS",
  description: "Industry robots. Simply deployed. Ready to work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${spaceGrotesk.variable} font-sans antialiased`} suppressHydrationWarning>
        <GsapSmoothScrollProvider>{children}</GsapSmoothScrollProvider>
      </body>
    </html>
  );
}
