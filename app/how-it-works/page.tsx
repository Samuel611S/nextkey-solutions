"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  FileCheck,
  Handshake,
  Building,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/Header"

export default function HowItWorksPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: "What does NextKey Global Solutions do?",
      a: "We’re a housing placement and tenant-matching company helping landlords find pre-qualified renters—especially those with housing vouchers.",
    },
    {
      q: "Do you collect broker fees?",
      a: "No. We are not a licensed brokerage and do not collect broker fees through this company. All real estate transactions are handled by licensed agents.",
    },
    {
      q: "Are you a real estate agency?",
      a: "No. We are a placement and intake service. Licensed agents handle transactions, showings, and fees.",
    },
    {
      q: "Who do you work with?",
      a: "Landlords, property managers, developers, voucher holders, and real estate professionals.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="/how-it-works" />

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
                  <p className="text-gray-600">Fill out our simple form with your property details, rent amount, and preferences. Takes less than 5 minutes.</p>
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
                  <p className="text-gray-600">Our team identifies qualified, document-ready tenants from our network who meet your criteria.</p>
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
                  <p className="text-gray-600">Review tenant profiles and approve matches. We handle document coordination and process support.</p>
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
                  <p className="text-gray-600">Complete the lease with confidence. We remain available for ongoing support and future placements.</p>
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
                  <p className="text-gray-600">We specialize in voucher placements and understand the unique requirements and timelines involved.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Pre-Verified Tenants</h3>
                  <p className="text-gray-600">All tenants in our network are pre-screened with documents ready, reducing your time to lease.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Compliance Focus</h3>
                  <p className="text-gray-600">We ensure all placements meet fair housing requirements and local regulations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-purple-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                  <p className="text-gray-600">Our relationship doesn't end at lease signing. We provide continued support for future needs.</p>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg shadow-sm p-6">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold text-purple-800"
                >
                  {item.q}
                  {openIndex === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden text-gray-600 mt-4"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join property owners who are filling vacancies faster with NextKey.
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
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
