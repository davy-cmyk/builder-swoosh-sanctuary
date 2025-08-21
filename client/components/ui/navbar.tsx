import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Smart Buyer™", href: "/smart-buyer-report" },
    { label: "Recall Check", href: "/recall-check" },
    { label: "TradeMax™", href: "/trademax" },
    { label: "Cars That Hold Value", href: "/value-hold" },
    { label: "Cars to Avoid", href: "/cars-to-avoid" },
    { label: "Top by Fuel Type", href: "/fuel-picks" }
  ];

  return (
    <>
      <style jsx>{`
        .cl-nav { 
          position: sticky; 
          top: 0; 
          z-index: 50; 
          background: #fff; 
          border-bottom: 1px solid #eee; 
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
        .cl-links a { 
          color: #333; 
          text-decoration: none; 
          font-weight: 500; 
        }
        .cl-links a:hover { 
          color: var(--gold); 
        }
        .cl-cta .cl-btn { 
          background: var(--gold); 
          color: #000; 
          padding: 10px 14px; 
          border-radius: 999px; 
          text-decoration: none; 
          font-weight: 700; 
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
          background: #222; 
          margin: 6px 0; 
        }
        @media (max-width: 980px) {
          .cl-links { 
            display: none; 
            position: absolute; 
            top: 64px; 
            left: 0; 
            right: 0; 
            background: #fff; 
            border-top: 1px solid #eee; 
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
        }
      `}</style>

      <header className={cn("cl-nav", className)}>
        <div className="cl-nav-inner">
          <a className="cl-logo" href="/">
            Car Leopard
          </a>

          <nav className={cn("cl-links", isMenuOpen && "show")} aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="cl-cta">
            <a className="cl-btn" href="/quiz">
              Car Quiz
            </a>
          </div>

          <button 
            className="cl-burger" 
            aria-label="Menu" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
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
