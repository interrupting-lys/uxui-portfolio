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
  title: {
    default: "My Portfolio - Lysa Sorkeo",
    template: "%s | My Portfolio"
  },
  description: "UX/UI Designer Portfolio - Creating intuitive digital experiences",
  keywords: [
    "UX Design",
    "UI Design",
    "Portfolio",
    "Lysa Sorkeo",
    "Web Design",
    "User Experience",
    "User Interface"
  ],
  
  // ... other metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
