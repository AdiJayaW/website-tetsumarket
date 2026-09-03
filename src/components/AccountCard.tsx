'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, UserCheck } from 'lucide-react';

export interface AccountCardProps {
    id: string;
    title: string;
    code: string;
    price: number;
    originalPrice?: number;
    discount?: string;
    heroCount: number;
    skinCount: number;
    rank: string;
    image: string;
    href?: string;
    status?: string; // Tambahan prop status
}

export default function AccountCard({
    code,
    title,
    price,
    originalPrice,
    discount,
    heroCount,
    skinCount,
    rank,
    image,
    href = '#',
    status = 'available', // Default status available
}: AccountCardProps) {
    const isSold = status?.toLowerCase() === 'sold';

    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(price);

    const formattedOriginal = originalPrice
        ? new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(originalPrice)
        : null;

    return (
        <Link 
            href={isSold ? '#' : href} 
            onClick={(e) => isSold && e.preventDefault()}
            className={`block group ${isSold ? 'cursor-not-allowed' : ''}`}
        >
            <div className={`bg-[#131B2E] border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-lg h-full flex flex-col justify-between ${
                isSold 
                    ? 'opacity-80' 
                    : 'hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-cyan-500/10'
            }`}>
                
                <div>
                    {/* Gambar Akun Rasio 1:1 (Aspect Square) + Badge Diskonto */}
                    <div className="relative aspect-square w-full bg-slate-900 overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            className={`object-cover transition-transform duration-300 ${
                                isSold ? 'filter grayscale-[30%]' : 'group-hover:scale-105'
                            }`}
                        />

                        {/* Overlay Bayang Dark & Badge TERJUAL Harmonis */}
                        {isSold && (
                            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] z-20 flex items-center justify-center">
                                <span className="bg-[#1E293B]/90 text-slate-200 font-extrabold text-xs sm:text-sm px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-slate-600/80 shadow-2xl tracking-widest uppercase">
                                    TERJUAL
                                </span>
                            </div>
                        )}

                        {/* Diskon Badge */}
                        {discount && !isSold && (
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-600 text-white text-[10px] sm:text-xs font-black px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shadow-md tracking-wider">
                                {discount} OFF
                            </div>
                        )}

                        {/* Code ID Badge */}
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-[10px] sm:text-[11px] font-mono px-1.5 py-0.5 rounded border border-cyan-500/30">
                            #{code}
                        </div>
                    </div>

                    {/* Info Akun */}
                    <div className="p-2.5 sm:p-4">
                        {/* Judul Akun */}
                        <h3 className={`font-bold text-xs sm:text-sm line-clamp-1 transition-colors ${
                            isSold ? 'text-slate-400' : 'text-white group-hover:text-cyan-400'
                        }`}>
                            {title}
                        </h3>

                        {/* Statistik Ringkas (Hero, Skin, Rank) */}
                        <div className="grid grid-cols-3 gap-0.5 sm:gap-1 my-2 sm:my-3 bg-[#0B0E17]/60 p-1.5 sm:p-2 rounded-lg sm:rounded-xl border border-slate-800/60 text-center">
                            <div>
                                <span className="block text-[9px] sm:text-[10px] text-slate-400">Hero</span>
                                <span className="font-bold text-[11px] sm:text-xs text-cyan-300">{heroCount}</span>
                            </div>
                            <div className="border-x border-slate-800">
                                <span className="block text-[9px] sm:text-[10px] text-slate-400">Skin</span>
                                <span className="font-bold text-[11px] sm:text-xs text-cyan-300">{skinCount}</span>
                            </div>
                            <div>
                                <span className="block text-[9px] sm:text-[10px] text-slate-400">High Rank</span>
                                <span className="font-bold text-[10px] sm:text-xs text-slate-200 truncate block px-0.5">{rank}</span>
                            </div>
                        </div>

                        {/* Harga */}
                        <div className="mt-1 sm:mt-2">
                            {formattedOriginal && (
                                <span className="text-[10px] sm:text-xs text-slate-500 line-through block">
                                    {formattedOriginal}
                                </span>
                            )}
                            <div className={`text-sm sm:text-lg font-black tracking-tight ${
                                isSold ? 'text-slate-500 line-through' : 'text-cyan-400'
                            }`}>
                                {formattedPrice}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tag Garansi & Keamanan */}
                <div className="p-2.5 sm:p-4 pt-0">
                    <div className="pt-2 sm:pt-3 border-t border-slate-800/80 flex items-center justify-between text-[9px] sm:text-[11px] text-slate-400">
                        <span className="flex items-center gap-0.5 sm:gap-1 text-emerald-400 font-medium">
                            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Garansi
                        </span>
                        <span className="flex items-center gap-0.5 sm:gap-1 text-slate-400">
                            <UserCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" /> Admin Fast
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}