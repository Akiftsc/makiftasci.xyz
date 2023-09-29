import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from "next/script";
import Header from "@/Components/Header";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Akif's site",
  description: "Akif's website's description",
  authors: [{url: "https://www.makiftasci.xyz", name: "Mehmet Akif Taşçı"}],
  keywords: [
      "Mehmet Akif Taşçı",
      "makiftasci",
      "akif2442",
       "Bülent Akarcalı Mehmet Akif Taşçı ",
      "Mehmet Akif Taşçı Blog",
      "Mehmet Akif Taşçı Kişisel Blog",
        "Mehmet Akif Taşçı Blog Sitesi",
      "Mehmet Akif Taşçı Kimdir?",
        "Mehmet Akif Taşçı iletişim bilgileri",
  ],
  themeColor: "#F4CB5C"


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="tr" className="text-defaultText bg-bodyBG">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="generator" content="Next.js" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:url" content="https://makiftasci.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@akif2442" />
        <meta name="twitter:creator" content="@akif2442" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="16x16" />
        <link
          rel="apple-touch-icon"
          href="@/public/apple-touch-icon.svg"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body className={inter.className}>
        <Header />
            {children}
        <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload" id="google-tag-manager">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
      </body>
    </html>
  )
}
