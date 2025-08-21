import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Mail, Share2 } from "lucide-react";

export default function SmartBuyerSuccess() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-6">
              Success! Your Report is Ready
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Your Smart Buyer™ Report has been generated and sent to your email. 
              You can also download it directly below.
            </p>
          </div>

          {/* Order Confirmation */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Order Confirmation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-400 mb-1">Order Number:</p>
                  <p className="text-automotive-gold font-mono font-semibold">#SB-2025-001234</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Vehicle:</p>
                  <p className="text-white">2020 Toyota Camry</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">VIN:</p>
                  <p className="text-white font-mono">1HGBH41JXMN109186</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Report Type:</p>
                  <p className="text-white">Smart Buyer™ Premium</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Actions */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Your Report</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-automotive-gold text-automotive-black px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors">
                  <Download className="w-5 h-5" />
                  Download PDF Report
                </button>
                <button className="flex items-center justify-center gap-2 border border-automotive-gold text-automotive-gold px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold/10 transition-colors">
                  <Mail className="w-5 h-5" />
                  Resend Email
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-600 text-gray-400 px-6 py-3 rounded-lg font-semibold hover:border-automotive-gold hover:text-automotive-gold transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share Report
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Report Summary */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Report Summary</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">Clean History</h4>
                  <p className="text-sm text-gray-400">No major accidents or damage reported</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-automotive-gold">92</span>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Confidence Score</h4>
                  <p className="text-sm text-gray-400">Excellent buying confidence</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-blue-400">$18.5K</span>
                  </div>
                  <h4 className="font-semibold text-white mb-1">Market Value</h4>
                  <p className="text-sm text-gray-400">Current estimated value</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-automotive-gold/10 border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-automotive-gold mb-4">What's Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-automotive-gold text-automotive-black rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Review Your Report</h4>
                    <p className="text-gray-300 text-sm">Take time to understand all the insights and recommendations in your report.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-automotive-gold text-automotive-black rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Use Negotiation Tips</h4>
                    <p className="text-gray-300 text-sm">Apply the negotiation strategies and market insights when dealing with sellers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-automotive-gold text-automotive-black rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Make Your Decision</h4>
                    <p className="text-gray-300 text-sm">Use the confidence score and risk assessment to make an informed decision.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="bg-automotive-black-light border-automotive-gold/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                Have questions about your report? Our experts are here to help you understand your results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-automotive-gold text-automotive-black px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="/faq"
                  className="border border-gray-600 text-gray-400 px-6 py-3 rounded-lg font-semibold hover:border-automotive-gold hover:text-automotive-gold transition-colors"
                >
                  View FAQ
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
