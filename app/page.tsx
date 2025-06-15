import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, FileText, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="NextKey Global Solutions" width={50} height={50} className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-purple-700">NextKey</h1>
              <p className="text-sm text-purple-600">Global Solutions™</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-700 hover:text-purple-700">
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Smarter Placement. Less Vacancy.</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted housing partner for filling units fast—with verified renters and expert coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
              <Link href="/landlords">List Your Unit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-700 text-purple-700 hover:bg-purple-50"
            >
              <Link href="/contact">Book a Placement Call</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-purple-700 hover:bg-purple-50">
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>

          {/* Trust Section */}
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Voucher-Friendly
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Legal-Ready
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Placement-Focused
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
              <FileText className="w-4 h-4 mr-2" />
              Real Support Team
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-700 mb-2">24-48hrs</div>
                <p className="text-gray-600">Average Response Time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-700 mb-2">100%</div>
                <p className="text-gray-600">Fair Housing Compliant</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-700 mb-2">NYC+</div>
                <p className="text-gray-600">Coverage Area</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fill Your Vacancy?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join property owners who trust NextKey for faster, compliant placements.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
            <Link href="/landlords">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="NextKey Global Solutions" width={40} height={40} className="w-10 h-10" />
                <div>
                  <h3 className="font-bold text-purple-400">NextKey</h3>
                  <p className="text-sm text-purple-300">Global Solutions™</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">Professional tenant placement and housing access services.</p>
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
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-gray-400 mb-2">support@nextkeyglobalsolutions.com</p>
              <p className="text-sm text-gray-400">@nextkeyglobal</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
            <p className="mb-2">© 2025 NextKey Global Solutions. All Rights Reserved.</p>
            <p className="mb-1">
              All services comply with federal, state, and city housing regulations, including Fair Housing laws.
            </p>
            <p className="mb-1">
              We are a tenant placement and coordination platform. Leasing decisions are made solely by landlords.
            </p>
            <p>We do not discriminate based on source of income, race, gender, age, disability, or family status.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
