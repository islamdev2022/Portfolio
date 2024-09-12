import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { useTranslations } from "next-intl";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Birouk Med Islam | Portfolio",
  description:
    "This is my portfolio website built with Next.js and Tailwind CSS. that showcases my projects and skills.",
    openGraph: {
      title: "Birouk Med Islam | Portfolio",
      description:
        "This is my portfolio website built with Next.js and Tailwind CSS. that showcases my projects and skills.",
      type: "website",
      url: "https://birouk-islam.vercel.app",
     siteName: "Birouk Med Islam | Portfolio",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //  const t = useTranslations("Index");
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/Portfolio_Logo-removebg-preview.png"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
