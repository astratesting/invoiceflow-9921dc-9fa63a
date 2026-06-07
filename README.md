# InvoiceFlow - Freelance Invoicing SaaS

A high-impact, Bold Frontier-branded invoicing platform built for solo founders. Get paid faster with professional invoices, Stripe integration, and automated workflows.

![InvoiceFlow Preview](https://via.placeholder.com/800x400/0a0a0a/ff5722?text=InvoiceFlow)

## 🚀 Features

### Core Functionality
- **Marketing Landing Page** - Bold Frontier brand with oversized type, beam motif, near-black/flame-orange/vivid-magenta/acid-green palette
- **Authentication** - NextAuth.js v5 with credentials provider (NO Clerk)
- **Dashboard** - Full freelancer dashboard with invoice management
- **Invoice Creation** - Create professional invoices with line items, tax calculation
- **Email Integration** - Send invoices via Resend with beautiful HTML templates
- **Stripe Payments** - Integrated payment processing with webhook handling
- **Public Invoice View** - Clients can view and pay invoices online
- **PDF Export** - Print-ready invoice preview

### Brand Identity
- **Name**: InvoiceFlow (punchy one-word name)
- **Archetype**: Bold Frontier
- **Colors**: Near-black (#0a0a0a), Flame Orange (#ff5722), Vivid Magenta (#e91e63), Acid Green (#76ff03)
- **Fonts**: Satoshi (body) + Archivo Black (headings)
- **Design**: High-contrast launch brand, oversized type, beam motif

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Auth**: NextAuth.js v5 (credentials)
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Stripe Payment Intents API
- **Email**: Resend
- **Deployment**: Vercel-ready

## 📦 Installation

### Prerequisites
- Node.js 18.17+
- PostgreSQL database
- Stripe account
- Resend account

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/invoiceflow.git
cd invoiceflow

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your actual values

# Set up the database
npx prisma generate
npx prisma db push

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🔧 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-change-in-production

# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/invoiceflow?schema=public"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email (Resend)
RESEND_API_KEY=re_your_resend_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Generate NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

## 💾 Database Setup

### Using Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio
npx prisma studio
```

### Schema Overview

- **User** - Authentication and user data
- **Client** - Client information per user
- **Invoice** - Invoice headers with status (DRAFT, SENT, PAID, OVERDUE)
- **InvoiceItem** - Line items for each invoice
- **Account/Session** - NextAuth required tables

## 💳 Stripe Setup

1. **Create a Stripe account** at [stripe.com](https://stripe.com)

2. **Get your API keys**
   - Dashboard → Developers → API keys
   - Copy Publishable key and Secret key

3. **Set up webhook**
   - Dashboard → Developers → Webhooks
   - Add endpoint: `https://yourdomain.com/api/stripe/webhook`
   - Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
   - Copy Webhook secret

4. **Test mode**
   - Use test API keys
   - Use Stripe test card: 4242 4242 4242 4242

## 📧 Email Setup

1. **Create Resend account** at [resend.com](https://resend.com)

2. **Get API key**
   - Dashboard → API Keys → Create API Key
   - Copy the API key (starts with `re_`)

3. **Verify domain** (optional for production)
   - Add your domain in Resend dashboard
   - Update DNS records as instructed

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Set up PostgreSQL**
   - Use Vercel Postgres, or
   - Use Neon, Supabase, or any PostgreSQL provider
   - Update DATABASE_URL in Vercel environment variables

4. **Update Stripe webhook**
   - Update webhook URL to your production domain
   - Update NEXTAUTH_URL and NEXT_PUBLIC_APP_URL

### Other Deployment Options

- **Docker**: Use `npm run build` and `npm start`
- **Self-hosted**: Deploy to any Node.js hosting provider

## 📁 Project Structure

```
invoiceflow/
├── app/                          # Next.js 15 App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # NextAuth.js v5
│   │   │   ├── [...nextauth]/route.ts
│   │   │   └── register/route.ts
│   │   ├── invoices/route.ts     # Invoice CRUD
│   │   ├── clients/route.ts      # Client CRUD
│   │   ├── stripe/               # Stripe integration
│   │   │   ├── route.ts
│   │   │   ├── create-payment-intent/route.ts
│   │   │   └── webhook/route.ts
│   │   └── email/send/route.ts   # Email sending
│   ├── (marketing)/              # Marketing pages
│   │   ├── page.tsx              # Landing page
│   │   ├── pricing/page.tsx
│   │   └── about/page.tsx
│   ├── dashboard/page.tsx        # User dashboard
│   ├── login/page.tsx            # Login page
│   ├── signup/page.tsx           # Signup page
│   ├── invoice/[id]/page.tsx    # Invoice preview (auth)
│   └── i/[id]/page.tsx          # Public invoice view
├── components/                    # React components
│   ├── ui/                       # UI primitives
│   │   ├── button.tsx
│   │   └── input.tsx
│   ├── auth/                     # Auth components
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── dashboard/                # Dashboard components
│   │   ├── DashboardClient.tsx
│   │   ├── StatsCards.tsx
│   │   ├── InvoicesList.tsx
│   │   └── CreateInvoiceModal.tsx
│   └── invoice/                  # Invoice components
│       ├── InvoicePreview.tsx
│       ├── PublicInvoiceView.tsx
│       └── PaymentForm.tsx
├── lib/                          # Utility libraries
│   ├── prisma.ts                 # Prisma client
│   ├── auth.ts                   # Auth helpers
│   ├── stripe.ts                 # Stripe client
│   ├── email.ts                  # Email functions
│   └── utils.js                  # Utility functions
├── prisma/                       # Database schema
│   └── schema.prisma
├── public/                       # Static assets
├── middleware.ts                  # Auth middleware
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── .gitignore
└── README.md
```

## 🛠 API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/[...nextauth]` - NextAuth endpoints (signin, session, etc.)

### Invoices
- `GET /api/invoices` - List user's invoices
- `POST /api/invoices` - Create new invoice

### Clients
- `GET /api/clients` - List user's clients
- `POST /api/clients` - Create new client

### Stripe
- `POST /api/stripe` - Create payment intent
- `POST /api/stripe/create-payment-intent` - Create payment intent (public)
- `POST /api/stripe/webhook` - Stripe webhook handler

### Email
- `POST /api/email/send` - Send invoice via email

## 🎨 Brand Guidelines

### Colors
- **Near Black**: `#0a0a0a` (backgrounds, text)
- **Flame Orange**: `#ff5722` (CTAs, accents)
- **Vivid Magenta**: `#e91e63` (secondary accents)
- **Acid Green**: `#76ff03` (success states, highlights)

### Typography
- **Headings**: Archivo Black (bold, impactful)
- **Body**: Satoshi (clean, readable)

### Design Principles
- High contrast for accessibility
- Oversized typography for impact
- Gradient beams for visual interest
- Glow effects for interactive elements

## 💰 Pricing Tiers

- **Free**: 3 invoices/month, InvoiceFlow subdomain, basic templates
- **Pro ($15/mo)**: Unlimited invoices, custom branding, Stripe integration, auto reminders
- **Business ($29/mo)**: Team collaboration, advanced analytics, API access, priority support

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration flow
- [ ] User login/logout
- [ ] Create client
- [ ] Create invoice with items
- [ ] Send invoice via email
- [ ] Pay invoice via Stripe
- [ ] View invoice preview
- [ ] Dashboard stats accuracy

### Test Stripe Card
- Number: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits

## 📊 Market Analysis

- **TAM**: $3.2B (Global invoicing software market)
- **SAM**: ~40M English-speaking freelancers
- **SOM**: $900K-$2.7M ARR (target)
- **ICP**: Solo founders 25-45, US/UK/CA/AU, $0-$120K ARR

## 🛡 Security

- All authenticated pages use `dynamic = 'force-dynamic'` (never `dynamic = 'error'`)
- Passwords hashed with bcryptjs
- JWT session strategy
- Middleware protects all authenticated routes
- Stripe webhook signature verification
- Environment variables for all secrets

## 📝 License

MIT License - feel free to use this project for your own SaaS.

## 🤝 Support

For support, email support@invoiceflow.app or visit our [support page](https://invoiceflow.app/support).

---

**Built with ❤️ for freelancers, by freelancers.**

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- NextAuth.js for authentication
- Stripe for payment processing
- Vercel for hosting
- All the freelancers who inspired this project
