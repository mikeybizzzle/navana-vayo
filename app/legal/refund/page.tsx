import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'
import { CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy | Vayo Vault',
  description: 'Refund and cancellation policy for Vayo Vault memberships and travel bookings.',
}

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="py-24 bg-background-light">
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Refund Policy
                </h1>
                <p className="text-body-md text-text-secondary">
                  Last updated: January 1, 2025
                </p>
              </div>

              <Card padding="lg" className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    1. Overview
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    This Refund Policy outlines the terms and conditions for refunds on both Vayo Vault membership fees and travel bookings made through our platform. Please read this policy carefully before making any purchases.
                  </p>
                  <p className="text-body-md text-text-secondary">
                    This policy is divided into two sections: Membership Refunds and Travel Booking Refunds. Different terms apply to each.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    2. Membership Refunds
                  </h2>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.1 Free Trial Cancellation
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    If you cancel your membership during the 14-day free trial period, you will not be charged. No refund is necessary as no payment has been collected.
                  </p>
                  <p className="text-body-md text-text-secondary mb-4">
                    To avoid being charged, you must cancel before 11:59 PM on the last day of your trial period.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.2 Monthly Membership Cancellation
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Monthly memberships can be cancelled at any time. However, membership fees are non-refundable.
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      When you cancel, you will retain access until the end of your current billing period
                    </li>
                    <li className="text-body-md text-text-secondary">
                      You will not be charged for the next billing cycle
                    </li>
                    <li className="text-body-md text-text-secondary">
                      No refunds are provided for partial months or unused time
                    </li>
                  </ul>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.3 Annual Membership Cancellation
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Annual memberships are non-refundable except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Within 30 days of initial purchase, with no bookings made
                    </li>
                    <li className="text-body-md text-text-secondary">
                      If Vayo Vault discontinues service entirely
                    </li>
                    <li className="text-body-md text-text-secondary">
                      If required by law in your jurisdiction
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary mb-4">
                    Refunds for annual memberships will be prorated based on the unused portion of your membership, minus any savings you received compared to monthly pricing.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.4 Exceptions and Special Circumstances
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    We may consider refund requests on a case-by-case basis for:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Billing errors or duplicate charges
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Technical issues that prevented you from using the service
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Unauthorized charges (must be reported within 60 days)
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary">
                    To request an exception, contact our support team at support@vayovault.com with your account details and explanation.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    3. Travel Booking Refunds
                  </h2>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.1 General Policy
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Refund policies for travel bookings (hotels, resorts, cruises, car rentals) are determined by the individual travel suppliers and vary by booking.
                  </p>
                  <p className="text-body-md text-text-secondary mb-4">
                    <strong>Important:</strong> All cancellation and refund terms are clearly displayed before you complete your booking. You are responsible for reviewing and understanding these terms before confirming your reservation.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.2 Refundable vs. Non-Refundable Bookings
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Bookings are typically categorized as:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <h4 className="text-body-lg font-semibold text-primary-dark">Refundable</h4>
                      </div>
                      <ul className="list-disc pl-6 space-y-2">
                        <li className="text-body-sm text-text-secondary">
                          Can be cancelled for a full or partial refund
                        </li>
                        <li className="text-body-sm text-text-secondary">
                          Usually has a free cancellation window
                        </li>
                        <li className="text-body-sm text-text-secondary">
                          May have higher upfront cost
                        </li>
                        <li className="text-body-sm text-text-secondary">
                          Refund timeline: 5-10 business days
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="w-6 h-6 text-red-600" />
                        <h4 className="text-body-lg font-semibold text-primary-dark">Non-Refundable</h4>
                      </div>
                      <ul className="list-disc pl-6 space-y-2">
                        <li className="text-body-sm text-text-secondary">
                          Payment is final upon booking
                        </li>
                        <li className="text-body-sm text-text-secondary">
                          Offers deeper discounts
                        </li>
                        <li className="text-body-sm text-text-secondary">
                          No refund if cancelled
                        </li>
                        <li className="text-body-sm text-text-secondary">
                          May allow date changes (with fees)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.3 Cancellation Deadlines
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Common cancellation windows include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      <strong>Hotels/Resorts:</strong> Typically 24-72 hours before check-in
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Cruises:</strong> Usually 30-90 days before departure
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Car Rentals:</strong> Often 24-48 hours before pickup
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary mb-4">
                    Cancellations made after the deadline may result in penalties or loss of full payment, even for refundable bookings.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.4 How to Request a Refund
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    To cancel a booking and request a refund:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Log in to your Vayo Vault account
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Navigate to "My Bookings"
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Select the booking you wish to cancel
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Click "Cancel Booking" and follow the prompts
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Review the refund amount and confirm cancellation
                    </li>
                  </ol>
                  <p className="text-body-md text-text-secondary mb-4">
                    Alternatively, contact our support team at 1-800-VAYO-VAULT or support@vayovault.com for assistance with cancellations.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.5 Refund Processing Time
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Refunds are processed according to the following timeline:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      <strong>Vayo Vault processing:</strong> 2-3 business days
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Supplier confirmation:</strong> 3-5 business days
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Bank/card issuer:</strong> 5-10 business days
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary">
                    Total refund time typically ranges from 10-18 business days. Refunds are issued to the original payment method used for the booking.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    4. Special Circumstances
                  </h2>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.1 Weather and Natural Disasters
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    In cases of severe weather or natural disasters, many suppliers offer flexible cancellation or rebooking options. We will work with you and our partners to find the best resolution.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.2 Medical Emergencies
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Some suppliers may waive cancellation fees for documented medical emergencies. Contact our support team immediately if you need to cancel due to a medical situation. Documentation (such as a doctor's note) may be required.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.3 Travel Restrictions
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    If government-imposed travel restrictions prevent you from traveling, we will work with suppliers to arrange refunds or credits when possible. However, refund eligibility depends on the individual supplier's policy.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.4 Supplier Cancellations
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    If a supplier cancels your booking (hotel closure, cruise cancellation, etc.), you are entitled to a full refund. We will process this refund immediately and help you find alternative accommodations if needed.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    5. Travel Insurance
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We strongly recommend purchasing travel insurance for added protection. Travel insurance can cover:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Trip cancellation for any reason
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Medical emergencies during travel
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Lost luggage or delayed flights
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Emergency evacuations
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary">
                    Travel insurance is available during the booking process with select partners. Terms and coverage vary by provider.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    6. Disputes and Chargebacks
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    If you have concerns about a charge or booking, please contact us directly before initiating a chargeback with your bank or credit card company. We are committed to resolving disputes fairly and quickly.
                  </p>
                  <p className="text-body-md text-text-secondary mb-4">
                    Chargebacks filed without first attempting to resolve the issue with us may result in:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Suspension of your Vayo Vault account
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Cancellation of active bookings
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Inability to rejoin Vayo Vault in the future
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    7. Changes to This Policy
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website.
                  </p>
                  <p className="text-body-md text-text-secondary">
                    Your continued use of Vayo Vault after changes are posted constitutes your acceptance of the updated policy. We encourage you to review this policy periodically.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    8. Contact Information
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    For questions about refunds, cancellations, or this policy, please contact us:
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="text-body-md text-text-secondary">
                      <strong>Email:</strong> support@vayovault.com
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Phone:</strong> 1-800-VAYO-VAULT (available 24/7)
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Live Chat:</strong> Available through your account dashboard
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Mail:</strong> Vayo Vault Customer Service, 123 Travel Lane, Suite 100, San Francisco, CA 94102
                    </li>
                  </ul>
                </section>

                <div className="bg-background-light rounded-lg p-6 mt-8">
                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    Summary
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-sm text-text-secondary">
                        Cancel free trial anytime with no charge
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-sm text-text-secondary">
                        Membership fees are non-refundable except for special circumstances
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-sm text-text-secondary">
                        Travel booking refunds depend on supplier policies
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-sm text-text-secondary">
                        Refund processing takes 10-18 business days
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body-sm text-text-secondary">
                        Contact support before initiating chargebacks
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </main>
      <Footer />
    </>
  )
}
