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
import Image from 'next/image'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (800) 123-4567',
    description: 'Mon-Sun, 8am-10pm EST',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'hello@vayovault.com',
    description: 'We\'ll respond within 24 hours',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    details: 'Available 24/7',
    description: 'Chat with our member support team',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    details: 'Miami, FL',
    description: '456 Ocean Drive, Suite 200',
  },
]

const supportTopics = [
  {
    title: 'Membership & Billing',
    description: 'Questions about your membership, billing, or cancellation',
    icon: Phone,
  },
  {
    title: 'Booking Support',
    description: 'Help with searching, booking, or modifying your reservations',
    icon: MessageSquare,
  },
  {
    title: 'Price Match',
    description: 'Submit a price match request or check claim status',
    icon: Mail,
  },
  {
    title: 'Technical Help',
    description: 'Website issues, login problems, or account access',
    icon: MapPin,
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
          image={
            <div className="rounded-3xl overflow-hidden shadow-xl relative aspect-[4/3]">
              <Image
                src="/images/Background-Condo.png"
                alt="Vacation property"
                fill
                className="object-cover"
              />
            </div>
          }
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
                        Email *
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
                          Topic
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors"
                        >
                          <option value="">Select topic</option>
                          <option value="membership">Membership & Billing</option>
                          <option value="booking">Booking Support</option>
                          <option value="price-match">Price Match Request</option>
                          <option value="technical">Technical Help</option>
                          <option value="other">Other</option>
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
                        placeholder="How can we help you?"
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
                            24/7 Member Support
                          </div>
                          <p className="text-body-sm text-text-secondary">
                            Our member support team is available around the clock to help with bookings and questions
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
                          Free trial information provided
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-body-sm text-text-secondary">
                          Simple $37/mo membership pricing
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

        {/* Support Topics */}
        <section className="py-20 md:py-32">
          <Container>
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Common Support Topics
                </h2>
                <p className="text-body-lg text-text-secondary">
                  Find quick answers to common questions or contact us directly.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportTopics.map((topic, index) => (
                <FadeIn key={topic.title} delay={index * 0.1}>
                  <Card padding="lg" className="h-full">
                    <topic.icon className="w-6 h-6 text-primary mb-3" />
                    <h3 className="text-[18px] leading-[26px] font-semibold text-primary-dark mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-body-sm text-text-secondary">
                      {topic.description}
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
