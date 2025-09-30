import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const footerLinks = {
  Products: ['Travel', 'Expense', 'Corporate Card', 'Payments', 'Mobile App'],
  Solutions: [
    'By Industry',
    'By Company Size',
    'Travel Managers',
    'Finance Teams',
  ],
  Resources: [
    'Blog',
    'Customer Stories',
    'Help Center',
    'Guides & Reports',
  ],
  Company: ['About Us', 'Careers', 'Press', 'Partners', 'Contact'],
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <Container>
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold">Navan</span>
              </Link>
              <p className="text-body-sm text-text-tertiary mb-6">
                The all-in-one travel and expense platform
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-body-md mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-body-sm text-text-tertiary hover:text-white transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-text-tertiary">
              © {new Date().getFullYear()} Navan. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-body-sm text-text-tertiary hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-body-sm text-text-tertiary hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-body-sm text-text-tertiary hover:text-white transition-colors"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}