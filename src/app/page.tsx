import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import GameCard from '@/components/GameCard';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default async function Home() {
  const supabase = await createClient();

  const [categoriesRes, faqsRes, testimonialsRes, accountsRes] = await Promise.all([
    supabase.from('categories').select('*'),
    supabase.from('faqs').select('id, question, answer').order('order_index', { ascending: true }),
    supabase.from('testimonials').select('*'),
    supabase.from('accounts').select('id', { count: 'exact', head: true }).eq('status', 'available'),
  ]);

  const categories = categoriesRes.data || [];
  const faqs = faqsRes.data || [];
  const testimonials = testimonialsRes.data || [];
  const activeListingsCount = accountsRes.count ?? 0;

  // Penataan grid responsif: 2 kolom di HP (grid-cols-2), 3 kolom di PC (md:grid-cols-3)
  const gridCols = "grid-cols-2 md:grid-cols-3";
  const containerWidth = "max-w-6xl";

  return (
    <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans selection:bg-purple-500 selection:text-white overflow-hidden pt-20 sm:pt-24">
      <Navbar />

      {/* Hero Section */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal delay={0.1}>
        <StatsSection 
          testimonials={testimonials} 
          activeListingsCount={activeListingsCount} 
        />
      </ScrollReveal>

      {/* Games Section */}
      <ScrollReveal delay={0.2}>
        <section className={`py-8 sm:py-12 px-4 ${containerWidth} mx-auto transition-all duration-300`}>
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl font-bold text-white">Kategori Games</h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">Pilih game favoritmu untuk melihat stok akun yang tersedia</p>
          </div>
          
          <div className={`grid ${gridCols} gap-3 sm:gap-5`}>
            {categories.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                publisher={game.publisher}
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