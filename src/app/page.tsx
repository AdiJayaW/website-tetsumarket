import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import AccountCard from '@/components/AccountCard';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

const dummyAccounts = [
  {
    title: "Mythic Glory 120 Stars - Collector Legend Skin",
    price: "Rp 2.500.000",
    rank: "Glory",
    heroes: 120,
    skins: 245,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "All Heroes Max Level - 15 Collector Skins",
    price: "Rp 850.000",
    rank: "Immortal",
    heroes: 124,
    skins: 180,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Cheap Mythic Starter Account - Clean Unbind",
    price: "Rp 1.250.000",
    rank: "Mythic",
    heroes: 95,
    skins: 110,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <StatsSection />

      {/* Top Accounts Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Top Accounts for Sale</h2>
            <p className="text-sm text-slate-400 mt-1">Hand-picked premium accounts with full guarantee</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyAccounts.map((acc, index) => (
            <AccountCard key={index} {...acc} />
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