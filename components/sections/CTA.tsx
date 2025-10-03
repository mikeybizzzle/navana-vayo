import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function CTA() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/Background-Beach.png"
              alt="Beach vacation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-dark/95" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
            <h2 className="text-display-lg md:text-display-xl font-display font-semibold text-white mb-4">
              Ready to unlock hidden deals?
            </h2>
            <p className="text-body-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial. No credit card required. Cancel anytime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/checkout">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-0 gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/how-it-works">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Trust Badge */}
            <p className="text-body-sm text-white/80 mt-8">
              Join thousands of members saving about 50% on average
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}