import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr. Cristian Cordero | Fellowship en Rinoplastia - Extensor Septal 593",
  description:
    "Aprende las técnicas más avanzadas en rinoplastia con el Dr. Cristian Cordero. Fellowship en Extensor Septal 593 con más de 15 años de experiencia.",
  keywords: "rinoplastia, cirugía nasal, fellowship, Dr. Cristian Cordero, extensor septal",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Dr. Cristian Cordero | Fellowship en Rinoplastia",
    description: "Aprende las técnicas más avanzadas en rinoplastia con el Dr. Cristian Cordero",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${_geist.className} font-sans antialiased`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
