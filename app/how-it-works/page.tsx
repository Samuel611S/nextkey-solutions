import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, FileCheck, Handshake, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="NextKey Global Solutions" width={50} height={50} className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-purple-700">NextKey</h1>
              <p className="text-sm text-purple-600">Global Solutions™</p>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-purple-700">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-700">
              About
            </Link>
            <Link href="/landlords" className="text-gray-700 hover:text-purple-700">
              For Landlords
            </Link>
            <Link href="/how-it-works" className="text-purple-700 font-medium">
              How It Works
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-700">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-700">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Placement Shouldn't Be Complicated.</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our streamlined process connects you with qualified tenants quickly and efficiently.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <Card className="relative">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold mb-4">Submit Your Unit</h3>
                  <p className="text-gray-600">
                    Fill out our simple form with your property details, rent amount, and preferences. Takes less than 5
                    minutes.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="relative">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold mb-4">We Match Verified Renters</h3>
                  <p className="text-gray-600">
                    Our team identifies qualified, document-ready tenants from our network who meet your criteria.
                  </p>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="relative">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold mb-4">You Approve → We Support</h3>
                  <p className="text-gray-600">
                    Review tenant profiles and approve matches. We handle document coordination and process support.
                  </p>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="relative">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold mb-4">You Lease. We Stay Connected.</h3>
                  <p className="text-gray-600">
                    Complete the lease with confidence. We remain available for ongoing support and future placements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Voucher Expertise</h3>
                  <p className="text-gray-600">
                    We specialize in voucher placements and understand the unique requirements and timelines involved.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Pre-Verified Tenants</h3>
                  <p className="text-gray-600">
                    All tenants in our network are pre-screened with documents ready, reducing your time to lease.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Compliance Focus</h3>
                  <p className="text-gray-600">
                    We ensure all placements meet fair housing requirements and local regulations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our relationship doesn't end at lease signing. We provide continued support for future needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Typical Timeline</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">24-48hrs</div>
                <h3 className="text-lg font-semibold mb-2">Initial Response</h3>
                <p className="text-gray-600">We review your submission and provide initial matches</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">3-7 days</div>
                <h3 className="text-lg font-semibold mb-2">Tenant Review</h3>
                <p className="text-gray-600">You review qualified candidates and make selections</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-700 mb-2">1-2 weeks</div>
                <h3 className="text-lg font-semibold mb-2">Lease Completion</h3>
                <p className="text-gray-600">Document processing and lease signing with support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join property owners who are filling vacancies faster with NextKey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
              <Link href="/landlords">Submit Your Unit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-700"
            >
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
