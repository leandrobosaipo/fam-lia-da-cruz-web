import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Mail,
  Phone,
  Instagram,
  Youtube,
  ExternalLink,
  Heart,
} from "lucide-react";
import { siteConfig, versiculos } from "@/lib/site-config";
import logo from "@/assets/logo-igreja-familia-da-cruz.png";

const socialLinks = [
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-navy text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <img
              src={logo}
              alt={siteConfig.nome}
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary-foreground/70 text-sm mb-4">
              {siteConfig.slogan}
            </p>
            <blockquote className="text-turquoise-light italic text-sm border-l-2 border-turquoise pl-3">
              "{versiculos.familia.texto}"
              <cite className="block text-turquoise/60 text-xs mt-1 not-italic">
                — {versiculos.familia.referencia}
              </cite>
            </blockquote>
          </motion.div>

          {/* Horários */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-turquoise" />
              Horários
            </h3>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-turquoise rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary-foreground">
                    Culto de Celebração
                  </p>
                  <p className="text-sm">{siteConfig.horarios.domingo}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-turquoise rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary-foreground">
                    Culto de Ensino
                  </p>
                  <p className="text-sm">{siteConfig.horarios.quinta}</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Endereço */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-turquoise" />
              Localização
            </h3>
            <address className="not-italic text-primary-foreground/70 space-y-2">
              <p>{siteConfig.endereco.rua}</p>
              <p>{siteConfig.endereco.bairro}</p>
              <p>
                {siteConfig.endereco.cidade} - {siteConfig.endereco.uf}
              </p>
              <p>CEP: {siteConfig.endereco.cep}</p>
            </address>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-turquoise hover:text-turquoise-light transition-colors mt-4 text-sm"
            >
              Ver no Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a
                  href={`mailto:${siteConfig.contato.email}`}
                  className="flex items-center gap-2 hover:text-turquoise transition-colors"
                >
                  <Mail className="w-4 h-4 text-turquoise" />
                  {siteConfig.contato.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contato.whatsapp.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 hover:text-turquoise transition-colors"
                >
                  <Phone className="w-4 h-4 text-turquoise" />
                  {siteConfig.contato.whatsapp}
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="mt-6">
              <p className="text-sm text-primary-foreground/50 mb-3">
                Redes Sociais
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-turquoise/20 hover:bg-turquoise rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-turquoise/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>
              © {currentYear} {siteConfig.nomeCompleto}. Todos os direitos
              reservados.
            </p>
            <p className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-turquoise" /> para a
              glória de Deus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
