import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import WaitlistForm from "@/components/forms/WaitlistForm"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/about" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Built for the Way Cities Work.</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              NextKey Global Solutions was created by housing professionals to help owners and tenants overcome delays,
              discrimination, and red tape. We offer a clean, fast process for matching landlords with verified
              tenants—especially those with vouchers. We help you lease faster, stay compliant, and avoid headaches.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional Focus</h3>
                <p className="text-gray-600">
                  Built by housing professionals who understand the industry's real challenges.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Verified Matching</h3>
                <p className="text-gray-600">Connect with document-ready, qualified tenants who meet your criteria.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compliance First</h3>
                <p className="text-gray-600">
                  Stay compliant with all housing regulations and fair housing requirements.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Process</h3>
                <p className="text-gray-600">Reduce vacancy time with our streamlined placement coordination.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe that finding quality housing should be straightforward for both landlords and tenants. Our
              platform eliminates the friction in the placement process while ensuring full compliance with housing
              regulations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-700">For Landlords</h3>
                <p className="text-gray-600">
                  Reduce vacancy time, access qualified tenants, and maintain compliance with housing laws.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-700">For Tenants</h3>
                <p className="text-gray-600">
                  Connect with landlords who welcome vouchers and understand the placement process.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-700">For Cities</h3>
                <p className="text-gray-600">
                  Support housing access initiatives and reduce discrimination in the rental market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
              <p className="text-lg text-gray-600">
                Be the first to know about new features and get early access to our services.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the growing network of property owners who trust NextKey for professional placement services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
              <Link href="/landlords">List Your Property</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-purple-700 hover:bg-white hover:text-purple-700"
            >
              <Link href="/contact">Schedule a Call</Link>
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
