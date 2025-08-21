import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
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

  const dropdownItems = [
    {
      label: "Shop Smart",
      items: [
        { label: "Smart Buyer™ Report", href: "/smart-buyer-report" },
        { label: "Recall Check", href: "/recall-check" },
        { label: "Cars That Hold Value", href: "/value-hold" }
      ]
    },
    {
      label: "Buy Smarter", 
      items: [
        { label: "Cars to Avoid", href: "/cars-to-avoid" },
        { label: "TradeMax™", href: "/trademax" },
        { label: "Top by Fuel Type", href: "/fuel-picks" }
      ]
    },
    {
      label: "Tools",
      items: [
        { label: "VIN Check", href: "/vin-check" },
        { label: "Market Analysis", href: "/market-analysis" },
        { label: "Vehicle History", href: "/vehicle-history" }
      ]
    }
  ];

  return (
    <>
      <style jsx>{`
        .cl-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: hsl(var(--automotive-black));
          border-bottom: 1px solid hsl(var(--automotive-gold) / 0.2);
          backdrop-filter: blur(8px);
        }
        .cl-nav-inner { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 14px 20px; 
          display: flex; 
          align-items: center; 
          gap: 16px; 
        }
        .cl-logo { 
          font-weight: 700; 
          letter-spacing: .2px; 
          color: var(--ink); 
          text-decoration: none; 
        }
        .cl-links { 
          display: flex; 
          gap: 18px; 
          margin-left: auto; 
        }
        .cl-dropdown {
          position: relative;
        }
        .cl-dropdown > button {
          color: hsl(var(--foreground) / 0.8);
          text-decoration: none;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .cl-dropdown > button:hover {
          color: hsl(var(--automotive-gold));
        }
        .cl-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 200px;
          background: hsl(var(--automotive-black));
          border: 2px solid hsl(var(--automotive-gold) / 0.5);
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.8);
          padding: 12px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
          z-index: 1000;
        }
        .cl-dropdown:hover .cl-dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .cl-dropdown-menu a {
          display: block;
          padding: 12px 20px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
          border-radius: 6px;
          margin: 0 8px;
        }
        .cl-dropdown-menu a:hover {
          background-color: hsl(var(--automotive-gold) / 0.2);
          color: hsl(var(--automotive-gold));
          transform: translateX(4px);
        }
        .cl-chevron {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }
        .cl-dropdown:hover .cl-chevron {
          transform: rotate(180deg);
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
            background: hsl(var(--automotive-black));
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
          .cl-dropdown-menu {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-left: 16px;
            margin-top: 8px;
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
        }
        .cl-nav::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 20px;
          width: 3px;
          height: 3px;
          background: hsl(var(--automotive-gold) / 0.4);
          border-radius: 50%;
          animation: pulse 2s infinite;
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
                  {dropdown.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        // Close mobile menu when clicking a link
                        const links = document.querySelector('.cl-links');
                        const burger = document.querySelector('.cl-burger');
                        if (links && burger) {
                          links.classList.remove('show');
                          burger.setAttribute('aria-expanded', 'false');
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="cl-cta">
            <a className="cl-btn" href="/quiz">
              Quiz
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
