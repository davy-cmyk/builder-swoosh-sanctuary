import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function DoNotSell() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Do Not Sell My Personal Information
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Your Privacy Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Under the California Consumer Privacy Act (CCPA) and other applicable privacy laws, you have the right to opt out of the sale of your personal information.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Car Leopard does not sell personal information in the traditional sense. However, we may share information with service providers and partners in ways that could be considered a "sale" under certain privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">How to Opt Out</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To opt out of any potential sale of your personal information, you can:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2 mb-6">
                <li>• Email us at privacy@carleopard.ai</li>
                <li>• Use the contact form on our Contact page</li>
                <li>• Call us at 1-800-CAR-LEOPARD</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We will process your request within 45 days and confirm your opt-out status.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">What Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The types of personal information we may collect include:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Contact information (name, email, phone)</li>
                <li>• Vehicle information (VIN, license plate)</li>
                <li>• Usage data (website interactions)</li>
                <li>• Payment information (for report purchases)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Verification Process</h2>
              <p className="text-gray-300 leading-relaxed">
                To protect your privacy, we may need to verify your identity before processing your opt-out request. This may include asking for additional information to confirm you are the person whose information we have on file.
              </p>
            </section>

            <section className="bg-automotive-gold/10 border border-automotive-gold/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-automotive-gold mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                If you have questions about your privacy rights or need assistance with an opt-out request, please contact us:
              </p>
              <p className="text-gray-300">
                <strong>Email:</strong> privacy@carleopard.ai<br />
                <strong>Phone:</strong> 1-800-CAR-LEOPARD<br />
                <strong>Mail:</strong> Car Leopard Privacy Team<br />
                123 Automotive Ave, Suite 100<br />
                Detroit, MI 48201
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
