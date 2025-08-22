import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Star, TrendingUp, Users, Award, ThumbsUp } from "lucide-react";

export default function PopularPicks() {
  const popularCars = [
    {
      rank: 1,
      make: "Toyota",
      model: "RAV4",
      category: "Compact SUV",
      salesRank: "#1 Best Seller",
      reasons: ["Reliability", "Resale Value", "All-Weather Capability"],
      price: "$29,200+",
      rating: 4.8,
      image: "🚙"
    },
    {
      rank: 2,
      make: "Honda",
      model: "CR-V",
      category: "Compact SUV", 
      salesRank: "#2 Best Seller",
      reasons: ["Spacious Interior", "Fuel Economy", "Safety Ratings"],
      price: "$28,400+",
      rating: 4.7,
      image: "🚐"
    },
    {
      rank: 3,
      make: "Tesla",
      model: "Model Y",
      category: "Electric SUV",
      salesRank: "#1 Electric",
      reasons: ["Technology", "Performance", "Autopilot"],
      price: "$47,740+",
      rating: 4.6,
      image: "⚡"
    },
    {
      rank: 4,
      make: "Toyota",
      model: "Camry",
      category: "Midsize Sedan",
      salesRank: "#1 Sedan",
      reasons: ["Reliability", "Hybrid Option", "Value"],
      price: "$25,395+",
      rating: 4.7,
      image: "🚗"
    },
    {
      rank: 5,
      make: "Ford",
      model: "F-150",
      category: "Full-Size Truck",
      salesRank: "#1 Truck",
      reasons: ["Capability", "Variety", "Heritage"],
      price: "$34,585+",
      rating: 4.5,
      image: "🚛"
    },
    {
      rank: 6,
      make: "Honda",
      model: "Civic",
      category: "Compact Car",
      salesRank: "#1 Compact",
      reasons: ["Fuel Economy", "Reliability", "Affordability"],
      price: "$23,750+",
      rating: 4.6,
      image: "🚗"
    }
  ];

  const trendingFeatures = [
    {
      feature: "Hybrid Powertrains",
      popularity: "85%",
      description: "More buyers choosing hybrid for fuel efficiency",
      trend: "up"
    },
    {
      feature: "Advanced Safety",
      popularity: "92%",
      description: "Safety features are top priority for buyers",
      trend: "up"
    },
    {
      feature: "All-Wheel Drive",
      popularity: "67%",
      description: "AWD demand increasing across all segments",
      trend: "up"
    },
    {
      feature: "Large Touchscreens",
      popularity: "78%",
      description: "Bigger infotainment screens preferred",
      trend: "up"
    },
    {
      feature: "Panoramic Sunroofs",
      popularity: "71%",
      description: "Open-air feeling without convertible costs",
      trend: "up"
    },
    {
      feature: "Wireless Charging",
      popularity: "63%",
      description: "Convenience features gaining traction",
      trend: "up"
    }
  ];

  const buyingTrends = [
    {
      category: "SUVs",
      percentage: "52%",
      change: "+3%",
      note: "Continues to dominate sales"
    },
    {
      category: "Trucks",
      percentage: "18%",
      change: "+1%",
      note: "Steady demand for capability"
    },
    {
      category: "Sedans",
      percentage: "16%",
      change: "-2%",
      note: "Declining but still significant"
    },
    {
      category: "Electric",
      percentage: "8%",
      change: "+4%",
      note: "Fastest growing segment"
    },
    {
      category: "Luxury",
      percentage: "12%",
      change: "+1%",
      note: "Premium features going mainstream"
    }
  ];

  const reasons = [
    {
      reason: "Reliability",
      votes: "89%",
      icon: "🔧"
    },
    {
      reason: "Fuel Economy",
      votes: "76%",
      icon: "⛽"
    },
    {
      reason: "Safety Ratings",
      votes: "82%",
      icon: "🛡️"
    },
    {
      reason: "Resale Value",
      votes: "71%",
      icon: "💰"
    },
    {
      reason: "Interior Space",
      votes: "68%",
      icon: "📏"
    },
    {
      reason: "Technology",
      votes: "64%",
      icon: "📱"
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
              <Star className="w-4 h-4 text-automotive-gold" />
              <span className="text-automotive-gold font-medium text-sm">Trending Now</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Popular <span className="text-automotive-gold">Picks</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              See what cars are trending and why buyers are choosing them. Follow the smart money.
            </p>
            <Button className="bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold px-8 py-3 rounded-xl">
              Get Trending Car Report
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Cars Rankings */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Most Popular Cars Right Now
            </h2>
            
            <div className="space-y-6">
              {popularCars.map((car, index) => (
                <Card key={index} className="bg-automotive-black border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="text-6xl">{car.image}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 bg-automotive-gold rounded-full flex items-center justify-center">
                                <span className="text-automotive-black font-bold">#{car.rank}</span>
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-white">{car.make} {car.model}</h3>
                                <p className="text-gray-400">{car.category}</p>
                              </div>
                            </div>
                            <div className="bg-automotive-gold/20 text-automotive-gold px-3 py-1 rounded-full text-sm font-medium inline-block">
                              {car.salesRank}
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-2xl font-bold text-automotive-gold mb-1">{car.price}</div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white">{car.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-automotive-gold mb-2">Why People Choose It:</h4>
                          <div className="flex flex-wrap gap-2">
                            {car.reasons.map((reason, i) => (
                              <span key={i} className="bg-automotive-black-light text-gray-300 px-3 py-1 rounded-lg text-sm">
                                {reason}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-16 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Market Trends
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Buying Preferences */}
              <div>
                <h3 className="text-2xl font-bold text-automotive-gold mb-6">Vehicle Type Preferences</h3>
                <div className="space-y-4">
                  {buyingTrends.map((trend, index) => (
                    <div key={index} className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">{trend.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-automotive-gold">{trend.percentage}</span>
                          <span className="text-green-400 text-sm">{trend.change}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{trend.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Features */}
              <div>
                <h3 className="text-2xl font-bold text-automotive-gold mb-6">Trending Features</h3>
                <div className="space-y-4">
                  {trendingFeatures.map((feature, index) => (
                    <div key={index} className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">{feature.feature}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-automotive-gold">{feature.popularity}</span>
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Buy */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Buyers Care About Most
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="bg-automotive-black border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{reason.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{reason.reason}</h3>
                    <div className="text-3xl font-bold text-automotive-gold mb-2">{reason.votes}</div>
                    <p className="text-gray-400 text-sm">of buyers prioritize this</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Insights */}
      <section className="py-16 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Expert Insights
            </h2>
            
            <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-2xl p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Award className="w-8 h-8 text-automotive-gold" />
                <h3 className="text-2xl font-bold text-automotive-gold">Key Takeaways</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ThumbsUp className="w-5 h-5 text-automotive-gold mt-1" />
                    <p className="text-gray-300">SUVs continue to dominate, but electric vehicles are gaining momentum rapidly.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ThumbsUp className="w-5 h-5 text-automotive-gold mt-1" />
                    <p className="text-gray-300">Reliability and safety remain the top priorities for most buyers.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ThumbsUp className="w-5 h-5 text-automotive-gold mt-1" />
                    <p className="text-gray-300">Technology features are becoming standard expectations, not luxuries.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ThumbsUp className="w-5 h-5 text-automotive-gold mt-1" />
                    <p className="text-gray-300">Fuel efficiency is increasingly important across all vehicle segments.</p>
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
