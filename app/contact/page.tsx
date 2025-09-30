'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (800) 123-4567',
    description: 'Mon-Fri, 9am-6pm EST',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@navan.com',
    description: 'We\'ll respond within 24 hours',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    details: 'Available now',
    description: 'Chat with our support team',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    details: 'San Francisco, CA',
    description: '123 Market Street, Suite 400',
  },
]

const offices = [
  {
    city: 'San Francisco',
    address: '123 Market Street, Suite 400',
    region: 'North America HQ',
  },
  {
    city: 'New York',
    address: '456 Broadway, Floor 12',
    region: 'East Coast',
  },
  {
    city: 'London',
    address: '789 Oxford Street',
    region: 'Europe HQ',
  },
  {
    city: 'Singapore',
    address: '321 Orchard Road',
    region: 'Asia Pacific HQ',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Header />
      <main>
        <PageHero
          title="Get in touch"
          description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          background="default"
        />

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <FadeIn key={method.title} delay={index * 0.1}>
                  <Card padding="lg" className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-2">
                      {method.title}
                    </h3>
                    <p className="text-body-md text-primary font-medium mb-1">
                      {method.details}
                    </p>
                    <p className="text-body-sm text-text-secondary">
                      {method.description}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-20 md:py-32 bg-background-light">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <FadeIn>
                <Card padding="lg">
                  <h2 className="text-[28px] leading-[36px] font-display font-semibold text-primary-dark mb-6">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-body-sm font-medium text-text-primary mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-body-sm font-medium text-text-primary mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-body-sm font-medium text-text-primary mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-body-sm font-medium text-text-primary mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-body-sm font-medium text-text-primary mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-body-sm font-medium text-text-primary mb-2">
                          Company Size
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="">Select size</option>
                          <option value="1-50">1-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501-1000">501-1000 employees</option>
                          <option value="1000+">1000+ employees</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-body-sm font-medium text-text-primary mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-body-sm text-text-secondary text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                </Card>
              </FadeIn>

              {/* Info Sidebar */}
              <div className="space-y-8">
                <FadeIn delay={0.2}>
                  <Card padding="lg" variant="purple">
                    <h3 className="text-[24px] leading-[32px] font-semibold text-primary-dark mb-4">
                      Need immediate help?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-primary-dark mb-1">
                            24/7 Support
                          </div>
                          <p className="text-body-sm text-text-secondary">
                            For existing customers, our support team is available around the clock
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-primary-dark mb-1">
                            Live Chat
                          </div>
                          <p className="text-body-sm text-text-secondary">
                            Chat with our team in real-time during business hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <Card padding="lg">
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-4">
                      What to expect
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-body-sm text-text-secondary">
                          Response within 24 hours
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-body-sm text-text-secondary">
                          Personalized demo available
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-body-sm text-text-secondary">
                          Custom pricing proposal
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-body-sm text-text-secondary">
                          No high-pressure sales tactics
                        </p>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Office Locations */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Our Offices
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Visit us at one of our locations around the world.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <FadeIn key={office.city} delay={index * 0.1}>
                  <Card padding="lg">
                    <MapPin className="w-6 h-6 text-primary mb-3" />
                    <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-1">
                      {office.city}
                    </h3>
                    <p className="text-body-sm text-primary font-medium mb-2">
                      {office.region}
                    </p>
                    <p className="text-body-sm text-text-secondary">
                      {office.address}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
