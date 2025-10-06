import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Clock, Shield, Building, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/services" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Complete Placement Solutions</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From tenant matching to lease completion, we provide comprehensive support for property owners and managers.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Services</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Verified Tenant Matching */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-8 h-8 text-purple-700" />
                  <CardTitle className="text-2xl">Verified Tenant Matching</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect with pre-screened, document-ready tenants who meet your specific criteria and timeline
                  requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Income verification completed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Background checks current</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">References validated</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Move-in ready documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Voucher Coordination */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-8 h-8 text-purple-700" />
                  <CardTitle className="text-2xl">Voucher Coordination</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Expert navigation of voucher programs including Section 8, CityFHEPS, HASA, and other housing
                  assistance programs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Section 8</Badge>
                  <Badge variant="secondary">CityFHEPS</Badge>
                  <Badge variant="secondary">HASA</Badge>
                  <Badge variant="secondary">LINC</Badge>
                  <Badge variant="secondary">FHEPS</Badge>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Program requirement guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Inspection coordination</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Payment processing support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Document & Lease Support */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-purple-700" />
                  <CardTitle className="text-2xl">Document & Lease Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive assistance with lease preparation, document review, and compliance verification.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Lease agreement review</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Fair housing compliance check</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Document coordination</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Signing process support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Timeline Tracking */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-8 h-8 text-purple-700" />
                  <CardTitle className="text-2xl">Timeline Tracking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stay informed throughout the placement process with regular updates and milestone tracking.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Regular progress updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Milestone notifications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Issue resolution alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-700" />
                    <span className="text-sm">Completion confirmation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Services</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building className="w-8 h-8 text-purple-700" />
                  <CardTitle className="text-2xl">Vacancy Strategy & Landlord Advising</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Strategic consultation to optimize your rental properties and reduce vacancy periods through market
                  analysis and positioning advice.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Market Analysis</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Competitive rent analysis</li>
                      <li>• Market demand assessment</li>
                      <li>• Pricing optimization</li>
                      <li>• Seasonal trend insights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Property Optimization</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Unit presentation advice</li>
                      <li>• Amenity recommendations</li>
                      <li>• Marketing strategy</li>
                      <li>• Tenant retention tips</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Service Levels</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Basic Placement</CardTitle>
                <p className="text-gray-600">Essential matching and coordination</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-left">
                  <li>• Tenant matching</li>
                  <li>• Basic document review</li>
                  <li>• Email support</li>
                  <li>• Standard timeline</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 bg-purple-50">
              <CardHeader>
                <Badge className="mb-2 bg-purple-700">Most Popular</Badge>
                <CardTitle className="text-xl">Full Service</CardTitle>
                <p className="text-gray-600">Complete placement support</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-left">
                  <li>• Everything in Basic</li>
                  <li>• Voucher coordination</li>
                  <li>• Lease support</li>
                  <li>• Phone support</li>
                  <li>• Priority timeline</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Premium Advisory</CardTitle>
                <p className="text-gray-600">Strategic partnership</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-left">
                  <li>• Everything in Full Service</li>
                  <li>• Market analysis</li>
                  <li>• Property optimization</li>
                  <li>• Dedicated support</li>
                  <li>• Ongoing consultation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss which service level is right for your property portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-700 hover:bg-gray-100">
              <Link href="/landlords">Submit Your Unit</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-purple-700 hover:bg-white hover:text-purple-700"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
