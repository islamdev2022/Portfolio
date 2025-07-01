import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Birouk Med Islam | Web Developer & Software Engineer",
    template: "%s | Birouk Med Islam",
  },
  description:
    "Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my portfolio showcasing innovative web applications, mobile apps, and software solutions. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Birouk Med Islam",
    "Birouk Islam",
    "Birouk Mohammed Islam",
    "Web Developer",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
    "Software Development",
    "Freelancer",
    "Algeria Developer",
    "Remote Developer",
  ],
  authors: [{ name: "Birouk Mohammed Islam" }],
  creator: "Birouk Mohammed Islam",
  publisher: "Birouk Mohammed Islam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://islambirouk.space"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Birouk Med Islam | Web Developer & Software Engineer",
    description:
      "Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my portfolio showcasing innovative web applications and software solutions.",
    type: "website",
    url: "https://islambirouk.space",
    siteName: "Birouk Med Islam Portfolio",
    images: [
      // {
      //   url: "/og-image.png", // You should create this image (1200x630px)
      //   width: 1200,
      //   height: 630,
      //   alt: "Birouk Med Islam - Web Developer Portfolio",
      // },
      {
        url: "/Portfolio_Logo-removebg-preview.png",
        width: 800,
        height: 600,
        alt: "Birouk Med Islam Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birouk Med Islam | Web Developer & Software Engineer",
    description:
      "Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my innovative portfolio.",
    images: ["/og-image.png"], // Same image as OpenGraph
    creator: "@your_twitter_handle", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "2oSNY9B2ZY825HLUQZ1S023kyt3bYAhTge6bycEfnvo", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code", // If you use Yandex
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/Portfolio_Logo-removebg-preview.png"
          sizes="any"
        />
        <link
          rel="apple-touch-icon"
          href="/Portfolio_Logo-removebg-preview.png"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Birouk Med Islam",
              alternateName: "Birouk Mohammed Islam",
              url: "https://islambirouk.space",
              image:
                "https://islambirouk.space/Portfolio_Logo-removebg-preview.png",
              sameAs: [
                // Add your social media profiles
                "https://www.linkedin.com/in/birouk-islam/",
                "https://github.com/islamdev2022",
                "https://www.instagram.com/islamo._.birouk/",
              ],
              jobTitle: "Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
              knowsAbout: [
                "Web Development",
                "Software Engineering",
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Web Development",
              ],
              description:
                "Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
            }),
          }}
        />

        {/* Additional structured data for portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Birouk Med Islam Portfolio",
              url: "https://islambirouk.space",
              description:
                "Portfolio website showcasing web development projects and software engineering skills",
              author: {
                "@type": "Person",
                name: "Birouk Med Islam",
              },
              inLanguage: "en-US",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
