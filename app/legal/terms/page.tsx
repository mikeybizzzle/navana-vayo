import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Terms of Service | Vayo Vault',
  description: 'Terms of Service for Vayo Vault membership and travel booking services.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-24 bg-background-light">
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Terms of Service
                </h1>
                <p className="text-body-md text-text-secondary">
                  Last updated: January 1, 2025
                </p>
              </div>

              <Card padding="lg" className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    By accessing and using Vayo Vault ("Service", "Platform", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-body-md text-text-secondary">
                    These Terms of Service apply to all visitors, users, and others who access or use the Service. By using the Service, you represent that you are at least 18 years of age.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    2. Membership Agreement
                  </h2>
                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.1 Membership Fees
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Access to Vayo Vault requires a paid membership subscription. The current membership fee is $37 per month, billed monthly unless you select an annual plan. All fees are non-refundable except as expressly stated in our Refund Policy.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.2 Free Trial
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    New members may be eligible for a 14-day free trial. At the end of the trial period, your payment method will be automatically charged the monthly membership fee unless you cancel before the trial ends. Only one free trial is permitted per household.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.3 Automatic Renewal
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Your membership will automatically renew at the end of each billing cycle unless you cancel prior to the renewal date. You may cancel your membership at any time through your account settings or by contacting customer support.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.4 Price Changes
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    We reserve the right to modify membership fees at any time. Any price changes will be communicated to you at least 30 days in advance and will take effect at your next billing cycle.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    3. Booking and Reservations
                  </h2>
                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.1 Booking Process
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    All bookings made through Vayo Vault are subject to availability and confirmation by the respective travel suppliers (hotels, resorts, cruise lines, car rental agencies). A booking is not confirmed until you receive a confirmation email from us.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.2 Payment for Bookings
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Payment for bookings is separate from your membership fee. All booking payments are due at the time of reservation unless otherwise specified. Prices displayed include all mandatory taxes and fees.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.3 Cancellations and Modifications
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    Cancellation and modification policies vary by supplier and booking type. All applicable policies will be clearly displayed before you complete your booking. You are responsible for understanding and complying with these policies.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    3.4 Supplier Terms
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    In addition to these Terms of Service, you agree to comply with all terms and conditions imposed by our travel suppliers. We are not responsible for the acts, errors, omissions, representations, warranties, breaches, or negligence of any such suppliers.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    4. Price Match Guarantee
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    Our Price Match Guarantee is subject to specific terms and conditions as outlined on our Price Match Guarantee page. To qualify:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      The competing price must be publicly available and verifiable
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Must be for identical dates, property, room type, and terms
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Request must be submitted within 24 hours of booking
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Limited to 3 price match requests per membership year
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary">
                    We reserve the right to verify all price match claims and to refuse any request that does not meet our published criteria.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    5. User Accounts and Responsibilities
                  </h2>
                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    5.1 Account Security
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    5.2 Accurate Information
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    You agree to provide accurate, current, and complete information during registration and booking processes. You agree to update your information as necessary to maintain its accuracy.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    5.3 Prohibited Uses
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    You may not use the Service to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Make fraudulent or speculative bookings
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Resell or commercially exploit membership benefits
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Use automated systems to access the Service
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Violate any applicable laws or regulations
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    6. Intellectual Property
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    The Service and its original content, features, and functionality are owned by Vayo Vault and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                  <p className="text-body-md text-text-secondary">
                    You may not copy, modify, distribute, sell, or lease any part of our Service without our express written permission.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    7. Disclaimers and Limitations of Liability
                  </h2>
                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.1 Service "As Is"
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.2 Limitation of Liability
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    To the maximum extent permitted by law, Vayo Vault shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.3 Third-Party Services
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    We are not responsible for the quality, safety, or legality of accommodations, transportation, or other travel services booked through our platform. All claims related to travel services must be directed to the respective supplier.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    8. Termination
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms.
                  </p>
                  <p className="text-body-md text-text-secondary">
                    Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    9. Dispute Resolution
                  </h2>
                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    9.1 Governing Law
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    9.2 Arbitration
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    Any dispute arising from these Terms will be resolved through binding arbitration in accordance with the American Arbitration Association's rules, rather than in court, except that you may assert claims in small claims court if your claims qualify.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    10. Changes to Terms
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                  </p>
                  <p className="text-body-md text-text-secondary">
                    Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to the new terms, you must stop using the Service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    11. Contact Information
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Email: legal@vayovault.com
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Phone: 1-800-VAYO-VAULT
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Mail: Vayo Vault Legal Department, 123 Travel Lane, Suite 100, San Francisco, CA 94102
                    </li>
                  </ul>
                </section>

                <div className="bg-background-light rounded-lg p-6 mt-8">
                  <p className="text-body-sm text-text-secondary">
                    By using Vayo Vault, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
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
