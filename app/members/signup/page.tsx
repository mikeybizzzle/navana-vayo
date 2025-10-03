'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Check, Lock, Mail, User, Phone, CreditCard } from 'lucide-react'
import { MEMBERSHIP_TIERS, type MembershipTier } from '@/lib/db/types'

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [selectedTier, setSelectedTier] = useState<MembershipTier>('premium')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[e.target.name]
        return newErrors
      })
    }
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          membership_tier: selectedTier
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed')
      }

      // Redirect to member dashboard or success page
      window.location.href = '/members/dashboard'
    } catch (error) {
      setErrors({ submit: error instanceof Error ? error.message : 'Signup failed' })
    } finally {
      setLoading(false)
    }
  }

  const tierInfo = MEMBERSHIP_TIERS[selectedTier]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-background-light via-background-purple to-white pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2
                      ${step >= s ? 'bg-primary border-primary text-white' : 'border-gray-300 text-gray-400'}`}>
                      {step > s ? <Check className="w-5 h-5" /> : s}
                    </div>
                    {s < 3 && (
                      <div className={`w-16 h-0.5 ${step > s ? 'bg-primary' : 'bg-gray-300'}`} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 px-8">
                <span className={`text-sm ${step >= 1 ? 'text-primary font-medium' : 'text-gray-400'}`}>Account</span>
                <span className={`text-sm ${step >= 2 ? 'text-primary font-medium' : 'text-gray-400'}`}>Membership</span>
                <span className={`text-sm ${step >= 3 ? 'text-primary font-medium' : 'text-gray-400'}`}>Payment</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <form onSubmit={handleSubmit}>
                {/* Step 1: Account Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Create Your Account</h1>
                      <p className="text-gray-600">Join thousands of members saving 50% on travel</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary
                              ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="John"
                          />
                        </div>
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary
                              ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Doe"
                          />
                        </div>
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary
                            ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number (optional)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary
                            ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="At least 8 characters"
                        />
                      </div>
                      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary
                            ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Repeat password"
                        />
                      </div>
                      {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <button
                      type="button"
                      onClick={handleContinue}
                      className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Continue to Membership Selection
                    </button>
                  </div>
                )}

                {/* Step 2: Membership Selection */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Membership</h2>
                      <p className="text-gray-600">Select the plan that's right for you</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Free Trial */}
                      <div
                        onClick={() => setSelectedTier('free_trial')}
                        className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${
                          selectedTier === 'free_trial'
                            ? 'border-primary bg-primary/5 scale-105'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <h3 className="text-xl font-bold mb-2">Free Trial</h3>
                        <div className="text-3xl font-bold mb-4">$0<span className="text-base font-normal text-gray-600">/14 days</span></div>
                        <ul className="space-y-2 mb-6">
                          {MEMBERSHIP_TIERS.free_trial.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Premium */}
                      <div
                        onClick={() => setSelectedTier('premium')}
                        className={`cursor-pointer border-2 rounded-xl p-6 transition-all relative ${
                          selectedTier === 'premium'
                            ? 'border-primary bg-primary/5 scale-105'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                        <h3 className="text-xl font-bold mb-2">Premium</h3>
                        <div className="text-3xl font-bold mb-4">${MEMBERSHIP_TIERS.premium.monthly_price}<span className="text-base font-normal text-gray-600">/month</span></div>
                        <ul className="space-y-2 mb-6">
                          {MEMBERSHIP_TIERS.premium.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* VIP Elite */}
                      <div
                        onClick={() => setSelectedTier('vip_elite')}
                        className={`cursor-pointer border-2 rounded-xl p-6 transition-all ${
                          selectedTier === 'vip_elite'
                            ? 'border-primary bg-primary/5 scale-105'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <h3 className="text-xl font-bold mb-2">VIP Elite</h3>
                        <div className="text-3xl font-bold mb-4">${MEMBERSHIP_TIERS.vip_elite.monthly_price}<span className="text-base font-normal text-gray-600">/month</span></div>
                        <ul className="space-y-2 mb-6">
                          {MEMBERSHIP_TIERS.vip_elite.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleContinue}
                        className="flex-1 bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment (Placeholder) */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Registration</h2>
                      <p className="text-gray-600">You've selected: <span className="font-semibold text-primary">{tierInfo.name}</span></p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                      <div className="flex justify-between mb-2">
                        <span>{tierInfo.name} Membership</span>
                        <span className="font-semibold">
                          ${selectedTier === 'free_trial' ? 0 : ('monthly_price' in tierInfo ? tierInfo.monthly_price : 0)}/month
                        </span>
                      </div>
                      {selectedTier !== 'free_trial' && (
                        <div className="text-sm text-gray-600">
                          Includes {('cashback_rate' in tierInfo ? tierInfo.cashback_rate : 0)}% cashback on all bookings
                        </div>
                      )}
                    </div>

                    {selectedTier === 'free_trial' ? (
                      <div className="text-center">
                        <p className="text-gray-600 mb-6">No payment required for your 14-day free trial!</p>
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-primary text-white px-12 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                        >
                          {loading ? 'Creating Account...' : 'Start Free Trial'}
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-center text-gray-600 mb-6">Payment integration coming soon. For now, you can complete signup and payment will be collected later.</p>

                        <div className="flex gap-4">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                          >
                            {loading ? 'Creating Account...' : 'Complete Signup'}
                          </button>
                        </div>
                      </div>
                    )}

                    {errors.submit && (
                      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                        {errors.submit}
                      </div>
                    )}
                  </div>
                )}
              </form>
            </motion.div>

            <p className="text-center text-gray-600 mt-6">
              Already have an account?{' '}
              <a href="/members/login" className="text-primary font-semibold hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
