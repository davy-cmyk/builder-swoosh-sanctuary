export function Footer() {
  return (
    <>
      <style jsx>{`
        .cl-footer {
          margin-top: 40px;
          border-top: 1px solid hsl(var(--automotive-gold) / 0.2);
          background: hsl(var(--automotive-black));
          padding: 32px 0;
        }
        .cl-foot-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .cl-foot-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 16px;
          justify-content: center;
          margin-bottom: 24px;
        }
        .cl-foot-links a {
          color: hsl(var(--foreground) / 0.6);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease;
        }
        .cl-foot-links a:hover {
          color: hsl(var(--automotive-gold));
        }
        .cl-foot-links .separator {
          color: hsl(var(--foreground) / 0.4);
          user-select: none;
        }
        .cl-foot-bottom {
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid hsl(var(--automotive-gold) / 0.1);
        }
        .cl-foot-bottom p {
          color: hsl(var(--foreground) / 0.5);
          margin: 0;
          font-size: 14px;
        }
        @media (max-width: 640px) {
          .cl-foot-links {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .cl-foot-links .separator {
            display: none;
          }
        }
      `}</style>

      <footer className="cl-footer">
        <div className="cl-foot-inner">
          <div className="cl-foot-links">
            <a href="/privacy">Privacy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms</a>
            <span className="separator">•</span>
            <a href="/cookies">Cookies</a>
            <span className="separator">•</span>
            <a href="/privacy/do-not-sell">Do-Not-Sell</a>
            <span className="separator">•</span>
            <a href="/about">About</a>
            <span className="separator">•</span>
            <a href="/contact">Contact</a>
            <span className="separator">•</span>
            <a href="/careers">Careers</a>
            <span className="separator">•</span>
            <a href="/press">Press</a>
            <span className="separator">•</span>
            <a href="/status">Status</a>
            <span className="separator">•</span>
            <a href="/unsubscribe">Unsubscribe</a>
          </div>

          <div className="cl-foot-bottom">
            <p>© 2025 Car Leopard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
