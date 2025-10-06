import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NYC Voucher Housing Placement | Tenant Placement NYC | Next Key Global Solutions",
  description:
    "NYC voucher housing placement and tenant placement services. We help landlords fill units fast with qualified voucher tenants while supporting families with housing assistance.",
  keywords:
    "NYC voucher housing placement, tenant placement NYC, landlord housing support, CityFHEPS, Section 8, housing assistance NYC, voucher tenant placement",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
