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
    title: "Mobile Legends Stock Tetsumarket",
    publisher: "Moonton",
    image: "/images/mlbb_banner.webp",
  },
  {
    title: "Mobile Legends Titip Jual",
    publisher: "Moonton",
    image: "/images/mlbb_jaspost.webp",
  },
];

export default function Home() {
  const totalGames = dummyGames.length;

  // Logika Auto-Adjustment Kolom Grid & Lebar Kontainer
  const gridCols = totalGames <= 4 
    ? "grid-cols-1 sm:grid-cols-2"              // 2 atau 4 item = 2 kolom
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"; // 6+ item = 3 kolom

  // Pembatas lebar agar kartu tidak melar/terlalu lebar saat hanya 2 atau 4 item
  const containerWidth = totalGames <= 4 ? "max-w-4xl" : "max-w-7xl";

  return (
    <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <StatsSection />

      {/* Games Section */}
      <section className={`py-12 px-4 ${containerWidth} mx-auto transition-all duration-300`}>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Kategori Games</h2>
          <p className="text-sm text-slate-400 mt-1">Pilih game favoritmu untuk melihat stok akun yang tersedia</p>
        </div>
        
        {/* Dynamic Grid Layout */}
        <div className={`grid ${gridCols} gap-5`}>
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