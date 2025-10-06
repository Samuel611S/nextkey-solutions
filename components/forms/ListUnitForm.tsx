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
  unitAddress: string
  voucherAcceptance: boolean
  additionalInfo?: string
}

export default function ListUnitForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    unitAddress: "",
    voucherAcceptance: false,
    additionalInfo: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success("Unit listing submitted successfully! We'll contact you within 24-48 hours.")
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        unitAddress: "",
        voucherAcceptance: false,
        additionalInfo: ""
      })
    } catch (error) {
      toast.error("Failed to submit unit listing. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">List Your Unit Today</CardTitle>
        <p className="text-gray-600 text-center">
          Submit your unit details and we'll help you find qualified tenants quickly.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Smith"
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
                placeholder="john@example.com"
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
              <Label htmlFor="unit-address">Unit Address *</Label>
              <Input
                id="unit-address"
                value={formData.unitAddress}
                onChange={(e) => handleInputChange("unitAddress", e.target.value)}
                placeholder="123 Main St, New York, NY 10001"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label>Voucher Acceptance *</Label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="voucher-yes"
                  checked={formData.voucherAcceptance === true}
                  onCheckedChange={(checked) => handleInputChange("voucherAcceptance", checked === true)}
                />
                <Label htmlFor="voucher-yes">Yes, I accept vouchers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="voucher-no"
                  checked={formData.voucherAcceptance === false}
                  onCheckedChange={(checked) => handleInputChange("voucherAcceptance", checked !== true)}
                />
                <Label htmlFor="voucher-no">No, I do not accept vouchers</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-info">Additional Information</Label>
            <Textarea
              id="additional-info"
              value={formData.additionalInfo}
              onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
              placeholder="Any special requirements, amenities, or additional details about the property..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "List Your Unit Today"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
