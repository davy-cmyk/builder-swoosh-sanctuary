import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  useEffect(() => {
    // Load saved theme and language from localStorage
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language') as 'en' | 'es';
    
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    // Mobile menu toggle script
    const burger = document.querySelector('.cl-burger');
    const links = document.querySelector('.cl-links');
    if (burger && links) {
      const handleClick = () => {
        const open = links.classList.toggle('show');
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      };

      burger.addEventListener('click', handleClick);

      // Cleanup
      return () => {
        burger.removeEventListener('click', handleClick);
      };
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const menuData = {
    "menu": [
      {
        "label": "ShopSmart",
        "items": [
          {"label":"Local Deals","url":"/deals"},
          {"label":"Top by Fuel Type","url":"/fuel-picks","children":[
            {"label":"Gas","url":"/fuel-picks/gas"},
            {"label":"Hybrid","url":"/fuel-picks/hybrid"},
            {"label":"EV","url":"/fuel-picks/ev"},
            {"label":"Diesel","url":"/fuel-picks/diesel"}
          ]},
          {"label":"Cars That Hold Value","url":"/value-hold"},
          {"label":"Cars to Avoid","url":"/cars-to-avoid"},
          {"label":"Compare Vehicles","url":"/compare"},
          {"label":"Car Quiz","url":"/quiz"}
        ]
      },
      {
        "label": "Buy Smarter",
        "items": [
          {"label":"Smart Buyer™ Report","url":"/smart-buyer-report"},
          {"label":"RecallGuard™","url":"/recall-check"},
          {"label":"TradeMax™","url":"/trademax"},
          {"label":"Verified Dealers","url":"/verified-dealers"},
          {"label":"Dealer Scorecards","url":"/dealer-scorecards"},
          {"label":"No-Sell Mode™","url":"/no-sell-mode"},
          {"label":"Reliability Index","url":"/reliability-index"},
          {"label":"Long-Term Cost Curve","url":"/cost-curve"},
          {"label":"Auction History","url":"/auction-history"},
          {"label":"Vehicle Story","url":"/vehicle-story"},
          {"label":"Owner's Manual Access","url":"/owners-manual"}
        ]
      },
      {
        "label": "Tools",
        "items": [
          {"label":"License Plate Lookup","url":"/plate-lookup"},
          {"label":"VIN Decoder","url":"/vin-decoder"},
          {"label":"Depreciation Calculator","url":"/depreciation"},
          {"label":"Finance & Lease Calculators","url":"/calculators","children":[
            {"label":"Loan","url":"/calculators/loan"},
            {"label":"Lease","url":"/calculators/lease"}
          ]},
          {"label":"Interest Rate Tracker","url":"/rates"},
          {"label":"My Appointment, My Way™","url":"/appointments"},
          {"label":"LotProof™ Dealer Verification","url":"/lotproof"},
          {"label":"Dealer Decoder™","url":"/dealer-decoder"},
          {"label":"Digital Garage","url":"/garage"},
          {"label":"Breakdown Help Center","url":"/breakdown-help"},
          {"label":"Roadside Assistance","url":"/roadside"},
          {"label":"Storage & Transport","url":"/transport"},
          {"label":"Accessories","url":"/accessories"}
        ]
      },
      {
        "label": "Learn",
        "items": [
          {"label":"How It Works","url":"/how-it-works"},
          {"label":"F&I Smart Add-On Hub","url":"/fi-hub","children":[
            {"label":"Warranty","url":"/fi-hub/warranty"},
            {"label":"GAP","url":"/fi-hub/gap"},
            {"label":"Maintenance Plans","url":"/fi-hub/maintenance-plans"},
            {"label":"Tire & Wheel","url":"/fi-hub/tire-wheel"}
          ]},
          {"label":"Davy Car Academy","url":"/academy","children":[
            {"label":"Dashboard Lights","url":"/academy/dashboard-lights"},
            {"label":"Maintenance by Mileage","url":"/academy/maintenance-intervals"},
            {"label":"Buying Playbook","url":"/academy/buying-playbook"}
          ]},
          {"label":"FAQs","url":"/faq"},
          {"label":"Blog","url":"/blog"}
        ]
      }
    ],
    "cta": {"label":"Get Your Report","url":"/smart-buyer-report"}
  };

  const dropdownItems = menuData.menu;

  return (
    <>
      <style jsx>{`
        .cl-nav { 
          position: sticky; 
          top: 0; 
          z-index: 100; 
          background: linear-gradient(to bottom right, hsl(var(--automotive-black)), hsl(var(--automotive-black-light)), hsl(var(--automotive-black)));
          border-bottom: 1px solid hsl(var(--automotive-gold) / 0.2); 
          backdrop-filter: blur(8px);
          position: relative;
        }
        .cl-nav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(255,215,0,0.05), transparent 50%);
          pointer-events: none;
        }
        .cl-nav-inner { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 14px 20px; 
          display: flex; 
          align-items: center; 
          justify-content: center;
          gap: 16px; 
        }
        .cl-nav-inner::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 20px;
          width: 3px;
          height: 3px;
          background: hsl(var(--automotive-gold) / 0.6);
          border-radius: 50%;
          animation: pulse 2s infinite;
          z-index: 2;
        }
        .cl-links { 
          display: flex; 
          gap: 18px; 
        }
        .cl-dropdown {
          position: relative;
        }
        .cl-dropdown:hover {
          z-index: 1001;
        }
        .cl-dropdown > button {
          color: hsl(var(--automotive-gold)); 
          text-decoration: none; 
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .cl-dropdown > button:hover {
          color: hsl(var(--automotive-gold-light));
          background: hsl(var(--automotive-gold) / 0.1);
        }
        .cl-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 250px;
          background: linear-gradient(135deg, hsl(var(--automotive-gold)), hsl(var(--automotive-gold-dark)));
          border: 2px solid hsl(var(--automotive-gold-light));
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(201, 162, 39, 0.3);
          padding: 12px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          z-index: 1000;
        }
        .cl-dropdown-menu::before {
          content: '';
          position: absolute;
          inset: 2px;
          background: linear-gradient(135deg, hsl(var(--automotive-gold) / 0.9), hsl(var(--automotive-gold-dark) / 0.9));
          border-radius: 10px;
          z-index: -1;
        }
        .cl-dropdown:hover .cl-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .cl-dropdown-menu a {
          display: block;
          padding: 12px 20px;
          color: hsl(var(--automotive-black));
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
          border-radius: 6px;
          margin: 0 8px;
          position: relative;
        }
        .cl-dropdown-menu a:hover {
          background-color: rgba(0, 0, 0, 0.1);
          color: hsl(var(--automotive-black));
          transform: translateX(4px);
          font-weight: 700;
        }
        .cl-chevron {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }
        .cl-dropdown:hover .cl-chevron {
          transform: rotate(180deg);
        }
        .cl-toggles {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-right: 16px;
        }
        .cl-toggle-btn {
          background: hsl(var(--automotive-gold) / 0.1);
          border: 1px solid hsl(var(--automotive-gold) / 0.3);
          color: hsl(var(--automotive-gold));
          padding: 6px 10px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .cl-toggle-btn:hover {
          background: hsl(var(--automotive-gold) / 0.2);
          border-color: hsl(var(--automotive-gold) / 0.5);
        }
        .cl-theme-toggle {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .cl-cta .cl-btn { 
          background: hsl(var(--automotive-gold)); 
          color: hsl(var(--automotive-black)); 
          padding: 10px 14px; 
          border-radius: 999px; 
          text-decoration: none; 
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px hsla(var(--automotive-gold) / 0.3);
        }
        .cl-cta .cl-btn:hover {
          background: hsl(var(--automotive-gold-dark));
          transform: translateY(-1px);
          box-shadow: 0 4px 12px hsla(var(--automotive-gold) / 0.4);
        }
        .cl-burger { 
          display: none; 
          margin-left: 8px; 
          width: 38px; 
          height: 34px; 
          background: transparent; 
          border: 0; 
          cursor: pointer; 
        }
        .cl-burger span { 
          display: block; 
          height: 2px; 
          background: hsl(var(--automotive-gold)); 
          margin: 6px 0; 
          transition: all 0.3s ease;
        }
        @media (max-width: 980px) {
          .cl-links { 
            display: none; 
            position: absolute; 
            top: 64px; 
            left: 0; 
            right: 0; 
            background: linear-gradient(to bottom right, hsl(var(--automotive-black)), hsl(var(--automotive-black-light)), hsl(var(--automotive-black))); 
            border-top: 1px solid hsl(var(--automotive-gold) / 0.2);
            flex-direction: column; 
            padding: 12px 20px; 
          }
          .cl-links.show { 
            display: flex; 
          }
          .cl-burger { 
            display: block; 
            margin-left: auto; 
          }
          .cl-toggles {
            display: none;
          }
          .cl-dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: 1px solid hsl(var(--automotive-gold) / 0.3);
            padding: 8px 0;
            margin-left: 16px;
            margin-top: 8px;
            background: linear-gradient(135deg, hsl(var(--automotive-gold) / 0.2), hsl(var(--automotive-gold-dark) / 0.2));
            border-radius: 8px;
          }
          .cl-dropdown > button {
            width: 100%;
            justify-content: space-between;
          }
        }
        
        /* Leopard Pattern Accents */
        .cl-nav::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, hsl(var(--automotive-gold)), transparent);
          opacity: 0.6;
          z-index: 1;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <header className={cn("cl-nav", className)}>
        <div className="cl-nav-inner">
          <nav className="cl-links" aria-label="Primary">
            {dropdownItems.map((dropdown) => (
              <div key={dropdown.label} className="cl-dropdown">
                <button>
                  {dropdown.label}
                  <svg className="cl-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="cl-dropdown-menu">
                  {dropdown.items.map((item: any) => (
                    <div key={item.label}>
                      <a
                        href={item.url}
                        onClick={() => {
                          // Close mobile menu when clicking a link
                          const links = document.querySelector('.cl-links');
                          const burger = document.querySelector('.cl-burger');
                          if (links && burger) {
                            links.classList.remove('show');
                            burger.setAttribute('aria-expanded', 'false');
                          }
                        }}
                        className="block px-4 py-3 text-automotive-black text-decoration-none font-weight-600 transition-all duration-200 border-radius-6 margin-0-8 relative hover:bg-black/10 hover:transform-translateX-4 hover:font-weight-700"
                      >
                        {item.label}
                      </a>
                      {item.children && (
                        <div className="ml-4 space-y-1">
                          {item.children.map((child: any) => (
                            <a
                              key={child.label}
                              href={child.url}
                              onClick={() => {
                                // Close mobile menu when clicking a link
                                const links = document.querySelector('.cl-links');
                                const burger = document.querySelector('.cl-burger');
                                if (links && burger) {
                                  links.classList.remove('show');
                                  burger.setAttribute('aria-expanded', 'false');
                                }
                              }}
                              className="block px-4 py-2 text-automotive-black/80 text-decoration-none font-weight-500 transition-all duration-200 border-radius-4 margin-0-8 text-sm hover:bg-black/5 hover:text-automotive-black"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="cl-toggles">
            <button
              className="cl-toggle-btn cl-theme-toggle"
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                  </svg>
                  {language === 'en' ? 'Light' : 'Claro'}
                </>
              ) : (
                <>
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
                  </svg>
                  {language === 'en' ? 'Dark' : 'Oscuro'}
                </>
              )}
            </button>

            <button
              className="cl-toggle-btn"
              onClick={toggleLanguage}
              aria-label={language === 'en' ? "Switch to Spanish" : "Switch to English"}
            >
              {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
            </button>
          </div>

          <div className="cl-cta">
            <a className="cl-btn" href="/smart-buyer-report">
              {language === 'en' ? 'Get Your Report' : 'Obtén tu Reporte'}
            </a>
          </div>

          <button
            className="cl-burger"
            aria-label="Menu"
            aria-expanded="false"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}
