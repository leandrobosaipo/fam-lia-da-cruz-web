import { motion } from "framer-motion";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

// Posts simulados do Instagram - podem ser substituídos por integração real
const instagramPosts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",
    likes: 156,
    comments: 12,
    caption: "A família é um projeto de Deus! 🏠❤️",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=400&fit=crop",
    likes: 203,
    comments: 18,
    caption: "Culto especial de louvor e adoração 🙏",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=400&h=400&fit=crop",
    likes: 178,
    comments: 24,
    caption: "Batismo nas águas - novas vidas para Cristo! 💧",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-turquoise font-heading text-sm uppercase tracking-widest mb-4">
            <Instagram className="w-4 h-4" />
            Siga-nos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {siteConfig.social.instagramHandle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossas atividades, eventos e momentos especiais nas redes sociais.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative aspect-square overflow-hidden rounded-xl bg-card shadow-card border border-border hover:border-turquoise/50 transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="flex items-center justify-center gap-6 text-primary-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-5 h-5" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-5 h-5" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-primary-foreground/80 text-sm px-4 line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
              {/* Instagram icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-navy/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-4 h-4 text-primary-foreground" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button variant="turquoise" size="lg" asChild>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
              Seguir no Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
