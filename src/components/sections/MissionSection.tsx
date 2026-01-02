import { motion } from "framer-motion";
import { Heart, Eye, Star, Users, BookOpen, HandHeart } from "lucide-react";
import { conteudoInstitucional } from "@/lib/site-config";

const valores = [
  { icon: BookOpen, ...conteudoInstitucional.valores[0] },
  { icon: Star, ...conteudoInstitucional.valores[1] },
  { icon: HandHeart, ...conteudoInstitucional.valores[2] },
  { icon: Users, ...conteudoInstitucional.valores[3] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function MissionSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-turquoise font-heading text-sm uppercase tracking-widest mb-4">
            Nossa Identidade
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça os princípios que guiam nossa caminhada como família de fé.
          </p>
        </motion.div>

        {/* Missão e Visão */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Missão */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-gradient-turquoise rounded-xl flex items-center justify-center mb-6 shadow-turquoise">
              <Heart className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 uppercase">
              Missão
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {conteudoInstitucional.missao}
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 bg-gradient-turquoise rounded-xl flex items-center justify-center mb-6 shadow-turquoise">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 uppercase">
              Visão
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {conteudoInstitucional.visao}
            </p>
          </motion.div>
        </div>

        {/* Valores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <motion.div
                key={valor.titulo}
                variants={itemVariants}
                className="group bg-card rounded-xl p-6 shadow-card border border-border hover:border-turquoise/50 hover:shadow-turquoise transition-all duration-300"
              >
                <div className="w-12 h-12 bg-muted group-hover:bg-gradient-turquoise rounded-lg flex items-center justify-center mb-4 transition-all duration-300">
                  <Icon className="w-6 h-6 text-turquoise group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground mb-2 uppercase">
                  {valor.titulo}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {valor.descricao}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
