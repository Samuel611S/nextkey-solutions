"use client"

import { Button } from "@/components/ui/button"

export default function MobileMenuButton() {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu')
    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden')
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden"
      onClick={toggleMobileMenu}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </Button>
  )
}
