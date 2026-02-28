"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Learning", href: "/learning" },
  { name: "Certificate", href: "/certificate" },
  { name: "Gallery", href: "/gallery" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-25">
          {/* CSI Logo - Left side */}
          <Link href="/" className="flex items-center ml-4 lg:ml-8">
            <div className="relative w-16 h-16 lg:w-35 lg:h-35 rounded-xl overflow-hidden">
              <Image
                src="/logo.png"
                alt="CSI Logo"
                width={128}
                height={128}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation & CTA Button + CSI100K Logo */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-base font-medium transition-all duration-200",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-medium px-4 shadow-sm">
              Register Now
            </Button> */}

            {/* CSI100K Logo - Right side */}
            <Link href="/" className="flex items-center">
              <div className="relative w-45 h-45 lg:w-47 lg:h-47 rounded-xl overflow-hidden">
                <Image
                  src="/csi100klogo.png"
                  alt="CSI100K Logo"
                  width={128}
                  height={128}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-border">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="mt-3 bg-primary text-white font-medium">
                Register Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
