import { Navbar } from "@/components/ui/navbar";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Effective Date:</strong> August 21, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Who we are</h2>
              <p className="text-gray-300 leading-relaxed">
                Car Leopard ("we," "us") provides car shopping tools and reports at carleopard.ai.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">What we collect</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li><strong>Contact data:</strong> name, email, zip (when you submit forms)</li>
                <li><strong>Usage data:</strong> pages viewed, clicks, device info (via analytics)</li>
                <li><strong>Transaction data:</strong> report purchases and subscription status</li>
                <li><strong>Vehicle data:</strong> VIN/plate you submit to run reports</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">How we use data</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>Provide and improve our services</li>
                <li>Send confirmations, updates, and product news</li>
                <li>Prevent fraud and ensure site security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We share with service providers that help us operate (hosting, payments, email, analytics). We don't sell personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Your choices</h2>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>Opt out of marketing emails via unsubscribe links</li>
                <li>Request access, correction, or deletion: contact@carleopard.ai</li>
                <li>Disable cookies in your browser settings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Data retention</h2>
              <p className="text-gray-300 leading-relaxed">
                We keep data as long as needed for the purposes above or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We use reasonable administrative, technical, and physical safeguards. No method is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Children</h2>
              <p className="text-gray-300 leading-relaxed">
                Not intended for children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                Car Leopard<br />
                123 Automotive Ave, Suite 100<br />
                Detroit, MI 48201<br />
                contact@carleopard.ai
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Changes</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this policy. We'll change the "Effective Date" when we do.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
