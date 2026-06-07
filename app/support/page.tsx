import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, MessageSquare, FileText } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-near-black text-white">
      <nav className="border-b border-gray-800 bg-near-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-archivo font-black text-flame-orange">Invoice</span>
            <span className="text-2xl font-archivo font-black text-acid-green">Flow</span>
          </Link>
          <Link href="/signup">
            <Button className="bg-flame-orange hover:bg-flame-orange/90 text-white">
              Start Free
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-archivo font-black mb-6 text-center text-white">
          Support <span className="text-flame-orange">Center</span>
        </h1>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Need help? We're here for you. Check out our resources or get in touch.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: <Mail className="h-8 w-8 text-flame-orange" />,
              title: 'Email Support',
              description: 'Send us an email and we\'ll get back to you within 24 hours.',
              action: 'support@invoiceflow.app',
              link: 'mailto:support@invoiceflow.app',
            },
            {
              icon: <MessageSquare className="h-8 w-8 text-acid-green" />,
              title: 'Live Chat',
              description: 'Chat with our support team in real-time (available 9am-5pm EST).',
              action: 'Chat with us',
              link: '#chat',
            },
            {
              icon: <FileText className="h-8 w-8 text-vivid-magenta" />,
              title: 'Documentation',
              description: 'Browse our help articles and guides to get started.',
              action: 'View docs',
              link: '#docs',
            },
          ].map((item) => (
            <div key={item.title} className="card text-center">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-archivo font-black mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-flame-orange hover:text-flame-orange/80 font-medium"
              >
                {item.action} →
              </a>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-archivo font-black mb-8 text-center text-white">
            Frequently Asked <span className="text-flame-orange">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How do I create my first invoice?',
                a: 'After signing up, go to your dashboard and click "New Invoice". Fill in your client details, add line items, and click "Create Invoice". You can then send it via email or share the payment link.',
              },
              {
                q: 'How does payment processing work?',
                a: 'We use Stripe to process payments securely. When a client pays an invoice, the funds go directly to your connected Stripe account. Stripe fees apply.',
              },
              {
                q: 'Can I cancel my subscription?',
                a: 'Yes, you can cancel your Pro or Business subscription at any time from your account settings. You\'ll continue to have access until the end of your billing period.',
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. We use industry-standard encryption for all data, both in transit and at rest. We never store your full payment information - that\'s handled securely by Stripe.',
              },
              {
                q: 'What happens if a client doesn\'t pay?',
                a: 'You can send automatic payment reminders from your dashboard. For persistent issues, we recommend following up directly with your client or seeking legal advice for collections.',
              },
            ].map((faq) => (
              <div key={faq.q} className="card">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-archivo font-black mb-4 text-white">Still need help?</h2>
          <p className="text-gray-400 mb-6">Our support team is just an email away.</p>
          <a href="mailto:support@invoiceflow.app">
            <Button className="bg-flame-orange hover:bg-flame-orange/90 text-white">
              Contact Support
            </Button>
          </a>
        </div>
      </div>

      <footer className="border-t border-gray-800 bg-near-black py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 InvoiceFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
