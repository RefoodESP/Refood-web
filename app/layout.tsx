import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue } from "next/font/google"
import { ScrollRestoration } from "@/components/scroll-restoration"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://refoodesp.org"),
  title: "ReFood España | Aprovechar para Alimentar",
  description:
    "ReFood España: una red vecinal que combate el desperdicio alimentario redistribuyendo excedentes entre familias del barrio. Un barrio con desperdicio cero.",
  keywords: ["desperdicio alimentario", "voluntariado", "barrio", "comida", "sostenibilidad", "comunidad"],
  openGraph: {
    title: "ReFood España | Aprovechar para Alimentar",
    description: "Una red vecinal que combate el desperdicio alimentario redistribuyendo excedentes entre familias del barrio.",
    type: "website",
    locale: "es_ES",
  },
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
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${bebasNeue.variable} font-sans antialiased`}>
        <ScrollRestoration />
        {children}
      </body>
    </html>
  )
}
