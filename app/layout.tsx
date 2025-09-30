import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "Schiessmeister - Digitale Wettkampfauswertung",
  description: "Die smarte Lösung für Schützenvereine und ihre statischen Bewerbe. Ohne digitales Zielsystem!",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <GoogleAnalytics gaId="GTM-T8NZ4674" />
      </body>
    </html>
  )
}
