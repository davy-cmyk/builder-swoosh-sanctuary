import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AlertTriangle, X, DollarSign, Wrench } from "lucide-react";

export default function CarsToAvoid() {
  const problematicCars = [
    {
      make: "Chrysler",
      model: "200",
      years: "2015-2017",
      issues: ["Transmission problems", "Electrical failures", "Poor build quality"],
      avgRepairCost: "$3,200/year",
      reliability: "Poor"
    },
    {
      make: "Jeep",
      model: "Compass",
      years: "2017-2019",
      issues: ["CVT transmission failure", "Engine problems", "Interior quality"],
      avgRepairCost: "$2,800/year",
      reliability: "Below Average"
    },
    {
      make: "Mitsubishi",
      model: "Mirage",
      years: "2014-2020",
      issues: ["Weak engine", "Poor interior", "Safety concerns"],
      avgRepairCost: "$2,400/year",
      reliability: "Poor"
    },
    {
      make: "Fiat",
      model: "500",
      years: "2012-2019",
      issues: ["Electrical problems", "Transmission issues", "Poor reliability"],
      avgRepairCost: "$3,500/year",
      reliability: "Poor"
    },
    {
      make: "Jaguar",
      model: "F-Type",
      years: "2014-2018",
      issues: ["Electrical failures", "Supercharger issues", "High maintenance"],
      avgRepairCost: "$4,800/year",
      reliability: "Poor"
    },
    {
      make: "Land Rover",
      model: "Range Rover Evoque",
      years: "2012-2018",
      issues: ["Engine timing chain", "Electrical problems", "Suspension failures"],
      avgRepairCost: "$5,200/year",
      reliability: "Poor"
    }
  ];

  const redFlags = [
    "Multiple recalls for same issue",
    "Known transmission problems",
    "Electrical system failures",
    "Poor crash test ratings",
    "High depreciation rates",
    "Discontinued models without parts support"
  ];

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-automotive-black via-automotive-black-light to-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-medium text-sm">Buyer Beware</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cars to <span className="text-red-400">Avoid</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Save yourself from costly mistakes. Learn about vehicles with known problems and poor reliability.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-xl">
              Check Your Car's Risk Score
            </Button>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-8 bg-red-500/10 border-y border-red-500/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-red-300 font-medium">
              <AlertTriangle className="w-5 h-5 inline mr-2" />
              The vehicles listed below have documented reliability issues and higher-than-average repair costs.
            </p>
          </div>
        </div>
      </section>

      {/* Problematic Cars */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              High-Risk Vehicles
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problematicCars.map((car, index) => (
                <Card key={index} className="bg-automotive-black border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{car.make} {car.model}</h3>
                        <p className="text-gray-400">{car.years}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-red-400 font-bold text-sm bg-red-500/20 px-2 py-1 rounded">
                          {car.reliability}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Avg Repair Cost:</span>
                        <span className="text-red-400 font-semibold">{car.avgRepairCost}</span>
                      </div>
                      
                      <div className="border-t border-red-500/20 pt-3">
                        <h4 className="text-sm font-semibold text-red-400 mb-2">Common Issues:</h4>
                        <ul className="space-y-1">
                          {car.issues.map((issue, i) => (
                            <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                              <X className="w-3 h-3 text-red-400" />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Red Flags to Watch For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {redFlags.map((flag, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-automotive-black-light border border-red-500/20 rounded-xl">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{flag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Do Instead */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              What to Do Instead
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-automotive-black border border-automotive-gold/20 rounded-xl">
                <div className="w-16 h-16 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-automotive-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Research First</h3>
                <p className="text-gray-400">Always check reliability ratings and owner reviews before buying.</p>
              </div>
              
              <div className="p-6 bg-automotive-black border border-automotive-gold/20 rounded-xl">
                <div className="w-16 h-16 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-automotive-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Calculate True Cost</h3>
                <p className="text-gray-400">Factor in maintenance, repairs, and depreciation costs.</p>
              </div>
              
              <div className="p-6 bg-automotive-black border border-automotive-gold/20 rounded-xl">
                <div className="w-16 h-16 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-automotive-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Get Inspected</h3>
                <p className="text-gray-400">Have any used car professionally inspected before purchase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
