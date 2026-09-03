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
        <svg key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
    } else if (rating >= i - 0.5) {
    stars.push(
        <div key={i} className="relative w-2.5 h-2.5 sm:w-3.5 sm:h-3.5">
        <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-700 fill-slate-700" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        </div>
        </div>
    );
    } else {
    stars.push(
        <svg key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-700 fill-slate-700" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
    }
}

return (
    <div className="flex items-center gap-1 my-0.5 sm:my-1">
    <div className="flex items-center gap-0.5">{stars}</div>
    <span className="text-[9px] sm:text-xs font-semibold text-amber-400 ml-0.5 sm:ml-1">
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
    <section className="py-8 sm:py-14 px-2 sm:px-4 max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-5 sm:mb-8">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-400">
        TESTIMONI REAL
        </span>
        <h2 className="text-lg sm:text-3xl font-bold text-white mt-0.5">
        Bukti Transaksi & Kepuasan Buyer
        </h2>
        <p className="text-[11px] sm:text-sm text-slate-400 mt-0.5">
        Geser atau gunakan tombol navigasi untuk melihat riwayat transaksi sukses di Tetsumarket
        </p>
    </div>

    {randomReviews.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-slate-800 rounded-2xl text-slate-500 text-xs sm:text-sm">
        Belum ada testimoni yang diunggah.
        </div>
    ) : !isMounted ? (
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {reviews.slice(0, 3).map((_, idx) => (
            <div
            key={idx}
            className="bg-[#131B2E] border border-slate-800 rounded-xl h-48 sm:h-72 animate-pulse"
            />
        ))}
        </div>
    ) : (
        <div className="relative px-6 sm:px-10">
        {/* TOMBOL PANAH KIRI */}
        <button
            id="testimonial-prev"
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#131B2E] border border-slate-700 text-cyan-400 flex items-center justify-center hover:bg-cyan-950 transition-colors shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
        >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        </button>

        {/* TOMBOL PANAH KANAN */}
        <button
            id="testimonial-next"
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#131B2E] border border-slate-700 text-cyan-400 flex items-center justify-center hover:bg-cyan-950 transition-colors shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
        >
            <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
        </button>

        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={8}
            slidesPerView={3}
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
            640: { slidesPerView: 3, spaceBetween: 12 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            }}
            className="!pb-8 sm:!pb-10
            [&_.swiper-wrapper]:!items-stretch
            [&_.swiper-slide]:!h-auto
            [&_.swiper-pagination]:!bottom-0 
            [&_.swiper-pagination-bullet]:!bg-slate-600 
            [&_.swiper-pagination-bullet]:!opacity-40 
            [&_.swiper-pagination-bullet-active]:!bg-cyan-400 
            [&_.swiper-pagination-bullet-active]:!opacity-100 
            [&_.swiper-pagination-bullet-active]:!w-4 sm:[&_.swiper-pagination-bullet-active]:!w-6
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
                <SwiperSlide key={item.id} className="!h-auto">
                <div className="bg-[#131B2E] border border-slate-800 hover:border-cyan-500/50 rounded-xl overflow-hidden transition-all duration-300 group flex flex-col h-full">
                    {/* Frame Gambar Portrait */}
                    <div className="relative aspect-[3/4] w-full bg-slate-900 overflow-hidden flex-shrink-0">
                    <Image
                        src={validImage}
                        alt={validCaption}
                        fill
                        sizes="(max-width: 768px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* BADGE OVERLAY: Transaksi Berhasil */}
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-emerald-500/95 text-white text-[7px] sm:text-xs font-bold px-1 py-0.5 sm:px-2 sm:py-1 rounded-md flex items-center gap-0.5 sm:gap-1 shadow-md">
                        <svg
                        className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-white"
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
                    <div className="p-1.5 sm:p-3.5 bg-[#0B0E17]/80 flex flex-col justify-between flex-1">
                    <div>
                        <span className="block text-[10px] sm:text-sm font-bold text-cyan-400 truncate">
                        {validName}
                        </span>

                        {/* Komponen Bintang Rating */}
                        <RatingStars rating={validRating} />

                        {/* Caption dengan tinggi minimum seragam */}
                        <p className="text-[9px] sm:text-xs text-slate-300 line-clamp-2 leading-tight sm:leading-relaxed mt-0.5 sm:mt-1 min-h-[24px] sm:min-h-[36px]">
                        {validCaption}
                        </p>
                    </div>

                    {/* BADGE REKBER BY */}
                    <div className="mt-1.5 sm:mt-3 pt-1 sm:pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-1">
                        <span className="text-[8px] sm:text-xs text-slate-400 font-medium">
                        Rekber by:
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[8px] sm:text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-1 py-0.5 sm:px-2 sm:py-1 rounded">
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