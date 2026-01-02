import { motion } from "framer-motion";
import { Play, MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, versiculos } from "@/lib/site-config";
import heroBackground from "@/assets/bg-hero-slide-ifc-2026.min.jpg";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-turquoise/20 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-turquoise rounded-full animate-pulse" />
            Bem-vindo à nossa família
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Igreja{" "}
            <span className="text-gradient">Família da Cruz</span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto"
          >
            {siteConfig.slogan}
          </motion.p>

          {/* Versículo */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-turquoise-light italic mb-8"
          >
            "{versiculos.familia.texto}"
            <cite className="block text-sm text-turquoise/70 mt-1 not-italic">
              — {versiculos.familia.referencia}
            </cite>
          </motion.blockquote>

          {/* Horários */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="bg-primary/50 backdrop-blur-sm border border-turquoise/30 rounded-lg px-6 py-3">
              <p className="font-heading text-sm uppercase tracking-wider text-turquoise">
                {siteConfig.horarios.domingo}
              </p>
            </div>
            <div className="bg-primary/50 backdrop-blur-sm border border-turquoise/30 rounded-lg px-6 py-3">
              <p className="font-heading text-sm uppercase tracking-wider text-turquoise">
                {siteConfig.horarios.quinta}
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Assistir Culto Online
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <MapPin className="w-5 h-5" />
              Como Chegar
            </Button>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex items-center justify-center gap-2 text-primary-foreground/60 text-sm"
          >
            <MapPin className="w-4 h-4 text-turquoise" />
            {siteConfig.endereco.completo}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-turquoise transition-colors"
          aria-label="Rolar para próxima seção"
        >
          <span className="text-xs uppercase tracking-widest">Saiba mais</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
