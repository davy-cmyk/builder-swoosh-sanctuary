import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function FuelPicks() {
  const fuelTypes = [
    {
      type: "Gas",
      href: "/fuel-picks/gas",
      icon: "⛽",
      description: "Best gasoline vehicles for efficiency and value",
      topPick: "2024 Toyota Camry Hybrid"
    },
    {
      type: "Hybrid",
      href: "/fuel-picks/hybrid",
      icon: "🔋",
      description: "Top hybrid vehicles combining efficiency and performance",
      topPick: "2024 Toyota Prius Prime"
    },
    {
      type: "EV",
      href: "/fuel-picks/ev",
      icon: "⚡",
      description: "Leading electric vehicles for the future of driving",
      topPick: "2024 Tesla Model 3"
    },
    {
      type: "Diesel",
      href: "/fuel-picks/diesel",
      icon: "🚛",
      description: "Best diesel vehicles for power and efficiency",
      topPick: "2024 Chevrolet Silverado 2500HD"
    }
  ];

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Top Picks by Fuel Type
          </h1>
          
          <p className="text-gray-300 text-xl mb-12 leading-relaxed">
            Discover the best vehicles for each fuel type, carefully selected by our automotive experts based on reliability, efficiency, and value.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fuelTypes.map((fuel) => (
              <Card key={fuel.type} className="bg-automotive-black-light border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{fuel.icon}</div>
                  <h3 className="text-2xl font-bold text-automotive-gold mb-3">{fuel.type}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{fuel.description}</p>
                  <div className="bg-automotive-gold/10 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-400 mb-1">Top Pick:</p>
                    <p className="text-automotive-gold font-semibold text-sm">{fuel.topPick}</p>
                  </div>
                  <a 
                    href={fuel.href}
                    className="inline-block bg-automotive-gold text-automotive-black px-4 py-2 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors text-sm"
                  >
                    View {fuel.type} Picks
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16 bg-automotive-gold/10 border border-automotive-gold/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-automotive-gold mb-6">Why Our Picks Matter</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Expert Analysis</h3>
                <p className="text-gray-300 text-sm">Our team analyzes reliability data, safety ratings, and real-world performance.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Value Focus</h3>
                <p className="text-gray-300 text-sm">We consider total cost of ownership, not just purchase price.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Regular Updates</h3>
                <p className="text-gray-300 text-sm">Our recommendations are updated based on the latest market data.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
