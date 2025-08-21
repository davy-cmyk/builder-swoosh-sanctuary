import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import DoNotSell from "./pages/DoNotSell";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deals from "./pages/Deals";
import FuelPicks from "./pages/FuelPicks";
import SmartBuyerReport from "./pages/SmartBuyerReport";
import SmartBuyerSample from "./pages/SmartBuyerSample";
import SmartBuyerCheckout from "./pages/SmartBuyerCheckout";
import SmartBuyerSuccess from "./pages/SmartBuyerSuccess";
import RecallCheckResults from "./pages/RecallCheckResults";
import TradeMaxResults from "./pages/TradeMaxResults";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import CarsHoldValue from "./pages/CarsHoldValue";
import CarsToAvoid from "./pages/CarsToAvoid";
import RepairRisk from "./pages/RepairRisk";
import EvVsGas from "./pages/EvVsGas";
import LocalDeals from "./pages/LocalDeals";
import PopularPicks from "./pages/PopularPicks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy/do-not-sell" element={<DoNotSell />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/fuel-picks" element={<FuelPicks />} />
          <Route path="/smart-buyer-report" element={<SmartBuyerReport />} />
          <Route path="/smart-buyer-report/sample" element={<SmartBuyerSample />} />
          <Route path="/smart-buyer-report/checkout" element={<SmartBuyerCheckout />} />
          <Route path="/smart-buyer-report/success" element={<SmartBuyerSuccess />} />
          <Route path="/recall-check/results" element={<RecallCheckResults />} />
          <Route path="/trademax/results" element={<TradeMaxResults />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/404" element={<NotFound />} />

          {/* Car Category Pages */}
          <Route path="/cars-that-hold-value" element={<CarsHoldValue />} />
          <Route path="/cars-to-avoid" element={<CarsToAvoid />} />
          <Route path="/repair-risk" element={<RepairRisk />} />
          <Route path="/ev-vs-gas" element={<EvVsGas />} />
          <Route path="/local-deals" element={<LocalDeals />} />
          <Route path="/popular-picks" element={<PopularPicks />} />

          {/* Redirects */}
          <Route path="/report" element={<Navigate to="/smart-buyer-report" replace />} />
          <Route path="/recalls" element={<Navigate to="/recall-check" replace />} />
          <Route path="/trade" element={<Navigate to="/trademax" replace />} />
          <Route path="/values" element={<Navigate to="/value-hold" replace />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
