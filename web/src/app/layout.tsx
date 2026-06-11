import type { Metadata } from "next";
import { fontVariables } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "INOVAQO — AI product engineering",
  description:
    "INOVAQO helps founders and businesses turn AI-powered concepts into reliable, cloud-native products — built with clarity, speed, and engineering discipline.",
  icons: {
    icon: "/logo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
