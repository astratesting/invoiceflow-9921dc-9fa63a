import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import SignupForm from '@/components/auth/SignupForm'

export default async function SignupPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-near-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-archivo font-black mb-2">
            <span className="text-flame-orange">Invoice</span>
            <span className="text-acid-green">Flow</span>
          </h1>
          <p className="text-gray-400 font-satoshi">Start getting paid faster. Free forever.</p>
        </div>

        <div className="card">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}
