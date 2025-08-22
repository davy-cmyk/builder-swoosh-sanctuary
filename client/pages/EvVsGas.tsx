import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Zap, Fuel, DollarSign, Leaf, Clock, Settings } from "lucide-react";

export default function EvVsGas() {
  const comparisons = [
    {
      category: "Fuel/Energy Cost",
      ev: "$0.04-0.15/mile",
      gas: "$0.08-0.25/mile",
      winner: "EV",
      details: "Electricity is typically cheaper than gasoline per mile"
    },
    {
      category: "Maintenance",
      ev: "$300-600/year",
      gas: "$500-1,200/year", 
      winner: "EV",
      details: "EVs have fewer moving parts requiring maintenance"
    },
    {
      category: "Purchase Price",
      ev: "$25k-100k+",
      gas: "$15k-80k+",
      winner: "Gas",
      details: "Gas cars generally have lower upfront costs"
    },
    {
      category: "Range",
      ev: "150-400 miles",
      gas: "300-500 miles",
      winner: "Gas", 
      details: "Gas vehicles typically have longer range"
    },
    {
      category: "Refuel/Recharge Time",
      ev: "30min-8 hours",
      gas: "3-5 minutes",
      winner: "Gas",
      details: "Gas refueling is much faster than EV charging"
    },
    {
      category: "Environmental Impact",
      ev: "Zero direct emissions",
      gas: "Direct CO2 emissions",
      winner: "EV",
      details: "EVs produce no tailpipe emissions"
    }
  ];

  const evPros = [
    "Lower operating costs",
    "Zero direct emissions", 
    "Quiet operation",
    "Instant torque",
    "Government incentives",
    "Minimal maintenance"
  ];

  const evCons = [
    "Higher upfront cost",
    "Limited charging infrastructure",
    "Longer refueling time",
    "Range anxiety",
    "Cold weather impact",
    "Battery replacement cost"
  ];

  const gasPros = [
    "Lower purchase price",
    "Extensive refueling network",
    "Quick refueling",
    "Longer range",
    "Established technology",
    "Wide variety of options"
  ];

  const gasCons = [
    "Higher fuel costs",
    "Regular maintenance",
    "Emissions pollution",
    "Price volatility",
    "Engine noise",
    "More complex systems"
  ];

  const bestEvs = [
    { make: "Tesla", model: "Model 3", range: "358 miles", price: "$38,990" },
    { make: "BMW", model: "iX", range: "324 miles", price: "$83,200" },
    { make: "Mercedes", model: "EQS", range: "453 miles", price: "$102,310" },
    { make: "Hyundai", model: "Ioniq 6", range: "305 miles", price: "$41,600" }
  ];

  const bestGas = [
    { make: "Toyota", model: "Camry Hybrid", mpg: "52 MPG", price: "$28,855" },
    { make: "Honda", model: "Accord Hybrid", mpg: "48 MPG", price: "$33,895" },
    { make: "Toyota", model: "Prius", mpg: "58 MPG", price: "$27,450" },
    { make: "Hyundai", model: "Elantra Hybrid", mpg: "54 MPG", price: "$25,350" }
  ];

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-automotive-black via-automotive-black-light to-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20 mb-6">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium text-sm">Future vs Present</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-green-400">EV</span> vs <span className="text-blue-400">Gas</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Compare electric and gas vehicles on cost, performance, and environmental impact to make the right choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl">
                EV Recommendation
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl">
                Gas Car Recommendation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Head-to-Head Comparison
            </h2>
            
            <div className="space-y-6">
              {comparisons.map((comp, index) => (
                <Card key={index} className="bg-automotive-black border-automotive-gold/20">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <h3 className="text-lg font-bold text-white">{comp.category}</h3>
                        <p className="text-sm text-gray-400">{comp.details}</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-green-400 font-semibold mb-1">Electric</div>
                        <div className={`text-lg ${comp.winner === 'EV' ? 'text-green-400 font-bold' : 'text-gray-300'}`}>
                          {comp.ev}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-blue-400 font-semibold mb-1">Gas</div>
                        <div className={`text-lg ${comp.winner === 'Gas' ? 'text-blue-400 font-bold' : 'text-gray-300'}`}>
                          {comp.gas}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-automotive-gold font-semibold mb-1">Winner</div>
                        <div className={`text-lg font-bold ${comp.winner === 'EV' ? 'text-green-400' : 'text-blue-400'}`}>
                          {comp.winner}
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

      {/* Pros and Cons */}
      <section className="py-16 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Pros & Cons
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Electric Vehicles */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-400 text-center mb-6">Electric Vehicles</h3>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Advantages
                  </h4>
                  <ul className="space-y-2">
                    {evPros.map((pro, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-400 mb-4">Disadvantages</h4>
                  <ul className="space-y-2">
                    {evCons.map((con, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Gas Vehicles */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-400 text-center mb-6">Gas Vehicles</h3>
                
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <Fuel className="w-5 h-5" />
                    Advantages
                  </h4>
                  <ul className="space-y-2">
                    {gasPros.map((pro, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-red-400 mb-4">Disadvantages</h4>
                  <ul className="space-y-2">
                    {gasCons.map((con, index) => (
                      <li key={index} className="text-gray-300 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Top Picks
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Best EVs */}
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Best Electric Vehicles</h3>
                <div className="space-y-4">
                  {bestEvs.map((car, index) => (
                    <Card key={index} className="bg-automotive-black border-green-500/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-white">{car.make} {car.model}</h4>
                            <p className="text-green-400">{car.range} range</p>
                          </div>
                          <div className="text-right">
                            <div className="text-automotive-gold font-bold">{car.price}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Best Gas Cars */}
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Best Gas Vehicles</h3>
                <div className="space-y-4">
                  {bestGas.map((car, index) => (
                    <Card key={index} className="bg-automotive-black border-blue-500/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-white">{car.make} {car.model}</h4>
                            <p className="text-blue-400">{car.mpg}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-automotive-gold font-bold">{car.price}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
