import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, Clock, CreditCard } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-near-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-near-black/95 backdrop-blur-sm sticky top-0 z-50">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 beam-bg opacity-10" />
        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="text-7xl md:text-9xl font-archivo font-black mb-6 leading-none">
            <span className="text-white">Get</span>{' '}
            <span className="text-gradient">Paid.</span>{' '}
            <span className="text-white">Fast.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-satoshi">
            The freelance invoicing platform built for solo founders.
            Create, send, and track invoices in minutes—not hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-flame-orange hover:bg-flame-orange/90 text-white text-lg px-8 py-6 glow-orange">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="border-acid-green text-acid-green hover:bg-acid-green/10 text-lg px-8 py-6 glow-green">
                See Demo
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">Free for 3 invoices/mo • No credit card required</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-gray-800 bg-gray-900/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 mb-8 font-satoshi">TRUSTED BY FREELANCERS WORLDWIDE</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-white">50K+ Invoices Created</div>
            <div className="text-2xl font-bold text-acid-green">$12M+ Processed</div>
            <div className="text-2xl font-bold text-flame-orange">4.9/5 Rating</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 bg-near-black">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-archivo font-black text-center mb-20">
            <span className="text-white">Why</span>{' '}
            <span className="text-vivid-magenta">Invoice</span>{' '}
            <span className="text-acid-green">Flow?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-flame-orange" />,
                title: 'Lightning Fast',
                description: 'Create professional invoices in under 2 minutes with our streamlined workflow.',
              },
              {
                icon: <CreditCard className="h-8 w-8 text-acid-green" />,
                title: 'Get Paid Faster',
                description: 'Integrated Stripe payments mean you get paid directly to your bank account.',
              },
              {
                icon: <Shield className="h-8 w-8 text-vivid-magenta" />,
                title: 'Secure & Compliant',
                description: 'Bank-level security with automatic tax calculations and compliance built-in.',
              },
              {
                icon: <Clock className="h-8 w-8 text-flame-orange" />,
                title: 'Auto Reminders',
                description: 'Automatic payment reminders sent to clients so you don\'t have to chase.',
              },
              {
                icon: <CreditCard className="h-8 w-8 text-acid-green" />,
                title: 'Multi-Currency',
                description: 'Invoice in 30+ currencies with real-time exchange rates.',
              },
              {
                icon: <Shield className="h-8 w-8 text-vivid-magenta" />,
                title: 'Tax Automation',
                description: 'Automatic tax calculations for 50+ countries. Stay compliant effortlessly.',
              },
            ].map((feature, i) => (
              <div key={i} className="card hover:border-flame-orange/50 transition-colors group">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-archivo font-black mb-2 text-white group-hover:text-flame-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-satoshi">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-archivo font-black text-center mb-20">
            <span className="text-white">Simple</span>{' '}
            <span className="text-flame-orange">Pricing</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                features: ['3 invoices/month', 'InvoiceFlow subdomain', 'Basic templates', 'Email support'],
                cta: 'Start Free',
                popular: false,
              },
              {
                name: 'Pro',
                price: '$15',
                period: '/month',
                features: ['Unlimited invoices', 'Custom branding', 'Stripe integration', 'Auto reminders', 'PDF export'],
                cta: 'Go Pro',
                popular: true,
              },
              {
                name: 'Business',
                price: '$29',
                period: '/month',
                features: ['Everything in Pro', 'Team collaboration', 'Advanced analytics', 'API access', 'Priority support'],
                cta: 'Go Business',
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`card relative ${plan.popular ? 'border-flame-orange glow-orange' : 'border-gray-800'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-flame-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-archivo font-black mb-2 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-archivo font-black text-flame-orange">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="text-acid-green mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/signup">
                  <Button
                    className={`w-full ${plan.popular ? 'bg-flame-orange hover:bg-flame-orange/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 beam-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-archivo font-black mb-6 text-white">
            Ready to Flow?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Join thousands of freelancers who stopped chasing payments and started growing their business.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-near-black hover:bg-near-black/90 text-white text-lg px-12 py-6 glow-green">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-near-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-xl font-archivo font-black text-flame-orange">Invoice</span>
              <span className="text-xl font-archivo font-black text-acid-green">Flow</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/support" className="hover:text-white">Support</Link>
            </div>
            <p className="text-sm text-gray-500 mt-4 md:mt-0">
              © 2026 InvoiceFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
