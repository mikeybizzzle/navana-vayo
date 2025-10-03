'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { Check, AlertCircle } from 'lucide-react'

export default function AffiliateApplyPage() {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

    // Business Info
    businessName: '',
    website: '',
    monthlyVisitors: '',
    contentType: '',

    // Social Media
    instagram: '',
    youtube: '',
    tiktok: '',
    twitter: '',
    facebook: '',

    // Additional Info
    promotionMethods: [] as string[],
    experience: '',
    referralSource: '',
    additionalInfo: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleCheckbox = (value: string) => {
    setFormData({
      ...formData,
      promotionMethods: formData.promotionMethods.includes(value)
        ? formData.promotionMethods.filter((m) => m !== value)
        : [...formData.promotionMethods, value],
    })
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
                Application submitted!
              </h1>
              <p className="text-body-lg text-text-secondary mb-8">
                Thank you for applying to the Vayo affiliate program. We'll review your application and get back to you within 2-3 business days.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
                <h3 className="font-semibold text-primary-dark mb-2">What's next?</h3>
                <ol className="list-decimal list-inside space-y-2 text-text-secondary">
                  <li>Our team will review your application</li>
                  <li>We'll check your website and social media presence</li>
                  <li>You'll receive an approval email with next steps</li>
                  <li>Complete onboarding and start promoting!</li>
                </ol>
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
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <h1 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Affiliate program application
                </h1>
                <p className="text-body-lg text-text-secondary">
                  Tell us about yourself and how you plan to promote Vayo
                </p>
              </div>
            </FadeIn>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <FadeIn delay={0.1}>
                <Card padding="lg">
                  <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                    Personal Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
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
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </Card>
              </FadeIn>

              {/* Business Information */}
              <FadeIn delay={0.2}>
                <Card padding="lg">
                  <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                    Business Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Business/Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Website URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Website Visitors *
                      </label>
                      <select
                        required
                        value={formData.monthlyVisitors}
                        onChange={(e) => setFormData({ ...formData, monthlyVisitors: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select range</option>
                        <option value="0-5k">0 - 5,000</option>
                        <option value="5k-10k">5,000 - 10,000</option>
                        <option value="10k-50k">10,000 - 50,000</option>
                        <option value="50k-100k">50,000 - 100,000</option>
                        <option value="100k+">100,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content Type *
                      </label>
                      <select
                        required
                        value={formData.contentType}
                        onChange={(e) => setFormData({ ...formData, contentType: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        <option value="travel-blog">Travel Blog</option>
                        <option value="deal-site">Deal/Coupon Site</option>
                        <option value="lifestyle-blog">Lifestyle Blog</option>
                        <option value="video-content">Video Content</option>
                        <option value="social-media">Social Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </Card>
              </FadeIn>

              {/* Social Media */}
              <FadeIn delay={0.3}>
                <Card padding="lg">
                  <h2 className="text-2xl font-semibold text-primary-dark mb-2">
                    Social Media Presence
                  </h2>
                  <p className="text-sm text-text-secondary mb-6">
                    Include at least one social media profile
                  </p>
                  <div className="space-y-4">
                    {[
                      { name: 'instagram', label: 'Instagram', placeholder: 'instagram.com/yourhandle' },
                      { name: 'youtube', label: 'YouTube', placeholder: 'youtube.com/@yourchannel' },
                      { name: 'tiktok', label: 'TikTok', placeholder: 'tiktok.com/@yourhandle' },
                      { name: 'twitter', label: 'Twitter/X', placeholder: 'twitter.com/yourhandle' },
                      { name: 'facebook', label: 'Facebook', placeholder: 'facebook.com/yourpage' },
                    ].map((social) => (
                      <div key={social.name}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {social.label}
                        </label>
                        <input
                          type="url"
                          value={formData[social.name as keyof typeof formData] as string}
                          onChange={(e) => setFormData({ ...formData, [social.name]: e.target.value })}
                          placeholder={social.placeholder}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              {/* Promotion Methods */}
              <FadeIn delay={0.4}>
                <Card padding="lg">
                  <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                    How will you promote Vayo? *
                  </h2>
                  <div className="space-y-3">
                    {[
                      'Blog posts and articles',
                      'Email marketing',
                      'Social media posts',
                      'Video content (YouTube, TikTok)',
                      'Paid advertising',
                      'Deal/coupon listings',
                    ].map((method) => (
                      <label key={method} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.promotionMethods.includes(method)}
                          onChange={() => handleCheckbox(method)}
                          className="mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-gray-700">{method}</span>
                      </label>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              {/* Experience & Additional Info */}
              <FadeIn delay={0.5}>
                <Card padding="lg">
                  <h2 className="text-2xl font-semibold text-primary-dark mb-6">
                    Additional Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Affiliate Marketing Experience *
                      </label>
                      <select
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3-5 years)</option>
                        <option value="expert">Expert (5+ years)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How did you hear about our affiliate program?
                      </label>
                      <input
                        type="text"
                        value={formData.referralSource}
                        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to partner with Vayo?
                      </label>
                      <textarea
                        value={formData.additionalInfo}
                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Tell us about your audience and why Vayo would be a good fit..."
                      />
                    </div>
                  </div>
                </Card>
              </FadeIn>

              {/* Requirements Notice */}
              <FadeIn delay={0.6}>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-primary-dark mb-2">Minimum Requirements</h3>
                      <ul className="text-sm text-text-secondary space-y-1">
                        <li>• Active website or significant social media following</li>
                        <li>• Travel-related content focus</li>
                        <li>• Minimum 5,000 followers OR 10,000 monthly visitors</li>
                        <li>• Professional and compliant content</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Submit */}
              <FadeIn delay={0.7}>
                <div className="flex gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    Submit Application
                  </Button>
                  <Button type="button" variant="secondary" size="lg">
                    Save Draft
                  </Button>
                </div>
                <p className="text-sm text-text-tertiary text-center mt-4">
                  By submitting, you agree to our <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>
                </p>
              </FadeIn>
            </form>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
