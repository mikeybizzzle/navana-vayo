'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function BookingPlatformPage() {
  const [loading, setLoading] = useState(true)
  const [ssoUrl, setSsoUrl] = useState<string | null>(null)

  useEffect(() => {
    handleAutoRedirect()
  }, [])

  const handleAutoRedirect = async () => {
    const token = localStorage.getItem('vayo_token')

    if (!token) {
      // Not logged in, redirect to login
      window.location.href = '/members/login'
      return
    }

    try {
      // Get SSO URL
      const response = await fetch('/api/auth/sso', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      const data = await response.json()

      if (data.sso_url) {
        setSsoUrl(data.sso_url)
        // Auto-redirect after 2 seconds
        setTimeout(() => {
          window.location.href = data.sso_url
        }, 2000)
      } else {
        setLoading(false)
      }
    } catch (error) {
      console.error('SSO error:', error)
      setLoading(false)
    }
  }

  const handleManualRedirect = () => {
    if (ssoUrl) {
      window.location.href = ssoUrl
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-background-light via-background-purple to-white pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            {loading || ssoUrl ? (
              <div className="bg-white rounded-2xl shadow-xl p-12">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Redirecting to Booking Platform...
                </h1>
                <p className="text-gray-600 mb-8">
                  You're being securely connected to the Vayo booking platform powered by Excursions.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150" />
                </div>

                {ssoUrl && (
                  <button
                    onClick={handleManualRedirect}
                    className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Click here if not redirected automatically
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-12">
                <ExternalLink className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Access Booking Platform
                </h1>
                <p className="text-gray-600 mb-8">
                  Browse exclusive member-only deals and book your next adventure with wholesale pricing.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <span className="text-gray-700">Wholesale pricing on hotels, cruises, and resorts</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <span className="text-gray-700">Save up to 50% compared to public rates</span>
                  </div>
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-semibold">✓</span>
                    </div>
                    <span className="text-gray-700">Earn cashback on every booking</span>
                  </div>
                </div>

                <button
                  onClick={handleAutoRedirect}
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
                >
                  Launch Booking Platform
                  <ExternalLink className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 mt-6">
                  You'll be securely redirected to our booking platform
                </p>
              </div>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
