import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function Deals() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Local Deals
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-xl mb-8 leading-relaxed">
              Find the best automotive deals in your area with Car Leopard's comprehensive local marketplace analysis.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-automotive-gold mb-6">Coming Soon</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Local Deals feature is currently in development. We're working hard to bring you:
              </p>
              <ul className="text-gray-300 leading-relaxed space-y-2">
                <li>• Real-time pricing from verified dealers in your area</li>
                <li>• Exclusive Car Leopard member discounts</li>
                <li>• Inventory alerts for vehicles matching your criteria</li>
                <li>• Price drop notifications</li>
                <li>• Negotiation insights and dealer ratings</li>
              </ul>
            </section>

            <section className="bg-automotive-gold/10 border border-automotive-gold/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-automotive-gold mb-4">Get Notified</h3>
              <p className="text-gray-300 mb-4">
                Be the first to know when Local Deals launches in your area.
              </p>
              <a 
                href="/smart-buyer-report" 
                className="inline-block bg-automotive-gold text-automotive-black px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors"
              >
                Join the Waitlist
              </a>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
