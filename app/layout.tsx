import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NextKey Global Solutions - Smarter Placement. Less Vacancy.",
  description:
    "Your trusted housing partner for filling units fast—with verified renters and expert coordination. Professional tenant placement services for landlords and property managers.",
  keywords:
    "tenant placement, housing solutions, landlord services, voucher coordination, property management, NYC rentals",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
