import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Clock, FileText, Users, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/Header"
import ListUnitForm from "@/components/forms/ListUnitForm"

export const metadata: Metadata = {
  title: "Reduce Vacancy NYC | Fill Rental Fast | Voucher Tenant Placement | Next Key Global Solutions",
  description: "Reduce vacancy in NYC with fast rental filling services. We specialize in voucher tenant placement and help landlords fill units quickly with qualified tenants.",
  keywords: "reduce vacancy NYC, fill rental fast, voucher tenant placement, NYC landlord services, Section 8 placement, CityFHEPS, housing placement services"
}

export default function LandlordsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/landlords" />

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
            <ListUnitForm />
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
            <Button variant="outline" size="lg" className="border-white text-purple-700 hover:bg-white">
              <Phone className="w-4 h-4 mr-2 text-purple-700" />
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
