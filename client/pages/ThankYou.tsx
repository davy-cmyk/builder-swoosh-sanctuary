import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Heart className="w-24 h-24 text-automotive-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-6">
              Thank You!
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
              We appreciate your interest in Car Leopard. Your submission has been received 
              and we'll be in touch soon.
            </p>
          </div>

          {/* Confirmation Card */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Submission Confirmed</h2>
              <p className="text-gray-300 mb-6">
                We've received your information and will process it shortly. 
                You should receive a confirmation email within the next few minutes.
              </p>
              <div className="bg-automotive-gold/10 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-sm text-gray-400 mb-1">Reference Number:</p>
                <p className="text-automotive-gold font-mono font-semibold">#TY-{Date.now().toString().slice(-6)}</p>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-automotive-gold text-automotive-black rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email Confirmation</h4>
                    <p className="text-gray-300">You'll receive a confirmation email with your submission details.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-automotive-gold text-automotive-black rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Processing</h4>
                    <p className="text-gray-300">Our team will review your submission and prepare your response.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-automotive-gold text-automotive-black rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Follow-up</h4>
                    <p className="text-gray-300">We'll contact you within 24-48 hours with next steps or answers to your questions.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continue Exploring */}
          <Card className="bg-automotive-gold/10 border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-automotive-gold mb-4">Continue Exploring</h3>
              <p className="text-gray-300 mb-6">
                While you wait, explore more of what Car Leopard has to offer.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <a 
                  href="/smart-buyer-report"
                  className="flex items-center justify-between p-4 bg-automotive-black-light border border-automotive-gold/20 rounded-lg hover:border-automotive-gold/40 transition-colors group"
                >
                  <div>
                    <h4 className="font-semibold text-white mb-1">Smart Buyer™ Report</h4>
                    <p className="text-sm text-gray-400">Get comprehensive vehicle analysis</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-automotive-gold group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/recall-check"
                  className="flex items-center justify-between p-4 bg-automotive-black-light border border-automotive-gold/20 rounded-lg hover:border-automotive-gold/40 transition-colors group"
                >
                  <div>
                    <h4 className="font-semibold text-white mb-1">Free Recall Check</h4>
                    <p className="text-sm text-gray-400">Check for safety recalls</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-automotive-gold group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/fuel-picks"
                  className="flex items-center justify-between p-4 bg-automotive-black-light border border-automotive-gold/20 rounded-lg hover:border-automotive-gold/40 transition-colors group"
                >
                  <div>
                    <h4 className="font-semibold text-white mb-1">Top by Fuel Type</h4>
                    <p className="text-sm text-gray-400">Best vehicles by fuel type</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-automotive-gold group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/about"
                  className="flex items-center justify-between p-4 bg-automotive-black-light border border-automotive-gold/20 rounded-lg hover:border-automotive-gold/40 transition-colors group"
                >
                  <div>
                    <h4 className="font-semibold text-white mb-1">About Car Leopard</h4>
                    <p className="text-sm text-gray-400">Learn about our mission</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-automotive-gold group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="bg-automotive-black-light border-automotive-gold/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Questions?</h3>
              <p className="text-gray-300 mb-6">
                If you have any immediate questions or concerns, don't hesitate to reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-automotive-gold text-automotive-black px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors"
                >
                  Contact Support
                </a>
                <a 
                  href="mailto:support@carleopard.ai"
                  className="border border-gray-600 text-gray-400 px-6 py-3 rounded-lg font-semibold hover:border-automotive-gold hover:text-automotive-gold transition-colors"
                >
                  Email Us
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
