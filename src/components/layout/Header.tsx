import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Clock, MapPin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import logo from "@/assets/logo-igreja-familia-da-cruz.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/mensagens", label: "Mensagens" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-turquoise/20">
      {/* Top bar com horários */}
      <div className="bg-navy hidden md:block">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm text-primary-foreground/80">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-turquoise" />
              {siteConfig.horarios.domingo} • {siteConfig.horarios.quinta}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-turquoise" />
              {siteConfig.endereco.bairro}, {siteConfig.endereco.cidade}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-turquoise transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3" aria-label="Ir para página inicial">
            <img
              src={logo}
              alt={`Logo ${siteConfig.nome}`}
              className="h-12 md:h-14 w-auto"
            />
            <div className="hidden sm:block">
              <span className="font-heading text-lg md:text-xl font-bold text-primary-foreground leading-tight">
                {siteConfig.nome}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-turquoise transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="default">
              Culto Online
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-t border-turquoise/20"
            aria-label="Navegação mobile"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-heading text-sm uppercase tracking-wider text-primary-foreground/80 hover:text-turquoise transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-turquoise/20">
                <span className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <Clock className="w-4 h-4 text-turquoise" />
                  {siteConfig.horarios.domingo}
                </span>
              </div>
              <Button variant="hero" size="lg" className="mt-2">
                Culto Online
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
