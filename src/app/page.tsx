import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import GameCard from '@/components/GameCard';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default async function Home() {
  const supabase = await createClient();

  // Fetch Kategori Game, Testimoni, dan FAQ secara paralel
  const [categoriesRes, faqsRes, testimonialsRes] = await Promise.all([
    supabase.from('categories').select('*'),
    supabase.from('faqs').select('id, question, answer').order('order_index', { ascending: true }),
    supabase.from('testimonials').select('*'),
  ]);

  const categories = categoriesRes.data || [];
  const faqs = faqsRes.data || [];
  const testimonials = testimonialsRes.data || [];

  // Logika penataan grid dinamis berdasarkan jumlah data dari database
  const totalGames = categories.length;
  const gridCols = totalGames <= 4 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  const containerWidth = totalGames <= 4 ? "max-w-4xl" : "max-w-7xl";

  return (
    <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal delay={0.1}>
        <StatsSection />
      </ScrollReveal>

      {/* Games Section */}
      <ScrollReveal delay={0.2}>
        <section className={`py-12 px-4 ${containerWidth} mx-auto transition-all duration-300`}>
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Kategori Games</h2>
            <p className="text-sm text-slate-400 mt-1">Pilih game favoritmu untuk melihat stok akun yang tersedia</p>
          </div>
          
          <div className={`grid ${gridCols} gap-5`}>
            {categories.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                publisher={game.publisher}
                // Baca game.image, jika tidak ada baca game.image_url
                image={game.image || game.image_url} 
                href={game.href || game.slug}
              />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Feature Section */}
      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>

      {/* Process Section */}
      <ScrollReveal>
        <ProcessSection />
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal>
        <TestimonialsSection reviews={testimonials} />
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <FaqSection faqs={faqs} />
      </ScrollReveal>

      <Footer />
    </main>
  );
}