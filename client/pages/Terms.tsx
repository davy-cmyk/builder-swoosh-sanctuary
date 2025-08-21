import { Navbar } from "@/components/ui/navbar";

export default function Terms() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last Updated:</strong> August 21, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">1. Acceptance</h2>
              <p className="text-gray-300 leading-relaxed">
                By using our site, you agree to these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">2. Services</h2>
              <p className="text-gray-300 leading-relaxed">
                We provide car research tools, including reports and calculators. Features may change without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">3. Your responsibilities</h2>
              <p className="text-gray-300 leading-relaxed">
                Provide accurate information. Don't misuse the site, attempt to break security, or violate laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">4. Intellectual property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content, logos, and trademarks are owned by Car Leopard or licensors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">5. Paid services</h2>
              <p className="text-gray-300 leading-relaxed">
                Prices may change. Taxes may apply. Refunds are at our discretion unless required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">6. No professional advice</h2>
              <p className="text-gray-300 leading-relaxed">
                Information is for informational purposes only and isn't legal, financial, or mechanical advice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">7. Disclaimers</h2>
              <p className="text-gray-300 leading-relaxed">
                Services are provided "as is." We disclaim warranties to the fullest extent allowed by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">8. Limitation of liability</h2>
              <p className="text-gray-300 leading-relaxed">
                We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">9. Third-party links</h2>
              <p className="text-gray-300 leading-relaxed">
                We're not responsible for external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">10. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We may suspend or terminate access at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">11. Governing law</h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of Michigan, United States.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">12. Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                contact@carleopard.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
