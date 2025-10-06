import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, Clock, Shield, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import Header from "@/components/Header"
import HousingSupportForm from "@/components/forms/HousingSupportForm"

export const metadata: Metadata = {
  title: "Apply for Housing NYC | CityFHEPS Help | Voucher Housing Assistance | Next Key Global Solutions",
  description: "Apply for housing assistance in NYC. Get help with CityFHEPS, Section 8, and other voucher programs. We help families find stable housing with qualified landlords.",
  keywords: "apply for housing NYC, CityFHEPS help, voucher housing assistance, Section 8 NYC, housing support NYC, family housing assistance"
}

export default function FamiliesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/families" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Housing Support for NYC Families</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get help applying for housing assistance in NYC. We connect families with qualified landlords who accept vouchers and provide support throughout the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
              Apply for Housing Support
            </Button>
            <Button variant="outline" size="lg" className="border-purple-700 text-purple-700 hover:bg-purple-50">
              <Phone className="w-4 h-4 mr-2" />
              Call 1-855-698-5397
            </Button>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How We Help Families</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Home className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Housing Search</h3>
                <p className="text-gray-600 text-sm">Find voucher-friendly landlords and available units in NYC</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Application Support</h3>
                <p className="text-gray-600 text-sm">Help with CityFHEPS, Section 8, and other voucher applications</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Quick Processing</h3>
                <p className="text-gray-600 text-sm">Fast-track your housing search with our network of partners</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Compliance Support</h3>
                <p className="text-gray-600 text-sm">Ensure all requirements are met for successful placement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voucher Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Voucher Programs We Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">Section 8</h3>
                <p className="text-gray-600">Federal housing choice voucher program</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">CityFHEPS</h3>
                <p className="text-gray-600">NYC's flexible housing assistance program</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">HASA</h3>
                <p className="text-gray-600">HIV/AIDS Services Administration housing assistance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Housing Support Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <HousingSupportForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Home?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get help with your housing search and voucher applications. We're here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-purple-600">
              <Phone className="w-4 h-4 mr-2" />
              Call 1-855-698-5397
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
              <h4 className="font-semibold mb-4 mt-6">Contact</h4>
              <p className="text-sm text-gray-400 mb-2">support@nextkeyglobal.com</p>
              <p className="text-sm text-gray-400">Hotline: 1-855-698-5397</p>
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
