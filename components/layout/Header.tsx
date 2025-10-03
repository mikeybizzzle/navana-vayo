'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Products',
    items: [
      { name: 'Hotels', href: '/hotels' },
      { name: 'Resorts', href: '/resorts' },
      { name: 'Cruises', href: '/cruises' },
      { name: 'Car Rentals', href: '/cars' },
    ],
  },
  {
    name: 'How It Works',
    items: [
      { name: 'The Vault Access Model', href: '/how-it-works' },
      { name: 'Price Match Guarantee', href: '/price-match' },
    ],
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
  {
    name: 'About',
    items: [
      { name: 'Our Story', href: '/company/about' },
      { name: 'Member Reviews', href: '/customers' },
    ],
  },
  {
    name: 'Resources',
    items: [
      { name: 'Travel Guides', href: '/resources/travel-guides' },
      { name: 'Contact Support', href: '/contact' },
    ],
  },
  {
    name: 'Partners',
    items: [
      { name: 'Referral Program', href: '/referral' },
      { name: 'Affiliate Program', href: '/affiliate' },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Vayo Vault</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-body-sm text-text-primary hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      'flex items-center gap-1 text-body-sm text-text-primary hover:text-primary transition-colors',
                      activeDropdown === item.name && 'text-primary'
                    )}
                  >
                    {item.name}
                    {item.items && <ChevronDown className="w-4 h-4" />}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.items && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-48">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-body-sm text-text-primary hover:bg-background-light hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Member Login
              </Button>
            </Link>
            <Link href="/checkout">
              <Button size="sm">Start Free Trial</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="w-full text-left text-body-md text-text-primary font-medium py-2 block"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="w-full text-left text-body-md text-text-primary font-medium py-2">
                    {item.name}
                  </button>
                )}
                {item.items && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-body-sm text-text-secondary py-1"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link href="/login">
                <Button variant="secondary" size="md" className="w-full">
                  Member Login
                </Button>
              </Link>
              <Link href="/checkout">
                <Button size="md" className="w-full">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}