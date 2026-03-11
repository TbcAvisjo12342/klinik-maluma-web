import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Forside" },
  { to: "/behandlinger", label: "Behandlinger" },
  { to: "/priser", label: "Priser" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/faq", label: "FAQ" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+4540558451" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" /> 40 55 84 51
            </a>
            <a href="mailto:klinik.maluma@gmail.com" className="hidden sm:flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" /> klinik.maluma@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs opacity-80">
            <MapPin className="w-3.5 h-3.5" /> Sibberupvej 13, 4684 Holmegaard
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-foreground">
              Klinik Maluma
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Holistisk velvære
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background border-b"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base font-medium py-2 transition-colors ${
                      location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-3">Klinik Maluma</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Holistisk velvære og akupunktur i trygge rammer. Over 6 års erfaring.
              </p>
              <div className="flex items-center gap-1 mt-3">
                <span style={{ color: "hsl(45, 93%, 47%)" }}>★★★★★</span>
                <span className="text-sm text-muted-foreground">4,9 på Google</span>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-3">Kontakt</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> <a href="tel:+4540558451" className="hover:text-foreground transition-colors">40 55 84 51</a></p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> <a href="mailto:klinik.maluma@gmail.com" className="hover:text-foreground transition-colors">klinik.maluma@gmail.com</a></p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Sibberupvej 13, 4684 Holmegaard</p>
              </div>
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold mb-3">Hurtige links</h4>
              <div className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="block text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                ))}
                <Link to="/privatlivspolitik" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privatlivspolitik
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Klinik Maluma. Alle rettigheder forbeholdes.
          </div>
        </div>
      </footer>
    </div>
  );
}
