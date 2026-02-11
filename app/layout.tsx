import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "もえぎ会",
  description: "もえぎ会（神奈川県立神奈川総合産業高等学校 エレクトロニクス部 OB/OG会）の公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-25.5 bg-white text-black`}
      >
        <header className="fixed top-0 left-0 w-full h-25.5 z-10">
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
