import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { TrendingUp, Award, DollarSign, Star } from "lucide-react";

export default function CarsHoldValue() {
  const topValueCars = [
    {
      make: "Toyota",
      model: "Prius",
      year: "2020-2024",
      retentionRate: "68%",
      avgResale: "$22,500",
      reason: "Hybrid reliability and fuel efficiency"
    },
    {
      make: "Tesla",
      model: "Model S",
      year: "2019-2024",
      retentionRate: "65%",
      avgResale: "$45,000",
      reason: "EV leadership and technology"
    },
    {
      make: "Porsche",
      model: "911",
      year: "2018-2024",
      retentionRate: "72%",
      avgResale: "$85,000",
      reason: "Iconic sports car status"
    },
    {
      make: "Honda",
      model: "Civic",
      year: "2020-2024",
      retentionRate: "63%",
      avgResale: "$18,500",
      reason: "Reliability and practicality"
    },
    {
      make: "Subaru",
      model: "Outback",
      year: "2019-2024",
      retentionRate: "61%",
      avgResale: "$26,000",
      reason: "AWD and adventure capability"
    },
    {
      make: "Lexus",
      model: "RX",
      year: "2020-2024",
      retentionRate: "66%",
      avgResale: "$38,000",
      reason: "Luxury reliability"
    }
  ];

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-automotive-black via-automotive-black-light to-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-automotive-gold/10 px-4 py-2 rounded-full border border-automotive-gold/20 mb-6">
              <TrendingUp className="w-4 h-4 text-automotive-gold" />
              <span className="text-automotive-gold font-medium text-sm">Value Retention</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cars That <span className="text-automotive-gold">Hold Value</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Discover vehicles that maintain their worth over time. Smart investments that protect your money.
            </p>
            <Button className="bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold px-8 py-3 rounded-xl">
              Get Your Car's Value Report
            </Button>
          </div>
        </div>
      </section>

      {/* Top Value Retention Cars */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Top Value Retention Champions
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topValueCars.map((car, index) => (
                <Card key={index} className="bg-automotive-black border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{car.make} {car.model}</h3>
                        <p className="text-gray-400">{car.year}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-automotive-gold">{car.retentionRate}</div>
                        <div className="text-xs text-gray-400">retention</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Avg Resale:</span>
                        <span className="text-white font-semibold">{car.avgResale}</span>
                      </div>
                      <div className="border-t border-automotive-gold/20 pt-3">
                        <p className="text-sm text-gray-300">{car.reason}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Factors */}
      <section className="py-16 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Makes a Car Hold Value?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-automotive-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reliability</h3>
                    <p className="text-gray-400">Cars with proven track records of dependability retain value better.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-automotive-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Brand Reputation</h3>
                    <p className="text-gray-400">Strong brand perception and customer loyalty drive resale value.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-automotive-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Low Ownership Costs</h3>
                    <p className="text-gray-400">Affordable maintenance and repairs make cars more desirable.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-automotive-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Market Demand</h3>
                    <p className="text-gray-400">Popular models with consistent demand retain value longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
