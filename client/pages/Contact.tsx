import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Contact Us
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              Have questions about our services? Need help with a report? Want to partner with us? We're here to help.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <section>
                <h2 className="text-2xl font-bold text-automotive-gold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Customer Support</h3>
                    <p className="text-gray-300 text-sm mb-3">For help with reports, billing, or technical issues</p>
                    <p className="text-automotive-gold">support@carleopard.ai</p>
                    <p className="text-gray-400 text-sm">Response time: Within 24 hours</p>
                  </div>

                  <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Business Inquiries</h3>
                    <p className="text-gray-300 text-sm mb-3">For partnerships, dealer programs, or enterprise solutions</p>
                    <p className="text-automotive-gold">business@carleopard.ai</p>
                    <p className="text-gray-400 text-sm">Response time: Within 48 hours</p>
                  </div>

                  <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Privacy & Legal</h3>
                    <p className="text-gray-300 text-sm mb-3">For privacy requests or legal matters</p>
                    <p className="text-automotive-gold">privacy@carleopard.ai</p>
                    <p className="text-gray-400 text-sm">Response time: Within 45 days (privacy requests)</p>
                  </div>

                  <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Press & Media</h3>
                    <p className="text-gray-300 text-sm mb-3">For media inquiries and press releases</p>
                    <p className="text-automotive-gold">press@carleopard.ai</p>
                    <p className="text-gray-400 text-sm">Response time: Within 24 hours</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-automotive-gold mb-6">Other Ways to Reach Us</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Phone Support</h3>
                    <p className="text-automotive-gold text-xl mb-2">1-800-CAR-LEOPARD</p>
                    <p className="text-gray-300 text-sm mb-1">Monday - Friday: 9 AM - 6 PM EST</p>
                    <p className="text-gray-300 text-sm">Saturday: 10 AM - 4 PM EST</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Mailing Address</h3>
                    <p className="text-gray-300">
                      Car Leopard<br />
                      123 Automotive Ave, Suite 100<br />
                      Detroit, MI 48201<br />
                      United States
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Social Media</h3>
                    <div className="space-y-2">
                      <p><a href="https://twitter.com/carleopard" className="text-automotive-gold hover:text-automotive-gold-light">Twitter: @carleopard</a></p>
                      <p><a href="https://linkedin.com/company/carleopard" className="text-automotive-gold hover:text-automotive-gold-light">LinkedIn: /company/carleopard</a></p>
                      <p><a href="https://facebook.com/carleopard" className="text-automotive-gold hover:text-automotive-gold-light">Facebook: /carleopard</a></p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-12 bg-automotive-gold/10 border border-automotive-gold/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-automotive-gold mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-300 mb-4">
                Before reaching out, check our FAQ page for quick answers to common questions about our services, pricing, and reports.
              </p>
              <a 
                href="/faq" 
                className="inline-block bg-automotive-gold text-automotive-black px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors"
              >
                Visit FAQ
              </a>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
