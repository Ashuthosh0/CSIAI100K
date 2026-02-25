
import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import {
  Roboto_Condensed,
  Noto_Serif,
  Source_Code_Pro,
} from "next/font/google"

/* Fonts */
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
})

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
})

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "CSI AI100K",
  description:
    "World's Largest AI Readiness Program - Equipping 100,000+ learners with practical AI literacy, hands-on demos, and verifiable CSI credentials.",
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${robotoCondensed.variable}
          ${notoSerif.variable}
          ${sourceCodePro.variable}
          font-sans antialiased
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
