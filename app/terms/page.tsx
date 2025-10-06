import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Next Key Global Solutions LLC",
  description: "Terms of service for Next Key Global Solutions LLC - NYC tenant placement and housing access services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/terms" />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600">
                  By accessing and using the services of Next Key Global Solutions LLC, you agree to be bound by these 
                  Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Description</h2>
                <p className="text-gray-600 mb-4">
                  Next Key Global Solutions LLC provides tenant placement and housing access services, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Matching landlords with qualified tenants</li>
                  <li>Coordinating voucher programs and compliance requirements</li>
                  <li>Facilitating housing access for families and individuals</li>
                  <li>Providing support and guidance throughout the placement process</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  Users agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Comply with all applicable housing laws and regulations</li>
                  <li>Respect the rights and dignity of all parties involved</li>
                  <li>Use our services in accordance with Fair Housing laws</li>
                  <li>Maintain confidentiality of sensitive information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                  Next Key Global Solutions LLC acts as a facilitator and coordination service. We do not guarantee 
                  specific outcomes and are not responsible for decisions made by landlords, tenants, or housing authorities. 
                  Our liability is limited to the extent permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance and Regulations</h2>
                <p className="text-gray-600 mb-4">
                  All parties must comply with:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Federal Fair Housing Act</li>
                  <li>State and local housing regulations</li>
                  <li>Source of Income protection laws</li>
                  <li>Voucher program requirements</li>
                  <li>All applicable anti-discrimination laws</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
                <p className="text-gray-600">
                  We strive to provide reliable services but cannot guarantee uninterrupted access. Services may be 
                  temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Continued use of our services after 
                  modifications constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-gray-600 mt-2">
                  Next Key Global Solutions LLC<br />
                  123 Main Street, New York, NY 10001<br />
                  Email: support@nextkeyglobal.com<br />
                  Phone: 1-855-698-5397
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last updated: January 2025
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="Next Key Global Solutions" width={40} height={40} className="w-10 h-10" />
                <div>
                  <h3 className="font-bold text-purple-400">Next Key</h3>
                  <p className="text-sm text-purple-300">Global Solutions™</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">NYC tenant placement and housing access services.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Tenant Matching
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Voucher Coordination
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Document Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <p className="mb-2">© 2025 Next Key Global Solutions. All Rights Reserved.</p>
            <p className="mb-1">
              We comply with all federal, state, and city housing regulations, including Fair Housing and Source of Income laws.
            </p>
            <p className="mb-1">
              We do not discriminate based on source of income, race, gender, age, disability, or family status.
            </p>
            <p className="mb-2">
              Powered in partnership with the Next Key Housing Access Foundation.
            </p>
            <p className="text-xs text-gray-500">
              Next Key Global Solutions LLC – 123 Main Street, New York, NY 10001 – LLC #2025-NY-001
            </p>
            <p className="text-xs text-gray-500">
              Next Key Global Solutions LLC is a private company and not a government agency.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
