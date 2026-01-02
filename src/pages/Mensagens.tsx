import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/site-config";

// Schema de validação do formulário
const prayerRequestSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  lgpd: z.boolean().refine((val) => val === true, {
    message: "Você deve concordar com os termos",
  }),
});

type PrayerRequestForm = z.infer<typeof prayerRequestSchema>;

// Vídeos placeholder - podem ser substituídos por dados reais da playlist
const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Culto de Celebração - Família Abençoada",
    date: "29 Dez 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Palavra da Semana - Fé e Esperança",
    date: "26 Dez 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Estudo Bíblico - O Poder da Oração",
    date: "22 Dez 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Culto Especial de Natal",
    date: "25 Dez 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Mensagem aos Casais - Fortalecendo o Lar",
    date: "19 Dez 2025",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Culto de Oração e Intercessão",
    date: "18 Dez 2025",
  },
];

export default function Mensagens() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PrayerRequestForm>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: {
      lgpd: false,
    },
  });

  const lgpdValue = watch("lgpd");

  const onSubmit = async (data: PrayerRequestForm) => {
    setIsSubmitting(true);
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Pedido de oração:", data);
    toast({
      title: "Pedido enviado!",
      description: "Recebemos seu pedido de oração. Estaremos orando por você!",
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-turquoise font-heading text-sm uppercase tracking-widest mb-4">
                Palavra dos Pastores
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Mensagens que Edificam
              </h1>
              <p className="text-primary-foreground/70 text-lg">
                Assista às mensagens e seja edificado pela Palavra. Que o Senhor
                fortaleça sua fé e sua casa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Video Player */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="aspect-video rounded-xl overflow-hidden bg-navy shadow-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    {selectedVideo.date}
                  </p>
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    {selectedVideo.title}
                  </h2>
                </div>
              </motion.div>

              {/* Video List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <h3 className="font-heading text-lg font-bold text-foreground uppercase mb-4">
                  Mais Mensagens
                </h3>
                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                  {videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVideo(video)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selectedVideo === video
                          ? "bg-turquoise/10 border-turquoise"
                          : "bg-card border-border hover:border-turquoise/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-turquoise/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Play className="w-4 h-4 text-turquoise" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">
                            {video.date}
                          </p>
                          <h4 className="text-sm font-medium text-foreground line-clamp-2">
                            {video.title}
                          </h4>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <Button variant="turquoise" className="w-full mt-4" asChild>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Playlist Completa
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Prayer Request Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <span className="inline-block text-turquoise font-heading text-sm uppercase tracking-widest mb-4">
                  Oração
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Pedido de Oração
                </h2>
                <p className="text-muted-foreground">
                  Nos mande um e-mail com o seu pedido que estaremos orando por
                  ele!
                </p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                onSubmit={handleSubmit(onSubmit)}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border"
              >
                <div className="space-y-5">
                  {/* Nome */}
                  <div>
                    <Label htmlFor="nome" className="text-foreground">
                      Nome *
                    </Label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      className="mt-1.5"
                      {...register("nome")}
                      aria-invalid={errors.nome ? "true" : "false"}
                    />
                    {errors.nome && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.nome.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="mt-1.5"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <Label htmlFor="telefone" className="text-foreground">
                      Telefone *
                    </Label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(65) 99999-9999"
                      className="mt-1.5"
                      {...register("telefone")}
                      aria-invalid={errors.telefone ? "true" : "false"}
                    />
                    {errors.telefone && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.telefone.message}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <Label htmlFor="mensagem" className="text-foreground">
                      Pedido de Oração *
                    </Label>
                    <Textarea
                      id="mensagem"
                      placeholder="Escreva aqui seu pedido de oração..."
                      rows={5}
                      className="mt-1.5 resize-none"
                      {...register("mensagem")}
                      aria-invalid={errors.mensagem ? "true" : "false"}
                    />
                    {errors.mensagem && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.mensagem.message}
                      </p>
                    )}
                  </div>

                  {/* LGPD Checkbox */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="lgpd"
                      checked={lgpdValue}
                      onCheckedChange={(checked) =>
                        setValue("lgpd", checked as boolean)
                      }
                      aria-invalid={errors.lgpd ? "true" : "false"}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="lgpd"
                        className="text-sm text-muted-foreground font-normal cursor-pointer"
                      >
                        Ao enviar, você concorda com o uso destas informações
                        apenas para retorno e cuidado pastoral. Não
                        compartilhamos seus dados com terceiros.
                      </Label>
                      {errors.lgpd && (
                        <p className="text-destructive text-sm">
                          {errors.lgpd.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="turquoise"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Pedido
                      </>
                    )}
                  </Button>
                </div>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
