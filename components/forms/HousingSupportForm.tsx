"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

interface FormData {
  name: string
  email: string
  phone: string
  voucherType: string
  householdSize: string
  moveInTimeline: string
  preferredAreas: string[]
  additionalInfo: string
}

export default function HousingSupportForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    voucherType: "",
    householdSize: "",
    moveInTimeline: "",
    preferredAreas: [],
    additionalInfo: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAreaChange = (area: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferredAreas: checked 
        ? [...prev.preferredAreas, area]
        : prev.preferredAreas.filter(a => a !== area)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success("Housing support application submitted successfully! We'll contact you within 24-48 hours.")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        voucherType: "",
        householdSize: "",
        moveInTimeline: "",
        preferredAreas: [],
        additionalInfo: ""
      })
    } catch (error) {
      toast.error("Failed to submit application. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">Apply for Housing Support</CardTitle>
        <p className="text-gray-600 text-center">
          Fill out the form below and we'll help you find housing assistance and connect with voucher-friendly landlords.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Jane Smith"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="voucher-type">Voucher Type *</Label>
              <Select value={formData.voucherType} onValueChange={(value) => handleInputChange("voucherType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your voucher type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="section8">Section 8</SelectItem>
                  <SelectItem value="cityfheps">CityFHEPS</SelectItem>
                  <SelectItem value="hasa">HASA</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="none">No voucher yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="household-size">Household Size *</Label>
              <Select value={formData.householdSize} onValueChange={(value) => handleInputChange("householdSize", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Number of people" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 person</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3">3 people</SelectItem>
                  <SelectItem value="4">4 people</SelectItem>
                  <SelectItem value="5">5 people</SelectItem>
                  <SelectItem value="6+">6+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="move-timeline">Move-in Timeline *</Label>
              <Select value={formData.moveInTimeline} onValueChange={(value) => handleInputChange("moveInTimeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="When do you need to move?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediately</SelectItem>
                  <SelectItem value="1month">Within 1 month</SelectItem>
                  <SelectItem value="2months">Within 2 months</SelectItem>
                  <SelectItem value="3months">Within 3 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Preferred Areas (check all that apply)</Label>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="manhattan"
                  checked={formData.preferredAreas.includes("manhattan")}
                  onCheckedChange={(checked) => handleAreaChange("manhattan", checked === true)}
                />
                <Label htmlFor="manhattan">Manhattan</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="brooklyn"
                  checked={formData.preferredAreas.includes("brooklyn")}
                  onCheckedChange={(checked) => handleAreaChange("brooklyn", checked === true)}
                />
                <Label htmlFor="brooklyn">Brooklyn</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="queens"
                  checked={formData.preferredAreas.includes("queens")}
                  onCheckedChange={(checked) => handleAreaChange("queens", checked === true)}
                />
                <Label htmlFor="queens">Queens</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bronx"
                  checked={formData.preferredAreas.includes("bronx")}
                  onCheckedChange={(checked) => handleAreaChange("bronx", checked === true)}
                />
                <Label htmlFor="bronx">Bronx</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="staten-island"
                  checked={formData.preferredAreas.includes("staten-island")}
                  onCheckedChange={(checked) => handleAreaChange("staten-island", checked === true)}
                />
                <Label htmlFor="staten-island">Staten Island</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anywhere"
                  checked={formData.preferredAreas.includes("anywhere")}
                  onCheckedChange={(checked) => handleAreaChange("anywhere", checked === true)}
                />
                <Label htmlFor="anywhere">Anywhere in NYC</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-info">Additional Information</Label>
            <Textarea
              id="additional-info"
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              placeholder="Tell us about your housing needs, any special requirements, or questions you have..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Apply for Housing Support"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
