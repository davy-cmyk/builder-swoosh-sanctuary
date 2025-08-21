import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Shield, DollarSign, TrendingUp, ArrowRight, CheckCircle, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Index() {
  const [email, setEmail] = useState("");
  const [footerEmail, setFooterEmail] = useState("");

  const handleSubmit = (e: React.FormEvent, emailValue: string) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", emailValue);
  };

  useEffect(() => {
    // Quiz form submission logic
    const quizForm = document.getElementById('quizForm');
    if (quizForm) {
      const handleQuizSubmit = (e: Event) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const answers = Object.fromEntries(fd.entries());
        (answers as any).feat = fd.getAll('feat');

        // Simple routing logic
        let recs: Array<{label: string, url: string}> = [];

        // Safety-first, long horizon → Smart Buyer™ + Cars That Hold Value
        if (answers.goal === 'avoidlemons' || answers.horizon === '6plus') {
          recs.push({label:'Run a Smart Buyer™ Report', url:'/smart-buyer-report'});
          recs.push({label:'See Cars That Hold Value', url:'/value-hold'});
        }

        // Deal hunters
        if (answers.goal === 'bestdeal' || answers.miles === 'high' || answers.miles === 'any') {
          recs.push({label:'Find Local Deals', url:'/deals'});
          recs.push({label:'Use TradeMax™ (trade-in options)', url:'/trademax'});
        }

        // EV/Hybrid curious
        if (answers.fuel === 'ev' || answers.fuel === 'hybrid' || answers.goal === 'evcurious') {
          recs.push({label:'Top Picks by Fuel Type', url:'/fuel-picks'});
        }

        // Always suggest Recall Check
        recs.push({label:'Free Recall Check', url:'/recall-check'});

        // Deduplicate
        const seen = new Set();
        recs = recs.filter(r => !seen.has(r.url) && seen.add(r.url));

        const box = document.getElementById('quizResult');
        if (box) {
          box.classList.remove('hidden');
          box.innerHTML = `
            <h3>Your best next steps</h3>
            <p>Based on your inputs, start here:</p>
            <div>${recs.map(r=>`<a href="${r.url}">${r.label}</a>`).join('')}</div>
          `;
        }

        // Optional: capture lead
        try {
          fetch('/api/lead', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({ email:'', source:'quiz', answers })
          });
        } catch(e) {
          console.log('Lead capture failed:', e);
        }
      };

      quizForm.addEventListener('submit', handleQuizSubmit);

      // Cleanup
      return () => {
        quizForm.removeEventListener('submit', handleQuizSubmit);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-2 lg:pt-4">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-automotive-black via-automotive-black-light to-automotive-black opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        
        <div className="relative container mx-auto px-4 py-6 md:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Logo */}
            <div className="text-center mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Feb65e24bd52b4ebfae84a3c2f2e93a50%2Fe7952d7795f84a4f84cf9b0c98c7a36d?format=webp&width=800"
                alt="Car Leopard Logo"
                className="h-16 md:h-20 lg:h-24 mx-auto"
              />
            </div>

            {/* Full Size Davy Video */}
            <div className="relative mb-8 max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-automotive-gold/20 rounded-3xl blur-2xl scale-105"></div>
              <div className="relative bg-gradient-to-br from-automotive-gold/10 to-automotive-black border border-automotive-gold/30 rounded-3xl p-3 hover:border-automotive-gold/50 transition-all duration-300">
                <video
                  className="w-full rounded-2xl"
                  autoPlay
                  loop
                  playsInline
                  controls
                  poster=""
                >
                  <source src="https://cdn.builder.io/o/assets%2Feb65e24bd52b4ebfae84a3c2f2e93a50%2Fa1441c5e9fe645f1aa7dd5e69516099c?alt=media&token=cbf253e4-c558-4c8c-905e-15ed2a881a08&apiKey=eb65e24bd52b4ebfae84a3c2f2e93a50" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Quote overlay */}
              <div className="absolute -bottom-4 left-8 right-8 bg-automotive-black/95 border border-automotive-gold/40 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-automotive-gold text-lg md:text-xl font-medium italic text-center">
                  "I'm here to protect you from bad deals"
                </p>
                <p className="text-white text-sm mt-2 text-center">- Davy, Founder</p>
              </div>
            </div>

            {/* Content Below Video */}
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Expose the Truth{" "}
                <span className="text-automotive-gold">Before You Buy.</span>
              </h1>

              {/* Subtext */}
              <div className="mb-8 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-automotive-gold/10 px-4 py-2 rounded-full border border-automotive-gold/20 mb-6">
                <div className="w-2 h-2 bg-automotive-gold rounded-full animate-pulse"></div>
                <span className="text-automotive-gold font-semibold text-sm uppercase tracking-wide">Coming Soon</span>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed font-medium">
                The most comprehensive vehicle intelligence platform is launching.
                <span className="block mt-3 text-automotive-gold font-bold text-2xl md:text-3xl lg:text-4xl">
                  Reserve your free report today!
                </span>
              </p>
            </div>

              {/* Email Signup Form */}
              <form onSubmit={(e) => handleSubmit(e, email)} className="max-w-md mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 bg-white/10 border-automotive-gold/30 text-white placeholder:text-gray-400 focus:border-automotive-gold focus:ring-automotive-gold"
                    required
                  />
                  <Button
                    type="submit"
                    className="h-12 px-8 bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Reserve My Free Report
                  </Button>
                </div>
              </form>

            {/* Privacy Statement */}
            <p className="text-xs text-gray-500 text-center mb-4">
              We do not sell your info. Your privacy is protected.
            </p>

            {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-automotive-gold" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-automotive-gold" />
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-automotive-gold" />
                  <span>Launch expected Q3 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive Journey Cards */}
      <section className="py-16 md:py-24 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ready to Trade */}
            <Card className="bg-automotive-black border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300 group h-full">
              <CardContent className="p-8 text-left h-full flex flex-col">
                <div className="w-16 h-16 bg-automotive-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-automotive-gold/30 transition-colors">
                  <svg className="w-8 h-8 text-automotive-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  Ready to trade your car and want to know your options?
                </h3>
                <p className="text-gray-400 leading-relaxed mt-auto">
                  Ready to trade your car and want to know your options?
                </p>
              </CardContent>
            </Card>

            {/* Already Found Your Ride */}
            <Card className="bg-automotive-black border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300 group h-full">
              <CardContent className="p-8 text-left h-full flex flex-col">
                <div className="w-16 h-16 bg-automotive-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-automotive-gold/30 transition-colors">
                  <svg className="w-8 h-8 text-automotive-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.1 3.1 13 3.4 12.6 4.3L10.7 8.1C10.3 8.9 10.6 10 11.4 10.4L13 11.2V13H11L7.91 16.09C7.66 16.34 7.66 16.76 7.91 17.01L8.83 17.93C9.08 18.18 9.5 18.18 9.75 17.93L12.25 15.43C12.66 15.02 12.66 14.35 12.25 13.94L11 12.69V10.4L13 9.4V17C13 17.6 13.4 18 14 18H16C16.6 18 17 17.6 17 17V9H21Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  Already found your ride but want that peace of mind?
                </h3>
                <p className="text-gray-400 leading-relaxed mt-auto">
                  Get you peristort your top 3 and we give you a
                </p>
              </CardContent>
            </Card>

            {/* Just Starting */}
            <Card className="bg-automotive-black border-automotive-gold/20 hover:border-automotive-gold/40 transition-all duration-300 group h-full">
              <CardContent className="p-8 text-left h-full flex flex-col">
                <div className="w-16 h-16 bg-automotive-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-automotive-gold/30 transition-colors">
                  <svg className="w-8 h-8 text-automotive-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  Just starting the journey?
                </h3>
                <p className="text-gray-400 leading-relaxed mt-auto">
                  Search your top 3 and we'll give you a side by side comparison
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              HOW IT WORKS
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get the complete story of any car in three quick steps. No fluff, no guessing — just clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Step 1 - Enter VIN or Plate */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 border-2 border-automotive-gold rounded-full flex items-center justify-center mx-auto bg-transparent group-hover:bg-automotive-gold/10 transition-colors">
                  <svg className="w-12 h-12 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17 17 1 1" />
                  </svg>
                </div>
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-automotive-gold/20 -translate-x-12"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enter VIN or Plate</h3>
              <p className="text-gray-400 leading-relaxed">
                Drop in a VIN or plate number — that's all we need to start uncovering the truth.
              </p>
            </div>

            {/* Step 2 - Get the Car Story */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 border-2 border-automotive-gold rounded-full flex items-center justify-center mx-auto bg-transparent group-hover:bg-automotive-gold/10 transition-colors">
                  <svg className="w-12 h-12 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14,2 14,8 20,8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                    <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                    <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                    <polyline points="10,9 9,9 9,10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                  </svg>
                </div>
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-automotive-gold/20 -translate-x-12"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Get the Car Story</h3>
              <p className="text-gray-400 leading-relaxed">
                From the factory floor to your driveway, see the real journey — history, risks, and value in one clean report.
              </p>
            </div>

            {/* Step 3 - Buy with Confidence */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 border-2 border-automotive-gold rounded-full flex items-center justify-center mx-auto bg-transparent group-hover:bg-automotive-gold/10 transition-colors">
                  <svg className="w-12 h-12 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Buy with Confidence</h3>
              <p className="text-gray-400 leading-relaxed">
                Walk away or move forward — but this time, you know exactly what you're getting into.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Story Features Section */}
      <section id="reports" className="py-20 md:py-32 bg-gradient-to-b from-automotive-black-light via-automotive-black to-automotive-black-dark">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-automotive-gold/10 px-4 py-2 rounded-full border border-automotive-gold/20 mb-6">
              <div className="w-2 h-2 bg-automotive-gold rounded-full animate-pulse"></div>
              <span className="text-automotive-gold font-medium text-sm">Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              The <span className="text-automotive-gold">Car Story</span> Report
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See what dealers won't tell you. Get the complete truth about any vehicle before you buy.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center">
              {/* Free Report Preview Card */}
              <div className="w-full max-w-4xl">
                <div className="relative group">
                  {/* Glowing background effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-automotive-gold/20 via-automotive-gold/40 to-automotive-gold/20 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-automotive-black via-automotive-black-light to-automotive-black border-2 border-automotive-gold/30 rounded-3xl p-8 overflow-hidden">
                    {/* Free Badge */}
                    <div className="absolute -top-3 left-8 bg-automotive-gold text-automotive-black px-6 py-2 rounded-full font-bold text-sm shadow-lg z-20">
                      FREE PREVIEW
                    </div>

                    {/* Background patterns */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,200,86,0.08),transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,200,86,0.05),transparent_50%)]"></div>

                    <div className="relative z-10 pt-6">
                      {/* Header */}
                      <div className="text-center mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-automotive-gold mb-3">CAR STORY</h3>
                        <p className="text-gray-300 text-lg">Complete vehicle lifecycle analysis</p>
                      </div>

                      {/* Mock Report Preview */}
                      <div className="bg-automotive-black-dark/50 border border-automotive-gold/20 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-automotive-gold/20 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-automotive-gold" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold">2020 Toyota Camry</h4>
                              <p className="text-gray-400 text-sm">VIN: 1HGBH41JXMN109186</p>
                            </div>
                          </div>
                          <div className="bg-automotive-gold/10 text-automotive-gold px-3 py-1 rounded-full text-xs font-medium">
                            SAMPLE
                          </div>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {/* Basic Features */}
                          <div className="text-center p-3 bg-automotive-black/30 rounded-xl border border-automotive-gold/10">
                            <div className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">State History</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/30 rounded-xl border border-automotive-gold/10">
                            <div className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Safety Score</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/30 rounded-xl border border-automotive-gold/10">
                            <div className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Market Value</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/30 rounded-xl border border-automotive-gold/10">
                            <div className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Risk Analysis</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/30 rounded-xl border border-automotive-gold/10">
                            <div className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Ownership Trail</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/30 rounded-xl border border-automotive-gold/10">
                            <div className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">User Reviews</p>
                          </div>

                          {/* Premium Features with "PRO" badges */}
                          <div className="text-center p-3 bg-automotive-black/20 rounded-xl border border-automotive-gold/20 relative">
                            <div className="absolute -top-1 -right-1 bg-automotive-gold text-automotive-black text-xs px-2 py-0.5 rounded-full font-bold">PRO</div>
                            <div className="w-10 h-10 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Full History</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/20 rounded-xl border border-automotive-gold/20 relative">
                            <div className="absolute -top-1 -right-1 bg-automotive-gold text-automotive-black text-xs px-2 py-0.5 rounded-full font-bold">PRO</div>
                            <div className="w-10 h-10 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Market Analysis</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/20 rounded-xl border border-automotive-gold/20 relative">
                            <div className="absolute -top-1 -right-1 bg-automotive-gold text-automotive-black text-xs px-2 py-0.5 rounded-full font-bold">PRO</div>
                            <div className="w-10 h-10 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Cost Prediction</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/20 rounded-xl border border-automotive-gold/20 relative">
                            <div className="absolute -top-1 -right-1 bg-automotive-gold text-automotive-black text-xs px-2 py-0.5 rounded-full font-bold">PRO</div>
                            <div className="w-10 h-10 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Documentation</p>
                          </div>

                          <div className="text-center p-3 bg-automotive-black/20 rounded-xl border border-automotive-gold/20 relative">
                            <div className="absolute -top-1 -right-1 bg-automotive-gold text-automotive-black text-xs px-2 py-0.5 rounded-full font-bold">PRO</div>
                            <div className="w-10 h-10 bg-automotive-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <p className="text-xs text-gray-400 leading-tight">Expert Insights</p>
                          </div>
                        </div>
                      </div>

                      {/* Call to Action */}
                      <div className="text-center">
                        <Button className="bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-automotive-gold/25">
                          Get Your Free Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Car Quiz Section */}
      <section className="py-16 md:py-24 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Find Your Best Next Move
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Answer a few quick questions and we'll guide you to the perfect automotive path.
            </p>
          </div>

          <div id="cl-quiz">
            <form id="quizForm">
              <div className="q">
                <label>Budget range?</label>
                <select name="budget" required>
                  <option value="">Select</option>
                  <option value="under15">Under $15k</option>
                  <option value="15to25">$15k–$25k</option>
                  <option value="25to40">$25k–$40k</option>
                  <option value="40plus">$40k+</option>
                </select>
              </div>

              <div className="q">
                <label>Primary goal?</label>
                <select name="goal" required>
                  <option value="">Select</option>
                  <option value="avoidlemons">Avoid risk</option>
                  <option value="bestdeal">Max savings</option>
                  <option value="valuehold">Hold value</option>
                  <option value="evcurious">Explore EV/Hybrid</option>
                </select>
              </div>

              <div className="q">
                <label>Ownership horizon?</label>
                <select name="horizon" required>
                  <option value="">Select</option>
                  <option value="1-2">1–2 years</option>
                  <option value="3-5">3–5 years</option>
                  <option value="6plus">6+ years</option>
                </select>
              </div>

              <div className="q">
                <label>Mileage tolerance?</label>
                <select name="miles" required>
                  <option value="">Select</option>
                  <option value="low">Under 40k</option>
                  <option value="mid">40k–80k</option>
                  <option value="high">80k–120k</option>
                  <option value="any">Any</option>
                </select>
              </div>

              <div className="q">
                <label>Fuel preference?</label>
                <select name="fuel" required>
                  <option value="">Select</option>
                  <option value="gas">Gas</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="ev">EV</option>
                  <option value="diesel">Diesel</option>
                </select>
              </div>

              <div className="q">
                <label>Must-have features?</label>
                <div className="opts">
                  <label><input type="checkbox" name="feat" value="awd" /> AWD</label>
                  <label><input type="checkbox" name="feat" value="safety" /> Advanced safety</label>
                  <label><input type="checkbox" name="feat" value="tech" /> Modern tech</label>
                  <label><input type="checkbox" name="feat" value="cargo" /> Cargo space</label>
                </div>
              </div>

              <button type="submit">See my path</button>
            </form>

            <div id="quizResult" className="hidden"></div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-automotive-black-dark to-automotive-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don't Get <span className="text-automotive-gold">Fooled Again</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of smart buyers who refuse to overpay for hidden problems.
            </p>

            {/* Footer Email Signup */}
            <form onSubmit={(e) => handleSubmit(e, footerEmail)} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  className="flex-1 h-12 bg-white/10 border-automotive-gold/30 text-white placeholder:text-gray-400 focus:border-automotive-gold focus:ring-automotive-gold"
                  required
                />
                <Button
                  type="submit"
                  className="h-12 px-8 bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Get My Free Report
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>

            {/* Privacy Statement */}
            <p className="text-xs text-gray-500 text-center mb-4">
              We do not sell your info. Your privacy is protected.
            </p>

            {/* Social Media Links */}
            <div className="border-t border-automotive-gold/20 pt-8 mt-16">
              <div className="flex justify-center mb-6">
                <div className="flex gap-6">
                  <a
                    href="https://instagram.com/davycarleopard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center hover:bg-automotive-gold/20 transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-automotive-gold group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://facebook.com/profile.php?id=61578671997058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center hover:bg-automotive-gold/20 transition-colors group"
                  >
                    <Facebook className="w-5 h-5 text-automotive-gold group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://x.com/davycarleopard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center hover:bg-automotive-gold/20 transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-automotive-gold group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://linkedin.com/in/car-leopard-001a27375"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center hover:bg-automotive-gold/20 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-automotive-gold group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@davidgreen9183?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-automotive-gold/10 rounded-full flex items-center justify-center hover:bg-automotive-gold/20 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-automotive-gold group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.51v-3.4a4.85 4.85 0 0 1-1-.05"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Feb65e24bd52b4ebfae84a3c2f2e93a50%2Fe7952d7795f84a4f84cf9b0c98c7a36d?format=webp&width=800"
                    alt="Car Leopard Logo"
                    className="h-6"
                  />
                  <span>© 2025. All rights reserved.</span>
                </div>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-automotive-gold transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-automotive-gold transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-automotive-gold transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
