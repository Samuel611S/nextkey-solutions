import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, Shield, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
            <Link href="/about" className="text-purple-700 font-medium">
              About
            </Link>
            <Link href="/landlords" className="text-gray-700 hover:text-purple-700">
              For Landlords
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-purple-700">
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Built for the Way Cities Work.</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              NextKey Global Solutions was created by housing professionals to help property owners overcome delays,
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
    </div>
  )
}
