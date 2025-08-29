# PrairieSignal Frontend

A modern, professional Next.js 15 application for PrairieSignal — a Calgary-based AI consulting business. Features a beautiful eggshell palette with liquid-glass morphism design, comprehensive service offerings, and professional contact management.

## ✨ Features

- **Modern Design**: Eggshell color scheme with glass-morphism effects
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **SEO Optimized**: Built-in SEO, sitemap generation, and Open Graph support
- **Contact Management**: Professional contact form with email integration
- **Performance**: Next.js 15 with App Router and optimized builds
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: Node.js 20+)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd PrairieSignal

# Install dependencies
npm install

# Set up environment variables
cp env.example .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

Open https://prairiesignal.ca (Production) or http://localhost:3000 (local).

## ⚙️ Environment Configuration

Copy `env.example` to `.env.local` and configure:

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://prairiesignal.ca
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=contact@yourdomain.com

# Business information
NEXT_PUBLIC_BUSINESS_NAME=PrairieSignal
NEXT_PUBLIC_BUSINESS_TELEPHONE=+1-403-XXX-XXXX
NEXT_PUBLIC_BUSINESS_STREET=123 Main Street
NEXT_PUBLIC_BUSINESS_POSTAL=T2P 1J9

# Social media links
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/prairiesignal
NEXT_PUBLIC_X_URL=https://x.com/prairiesignal
NEXT_PUBLIC_GITHUB_URL=https://github.com/prairiesignal
```

## 🏗️ Project Structure

```
PrairieSignal/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   ├── cases/             # Case studies
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/             # Reusable React components
│   ├── Hero.tsx           # Hero section
│   ├── ServicesOverview.tsx
│   ├── CaseStudiesOverview.tsx
│   ├── ContactForm.tsx    # Contact form
│   ├── Nav.tsx            # Navigation
│   └── Footer.tsx         # Footer
├── content/                # Content files
│   └── services.json      # Service definitions
├── styles/                 # Global styles
│   ├── globals.css        # Tailwind + custom styles
│   └── tokens.css         # Design tokens
├── public/                 # Static assets
│   ├── favicon.svg        # Favicon
│   └── og.svg             # Open Graph image
└── lib/                    # Utility functions
```

## 🎨 Design System

### Color Palette

- **Primary**: `#667eea` (Blue)
- **Secondary**: `#764ba2` (Purple)
- **Background**: `#F7F5EE` (Eggshell)
- **Text**: `#0E0F12` (Dark)
- **Muted**: `#6E7280` (Gray)

### Components

- **Glass Cards**: Backdrop blur with subtle borders
- **Gradient Text**: Primary to secondary color transitions
- **Hover Effects**: Smooth animations and transforms
- **Responsive Grid**: Mobile-first layout system

## 📱 Pages & Routes

### Homepage (`/`)

- Hero section with call-to-action
- Services overview
- Case studies preview
- Contact form

### Services (`/services`)

- AI Assistant Setup ($6k+)
- Automation Audit + Pilot ($8k+)
- Analytics Quickstart ($7k+)

### Case Studies (`/cases`)

- AI Assistant deployment results
- Automation pilot outcomes
- Measurable business impact

### About (`/about`)

- Company mission and vision
- Team information
- Timeline and milestones

### Contact (`/contact`)

- Professional contact form
- Business information
- Response time guarantees

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run smoke        # Run smoke tests
```

### Code Quality

- **TypeScript**: Strict type checking
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting (recommended)
- **Tailwind**: Utility-first CSS framework

### Performance

- **Next.js 15**: Latest performance optimizations
- **Image Optimization**: WebP and AVIF support
- **Code Splitting**: Automatic bundle optimization
- **Static Generation**: Pre-rendered pages

## 📧 Contact Form Integration

The contact form integrates with [Resend](https://resend.com) for email delivery:

1. **Setup**: Get API key from Resend
2. **Configure**: Add `RESEND_API_KEY` to environment
3. **Customize**: Update `FROM_EMAIL` and `TO_EMAIL`
4. **Test**: Form includes honeypot protection and rate limiting

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm run start
```

### Environment Variables

Ensure all required environment variables are set in your deployment platform.

## 🔒 Security Features

- **Honeypot Protection**: Bot detection in contact form
- **Rate Limiting**: Contact form abuse prevention
- **Input Validation**: Zod schema validation
- **CORS Configuration**: Proper API security headers

## 📊 Analytics & SEO

- **Built-in SEO**: Meta tags and Open Graph
- **Sitemap**: Automatic generation
- **Robots.txt**: Search engine configuration
- **Schema.org**: Structured data markup
- **Performance**: Core Web Vitals optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to PrairieSignal. All rights reserved.

## 🆘 Support

For support or questions:

- Email: [your-email@domain.com]
- LinkedIn: [Your LinkedIn]
- Website: [https://yourdomain.com]

---

**Built with ❤️ by PrairieSignal**
