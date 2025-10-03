'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { CheckCircle, CreditCard, Lock, Mail, User, Phone, MapPin } from 'lucide-react'

export default function CheckoutPage() {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingZip: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('confirmation')
  }

  const membershipPrice = 37
  const trialDays = 14

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-light py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Progress Steps */}
            <FadeIn>
              <div className="mb-12">
                <div className="flex items-center justify-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step === 'details' ? 'bg-primary text-white' : 'bg-green-500 text-white'
                    }`}>
                      {step === 'details' ? '1' : <CheckCircle className="w-6 h-6" />}
                    </div>
                    <span className={`text-body-md font-semibold ${
                      step === 'details' ? 'text-primary' : 'text-green-500'
                    }`}>Details</span>
                  </div>
                  <div className="h-0.5 w-12 md:w-24 bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step === 'payment' ? 'bg-primary text-white' :
                      step === 'confirmation' ? 'bg-green-500 text-white' :
                      'bg-gray-300 text-gray-600'
                    }`}>
                      {step === 'confirmation' ? <CheckCircle className="w-6 h-6" /> : '2'}
                    </div>
                    <span className={`text-body-md font-semibold ${
                      step === 'payment' ? 'text-primary' :
                      step === 'confirmation' ? 'text-green-500' :
                      'text-gray-400'
                    }`}>Payment</span>
                  </div>
                  <div className="h-0.5 w-12 md:w-24 bg-gray-300"></div>
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step === 'confirmation' ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                    }`}>
                      3
                    </div>
                    <span className={`text-body-md font-semibold ${
                      step === 'confirmation' ? 'text-primary' : 'text-gray-400'
                    }`}>Confirm</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2">
                {step === 'details' && (
                  <FadeIn>
                    <Card padding="lg">
                      <h2 className="text-display-md font-display font-semibold text-primary-dark mb-6">
                        Your Information
                      </h2>
                      <form onSubmit={handleDetailsSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-body-sm font-semibold text-primary-dark mb-2">
                              First Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="John"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-body-sm font-semibold text-primary-dark mb-2">
                              Last Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-body-sm font-semibold text-primary-dark mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="john.doe@example.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-body-sm font-semibold text-primary-dark mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="address" className="block text-body-sm font-semibold text-primary-dark mb-2">
                            Street Address *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="address"
                              name="address"
                              required
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="123 Main Street"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          <div>
                            <label htmlFor="city" className="block text-body-sm font-semibold text-primary-dark mb-2">
                              City *
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              required
                              value={formData.city}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="New York"
                            />
                          </div>
                          <div>
                            <label htmlFor="state" className="block text-body-sm font-semibold text-primary-dark mb-2">
                              State *
                            </label>
                            <input
                              type="text"
                              id="state"
                              name="state"
                              required
                              value={formData.state}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="NY"
                            />
                          </div>
                          <div>
                            <label htmlFor="zipCode" className="block text-body-sm font-semibold text-primary-dark mb-2">
                              ZIP Code *
                            </label>
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              required
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="10001"
                            />
                          </div>
                        </div>

                        <Button type="submit" className="w-full">
                          Continue to Payment
                        </Button>
                      </form>
                    </Card>
                  </FadeIn>
                )}

                {step === 'payment' && (
                  <FadeIn>
                    <Card padding="lg">
                      <h2 className="text-display-md font-display font-semibold text-primary-dark mb-6">
                        Payment Information
                      </h2>
                      <form onSubmit={handlePaymentSubmit} className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                          <div className="flex items-center gap-2 text-blue-800">
                            <Lock className="w-5 h-5" />
                            <p className="text-body-sm font-semibold">Secure payment processing</p>
                          </div>
                          <p className="text-body-sm text-blue-700 mt-2">
                            Your payment information is encrypted and secure. You won't be charged until your {trialDays}-day free trial ends.
                          </p>
                        </div>

                        <div>
                          <label htmlFor="cardName" className="block text-body-sm font-semibold text-primary-dark mb-2">
                            Name on Card *
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            required
                            value={formData.cardName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="cardNumber" className="block text-body-sm font-semibold text-primary-dark mb-2">
                            Card Number *
                          </label>
                          <div className="relative">
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              required
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiryDate" className="block text-body-sm font-semibold text-primary-dark mb-2">
                              Expiry Date *
                            </label>
                            <input
                              type="text"
                              id="expiryDate"
                              name="expiryDate"
                              required
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="MM/YY"
                              maxLength={5}
                            />
                          </div>
                          <div>
                            <label htmlFor="cvv" className="block text-body-sm font-semibold text-primary-dark mb-2">
                              CVV *
                            </label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              required
                              value={formData.cvv}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                              placeholder="123"
                              maxLength={4}
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="billingZip" className="block text-body-sm font-semibold text-primary-dark mb-2">
                            Billing ZIP Code *
                          </label>
                          <input
                            type="text"
                            id="billingZip"
                            name="billingZip"
                            required
                            value={formData.billingZip}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            placeholder="10001"
                          />
                        </div>

                        <div className="flex gap-4">
                          <Button type="button" variant="secondary" onClick={() => setStep('details')} className="flex-1">
                            Back
                          </Button>
                          <Button type="submit" className="flex-1">
                            Start Free Trial
                          </Button>
                        </div>
                      </form>
                    </Card>
                  </FadeIn>
                )}

                {step === 'confirmation' && (
                  <FadeIn>
                    <Card padding="lg" className="text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-green-500" />
                      </div>
                      <h2 className="text-display-md font-display font-semibold text-primary-dark mb-4">
                        Welcome to Vayo Vault!
                      </h2>
                      <p className="text-body-lg text-text-secondary mb-8">
                        Your {trialDays}-day free trial has started. You'll receive a confirmation email at{' '}
                        <span className="font-semibold text-primary">{formData.email}</span>
                      </p>

                      <div className="bg-background-light rounded-lg p-6 mb-8 text-left">
                        <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-4">
                          What happens next?
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-body-md text-text-secondary">
                              Access members-only pricing immediately
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-body-md text-text-secondary">
                              Browse unlimited deals on hotels, resorts, cruises, and car rentals
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-body-md text-text-secondary">
                              Download the mobile app for on-the-go booking
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-body-md text-text-secondary">
                              Your trial ends on {new Date(Date.now() + trialDays * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-body-md text-text-secondary">
                              Cancel anytime before your trial ends — no charges
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/hotels" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                          Start Browsing Deals
                        </a>
                        <a href="/" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-300 text-primary-dark font-semibold hover:border-primary transition-colors">
                          Return Home
                        </a>
                      </div>
                    </Card>
                  </FadeIn>
                )}
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <FadeIn delay={0.2}>
                  <Card padding="lg" className="sticky top-8">
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-6">
                      Order Summary
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-body-md font-semibold text-primary-dark">
                            Vayo Vault Membership
                          </p>
                          <p className="text-body-sm text-text-secondary">
                            {trialDays}-day free trial
                          </p>
                        </div>
                        <p className="text-body-md font-semibold text-primary-dark">
                          ${membershipPrice}/mo
                        </p>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-body-sm text-text-secondary">
                            Trial period
                          </p>
                          <p className="text-body-sm font-semibold text-green-600">
                            FREE
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-body-sm text-text-secondary">
                            After trial
                          </p>
                          <p className="text-body-sm text-text-secondary">
                            ${membershipPrice}/month
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between items-center">
                          <p className="text-body-lg font-semibold text-primary-dark">
                            Due Today
                          </p>
                          <p className="text-display-sm font-bold text-green-600">
                            $0.00
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 mb-6">
                      <h4 className="text-body-sm font-semibold text-primary-dark mb-2">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-body-sm text-text-secondary">
                            Unlimited searches & bookings
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-body-sm text-text-secondary">
                            Members-only wholesale pricing
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-body-sm text-text-secondary">
                            Price match guarantee
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-body-sm text-text-secondary">
                            Mobile app access
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-body-sm text-text-secondary">
                            Cancel anytime
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 text-text-secondary mb-2">
                        <Lock className="w-4 h-4" />
                        <p className="text-body-sm">Secure checkout</p>
                      </div>
                      <p className="text-body-xs text-text-tertiary">
                        Your information is encrypted and protected
                      </p>
                    </div>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <Card padding="md" className="mt-6">
                    <h4 className="text-body-md font-semibold text-primary-dark mb-3">
                      Money-Back Guarantee
                    </h4>
                    <p className="text-body-sm text-text-secondary">
                      Not satisfied? Cancel within {trialDays} days for a full refund. No questions asked.
                    </p>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
