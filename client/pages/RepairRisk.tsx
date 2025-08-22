import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Wrench, AlertCircle, TrendingUp, Shield } from "lucide-react";

export default function RepairRisk() {
  const riskCategories = [
    {
      level: "Low Risk",
      color: "green",
      range: "$500-1,200/year",
      brands: ["Toyota", "Honda", "Mazda", "Hyundai"],
      description: "Reliable brands with minimal repair needs"
    },
    {
      level: "Moderate Risk", 
      color: "yellow",
      range: "$1,200-2,500/year",
      brands: ["Nissan", "Subaru", "Kia", "Chevrolet"],
      description: "Generally reliable with occasional issues"
    },
    {
      level: "High Risk",
      color: "orange", 
      range: "$2,500-4,000/year",
      brands: ["Volkswagen", "BMW", "Mercedes", "Audi"],
      description: "Complex systems requiring specialized care"
    },
    {
      level: "Very High Risk",
      color: "red",
      range: "$4,000+/year", 
      brands: ["Jaguar", "Land Rover", "Fiat", "Alfa Romeo"],
      description: "Known reliability issues and expensive parts"
    }
  ];

  const commonRepairs = [
    {
      type: "Engine",
      avgCost: "$3,500",
      frequency: "5-8 years",
      symptoms: ["Unusual noises", "Poor performance", "Check engine light"]
    },
    {
      type: "Transmission",
      avgCost: "$2,800",
      frequency: "8-12 years", 
      symptoms: ["Slipping gears", "Rough shifting", "Delayed engagement"]
    },
    {
      type: "Air Conditioning",
      avgCost: "$1,200",
      frequency: "6-10 years",
      symptoms: ["Weak cooling", "Strange odors", "Unusual noises"]
    },
    {
      type: "Suspension",
      avgCost: "$1,500",
      frequency: "5-7 years",
      symptoms: ["Rough ride", "Uneven tire wear", "Poor handling"]
    },
    {
      type: "Electrical",
      avgCost: "$800",
      frequency: "4-6 years",
      symptoms: ["Battery drain", "Malfunctioning lights", "System failures"]
    },
    {
      type: "Brakes",
      avgCost: "$600",
      frequency: "2-4 years",
      symptoms: ["Squealing sounds", "Soft pedal", "Vibration when braking"]
    }
  ];

  const preventionTips = [
    "Follow manufacturer maintenance schedules",
    "Use quality parts and fluids",
    "Address small issues before they become big problems",
    "Keep detailed maintenance records",
    "Choose reputable mechanics and shops"
  ];

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-automotive-black via-automotive-black-light to-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 mb-6">
              <Wrench className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium text-sm">Repair Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Repair <span className="text-orange-400">Risk</span> Analysis
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Understand maintenance costs and common repair issues before you buy. Make informed decisions.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl">
              Get Repair Risk Report
            </Button>
          </div>
        </div>
      </section>

      {/* Risk Categories */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Repair Risk by Brand
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {riskCategories.map((category, index) => {
                const colorClasses = {
                  green: "border-green-500/20 bg-green-500/5",
                  yellow: "border-yellow-500/20 bg-yellow-500/5", 
                  orange: "border-orange-500/20 bg-orange-500/5",
                  red: "border-red-500/20 bg-red-500/5"
                };
                
                const textColors = {
                  green: "text-green-400",
                  yellow: "text-yellow-400",
                  orange: "text-orange-400", 
                  red: "text-red-400"
                };

                return (
                  <Card key={index} className={`${colorClasses[category.color as keyof typeof colorClasses]} border transition-all duration-300 hover:scale-105`}>
                    <CardContent className="p-6 text-center">
                      <h3 className={`text-xl font-bold mb-2 ${textColors[category.color as keyof typeof textColors]}`}>
                        {category.level}
                      </h3>
                      <div className="text-2xl font-bold text-white mb-3">{category.range}</div>
                      <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                      <div className="space-y-1">
                        {category.brands.map((brand, i) => (
                          <div key={i} className="text-xs text-gray-300 bg-automotive-black/30 px-2 py-1 rounded">
                            {brand}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-16 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Common Repair Costs
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonRepairs.map((repair, index) => (
                <Card key={index} className="bg-automotive-black-light border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{repair.type}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-automotive-gold">{repair.avgCost}</div>
                        <div className="text-xs text-gray-400">average cost</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Frequency:</span>
                        <span className="text-white font-semibold">{repair.frequency}</span>
                      </div>
                      
                      <div className="border-t border-automotive-gold/20 pt-3">
                        <h4 className="text-sm font-semibold text-automotive-gold mb-2">Warning Signs:</h4>
                        <ul className="space-y-1">
                          {repair.symptoms.map((symptom, i) => (
                            <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                              <AlertCircle className="w-3 h-3 text-orange-400" />
                              {symptom}
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

      {/* Prevention Tips */}
      <section className="py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Reduce Your Repair Risk
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-automotive-gold mb-4">Prevention Tips</h3>
                {preventionTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-automotive-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="w-4 h-4 text-automotive-gold" />
                    </div>
                    <p className="text-gray-300">{tip}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-automotive-black border border-automotive-gold/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-automotive-gold mb-4">Cost Savings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Regular maintenance:</span>
                    <span className="text-green-400 font-semibold">Save 25-40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Early problem detection:</span>
                    <span className="text-green-400 font-semibold">Save 50-70%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Quality parts/fluids:</span>
                    <span className="text-green-400 font-semibold">Save 30-50%</span>
                  </div>
                  <div className="border-t border-automotive-gold/20 pt-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-automotive-gold" />
                      <span className="text-white font-semibold">Total potential savings: Up to 70%</span>
                    </div>
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
