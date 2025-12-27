// import type React from "react"
// import type { Metadata } from "next"

// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// import { Inter, Source_Code_Pro, Inter as V0_Font_Inter, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// // Initialize fonts
// const _inter = V0_Font_Inter({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
// const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
// const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// const sourceCodePro = Source_Code_Pro({
//   subsets: ["latin"],
//   variable: "--font-mono",
// })

// export const metadata: Metadata = {
//   title: "CSI AI100K - Make Bharat AI-Ready by 2026",
//   description:
//     "World's Largest AI Readiness Program - Equipping 100,000+ learners with practical AI literacy, hands-on demos, and verifiable CSI credentials.",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${sourceCodePro.variable} font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }

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
