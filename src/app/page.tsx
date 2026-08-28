import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import GameCard from '@/components/GameCard';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const dummyGames = [
  {
    title: "Mobile Legends Stock Venderpedia",
    publisher: "Moonton",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Mobile Legends Titip Jual",
    publisher: "Moonton",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Free Fire Stock Venderpedia",
    publisher: "Garena",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Free Fire Titip Jual",
    publisher: "Garena",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Genshin Impact Stock Venderpedia",
    publisher: "miHoYo",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Genshin Impact Titip Jual",
    publisher: "miHoYo",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <StatsSection />

      {/* Games Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">

        <div className ="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Kategori Games</h2>
          <p className="text-sm text-slate-400 mt-1 ">Pilih game favoritmu untuk melihat stok akun yang tersedia</p>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dummyGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </section>

      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}