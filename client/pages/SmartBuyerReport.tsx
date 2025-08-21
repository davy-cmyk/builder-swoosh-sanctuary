import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, TrendingUp, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function SmartBuyerReport() {
  const [vin, setVin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle VIN submission
    console.log("VIN submitted:", vin);
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-automotive-gold" />,
      title: "Complete Vehicle History",
      description: "Accidents, maintenance records, previous owners, and title history"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-automotive-gold" />,
      title: "Market Value Analysis",
      description: "Current market value, depreciation trends, and price recommendations"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-automotive-gold" />,
      title: "Risk Assessment",
      description: "Potential issues, recall information, and reliability predictions"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-automotive-gold" />,
      title: "Buying Confidence Score",
      description: "Our proprietary score that tells you how confident you should be"
    }
  ];

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-automotive-gold mb-6">
              Smart Buyer™ Report
            </h1>
            <p className="text-gray-300 text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Get the complete story behind any vehicle before you buy. Our comprehensive report gives you the confidence to make smart purchasing decisions.
            </p>
            
            {/* VIN Input Form */}
            <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Get Your Report Now</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter VIN or License Plate"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  className="h-12 bg-automotive-black border-automotive-gold/30 text-white placeholder:text-gray-400 focus:border-automotive-gold"
                  required
                />
                <Button
                  type="submit"
                  className="w-full h-12 bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold text-lg"
                >
                  Get My Smart Buyer™ Report
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                Starting at $29.99 • Instant delivery • 30-day money-back guarantee
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-automotive-black-light border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sample Report Preview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-automotive-gold mb-8 text-center">What's Included</h2>
            <div className="bg-automotive-black-light border border-automotive-gold/20 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Vehicle History</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-automotive-gold" />
                      Previous owners and usage
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-automotive-gold" />
                      Accident and damage history
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-automotive-gold" />
                      Service and maintenance records
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-automotive-gold" />
                      Title and registration history
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Market Intelligence</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-automotive-gold" />
                      Current market value analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-automotive-gold" />
                      Price comparison with similar vehicles
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-automotive-gold" />
                      Depreciation projections
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-automotive-gold" />
                      Negotiation recommendations
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="/smart-buyer-report/sample"
                  className="inline-block bg-automotive-gold text-automotive-black px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors"
                >
                  View Sample Report
                </a>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-automotive-gold mb-8">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-automotive-black-light border-automotive-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Basic Report</h3>
                  <p className="text-3xl font-bold text-automotive-gold mb-4">$29.99</p>
                  <p className="text-gray-400 text-sm">Essential vehicle history and market value</p>
                </CardContent>
              </Card>
              <Card className="bg-automotive-gold/10 border-automotive-gold border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-automotive-gold mb-2">Premium Report</h3>
                  <p className="text-3xl font-bold text-automotive-gold mb-4">$49.99</p>
                  <p className="text-gray-400 text-sm">Complete analysis plus expert insights</p>
                </CardContent>
              </Card>
              <Card className="bg-automotive-black-light border-automotive-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-3xl font-bold text-automotive-gold mb-4">Custom</p>
                  <p className="text-gray-400 text-sm">Bulk reports for dealers and fleets</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
