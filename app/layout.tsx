import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Tattoo Studio | 可愛いのに、ちょっと悪い。",
  description: "ガーリーな甘さに少しだけ危うさを加えた、繊細なファインラインタトゥー。",
  icons: {
    icon: "/assets/decor/logo-monogram.svg",
    shortcut: "/assets/decor/logo-monogram.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
