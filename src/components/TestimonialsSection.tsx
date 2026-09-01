'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import CSS Swiper
import 'swiper/css';
import 'swiper/css/pagination';

export interface TestimonialItem {
id: number;
image_url?: string;
caption?: string;
customer_name?: string;
}

export default function TestimonialsSection({
reviews = [],
}: {
reviews?: TestimonialItem[];
}) {
// 1. Mencegah Hydration Error di Next.js
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
    setIsMounted(true);
}, []);

if (!isMounted) {
    return null; // Tunda render sampai komponen siap di client
}

return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
        TESTIMONI REAL
        </span>
        <h2 className="text-3xl font-bold text-white mt-2">
        Bukti Transaksi & Kepuasan Buyer
        </h2>
        <p className="text-sm text-slate-400 mt-1">
        Geser untuk melihat riwayat transaksi sukses di Tetsumarket
        </p>
    </div>

    {/* Jika data kosong */}
    {reviews.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-slate-800 rounded-2xl text-slate-500 text-sm">
        Belum ada testimoni yang diunggah.
        </div>
    ) : (
        /* Slider Swiper */
        <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
        }}
        className="pb-12 !px-2"
        >
        {reviews.map((item) => {
            // 2. Fallback gambar jika URL di database null/kosong
            const validImage = item.image_url || '/images/mlbb_banner.webp';

            return (
            <SwiperSlide key={item.id}>
                <div className="bg-[#131B2E] border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 group">
                {/* Frame Gambar Portrait */}
                <div className="relative aspect-[3/4] w-full bg-slate-900 overflow-hidden">
                    <Image
                    src={validImage}
                    alt={item.caption || 'Testimoni Tetsumarket'}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Deskripsi */}
                <div className="p-3.5 bg-[#0B0E17]/80">
                    {item.customer_name && (
                    <span className="block text-xs font-bold text-cyan-400 mb-0.5">
                        {item.customer_name}
                    </span>
                    )}
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.caption || 'Transaksi Berhasil'}
                    </p>
                </div>
                </div>
            </SwiperSlide>
            );
        })}
        </Swiper>
    )}
    </section>
);
}