import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { MapPin, DollarSign, Calendar, Star, Search } from "lucide-react";

export default function LocalDeals() {
  const [zipCode, setZipCode] = useState("");

  const featuredDeals = [
    {
      make: "Toyota",
      model: "Camry",
      year: 2023,
      price: "$24,999",
      originalPrice: "$28,500",
      savings: "$3,501",
      mileage: "15,000 miles",
      dealer: "Metro Toyota",
      location: "Downtown",
      distance: "2.3 miles",
      rating: 4.8,
      image: "🚗"
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2022,
      price: "$21,995",
      originalPrice: "$25,200",
      savings: "$3,205",
      mileage: "22,000 miles", 
      dealer: "City Honda",
      location: "Midtown",
      distance: "4.1 miles",
      rating: 4.6,
      image: "🚙"
    },
    {
      make: "Mazda",
      model: "CX-5",
      year: 2023,
      price: "$26,750",
      originalPrice: "$30,100",
      savings: "$3,350",
      mileage: "8,500 miles",
      dealer: "Prime Mazda",
      location: "Westside",
      distance: "6.7 miles",
      rating: 4.9,
      image: "🚐"
    },
    {
      make: "Subaru",
      model: "Outback",
      year: 2022,
      price: "$28,499",
      originalPrice: "$32,000",
      savings: "$3,501",
      mileage: "18,000 miles",
      dealer: "Subaru Center",
      location: "Northside", 
      distance: "8.2 miles",
      rating: 4.7,
      image: "🚗"
    }
  ];

  const dealTypes = [
    {
      type: "End of Model Year",
      description: "Deep discounts on current year models",
      savings: "Up to 25% off",
      timing: "September - November",
      icon: "📅"
    },
    {
      type: "Lease Returns",
      description: "Well-maintained vehicles coming off lease",
      savings: "15-20% below market",
      timing: "Year-round",
      icon: "🔄"
    },
    {
      type: "Manufacturer Incentives",
      description: "Rebates and special financing offers",
      savings: "$1,000 - $5,000",
      timing: "Monthly programs",
      icon: "💰"
    },
    {
      type: "Trade-In Specials",
      description: "Bonus value for your trade-in",
      savings: "Extra $500 - $2,000",
      timing: "Promotional periods",
      icon: "🔀"
    }
  ];

  const negotiationTips = [
    "Research the vehicle's market value first",
    "Get pre-approved for financing",
    "Shop around and compare offers",
    "Consider total cost, not just monthly payments",
    "Don't rush the decision",
    "Be prepared to walk away"
  ];

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-automotive-black via-automotive-black-light to-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 mb-6">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Near You</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Local <span className="text-blue-400">Deals</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Find the best car deals and discounts in your area. Don't overpay when great deals are nearby.
            </p>
            
            {/* Location Search */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Enter your ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="flex-1 h-12 bg-white/10 border-automotive-gold/30 text-white placeholder:text-gray-400 focus:border-automotive-gold focus:ring-automotive-gold"
                />
                <Button className="h-12 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Featured Deals Near You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {featuredDeals.map((deal, index) => (
                <Card key={index} className="bg-automotive-black border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{deal.image}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-white">{deal.year} {deal.make} {deal.model}</h3>
                            <p className="text-gray-400">{deal.mileage}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-automotive-gold">{deal.price}</div>
                            <div className="text-sm text-gray-400 line-through">{deal.originalPrice}</div>
                            <div className="text-green-400 font-semibold">Save {deal.savings}</div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Dealer:</span>
                            <span className="text-white">{deal.dealer}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Location:</span>
                            <span className="text-white">{deal.location} • {deal.distance}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Rating:</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white">{deal.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deal Types */}
      <section className="py-16 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Types of Deals to Look For
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dealTypes.map((deal, index) => (
                <Card key={index} className="bg-automotive-black-light border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{deal.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{deal.type}</h3>
                    <p className="text-gray-400 text-sm mb-4">{deal.description}</p>
                    <div className="space-y-2">
                      <div className="text-blue-400 font-semibold">{deal.savings}</div>
                      <div className="text-xs text-gray-500">{deal.timing}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Negotiation Tips */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Negotiation Tips
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {negotiationTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-automotive-black border border-automotive-gold/20 rounded-xl">
                  <div className="w-8 h-8 bg-automotive-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-automotive-gold font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Deal?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get personalized deal alerts and market insights for your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl">
                Set Deal Alerts
              </Button>
              <Button className="bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold px-8 py-3 rounded-xl">
                Get Market Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
