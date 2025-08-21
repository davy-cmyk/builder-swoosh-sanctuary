import { Navbar } from "@/components/ui/navbar";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">How we use cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies to operate the site, remember preferences, measure performance, and run marketing.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Manage cookies in your browser. Some features may not work without them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Types of cookies we use</h2>
              <ul className="text-gray-300 leading-relaxed space-y-3">
                <li><strong>Essential cookies:</strong> Required for the site to function properly</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Managing cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and features may not work.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-automotive-gold mb-4">Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at contact@carleopard.ai
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
