import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Car, Shield, Search, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Smart Buyer™", href: "/smart-buyer-report" },
    { label: "Recall Check", href: "/recall-check" },
    { label: "TradeMax™", href: "/trademax" },
    { label: "Cars That Hold Value", href: "/value-hold" },
    { label: "Cars to Avoid", href: "/cars-to-avoid" },
    { label: "Top by Fuel Type", href: "/fuel-picks" }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-automotive-black/95 backdrop-blur-md border-b border-automotive-gold/20",
      "before:absolute before:inset-0 before:bg-gradient-to-r before:from-automotive-gold/5 before:via-transparent before:to-automotive-gold/5",
      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-automotive-gold/40 after:to-transparent",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-automotive-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-automotive-gold to-automotive-gold-dark rounded-full flex items-center justify-center shadow-lg">
                <Car className="w-5 h-5 lg:w-6 lg:h-6 text-automotive-black" />
              </div>
            </div>
            <span className="text-lg lg:text-xl font-bold text-automotive-gold tracking-tight">
              Car Leopard
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-gray-300 hover:text-automotive-gold transition-colors duration-200 py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-automotive-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/quiz"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-automotive-gold to-automotive-gold-dark hover:from-automotive-gold-dark hover:to-automotive-gold text-automotive-black font-semibold rounded-lg shadow-lg hover:shadow-automotive-gold/25 transition-all duration-300"
            >
              Car Quiz
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-automotive-gold hover:bg-automotive-gold/10"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-80 bg-automotive-black border-l border-automotive-gold/20 backdrop-blur-xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-6 border-b border-automotive-gold/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-automotive-gold to-automotive-gold-dark rounded-full flex items-center justify-center">
                      <Car className="w-5 h-5 text-automotive-black" />
                    </div>
                    <span className="text-lg font-bold text-automotive-gold">Car Leopard</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-automotive-gold"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-6 space-y-2" aria-label="Primary">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-300 hover:text-automotive-gold hover:bg-automotive-gold/10 rounded-lg transition-all duration-200"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <div className="pt-6 border-t border-automotive-gold/20">
                  <a
                    href="/quiz"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-automotive-gold to-automotive-gold-dark hover:from-automotive-gold-dark hover:to-automotive-gold text-automotive-black font-semibold rounded-lg transition-all duration-300"
                  >
                    Car Quiz
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Leopard Pattern Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-automotive-gold to-transparent opacity-60"></div>
      <div className="absolute top-0 left-4 w-2 h-2 bg-automotive-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute top-2 right-8 w-1 h-1 bg-automotive-gold/40 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1 left-1/3 w-1.5 h-1.5 bg-automotive-gold/20 rounded-full animate-pulse delay-700"></div>
    </nav>
  );
}
