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
    { label: "Home", href: "#home" },
    { 
      label: "Reports", 
      href: "#reports",
      dropdown: [
        { label: "Vehicle History", href: "#history" },
        { label: "Market Analysis", href: "#market" },
        { label: "Safety Reports", href: "#safety" }
      ]
    },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" }
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
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-automotive-gold/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-automotive-gold to-automotive-gold-dark rounded-full flex items-center justify-center shadow-lg">
                <Car className="w-5 h-5 lg:w-6 lg:h-6 text-automotive-black" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-automotive-gold tracking-tight">
                CAR LEOPARD
              </span>
              <span className="text-xs text-gray-400 -mt-1 hidden sm:block">
                Vehicle Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-gray-300 hover:text-automotive-gold transition-colors duration-200 py-2 group">
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={cn(
                      "absolute top-full left-0 mt-2 w-56 bg-automotive-black-light/95 backdrop-blur-md border border-automotive-gold/20 rounded-xl shadow-2xl transition-all duration-200",
                      activeDropdown === item.label 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 translate-y-2 pointer-events-none"
                    )}>
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-gray-300 hover:text-automotive-gold hover:bg-automotive-gold/10 rounded-lg transition-all duration-200"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="relative text-gray-300 hover:text-automotive-gold transition-colors duration-200 py-2"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-automotive-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-automotive-gold hover:bg-automotive-gold/10 border border-transparent hover:border-automotive-gold/20"
            >
              <Search className="w-4 h-4 mr-2" />
              Search VIN
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-automotive-gold to-automotive-gold-dark hover:from-automotive-gold-dark hover:to-automotive-gold text-automotive-black font-semibold shadow-lg hover:shadow-automotive-gold/25 transition-all duration-300"
            >
              <Shield className="w-4 h-4 mr-2" />
              Get Free Report
            </Button>
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
                    <div>
                      <span className="text-lg font-bold text-automotive-gold">CAR LEOPARD</span>
                      <p className="text-xs text-gray-400">Vehicle Intelligence</p>
                    </div>
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
                <div className="flex-1 py-6 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )}
                            className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-automotive-gold hover:bg-automotive-gold/10 rounded-lg transition-all duration-200"
                          >
                            {item.label}
                            <ChevronDown className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              activeDropdown === item.label && "rotate-180"
                            )} />
                          </button>
                          {activeDropdown === item.label && (
                            <div className="ml-4 mt-2 space-y-1">
                              {item.dropdown.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-4 py-2 text-sm text-gray-400 hover:text-automotive-gold hover:bg-automotive-gold/5 rounded-lg transition-all duration-200"
                                >
                                  {dropdownItem.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-3 text-gray-300 hover:text-automotive-gold hover:bg-automotive-gold/10 rounded-lg transition-all duration-200"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 pt-6 border-t border-automotive-gold/20">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-gray-300 hover:text-automotive-gold border-automotive-gold/20 hover:border-automotive-gold/40 hover:bg-automotive-gold/10"
                    onClick={() => setIsOpen(false)}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Search VIN
                  </Button>
                  <Button
                    className="w-full justify-start bg-gradient-to-r from-automotive-gold to-automotive-gold-dark hover:from-automotive-gold-dark hover:to-automotive-gold text-automotive-black font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Get Free Report
                  </Button>
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
