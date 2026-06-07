import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export default function TermsPage() {
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
          Terms of <span className="text-flame-orange">Service</span>
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Acceptance of Terms</h2>
            <p>By accessing or using InvoiceFlow ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Description of Service</h2>
            <p>InvoiceFlow is an invoicing platform that allows freelancers and solo founders to create, send, and track invoices. The Service includes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Invoice creation and management</li>
              <li>Client management</li>
              <li>Payment processing via Stripe</li>
              <li>Email notifications</li>
              <li>Analytics and reporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">User Accounts</h2>
            <p>To use the Service, you must create an account. You agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Payment Terms</h2>
            <p>For paid plans (Pro and Business):</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Fees are billed in advance on a monthly basis</li>
              <li>All fees are non-refundable except as expressly stated</li>
              <li>We may change fees upon 30 days' notice</li>
              <li>You may cancel your subscription at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Intellectual Property</h2>
            <p>You retain all rights to the content you create using the Service (invoices, client data, etc.). We retain all rights to the Service itself, including software, design, and documentation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, InvoiceFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-archivo font-black mb-4 text-white">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="mt-2">Email: legal@invoiceflow.app</p>
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
