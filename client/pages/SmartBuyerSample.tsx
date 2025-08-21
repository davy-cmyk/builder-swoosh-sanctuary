import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, TrendingUp, Shield, Eye, Download } from "lucide-react";

export default function SmartBuyerSample() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Smart Buyer™ Sample Report
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
              See exactly what our comprehensive vehicle report looks like. This is a real example 
              of the insights and analysis you'll receive with every Smart Buyer™ Report.
            </p>
          </div>

          {/* Sample Vehicle Header */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">2020 Toyota Camry LE</h2>
                  <p className="text-gray-400">VIN: 4T1G11AK8LU123456</p>
                  <p className="text-gray-400">Mileage: 34,567 miles</p>
                </div>
                <div className="text-right">
                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-bold text-lg mb-2">
                    92/100
                  </div>
                  <p className="text-sm text-gray-400">Confidence Score</p>
                </div>
              </div>
              
              <div className="bg-automotive-gold/10 border border-automotive-gold/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-automotive-gold" />
                  <span className="text-automotive-gold font-semibold">Sample Report Preview</span>
                </div>
                <p className="text-gray-300 text-sm">
                  This is a demonstration of our report format. Real reports contain live data and pricing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Findings Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-green-900/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-400 mb-2">Clean History</h3>
                <p className="text-gray-300 text-sm">No accidents, damage, or title issues reported</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-400 mb-2">Fair Market Value</h3>
                <p className="text-gray-300 text-sm">Priced appropriately for current market conditions</p>
              </CardContent>
            </Card>

            <Card className="bg-yellow-900/20 border-yellow-500/30">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">1 Open Recall</h3>
                <p className="text-gray-300 text-sm">Minor software update - easily resolved</p>
              </CardContent>
            </Card>
          </div>

          {/* Report Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Vehicle History */}
            <Card className="bg-automotive-black-light border-automotive-gold/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-automotive-gold" />
                  Vehicle History
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Previous Owners</span>
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Accidents Reported</span>
                    <span className="text-green-400 font-semibold">0</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Service Records</span>
                    <span className="text-white font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Title Issues</span>
                    <span className="text-green-400 font-semibold">None</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Usage Type</span>
                    <span className="text-white font-semibold">Personal</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Analysis */}
            <Card className="bg-automotive-black-light border-automotive-gold/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-automotive-gold" />
                  Market Analysis
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Current Market Value</span>
                    <span className="text-automotive-gold font-semibold">$18,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Trade-in Value</span>
                    <span className="text-white font-semibold">$16,200</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Private Sale Value</span>
                    <span className="text-white font-semibold">$19,800</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-700">
                    <span className="text-gray-300">Price Trend (30 days)</span>
                    <span className="text-green-400 font-semibold">+2.3%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Market Position</span>
                    <span className="text-blue-400 font-semibold">Fair Deal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Sections Preview */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Full Report Includes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Complete Ownership Timeline",
                  "Detailed Accident Analysis",
                  "Service & Maintenance History",
                  "Title & Registration Records",
                  "Recall Information & Status",
                  "Market Comparison Analysis",
                  "Depreciation Projections",
                  "Negotiation Recommendations",
                  "Risk Assessment & Scoring",
                  "Warranty Information",
                  "Environmental Impact Data",
                  "Expert Buying Advice"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-automotive-gold flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="bg-automotive-gold/10 border-automotive-gold/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-automotive-gold mb-4">Ready for Your Real Report?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the complete Smart Buyer™ analysis for any vehicle you're considering. 
                Enter a VIN or license plate to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/smart-buyer-report"
                  className="bg-automotive-gold text-automotive-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-automotive-gold-dark transition-colors"
                >
                  Get My Real Report
                </a>
                <button className="flex items-center justify-center gap-2 border border-automotive-gold text-automotive-gold px-8 py-4 rounded-lg font-semibold hover:bg-automotive-gold/10 transition-colors">
                  <Download className="w-5 h-5" />
                  Download Sample PDF
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Real reports start at $29.99 • Instant delivery • 30-day money-back guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
