'use client'

import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    feature: 'Monthly Cost',
    luxuryClubs: '$1,000 - $3,000',
    vayoVault: '$37',
    vayoAdvantage: true,
  },
  {
    feature: 'Contracts',
    luxuryClubs: 'Annual commitments',
    vayoVault: 'Cancel anytime',
    vayoAdvantage: true,
  },
  {
    feature: 'Timeshare Pitches',
    luxuryClubs: 'Often required',
    vayoVault: 'Never',
    vayoAdvantage: true,
  },
  {
    feature: 'Access to Deals',
    luxuryClubs: 'Exclusive inventory',
    vayoVault: 'Same wholesale access',
    vayoAdvantage: false,
  },
  {
    feature: 'Free Trial',
    luxuryClubs: 'Rarely offered',
    vayoVault: '14 days',
    vayoAdvantage: true,
  },
  {
    feature: 'Who It\'s For',
    luxuryClubs: 'Ultra-wealthy',
    vayoVault: 'Budget-conscious travelers',
    vayoAdvantage: true,
  },
]

export function LuxuryComparison() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background-light to-white">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Not Your Typical Travel Club
            </div>
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Why pay $1,000s/month?
            </h2>
            <p className="text-body-lg text-text-secondary">
              Most travel clubs charge thousands per month. We offer the same wholesale access for just $37.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600 bg-gray-50">
                      Feature
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600 bg-gray-50">
                      Luxury Travel Clubs
                    </th>
                    <th className="px-6 py-5 text-center text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary-dark">
                      Vayo Vault
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-background-light transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-primary-dark">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-text-secondary">
                        {row.luxuryClubs}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          {row.vayoAdvantage && (
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                          )}
                          <span className={`text-sm font-semibold ${
                            row.vayoAdvantage ? 'text-primary' : 'text-gray-700'
                          }`}>
                            {row.vayoVault}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Banner */}
            <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-6 text-center">
              <p className="text-white text-lg font-semibold mb-2">
                Same wholesale deals. 97% lower cost.
              </p>
              <p className="text-white/90 text-sm">
                No timeshare presentations. No high-pressure sales. Just straightforward savings.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Additional Trust Signals */}
        <FadeIn delay={0.4}>
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-1">No Timeshares</h3>
              <p className="text-sm text-text-secondary">
                Zero presentations. Zero pressure. Ever.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-1">No Contracts</h3>
              <p className="text-sm text-text-secondary">
                Cancel anytime. No annual commitments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-primary-dark mb-1">No Hidden Fees</h3>
              <p className="text-sm text-text-secondary">
                $37/month. That's it. Transparent pricing.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
