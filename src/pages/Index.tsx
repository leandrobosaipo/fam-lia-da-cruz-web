import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { MessagesSection } from "@/components/sections/MessagesSection";
import { InstagramSection } from "@/components/sections/InstagramSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <MessagesSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
