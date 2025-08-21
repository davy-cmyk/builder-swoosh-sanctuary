import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
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
            <div className="text-center mb-2">
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

      {/* Car Search Section */}
      <section className="py-12 md:py-16 bg-automotive-black-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Heading */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Search for Your Perfect Car
              </h2>
              <p className="text-gray-400">
                Enter a VIN, license plate, or search by make and model
              </p>
            </div>

            {/* Search Form */}
            <div className="bg-automotive-black border border-automotive-gold/30 rounded-2xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Enter VIN, License Plate, or Make/Model"
                  className="flex-1 h-12 bg-automotive-black-light border-automotive-gold/30 text-white placeholder:text-gray-400 focus:border-automotive-gold focus:ring-automotive-gold"
                />
                <Button className="h-12 px-8 bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Action CTAs - Smaller Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Trade Your Car */}
              <Button
                variant="outline"
                className="h-auto p-4 bg-automotive-black/50 border-automotive-gold/20 hover:border-automotive-gold/40 hover:bg-automotive-black text-left flex flex-col items-start gap-2 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-automotive-gold/20 rounded-lg flex items-center justify-center group-hover:bg-automotive-gold/30 transition-colors">
                  <svg className="w-5 h-5 text-automotive-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Trade Your Car</h3>
                  <p className="text-gray-400 text-xs">Get trade-in value & options</p>
                </div>
              </Button>

              {/* Check History */}
              <Button
                variant="outline"
                className="h-auto p-4 bg-automotive-black/50 border-automotive-gold/20 hover:border-automotive-gold/40 hover:bg-automotive-black text-left flex flex-col items-start gap-2 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-automotive-gold/20 rounded-lg flex items-center justify-center group-hover:bg-automotive-gold/30 transition-colors">
                  <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m0 0l2-2m-2 2V8m0 12a9 9 0 100-18 9 9 0 000 18z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Check History</h3>
                  <p className="text-gray-400 text-xs">Get complete car story</p>
                </div>
              </Button>

              {/* Browse Deals */}
              <Button
                variant="outline"
                className="h-auto p-4 bg-automotive-black/50 border-automotive-gold/20 hover:border-automotive-gold/40 hover:bg-automotive-black text-left flex flex-col items-start gap-2 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-automotive-gold/20 rounded-lg flex items-center justify-center group-hover:bg-automotive-gold/30 transition-colors">
                  <svg className="w-5 h-5 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Browse Deals</h3>
                  <p className="text-gray-400 text-xs">Find local car deals</p>
                </div>
              </Button>
            </div>
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

      {/* Get The Car Story Section */}
      <section id="reports" className="py-20 md:py-32 bg-gradient-to-b from-automotive-black-light via-automotive-black to-automotive-black-dark">
        <div className="container mx-auto px-4">
          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Car Image and Stats */}
              <div className="relative">
                {/* Main Heading */}
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-automotive-gold mb-4">
                    GET THE CAR STORY
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Know where the car has been to where it could go next.
                  </p>
                </div>

                {/* Car Image */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-automotive-gold/20 rounded-3xl blur-2xl scale-105"></div>
                  <div className="relative bg-gradient-to-br from-automotive-gold/10 to-automotive-black border border-automotive-gold/30 rounded-3xl p-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Feb65e24bd52b4ebfae84a3c2f2e93a50%2Ff47adcf59a414de4aa42b6e3a629c787?format=webp&width=800"
                      alt="Red sedan car"
                      className="w-full h-auto rounded-2xl"
                    />

                    {/* Car Name */}
                    <div className="text-center mt-6">
                      <h3 className="text-3xl font-bold text-white mb-2">STAN</h3>
                      <div className="flex items-center justify-center gap-2 text-automotive-gold">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-sm font-medium">TX</span>
                        <span className="text-sm">34k</span>
                        <span className="text-sm">92.3%</span>
                        <span className="text-sm">$20.7k</span>
                        <span className="text-sm">$16.3k</span>
                        <span className="text-xs bg-automotive-gold/20 px-2 py-1 rounded">MODERATE</span>
                      </div>
                    </div>

                    {/* Stats Icons Grid */}
                    <div className="grid grid-cols-4 gap-4 mt-8">
                      {/* Birth & Life Cycle */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400">Birth & Life Cycle</p>
                      </div>

                      {/* Environment & State History */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-automotive-gold" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400">Environment & State History</p>
                      </div>

                      {/* Resale Value */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2m0 0l2-2m-2 2V8m0 12a9 9 0 100-18 9 9 0 000 18z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400">Resale Value</p>
                      </div>

                      {/* How Many in My Area */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400">How Many in My Area</p>
                      </div>

                      {/* Auctions */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400">Auctions</p>
                      </div>

                      {/* Rental Cars */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400">Rental Cars</p>
                      </div>

                      {/* Trade In */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-automotive-gold" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400">Trade In</p>
                      </div>

                      {/* What People Say About It */}
                      <div className="text-center">
                        <div className="w-12 h-12 bg-automotive-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <svg className="w-6 h-6 text-automotive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-400">What People Say About It</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Sign Up Form */}
              <div className="bg-gradient-to-br from-automotive-black via-automotive-black-light to-automotive-black border-2 border-automotive-gold/30 rounded-3xl p-8 relative overflow-hidden">
                {/* Background patterns */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,200,86,0.08),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,200,86,0.05),transparent_50%)]"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-automotive-gold mb-3">
                    Sign Up to Find Out More
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    See everything you miss using our premium SBR experience
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-automotive-gold rounded-full"></div>
                      <span className="text-gray-300">The complete car story</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-automotive-gold rounded-full"></div>
                      <span className="text-gray-300">Insights and analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-automotive-gold rounded-full"></div>
                      <span className="text-gray-300">Price if traded</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-automotive-gold rounded-full"></div>
                      <span className="text-gray-300">Cost of ownership</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full h-14 bg-automotive-gold hover:bg-automotive-gold-dark text-automotive-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-automotive-gold/25">
                    UNLOCK NOW
                  </Button>
                </div>
              </div>
            </div>
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

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
