import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
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

      <section className="py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-archivo font-black mb-6">
          Built for <span className="text-gradient">Freelancers</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          InvoiceFlow was born from a simple frustration: why is invoicing so damn complicated?
          We're on a mission to make getting paid as simple as sending an email.
        </p>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-archivo font-black mb-4 text-flame-orange">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower every freelancer and solo founder to get paid on time, every time.
                We believe that great work deserves great payment experiences.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-archivo font-black mb-4 text-acid-green">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                A world where freelancers spend zero time chasing payments and 100% of their time
                doing what they love. InvoiceFlow is the bridge to that world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-archivo font-black mb-12 text-white">The Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built by freelancers, for freelancers. We've been in your shoes,
            stayed up late worrying about cash flow, and dealt with the pain of late payments.
            Never again.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-800 bg-near-black py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 InvoiceFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
