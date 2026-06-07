import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export default function PrivacyPage() {
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

      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-5xl font-archivo font-black mb-8 text-white">
          Privacy <span className="text-flame-orange">Policy</span>
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Information We Collect</h2>
            <p>We collect information you provide directly when you create an account, create invoices, or contact us for support. This includes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Name and email address</li>
              <li>Client information (name, email, company)</li>
              <li>Invoice data (items, amounts, dates)</li>
              <li>Payment information (processed securely by Stripe)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide and maintain our service</li>
              <li>Process payments and send invoices</li>
              <li>Send you important updates about your account</li>
              <li>Improve our service and develop new features</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Data Security</h2>
            <p>We implement industry-standard security measures to protect your data:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All data is encrypted in transit (TLS 1.3)</li>
              <li>Passwords are hashed using bcrypt</li>
              <li>Database connections are encrypted</li>
              <li>Regular security audits and updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Stripe</strong> - Payment processing (see their privacy policy)</li>
              <li><strong>Resend</strong> - Email delivery (see their privacy policy)</li>
              <li><strong>Vercel</strong> - Hosting and infrastructure (see their privacy policy)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: privacy@invoiceflow.app</p>
          </section>

          <section>
            <p className="text-sm text-gray-500 mt-8">Last updated: January 1, 2026</p>
          </section>
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
