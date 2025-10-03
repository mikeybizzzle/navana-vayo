import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { TrendingDown, DollarSign, Percent } from 'lucide-react'

const savingsData = [
  {
    destination: 'Cancun All-Inclusive',
    nights: 7,
    publicPrice: 2899,
    memberPrice: 1449,
    savings: 1450,
    savingsPercent: 50,
  },
  {
    destination: 'Hawaii Resort Package',
    nights: 5,
    publicPrice: 3499,
    memberPrice: 1749,
    savings: 1750,
    savingsPercent: 50,
  },
  {
    destination: 'Caribbean Cruise',
    nights: 7,
    publicPrice: 2199,
    memberPrice: 1099,
    savings: 1100,
    savingsPercent: 50,
  },
]

export function SavingsExamples() {
  const totalSavings = savingsData.reduce((sum, item) => sum + item.savings, 0)
  const avgSavings = Math.round(totalSavings / savingsData.length)

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-white to-primary/5">
      <Container>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-primary-dark mb-4">
              Real savings from real bookings
            </h2>
            <p className="text-body-lg text-text-secondary">
              See exactly how much members save compared to public booking sites.
            </p>
          </div>
        </FadeIn>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-primary-dark mb-2">
                ${avgSavings.toLocaleString()}
              </div>
              <div className="text-text-secondary">Average savings per booking</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-primary-dark mb-2">50%</div>
              <div className="text-text-secondary">Average discount on member rates</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-primary-dark mb-2">$9.4M+</div>
              <div className="text-text-secondary">Total member savings this year</div>
            </div>
          </FadeIn>
        </div>

        {/* Comparison Table */}
        <FadeIn delay={0.4}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary to-primary-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Destination</th>
                    <th className="px-6 py-4 text-center font-semibold">Nights</th>
                    <th className="px-6 py-4 text-right font-semibold">Public Price</th>
                    <th className="px-6 py-4 text-right font-semibold">Member Price</th>
                    <th className="px-6 py-4 text-right font-semibold">You Save</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {savingsData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-background-light transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-primary-dark">
                        {item.destination}
                      </td>
                      <td className="px-6 py-4 text-center text-text-secondary">
                        {item.nights} nights
                      </td>
                      <td className="px-6 py-4 text-right text-text-tertiary line-through">
                        ${item.publicPrice.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-primary">
                        ${item.memberPrice.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="inline-flex flex-col items-end">
                          <span className="font-bold text-green-600">
                            ${item.savings.toLocaleString()}
                          </span>
                          <span className="text-sm text-green-600">
                            ({item.savingsPercent}% off)
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-right font-semibold text-primary-dark">
                      Total Savings:
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-2xl text-green-600">
                      ${totalSavings.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Disclaimer */}
        <FadeIn delay={0.5}>
          <p className="text-center text-sm text-text-tertiary mt-8">
            * Savings are based on actual member bookings compared to publicly available rates on the same dates. Your savings may vary.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
