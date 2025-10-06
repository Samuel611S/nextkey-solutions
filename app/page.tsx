import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, FileText, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import ListUnitForm from "@/components/forms/ListUnitForm"
import HousingSupportForm from "@/components/forms/HousingSupportForm"
import WaitlistForm from "@/components/forms/WaitlistForm"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Filling Units in 24–48 Hours. Supporting Families. Reducing Risk.</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We connect NYC landlords with qualified renters while helping families stay stably housed through nonprofit support, mediation, and compliance guidance.
          </p>
          <p className="text-lg text-purple-800 font-semibold mb-6">Trusted by NYC landlords, brokers, and nonprofit partners.</p>
          <div className="text-purple-800 font-semibold mb-6 text-lg">Call Our Hotline: 1-855-698-5397</div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
              <Link href="/landlords">List Your Unit Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-700 text-purple-700 hover:bg-purple-50"
            >
              <Link href="/contact">Apply for Housing Support</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-purple-700 hover:bg-purple-50">
              <Link href="/how-it-works">Join Waitlist for Early Access</Link>
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
              NYC-Based Support Team
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
                <p className="text-gray-600">Avg Placement Response</p>
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
                <p className="text-gray-600">Voucher Coverage Area</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "Next Key helped us fill our vacant unit in just 2 days with a qualified Section 8 tenant. Their support made the entire process seamless."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Sarah M.</strong> - Property Manager, Brooklyn
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The team's knowledge of voucher programs and compliance requirements saved us time and headaches. Highly recommend their services."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Michael R.</strong> - Real Estate Agent, Manhattan
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "As a family with CityFHEPS, Next Key helped us find a great apartment quickly. They made sure everything was properly coordinated."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Maria L.</strong> - Tenant, Queens
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voucher Program Logos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Voucher Programs We Support</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold text-gray-700">Section 8</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold text-gray-700">CityFHEPS</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold text-gray-700">HASA</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold text-gray-700">LINC</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold text-gray-700">FEPS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-lg font-semibold text-purple-700">Next Key Housing Access Foundation</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-sm text-gray-500">Corporate partnerships coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get Started Today</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ListUnitForm />
            </div>
            <div className="lg:col-span-1">
              <HousingSupportForm />
            </div>
            <div className="lg:col-span-1">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fill Your NYC Unit?</h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with a placement service that understands vouchers, compliance, and urgency.
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
