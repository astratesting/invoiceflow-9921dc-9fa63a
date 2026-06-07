import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '3 invoices per month',
        'InvoiceFlow subdomain',
        'Basic invoice templates',
        'Email support',
        'PDF export',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$15',
      period: '/month',
      description: 'For growing freelancers',
      features: [
        'Unlimited invoices',
        'Custom branding',
        'Stripe payment integration',
        'Automatic payment reminders',
        'Invoice scheduling',
        'Email & chat support',
        'Advanced templates',
      ],
      cta: 'Go Pro',
      popular: true,
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'For agencies and teams',
      features: [
        'Everything in Pro',
        'Team collaboration (up to 5 users)',
        'Client portal',
        'Advanced analytics & reports',
        'API access',
        'Custom workflows',
        'Priority support',
        'White-label option',
      ],
      cta: 'Go Business',
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-near-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-near-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-archivo font-black text-flame-orange">Invoice</span>
            <span className="text-2xl font-archivo font-black text-acid-green">Flow</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-flame-orange">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-flame-orange hover:bg-flame-orange/90 text-white">
                Start Free
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-archivo font-black mb-6">
          <span className="text-white">Simple</span>{' '}
          <span className="text-gradient">Pricing</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Start free. Upgrade when you're ready. No hidden fees, no surprises.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card relative ${
                  plan.popular
                    ? 'border-flame-orange glow-orange'
                    : 'border-gray-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-flame-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-archivo font-black mb-2 text-white">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-archivo font-black text-flame-orange">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-300">
                      <Check className="h-5 w-5 text-acid-green mr-2 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/signup" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-flame-orange hover:bg-flame-orange/90'
                        : 'bg-gray-800 hover:bg-gray-700'
                    } text-white`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-archivo font-black text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can I upgrade or downgrade anytime?',
                a: 'Yes! You can change your plan at any time. When upgrading, you\'ll be charged the prorated amount. When downgrading, the new rate will apply at the start of the next billing cycle.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely through Stripe.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Our Free plan is free forever with no time limit. For Pro and Business plans, you can start with a 14-day free trial. No credit card required for the trial.',
              },
              {
                q: 'Can I cancel my subscription?',
                a: 'Yes, you can cancel your subscription at any time from your account settings. You\'ll continue to have access until the end of your billing period.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team for a full refund.',
              },
            ].map((faq) => (
              <div key={faq.question} className="card">
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 beam-bg text-center">
        <h2 className="text-5xl font-archivo font-black mb-6 text-white">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Join thousands of freelancers who trust InvoiceFlow for their invoicing needs.
        </p>
        <Link href="/signup">
          <Button size="lg" className="bg-near-black hover:bg-near-black/90 text-white text-lg px-12 py-6 glow-green">
            Create Free Account
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-near-black py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 InvoiceFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
