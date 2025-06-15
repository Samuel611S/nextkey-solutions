import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
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
            <Link href="/how-it-works" className="text-gray-700 hover:text-purple-700">
              How It Works
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-700">
              Services
            </Link>
            <Link href="/contact" className="text-purple-700 font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Ready to Talk or List Your Unit?</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's connect and discuss how NextKey can help you fill your vacancies faster.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24-48 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Smith" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="owner">Property Owner</SelectItem>
                      <SelectItem value="manager">Property Manager</SelectItem>
                      <SelectItem value="agent">Real Estate Agent</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="list-unit">List a Unit</SelectItem>
                      <SelectItem value="schedule-call">Schedule a Call</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="services">Service Questions</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your property, your needs, or any questions you have..."
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unitInfo">Optional: Unit Information</Label>
                  <Textarea
                    id="unitInfo"
                    placeholder="If you have a specific unit to discuss, please provide address, rent, bedrooms, etc."
                    rows={3}
                  />
                </div>

                <Button className="w-full bg-purple-700 hover:bg-purple-800" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-purple-700 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">support@nextkeyglobalsolutions.com</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-purple-700 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">Coming Soon</p>
                      <p className="text-sm text-gray-500 mt-1">Phone support launching Q2 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-purple-700 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p className="text-gray-600">New York City & Surrounding Areas</p>
                      <p className="text-sm text-gray-500 mt-1">Expanding to additional markets</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-purple-700 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-gray-600">24-48 hours</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-purple-700 hover:bg-purple-800">
                    <Link href="/landlords">List Your Unit Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-700 text-purple-700 hover:bg-purple-50"
                  >
                    <Link href="/how-it-works">Learn How It Works</Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full text-purple-700 hover:bg-purple-50">
                    <Link href="/services">View All Services</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-purple-800">Social Media</h3>
                  <p className="text-purple-700 mb-2">@nextkeyglobal</p>
                  <p className="text-sm text-purple-600">Follow us for updates on our soft launch and new features.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">How quickly can you fill my vacancy?</h3>
                  <p className="text-gray-600 text-sm">
                    Our typical timeline is 1-2 weeks from submission to lease signing, with initial matches provided
                    within 24-48 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Do you work with all voucher types?</h3>
                  <p className="text-gray-600 text-sm">
                    Yes, we specialize in Section 8, CityFHEPS, HASA, LINC, FHEPS, and other housing assistance
                    programs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">What are your fees?</h3>
                  <p className="text-gray-600 text-sm">
                    Pricing is customized based on your property portfolio, support needs, and timeline. Contact us for
                    a personalized quote.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Are you licensed real estate agents?</h3>
                  <p className="text-gray-600 text-sm">
                    We are a tenant placement and coordination platform. All leasing decisions are made solely by
                    landlords.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
