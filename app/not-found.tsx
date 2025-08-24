import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section">
      <div className="container-wide text-center">
        <div className="mb-8">
          {/* Logo at the top */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Nexus_Logo.png"
              alt="Nexus AI Logo"
              width={180}
              height={70}
              className="h-14 w-auto"
              priority
            />
          </div>

          <h1 className="text-8xl md:text-9xl font-bold gradient-title mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track to transforming your business with AI.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="/" className="btn-primary">
            Back to Home <span className="ml-2">→</span>
          </Link>
          <Link href="/services" className="btn-outline">
            Explore Services
          </Link>
          <Link href="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card-glass text-center">
            <div className="w-12 h-12 mb-4 mx-auto rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-2xl flex items-center justify-center">
              🤖
            </div>
            <h3 className="font-semibold text-lg mb-2">AI Assistant Setup</h3>
            <p className="text-muted text-sm">
              Deploy intelligent assistants for your business
            </p>
          </div>

          <div className="card-glass text-center">
            <div className="w-12 h-12 mb-4 mx-auto rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-2xl flex items-center justify-center">
              ⚙️
            </div>
            <h3 className="font-semibold text-lg mb-2">Automation Audit</h3>
            <p className="text-muted text-sm">
              Optimize your workflows and processes
            </p>
          </div>

          <div className="card-glass text-center">
            <div className="w-12 h-12 mb-4 mx-auto rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-2xl flex items-center justify-center">
              📊
            </div>
            <h3 className="font-semibold text-lg mb-2">Analytics Quickstart</h3>
            <p className="text-muted text-sm">Get insights from your data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
