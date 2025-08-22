import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            About Car Leopard
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Car Leopard is the automotive industry's most trusted vehicle intelligence platform, helping consumers make smarter car buying decisions through comprehensive data analysis and expert insights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-automotive-gold mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We believe every car buyer deserves access to complete, accurate, and actionable vehicle information. Our mission is to eliminate information asymmetry in the automotive marketplace and protect consumers from costly mistakes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-automotive-gold mb-6">What We Do</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Vehicle Intelligence</h3>
                  <p className="text-gray-300 text-sm">Comprehensive vehicle history, market analysis, and risk assessment for every car on the road.</p>
                </div>
                <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Smart Recommendations</h3>
                  <p className="text-gray-300 text-sm">Personalized buying guidance based on your specific needs, budget, and preferences.</p>
                </div>
                <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Market Insights</h3>
                  <p className="text-gray-300 text-sm">Real-time pricing data, depreciation trends, and market forecasts to help you buy at the right time.</p>
                </div>
                <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Consumer Protection</h3>
                  <p className="text-gray-300 text-sm">Advanced fraud detection and dealer verification to protect you from scams and hidden problems.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-automotive-gold mb-6">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Founded by automotive industry veterans who witnessed too many consumers being taken advantage of, Car Leopard was born from a simple idea: what if car buyers had the same information advantage as dealers?
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our founder, Davy, spent years working in automotive sales and finance before realizing that the biggest problem wasn't the cars themselves—it was the lack of transparency in the buying process. Car Leopard was created to level the playing field.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-automotive-gold mb-6">Why Trust Car Leopard?</h2>
              <ul className="text-gray-300 leading-relaxed space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-automotive-gold font-bold">•</span>
                  <span><strong>Independent:</strong> We're not owned by dealers, manufacturers, or lenders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-automotive-gold font-bold">•</span>
                  <span><strong>Transparent:</strong> Our methodology and data sources are clearly explained</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-automotive-gold font-bold">•</span>
                  <span><strong>Expert-led:</strong> Our team includes automotive professionals, data scientists, and consumer advocates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-automotive-gold font-bold">•</span>
                  <span><strong>Consumer-first:</strong> Every feature is designed with your best interests in mind</span>
                </li>
              </ul>
            </section>

            <section className="bg-automotive-gold/10 border border-automotive-gold/20 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-automotive-gold mb-4">Ready to Buy Smarter?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of informed car buyers who use Car Leopard to make confident purchasing decisions.
              </p>
              <a 
                href="/smart-buyer-report" 
                className="inline-block bg-automotive-gold text-automotive-black px-8 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors"
              >
                Get Your Vehicle Report
              </a>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
