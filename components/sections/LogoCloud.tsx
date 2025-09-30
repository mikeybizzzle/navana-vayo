import { Container } from '@/components/ui/Container'

const companies = [
  'Uber',
  'Netflix',
  'Salesforce',
  'Doordash',
  'Figma',
  'Notion',
  'Stripe',
  'Dropbox',
]

export function LogoCloud() {
  return (
    <section className="py-16 bg-background-light">
      <Container>
        <div className="text-center mb-12">
          <p className="text-body-sm text-text-tertiary font-medium uppercase tracking-wider">
            Trusted by industry leaders
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="text-2xl font-bold text-text-primary">
                {company}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}