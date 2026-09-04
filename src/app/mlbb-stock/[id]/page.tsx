'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    ArrowLeft, 
    ShieldCheck, 
    UserCheck, 
    MessageSquare, 
    Loader2, 
    CheckCircle2, 
    Sparkles 
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface AccountDetail {
    id: string;
    code: string;
    title: string;
    price: number;
    original_price?: number;
    discount?: string;
    hero_count: number;
    skin_count: number;
    rank: string;
    image: string;
    status: string;
    category: string;
    views: number;
}

export default function AccountDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params menggunakan 'use' (standar Next.js App Router terbaru)
    const resolvedParams = use(params);
    const accountId = resolvedParams.id;

    const [account, setAccount] = useState<AccountDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAndTrackAccount = async () => {
            if (!accountId) return;
            setLoading(true);

            // 1. Panggil fungsi RPC increment_views untuk menambah hitungan klik (+1)
            await supabase.rpc('increment_views', { account_id: accountId });

            // 2. Ambil detail akun dari Supabase berdasarkan ID (UUID)
            const { data, error } = await supabase
                .from('accounts')
                .select('*')
                .eq('id', accountId)
                .single();

            if (error) {
                console.error('Gagal mengambil detail akun:', error.message);
            } else {
                setAccount(data);
            }

            setLoading(false);
        };

        fetchAndTrackAccount();
    }, [accountId]);

    if (loading) {
        return (
            <main className="min-h-screen bg-[#0B0E17] text-white flex flex-col items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-cyan-400 mb-3" />
                <p className="text-sm text-slate-400">Memuat detail akun...</p>
            </main>
        );
    }

    if (!account) {
        return (
            <main className="min-h-screen bg-[#0B0E17] text-white flex flex-col items-center justify-center p-4">
                <h1 className="text-xl font-bold text-rose-400 mb-2">Akun Tidak Ditemukan</h1>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 text-center">
                    Akun yang kamu cari mungkin sudah dihapus atau URL salah.
                </p>
                <Link 
                    href="/mlbb-stock" 
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Stok MLBB
                </Link>
            </main>
        );
    }

    const isSold = account.status?.toLowerCase() === 'sold';

    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(account.price);

    const formattedOriginal = account.original_price
        ? new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(account.original_price)
        : null;

    // Link WhatsApp otomatis mencantumkan Kode Akun & Harga
    const waNumber = '6281234567890'; // Ganti dengan nomor WA Admin-mu
    const waMessage = encodeURIComponent(
        `Halo Admin Tetsumarket, saya mau order akun Mobile Legends ini:\n\n` +
        `• Kode Akun: #${account.code}\n` +
        `• Judul: ${account.title}\n` +
        `• Harga: ${formattedPrice}\n\n` +
        `Apakah stok masih tersedia?`
    );
    const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

    return (
        <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans pt-20 sm:pt-24 pb-16">
            <Navbar />

            <div className="max-w-5xl mx-auto px-3 sm:px-6">
                
                {/* Tombol Kembali */}
                <Link 
                    href="/mlbb-stock" 
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-xs sm:text-sm font-medium mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog MLBB
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                    
                    {/* Gambar Utama / Gallery (Kolom Kiri) */}
                    <div className="lg:col-span-7">
                        <div className="relative aspect-square w-full bg-[#131B2E] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={account.image || '/images/mlbb_banner.webp'}
                                alt={account.title}
                                fill
                                priority
                                className={`object-cover ${isSold ? 'filter grayscale-[40%]' : ''}`}
                            />

                            {/* Badge Status Terjual */}
                            {isSold && (
                                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-20 flex items-center justify-center">
                                    <span className="bg-rose-950/90 text-rose-300 font-black text-sm sm:text-base px-6 py-2 rounded-full border border-rose-500/50 shadow-2xl tracking-widest uppercase">
                                        AKUN SUDAH TERJUAL
                                    </span>
                                </div>
                            )}

                            {/* Code Badge */}
                            <div className="absolute top-3 right-3 bg-slate-950/90 backdrop-blur-md text-cyan-400 text-xs sm:text-sm font-mono px-3 py-1 rounded-lg border border-cyan-500/30">
                                #{account.code}
                            </div>
                        </div>
                    </div>

                    {/* Informasi & Panel Beli (Kolom Kanan) */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            {/* Kategori & Status */}
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-semibold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                                    {account.category || 'MLBB'}
                                </span>
                                <span className="text-slate-400 text-xs font-medium">
                                    High Rank: <strong className="text-white">{account.rank}</strong>
                                </span>
                            </div>

                            {/* Judul Akun */}
                            <h1 className="text-lg sm:text-2xl font-bold text-white leading-snug mb-4">
                                {account.title}
                            </h1>

                            {/* Grid Spesifikasi (Hero, Skin) */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-[#131B2E] border border-slate-800 p-3.5 rounded-xl">
                                    <span className="text-xs text-slate-400 block mb-0.5">Total Hero</span>
                                    <span className="text-lg sm:text-xl font-extrabold text-cyan-400">
                                        {account.hero_count}
                                    </span>
                                </div>
                                <div className="bg-[#131B2E] border border-slate-800 p-3.5 rounded-xl">
                                    <span className="text-xs text-slate-400 block mb-0.5">Total Skin</span>
                                    <span className="text-lg sm:text-xl font-extrabold text-cyan-400">
                                        {account.skin_count}
                                    </span>
                                </div>
                            </div>

                            {/* Box Harga */}
                            <div className="bg-[#131B2E] border border-slate-800 p-4 sm:p-5 rounded-2xl mb-6 shadow-inner">
                                <span className="text-xs text-slate-400 block mb-1">Harga Akun</span>
                                {formattedOriginal && (
                                    <span className="text-xs text-slate-500 line-through block mb-0.5">
                                        {formattedOriginal}
                                    </span>
                                )}
                                <div className="text-2xl sm:text-3xl font-black text-cyan-400">
                                    {formattedPrice}
                                </div>
                            </div>

                            {/* Fitur Keamanan / Garansi */}
                            <div className="space-y-2 mb-8 text-xs sm:text-sm text-slate-300">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Akun 100% Aman & Bergaransi Recheck</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Data Akun Diberikan Lengkap Sampai Root</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <UserCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                                    <span>Proses Transaksi Cepat via Admin Official</span>
                                </div>
                            </div>
                        </div>

                        {/* Tombol Beli / Checkout WA */}
                        <div>
                            {isSold ? (
                                <button 
                                    disabled 
                                    className="w-full bg-slate-800 text-slate-500 font-bold py-3.5 rounded-xl cursor-not-allowed text-xs sm:text-sm text-center"
                                >
                                    Stok Akun Ini Sudah Terjual
                                </button>
                            ) : (
                                <a
                                    href={waUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2.5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all text-xs sm:text-sm"
                                >
                                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                    <span>Beli Sekarang via WhatsApp</span>
                                </a>
                            )}
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </main>
    );
}