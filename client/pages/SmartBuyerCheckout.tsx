import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Shield, CreditCard, Lock } from "lucide-react";
import { useState } from "react";

export default function SmartBuyerCheckout() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    billingZip: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    window.location.href = "/smart-buyer-report/success";
  };

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Complete Your Order
          </h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-automotive-black-light border-automotive-gold/20 sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="border-b border-gray-600 pb-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Smart Buyer™ Premium Report</h3>
                      <p className="text-gray-400 text-sm mb-3">VIN: 1HGBH41JXMN109186</p>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Report</span>
                        <span className="text-white">$49.99</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-automotive-gold">$49.99</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">Instant delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-automotive-gold" />
                      <span className="text-gray-300">30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">Secure 256-bit SSL encryption</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <Card className="bg-automotive-black-light border-automotive-gold/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white mb-2">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="bg-automotive-black border-automotive-gold/30 text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white mb-2">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="bg-automotive-black border-automotive-gold/30 text-white"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-white mb-2">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-automotive-black border-automotive-gold/30 text-white"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card className="bg-automotive-black-light border-automotive-gold/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Payment Method</h3>
                    
                    <div className="flex gap-4 mb-6">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                          paymentMethod === "card" 
                            ? "border-automotive-gold bg-automotive-gold/10 text-automotive-gold"
                            : "border-gray-600 text-gray-400 hover:border-automotive-gold/50"
                        }`}
                      >
                        <CreditCard className="w-4 h-4" />
                        Credit Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("paypal")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                          paymentMethod === "paypal"
                            ? "border-automotive-gold bg-automotive-gold/10 text-automotive-gold"
                            : "border-gray-600 text-gray-400 hover:border-automotive-gold/50"
                        }`}
                      >
                        PayPal
                      </button>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white mb-2">Card Number</label>
                          <Input
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className="bg-automotive-black border-automotive-gold/30 text-white"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-white mb-2">Expiry</label>
                            <Input
                              name="expiry"
                              placeholder="MM/YY"
                              value={formData.expiry}
                              onChange={handleInputChange}
                              className="bg-automotive-black border-automotive-gold/30 text-white"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-white mb-2">CVV</label>
                            <Input
                              name="cvv"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              className="bg-automotive-black border-automotive-gold/30 text-white"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-white mb-2">Billing ZIP</label>
                            <Input
                              name="billingZip"
                              placeholder="12345"
                              value={formData.billingZip}
                              onChange={handleInputChange}
                              className="bg-automotive-black border-automotive-gold/30 text-white"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "paypal" && (
                      <div className="text-center py-8">
                        <button
                          type="button"
                          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Continue with PayPal
                        </button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Terms & Submit */}
                <Card className="bg-automotive-black-light border-automotive-gold/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" required />
                        <span className="text-gray-300 text-sm">
                          I agree to the <a href="/terms" className="text-automotive-gold hover:underline">Terms of Service</a> and <a href="/privacy" className="text-automotive-gold hover:underline">Privacy Policy</a>
                        </span>
                      </label>
                      
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300 text-sm">
                          Send me updates about Car Leopard products and automotive tips
                        </span>
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full mt-6 h-12 bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-bold text-lg"
                    >
                      Complete Purchase - $49.99
                    </Button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                      Your payment information is encrypted and secure. You will receive your report instantly via email.
                    </p>
                  </CardContent>
                </Card>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
