import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import MobileMenuButton from "./MobileMenuButton"

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/landlords", label: "For Landlords" },
    { href: "/families", label: "For Families" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Next Key Global Solutions" 
              width={50} 
              height={50} 
              className="w-12 h-12" 
            />
            <div>
              <h1 className="text-xl font-bold text-purple-700">Next Key</h1>
              <p className="text-sm text-purple-600">Global Solutions™</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-700 ${
                  currentPage === item.href
                    ? "text-purple-700 border-b-2 border-purple-700 pb-1"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-purple-700 hover:bg-purple-800">
              <Link href="/landlords">List Your Unit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton />
        </div>

        {/* Mobile Navigation */}
        <nav id="mobile-menu" className="hidden md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-3 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-purple-700 ${
                  currentPage === item.href
                    ? "text-purple-700"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild size="sm" className="bg-purple-700 hover:bg-purple-800 w-full">
                <Link href="/landlords">List Your Unit</Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
