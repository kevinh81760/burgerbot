import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Burgerbot",
  description: "Burgerbot app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // #region agent log
  void fetch(
    "http://127.0.0.1:7377/ingest/bd73b505-9181-47e4-8cbb-594b91cd9852",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "ee2945",
      },
      body: JSON.stringify({
        sessionId: "ee2945",
        runId: "initial",
        hypothesisId: "H1",
        location: "src/app/layout.tsx:RootLayout",
        message: "RootLayout rendered",
        data: {},
        timestamp: Date.now(),
      }),
    },
  ).catch(() => {});
  // #endregion

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

