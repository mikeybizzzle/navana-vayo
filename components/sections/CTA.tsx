import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-white mb-4">
              Ready to transform your travel program?
            </h2>
            <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust Navan to save time, reduce
              costs, and delight employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 border-0 gap-2"
              >
                Get a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Sales
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-body-sm text-white/80 mt-8">
              No credit card required • Free trial available
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}