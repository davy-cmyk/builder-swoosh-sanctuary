import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { useEffect, useState } from "react";

export default function RecallCheckResults() {
  const [vehicleData, setVehicleData] = useState<any>(null);

  useEffect(() => {
    // In a real app, this would come from URL params or API
    const mockData = {
      vin: "1HGBH41JXMN109186",
      year: "2020",
      make: "Toyota",
      model: "Camry",
      recalls: [
        {
          id: "NHTSA-20V123",
          title: "Airbag Inflator Issue",
          severity: "high",
          status: "open",
          description: "Airbag inflator may rupture causing metal fragments to strike occupants.",
          remedy: "Dealer will replace airbag inflator free of charge."
        },
        {
          id: "NHTSA-19V456",
          title: "Software Update Required",
          severity: "medium",
          status: "completed",
          description: "Engine control software may cause unexpected acceleration.",
          remedy: "Software update completed at authorized dealer."
        }
      ]
    };
    setVehicleData(mockData);
  }, []);

  if (!vehicleData) {
    return (
      <div className="min-h-screen bg-automotive-black text-white">
        <Navbar />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-automotive-gold"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-automotive-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-automotive-gold mb-8">
            RecallGuard™ Results
          </h1>
          
          {/* Vehicle Info */}
          <Card className="bg-automotive-black-light border-automotive-gold/20 mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Vehicle Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">VIN:</p>
                  <p className="text-automotive-gold font-mono">{vehicleData.vin}</p>
                </div>
                <div>
                  <p className="text-gray-400">Vehicle:</p>
                  <p className="text-white">{vehicleData.year} {vehicleData.make} {vehicleData.model}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recall Status */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Recall Status</h2>
            
            {vehicleData.recalls.length === 0 ? (
              <Card className="bg-green-900/20 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-400 mb-2">No Open Recalls</h3>
                  <p className="text-gray-300">Great news! No open recalls found for this vehicle.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {vehicleData.recalls.map((recall: any) => (
                  <Card key={recall.id} className={`border ${
                    recall.severity === 'high' ? 'bg-red-900/20 border-red-500/30' :
                    recall.severity === 'medium' ? 'bg-yellow-900/20 border-yellow-500/30' :
                    'bg-blue-900/20 border-blue-500/30'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          {recall.severity === 'high' && <AlertTriangle className="w-8 h-8 text-red-400" />}
                          {recall.severity === 'medium' && <AlertTriangle className="w-8 h-8 text-yellow-400" />}
                          {recall.severity === 'low' && <Info className="w-8 h-8 text-blue-400" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-white">{recall.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              recall.status === 'open' ? 'bg-red-500/20 text-red-400' :
                              'bg-green-500/20 text-green-400'
                            }`}>
                              {recall.status === 'open' ? 'OPEN' : 'COMPLETED'}
                            </span>
                          </div>
                          <p className="text-gray-300 mb-3">{recall.description}</p>
                          <div className="bg-automotive-black/50 rounded-lg p-4">
                            <p className="text-sm text-gray-400 mb-1">Remedy:</p>
                            <p className="text-white text-sm">{recall.remedy}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-3">Recall ID: {recall.id}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Next Steps */}
          <Card className="bg-automotive-gold/10 border-automotive-gold/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-automotive-gold mb-4">Next Steps</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Contact your authorized dealer to schedule recall repairs</li>
                <li>• Keep this report for your records</li>
                <li>• Check back periodically for new recalls</li>
                <li>• Consider a full Smart Buyer™ Report for complete vehicle analysis</li>
              </ul>
              <div className="mt-6">
                <a 
                  href="/smart-buyer-report"
                  className="inline-block bg-automotive-gold text-automotive-black px-6 py-3 rounded-lg font-semibold hover:bg-automotive-gold-dark transition-colors"
                >
                  Get Full Vehicle Report
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
