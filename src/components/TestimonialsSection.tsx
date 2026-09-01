'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface TestimonialItem {
id: number;
image_url?: string;
image?: string;
caption?: string;
comment?: string;
customer_name?: string;
rating?: number;
rekber_by?: string;
}

function RatingStars({ rating = 5 }: { rating?: number }) {
const stars = [];

for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
    stars.push(
        <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
    } else if (rating >= i - 0.5) {
    stars.push(
        <div key={i} className="relative w-3.5 h-3.5">
        <svg className="w-3.5 h-3.5 text-slate-700 fill-slate-700" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        </div>
        </div>
    );
    } else {
    stars.push(
        <svg key={i} className="w-3.5 h-3.5 text-slate-700 fill-slate-700" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
    }
}

return (
    <div className="flex items-center gap-1 my-1">
    <div className="flex items-center gap-0.5">{stars}</div>
    <span className="text-[11px] font-semibold text-amber-400 ml-1">
        {rating.toFixed(1)}
    </span>
    </div>
);
}

export default function TestimonialsSection({
reviews = [],
}: {
reviews?: TestimonialItem[];
}) {
const [isMounted, setIsMounted] = useState(false);
const [randomReviews, setRandomReviews] = useState<TestimonialItem[]>([]);

useEffect(() => {
    setIsMounted(true);
    if (reviews.length > 0) {
    const shuffled = [...reviews]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
    setRandomReviews(shuffled);
    }
}, [reviews]);

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
        Geser atau gunakan tombol navigasi untuk melihat riwayat transaksi sukses di Tetsumarket
        </p>
    </div>

    {randomReviews.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-slate-800 rounded-2xl text-slate-500 text-sm">
        Belum ada testimoni yang diunggah.
        </div>
    ) : !isMounted ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.slice(0, 4).map((_, idx) => (
            <div
            key={idx}
            className="bg-[#131B2E] border border-slate-800 rounded-2xl h-80 animate-pulse"
            />
        ))}
        </div>
    ) : (
        /* Wrapper Utama: Diberi padding samping (px-10 sm:px-12) agar tombol panah punya tempat melayang di luar */
        <div className="relative px-10 sm:px-12">
        
        {/* TOMBOL PANAH KIRI (KUSTOM, DI LUAR CAROUSEL) */}
        <button
            id="testimonial-prev"
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#131B2E] border border-slate-700 text-cyan-400 flex items-center justify-center hover:bg-cyan-950 transition-colors shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
        >
            <ChevronLeft className="w-5 h-5" />
        </button>

        {/* TOMBOL PANAH KANAN (KUSTOM, DI LUAR CAROUSEL) */}
        <button
            id="testimonial-next"
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#131B2E] border border-slate-700 text-cyan-400 flex items-center justify-center hover:bg-cyan-950 transition-colors shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
        >
            <ChevronRight className="w-5 h-5" />
        </button>

        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
            prevEl: '#testimonial-prev',
            nextEl: '#testimonial-next',
            }}
            breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }, // Tepat 4 kartu di layar desktop
            }}
            className="!pb-12
            [&_.swiper-pagination]:!bottom-0 
            [&_.swiper-pagination-bullet]:!bg-slate-600 
            [&_.swiper-pagination-bullet]:!opacity-40 
            [&_.swiper-pagination-bullet-active]:!bg-cyan-400 
            [&_.swiper-pagination-bullet-active]:!opacity-100 
            [&_.swiper-pagination-bullet-active]:!w-6 
            [&_.swiper-pagination-bullet-active]:!rounded-full"
        >
            {randomReviews.map((item) => {
            const validImage =
                item.image_url || item.image || '/images/mlbb_banner.webp';
            const validCaption =
                item.caption || item.comment || 'Transaksi Berhasil';
            const validName = item.customer_name || 'Buyer';
            const validRating = Number(item.rating) || 5;
            const validRekber = item.rekber_by || 'Admin Tetsumarket';

            return (
                <SwiperSlide key={item.id}>
                {/* KARTU ASLI AWAL DARI ANDA (TIDAK DIUBAH SAMA SEKALI) */}
                <div className="bg-[#131B2E] border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col h-full">
                    
                    {/* Frame Gambar Portrait */}
                    <div className="relative aspect-[3/4] w-full bg-slate-900 overflow-hidden">
                    <Image
                        src={validImage}
                        alt={validCaption}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* BADGE OVERLAY: Transaksi Berhasil */}
                    <div className="absolute top-2.5 right-2.5 bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg border border-emerald-400/30">
                        <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                        />
                        </svg>
                        <span>Transaksi Berhasil</span>
                    </div>
                    </div>

                    {/* Deskripsi, Rating & Badge Rekber */}
                    <div className="p-3.5 bg-[#0B0E17]/80 flex flex-col justify-between flex-1">
                    <div>
                        <div className="flex items-center justify-between">
                        <span className="block text-xs font-bold text-cyan-400">
                            {validName}
                        </span>
                        </div>

                        {/* Komponen Bintang Rating */}
                        <RatingStars rating={validRating} />

                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mt-1">
                        {validCaption}
                        </p>
                    </div>

                    {/* BADGE REKBER BY */}
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-medium">
                        Rekber by:
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-md">
                        <svg
                            className="w-3 h-3 text-cyan-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                        {validRekber}
                        </span>
                    </div>

                    </div>

                </div>
                </SwiperSlide>
            );
            })}
        </Swiper>
        </div>
    )}
    </section>
);
}