'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { Check, Gift, ArrowRight } from 'lucide-react'

export default function ReferralSignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeToTerms: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [generatedCode, setGeneratedCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate referral code from name
    const code = `${formData.firstName.toUpperCase()}${new Date().getFullYear()}`
    setGeneratedCode(code)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 py-32">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-display-lg font-display font-semibold text-primary-dark mb-4">
                Welcome to the Vayo Referral Program!
              </h1>
              <p className="text-body-lg text-text-secondary mb-8">
                Your account has been created and you're ready to start earning.
              </p>

              <Card padding="lg" className="bg-gradient-to-br from-primary/10 to-purple-50 mb-8">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700 mb-2">Your Referral Code</p>
                  <p className="text-4xl font-bold text-primary mb-4 font-mono">{generatedCode}</p>
                  <p className="text-sm text-text-secondary mb-4">
                    Share this code with friends to earn $50-$150 per referral
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Link href="/referral/dashboard">
                      <Button className="gap-2">
                        Go to Dashboard
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                    <Button variant="secondary">Share Now</Button>
                  </div>
                </div>
              </Card>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
                <h3 className="font-semibold text-primary-dark mb-3 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  Getting Started
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Check your email for login credentials and welcome guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Visit your dashboard to access tracking links and share tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Share your code via email, social media, or direct message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Start earning when your referrals make their first booking</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h1 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Join the Referral Program
                </h1>
                <p className="text-body-lg text-text-secondary">
                  Create your free account and start earning rewards today
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card padding="lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-xl font-semibold text-primary-dark mb-4">
                      Personal Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Account Information */}
                  <div>
                    <h2 className="text-xl font-semibold text-primary-dark mb-4">
                      Account Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Min. 8 characters"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Benefits */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                    <h3 className="font-semibold text-primary-dark mb-4">What You'll Get:</h3>
                    <ul className="space-y-2">
                      {[
                        'Unique referral code and tracking links',
                        'Real-time earnings dashboard',
                        'Up to $150 per successful referral',
                        'Bonus perks for high performers',
                        'Marketing materials and share tools',
                        'Monthly payouts via bank transfer or PayPal',
                      ].map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Terms Agreement */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                        className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="/legal/terms" className="text-primary hover:underline">
                          Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="/legal/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        , and I confirm that I am a current Vayo Vault member or will create a membership account.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full gap-2">
                    Create Account & Get My Code
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  <p className="text-sm text-text-tertiary text-center">
                    Already have an account?{' '}
                    <a href="/login" className="text-primary hover:underline">
                      Sign in
                    </a>
                  </p>
                </form>
              </Card>
            </FadeIn>

            {/* Trust Indicators */}
            <FadeIn delay={0.2}>
              <div className="mt-8 text-center">
                <p className="text-sm text-text-secondary mb-4">Trusted by 500+ active referrers</p>
                <div className="flex items-center justify-center gap-8 text-xs text-text-tertiary">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Free to join</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
