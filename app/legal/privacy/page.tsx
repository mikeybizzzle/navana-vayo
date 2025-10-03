import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { FadeIn } from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Privacy Policy | Vayo Vault',
  description: 'Privacy Policy for Vayo Vault. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-24 bg-background-light">
        <Container>
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
                  Privacy Policy
                </h1>
                <p className="text-body-md text-text-secondary">
                  Last updated: January 1, 2025
                </p>
              </div>

              <Card padding="lg" className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    Vayo Vault ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Service").
                  </p>
                  <p className="text-body-md text-text-secondary">
                    By using our Service, you consent to the data practices described in this policy. If you do not agree with this policy, please do not access or use our Service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    2. Information We Collect
                  </h2>
                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.1 Personal Information
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    We collect personal information that you voluntarily provide when you:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Register for a membership account
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Make a booking or reservation
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Contact customer support
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Subscribe to our newsletter or marketing communications
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Participate in surveys or promotions
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary mb-4">
                    This information may include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Name, email address, phone number
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Billing and shipping addresses
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Payment card information (processed securely through third-party payment processors)
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Travel preferences and booking history
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Date of birth (for age verification)
                    </li>
                  </ul>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.2 Automatically Collected Information
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    When you access our Service, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Device information (IP address, browser type, operating system)
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Usage data (pages visited, time spent, click patterns)
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Location data (if you grant permission)
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Cookies and similar tracking technologies
                    </li>
                  </ul>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    2.3 Information from Third Parties
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    We may receive information about you from third parties, such as social media platforms (if you choose to connect your account), payment processors, fraud prevention services, and travel suppliers.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Process your membership registration and payments
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Facilitate travel bookings and reservations
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Send booking confirmations and travel-related updates
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Provide customer support and respond to inquiries
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Personalize your experience and provide tailored recommendations
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Send marketing communications (with your consent)
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Detect and prevent fraud or unauthorized activities
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Analyze usage patterns and improve our Service
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Comply with legal obligations
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    4. Information Sharing and Disclosure
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We may share your information with:
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.1 Travel Suppliers
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    We share booking information with hotels, resorts, cruise lines, car rental agencies, and other travel service providers to fulfill your reservations.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.2 Service Providers
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    We engage third-party companies to perform services on our behalf, such as payment processing, data analytics, email delivery, hosting services, customer support, and marketing assistance.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.3 Legal Requirements
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    We may disclose your information if required by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, government agencies).
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.4 Business Transfers
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring entity.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    4.5 With Your Consent
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    We may share your information for any other purpose disclosed to you at the time we collect the information or with your consent.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    5. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We use cookies, web beacons, and similar technologies to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Remember your preferences and settings
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Understand how you use our Service
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Personalize content and advertisements
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Analyze traffic and usage patterns
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary mb-4">
                    You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our Service.
                  </p>
                  <p className="text-body-md text-text-secondary">
                    We also use third-party analytics services (such as Google Analytics) to help us understand how users engage with our Service.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    6. Data Security
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Encryption of data in transit and at rest
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Secure payment processing through PCI-DSS compliant providers
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Regular security assessments and penetration testing
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Access controls and authentication requirements
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Employee training on data protection practices
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary">
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    7. Your Privacy Rights
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.1 Access and Portability
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    You can request access to the personal information we hold about you and receive a copy in a portable format.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.2 Correction
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    You can update or correct your personal information through your account settings or by contacting us.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.3 Deletion
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    You can request deletion of your personal information, subject to certain legal exceptions (e.g., where we're required to retain records for compliance purposes).
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.4 Opt-Out of Marketing
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    You can unsubscribe from marketing emails by clicking the "unsubscribe" link in any marketing email or by updating your communication preferences in your account.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.5 California Privacy Rights
                  </h3>
                  <p className="text-body-md text-text-secondary mb-4">
                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, use, and share, and the right to opt-out of the sale of your personal information.
                  </p>

                  <h3 className="text-[20px] leading-[28px] font-semibold text-primary-dark mb-3">
                    7.6 European Privacy Rights
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    If you are located in the European Economic Area (EEA) or UK, you have rights under the General Data Protection Regulation (GDPR), including the right to object to processing, restrict processing, and lodge a complaint with a supervisory authority.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    8. Data Retention
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Provide our Service and maintain your membership
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Comply with legal, tax, and accounting obligations
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Resolve disputes and enforce our agreements
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Detect and prevent fraud
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary">
                    When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    9. Children's Privacy
                  </h2>
                  <p className="text-body-md text-text-secondary">
                    Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    10. International Data Transfers
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your jurisdiction.
                  </p>
                  <p className="text-body-md text-text-secondary">
                    When we transfer personal information internationally, we use appropriate safeguards such as standard contractual clauses approved by relevant authorities to ensure your information remains protected.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    11. Third-Party Links
                  </h2>
                  <p className="text-body-md text-text-secondary">
                    Our Service may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    12. Changes to This Privacy Policy
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="text-body-md text-text-secondary">
                      Posting the updated policy on our website
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Sending an email notification to registered users
                    </li>
                    <li className="text-body-md text-text-secondary">
                      Displaying a prominent notice on our Service
                    </li>
                  </ul>
                  <p className="text-body-md text-text-secondary">
                    Your continued use of the Service after such modifications constitutes your acknowledgment and acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-[28px] leading-[36px] font-semibold text-primary-dark mb-4">
                    13. Contact Us
                  </h2>
                  <p className="text-body-md text-text-secondary mb-4">
                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="text-body-md text-text-secondary">
                      <strong>Email:</strong> privacy@vayovault.com
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Phone:</strong> 1-800-VAYO-VAULT
                    </li>
                    <li className="text-body-md text-text-secondary">
                      <strong>Mail:</strong> Vayo Vault Privacy Team, 123 Travel Lane, Suite 100, San Francisco, CA 94102
                    </li>
                  </ul>
                </section>

                <div className="bg-background-light rounded-lg p-6 mt-8">
                  <p className="text-body-sm text-text-secondary">
                    By using Vayo Vault, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
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
