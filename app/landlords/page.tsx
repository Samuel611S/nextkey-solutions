import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Building, Clock, FileText, Users, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Landlord Tenant Placement NYC | NextKey Global Solutions",
  description: "Get fast, compliant tenant placement services for your NYC rental units. We match landlords with pre-qualified voucher tenants. Call 1-855-NEXTKEY.",
  keywords: "NYC landlord tenant placement, voucher-friendly tenant matching, Section 8 placement help, fast housing placement for NYC landlords, how to fill vacant rental units fast in NYC"
}

export default function LandlordsPage() {
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
            <Link href="/landlords" className="text-purple-700 font-medium">
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Tenant Placement Services for NYC Landlords</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get fast, compliant tenant placement services for your NYC rental units. We specialize in NYC landlord tenant placement and voucher-friendly tenant matching to help you fill vacant rental units fast in NYC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
              Submit Your Unit
            </Button>
            <Button variant="outline" size="lg" className="border-purple-700 text-purple-700 hover:bg-purple-50">
              <Phone className="w-4 h-4 mr-2" />
              Call 1-855-NEXTKEY
            </Button>
          </div>
        </div>
      </section>

      {/* Why Landlords Choose NextKey Global */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Landlords Choose NextKey Global</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pre-Qualified Tenants</h3>
                <p className="text-gray-600 text-sm">Verified, document-ready renters for fast housing placement for NYC landlords</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">24-48 Hour Response</h3>
                <p className="text-gray-600 text-sm">Quick turnaround to help you fill vacant rental units fast in NYC</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Full Documentation</h3>
                <p className="text-gray-600 text-sm">Complete lease coordination and Section 8 placement help</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Building className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Compliance Guaranteed</h3>
                <p className="text-gray-600 text-sm">Fair housing law adherence and voucher-friendly tenant matching</p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto bg-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">NYC Landlord Tenant Placement Made Simple</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-700">What We Do</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Match your units with pre-screened voucher tenants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Handle all Section 8 placement help and paperwork</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coordinate move-in logistics and inspections</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-700">Why Choose Us</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specialized in NYC rental market dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proven track record of fast housing placement for NYC landlords</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dedicated support team for ongoing assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">Submit Your Unit</h3>
                <p className="text-gray-600">Share your vacancy details and we'll help you understand how to fill vacant rental units fast in NYC with our NYC landlord tenant placement services.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">We Match & Screen</h3>
                <p className="text-gray-600">Our team performs voucher-friendly tenant matching and provides comprehensive Section 8 placement help to ensure compliance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Move-In Ready</h3>
                <p className="text-gray-600">Get fast housing placement for NYC landlords with coordinated move-ins and ongoing support throughout the lease term.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Submission Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Submit Your Unit</CardTitle>
                <p className="text-gray-600 text-center">
                  Start your NYC landlord tenant placement journey. Fill out the form below and we'll get back to you within 24-48 hours with voucher-friendly tenant matching options.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address *</Label>
                    <Input id="address" placeholder="123 Main St, New York, NY 10001" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rent">Monthly Rent *</Label>
                    <Input id="rent" type="number" placeholder="2500" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4+">4+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Bathroom</SelectItem>
                        <SelectItem value="1.5">1.5 Bathrooms</SelectItem>
                        <SelectItem value="2">2 Bathrooms</SelectItem>
                        <SelectItem value="2.5">2.5 Bathrooms</SelectItem>
                        <SelectItem value="3+">3+ Bathrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Move-in Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1month">1 month</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Voucher Programs Accepted</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="section8" />
                      <Label htmlFor="section8">Section 8</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cityfheps" />
                      <Label htmlFor="cityfheps">CityFHEPS</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hasa" />
                      <Label htmlFor="hasa">HASA</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="other" />
                      <Label htmlFor="other">Other Vouchers</Label>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" placeholder="John Smith" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="owner">Property Owner</SelectItem>
                        <SelectItem value="manager">Property Manager</SelectItem>
                        <SelectItem value="agent">Real Estate Agent</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additional">Additional Information</Label>
                  <Textarea
                    id="additional"
                    placeholder="Any special requirements, amenities, or additional details about the property..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-purple-700 hover:bg-purple-800" size="lg">
                  Submit My Unit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to experience fast housing placement for NYC landlords? Our NYC landlord tenant placement services are designed to help you fill vacant rental units fast in NYC with qualified, voucher-friendly tenants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
              Submit Your Unit
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-purple-600">
              <Phone className="w-4 h-4 mr-2" />
              Call 1-855-NEXTKEY
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Pricing</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 mb-6">
                  Pricing is tailored based on your unit volume, support needs, and timeline. Our Section 8 placement help and voucher-friendly tenant matching services are designed to maximize your ROI while minimizing vacancy time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
                    <Link href="#unit-form">Submit My Unit</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-purple-700 text-purple-700 hover:bg-purple-50"
                  >
                    <Link href="/contact">Schedule a Call</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
