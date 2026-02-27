import type { Metadata } from "next";
import { interTight } from "@/fonts";
import "./globals.css";
import { GsapSmoothScrollProvider } from "@/components/layout/GsapSmoothScrollProvider";
import { NavBar } from "@/components/landing/NavBar";

export const metadata: Metadata = {
  title: "BURGERBOT",
  description: "Industry robots. Simply deployed. Ready to work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} font-sans antialiased`}>
        <GsapSmoothScrollProvider>
          <NavBar />
          {children}
        </GsapSmoothScrollProvider>
      </body>
    </html>
  );
}
