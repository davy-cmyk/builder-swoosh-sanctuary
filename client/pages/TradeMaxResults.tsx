import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export default function TradeMaxResults() {
  const [tradeData, setTradeData] = useState<any>(null);

  useEffect(() => {
    // Mock trade valuation data
    const mockData = {
      vehicle: {
        year: "2019",
        make: "Honda",
        model: "Civic",
        trim: "LX",
        mileage: "45,000",
        condition: "Good"
      },
      valuation: {
        tradeIn: 18500,
        privateSale: 21200,
        retailValue: 23800,
        confidence: 92
      },
      marketTrends: {
        direction: "up",
        change: "+3.2%",
        timeframe: "last 30 days"
      },
      recommendations: [
        {
          type: "dealer",
          name: "AutoMax Honda",
          offer: 18200,
          rating: 4.8,
          distance: "2.3 miles"
        },
        {
          type: "dealer", 
          name: "Premier Auto Group",
          offer: 18000,
          rating: 4.6,
          distance: "5.1 miles"
        },
        {
          type: "online",
          name: "CarMax",
          offer: 17800,
          rating: 4.4,
          distance: "Online"
        }
      ]
    };
    setTradeData(mockData);
  }, []);

  if (!tradeData) {
    return (
      <div className="min-h-screen bg-automotive-black text-white">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-automotive-gold"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            TradeMax™ Results
          </h1>
          
          {/* Vehicle Summary */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Your Vehicle</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-400">Vehicle:</p>
                  <p className="text-white font-semibold">
                    {tradeData.vehicle.year} {tradeData.vehicle.make} {tradeData.vehicle.model} {tradeData.vehicle.trim}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Mileage:</p>
                  <p className="text-white">{tradeData.vehicle.mileage} miles</p>
                </div>
                <div>
                  <p className="text-gray-400">Condition:</p>
                  <p className="text-white">{tradeData.vehicle.condition}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Valuation Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-automotive-black-light border-automotive-gold/20">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-automotive-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Trade-In Value</h3>
                <p className="text-3xl font-bold text-automotive-gold">${tradeData.valuation.tradeIn.toLocaleString()}</p>
                <p className="text-sm text-gray-400 mt-2">Quick & convenient</p>
              </CardContent>
            </Card>

            <Card className="bg-automotive-black-light border-automotive-gold/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Private Sale</h3>
                <p className="text-3xl font-bold text-green-400">${tradeData.valuation.privateSale.toLocaleString()}</p>
                <p className="text-sm text-gray-400 mt-2">Maximum value</p>
              </CardContent>
            </Card>

            <Card className="bg-automotive-black-light border-automotive-gold/20">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Retail Value</h3>
                <p className="text-3xl font-bold text-blue-400">${tradeData.valuation.retailValue.toLocaleString()}</p>
                <p className="text-sm text-gray-400 mt-2">Dealer asking price</p>
              </CardContent>
            </Card>
          </div>

          {/* Market Trends */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Market Trends</h3>
              <div className="flex items-center gap-4">
                {tradeData.marketTrends.direction === 'up' ? (
                  <TrendingUp className="w-8 h-8 text-green-400" />
                ) : (
                  <TrendingDown className="w-8 h-8 text-red-400" />
                )}
                <div>
                  <p className="text-white font-semibold">
                    Market is trending {tradeData.marketTrends.direction}
                  </p>
                  <p className="text-gray-300">
                    {tradeData.marketTrends.change} in the {tradeData.marketTrends.timeframe}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trade Offers */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-6">Trade Offers in Your Area</h3>
            <div className="space-y-4">
              {tradeData.recommendations.map((offer: any, index: number) => (
                <Card key={index} className="bg-automotive-black-light border-automotive-gold/20 hover:border-automotive-gold/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h4 className="text-xl font-bold text-white">{offer.name}</h4>
                          <span className="px-3 py-1 bg-automotive-gold/20 text-automotive-gold rounded-full text-sm font-semibold">
                            {offer.rating}★
                          </span>
                        </div>
                        <p className="text-gray-400">{offer.distance}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-automotive-gold">${offer.offer.toLocaleString()}</p>
                        <button className="mt-2 bg-automotive-gold text-automotive-black px-4 py-2 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors text-sm">
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Confidence Score */}
          <Card className="bg-automotive-gold/10 border-automotive-gold/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-automotive-gold mb-4">
                Confidence Score: {tradeData.valuation.confidence}%
              </h3>
              <p className="text-gray-300 mb-4">
                Our valuation is based on current market data, comparable sales, and vehicle condition. 
                Actual offers may vary based on inspection and dealer inventory needs.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/smart-buyer-report"
                  className="bg-automotive-gold text-automotive-black px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors"
                >
                  Get Full Vehicle Report
                </a>
                <button className="border border-automotive-gold text-automotive-gold px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold/10 transition-colors">
                  Print Results
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
