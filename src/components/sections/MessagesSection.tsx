import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Placeholder para vídeos - pode ser substituído por dados reais
const videos = [
  {
    id: "1",
    title: "Culto de Domingo - Família Abençoada",
    thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=640&h=360&fit=crop",
    date: "29 Dez 2025",
  },
  {
    id: "2",
    title: "Palavra da Semana - Fé e Esperança",
    thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=640&h=360&fit=crop",
    date: "26 Dez 2025",
  },
  {
    id: "3",
    title: "Estudo Bíblico - O Poder da Oração",
    thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=640&h=360&fit=crop",
    date: "22 Dez 2025",
  },
  {
    id: "4",
    title: "Culto Especial de Natal",
    thumbnail: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=640&h=360&fit=crop",
    date: "25 Dez 2025",
  },
];

export function MessagesSection() {
  return (
    <section id="mensagens" className="py-20 md:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-turquoise font-heading text-sm uppercase tracking-widest mb-4">
            Palavra dos Pastores
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Mensagens que Edificam
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Assista às mensagens e seja edificado pela Palavra. Que o Senhor fortaleça sua fé e sua casa.
          </p>
        </motion.div>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-xl bg-navy border border-turquoise/20 transition-all duration-300 hover:border-turquoise/50 hover:shadow-turquoise">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-turquoise/90 rounded-full flex items-center justify-center shadow-turquoise transform group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-4">
                      <p className="text-xs text-turquoise mb-2">{video.date}</p>
                      <h3 className="font-heading text-sm font-semibold text-primary-foreground line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-turquoise/20 border-turquoise/30 text-primary-foreground hover:bg-turquoise hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-turquoise/20 border-turquoise/30 text-primary-foreground hover:bg-turquoise hover:text-primary-foreground" />
          </Carousel>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button variant="hero" size="lg">
            Ver Todas as Mensagens
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
