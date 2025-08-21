export function Footer() {
  return (
    <>
      <style jsx>{`
        .cl-footer { 
          margin-top: 40px; 
          border-top: 1px solid hsl(var(--automotive-gold) / 0.2); 
          background: hsl(var(--automotive-black));
        }
        .cl-foot-inner { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 16px 20px; 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          flex-wrap: wrap;
          gap: 16px;
        }
        .cl-foot-inner p {
          color: hsl(var(--foreground) / 0.6);
          margin: 0;
        }
        .cl-foot-inner nav {
          display: flex;
          gap: 14px;
        }
        .cl-foot-inner a { 
          color: hsl(var(--foreground) / 0.6); 
          text-decoration: none; 
          transition: color 0.2s ease;
        }
        .cl-foot-inner a:hover { 
          color: hsl(var(--automotive-gold)); 
        }
        @media (max-width: 640px) {
          .cl-foot-inner {
            flex-direction: column;
            text-align: center;
          }
          .cl-foot-inner nav {
            justify-content: center;
          }
        }
      `}</style>
      
      <footer className="cl-footer">
        <div className="cl-foot-inner">
          <p>© 2025 Car Leopard</p>
          <nav aria-label="Legal">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
