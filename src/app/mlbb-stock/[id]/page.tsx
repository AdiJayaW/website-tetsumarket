'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    ArrowLeft, 
    MessageSquare, 
    Loader2, 
    ChevronLeft,
    ChevronRight
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
    image: string;          // Foto utama / Cover (Slide 1)
    images?: string[];      // Array foto tambahan (Slide 2, dst.)
    status: string;
    category: string;
    views: number;
    warranty?: string;     
    description?: string;  
}

export default function AccountDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const accountId = resolvedParams.id;

    const [account, setAccount] = useState<AccountDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchAndTrackAccount = async () => {
            if (!accountId) return;
            setLoading(true);

            // 1. Tambah hitungan views (+1)
            await supabase.rpc('increment_views', { account_id: accountId });

            // 2. Ambil data detail akun dari Supabase
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
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog MLBB
                </Link>
            </main>
        );
    }

    const isSold = account.status?.toLowerCase() === 'sold';

    // Slide 1: account.image | Slide 2 dst: account.images
    const rawImages = [
        account.image,
        ...(Array.isArray(account.images) ? account.images : [])
    ].filter(Boolean) as string[];

    const allImages = Array.from(new Set(rawImages));

    if (allImages.length === 0) {
        allImages.push('/images/mlbb_banner.webp');
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    };

    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
    }).format(account.price);

    // Link WhatsApp otomatis
    const waNumber = '6285715338331';
    const waMessage = encodeURIComponent(
        `Halo Admin Tetsumarket, saya mau order akun ini:\n\n` +
        `• Kode Akun: #${account.code}\n` +
        `• Judul: ${account.title}\n` +
        `• Harga: ${formattedPrice}\n\n` +
        `Apakah stok masih tersedia?`
    );
    const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

    return (
        <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans pt-20 sm:pt-24 lg:pt-20 pb-16">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
                {/* Tombol Kembali */}
                <Link 
                    href="/mlbb-stock" 
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog MLBB
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    
                    {/* KELOMPOK 1: Carousel + Info + Stats + Deskripsi (Order 1 di HP, Kanan Atas di PC) */}
                    <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6 space-y-4 sm:space-y-5">
                        
                        {/* Carousel Gambar */}
                        <div className="flex items-center justify-center gap-2 sm:gap-4">
                            {allImages.length > 1 ? (
                                <button
                                    onClick={prevImage}
                                    className="p-2 sm:p-3 text-white hover:text-cyan-400 transition-colors shrink-0"
                                    aria-label="Previous Image"
                                >
                                    <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
                                </button>
                            ) : (
                                <div className="w-8 sm:w-10 shrink-0" />
                            )}

                            <div className="relative aspect-[3/4] w-full max-w-xs sm:max-w-sm lg:max-w-[280px] bg-[#131B2E] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shrink-0">
                                <Image
                                    src={allImages[currentImageIndex]}
                                    alt={account.title}
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                                    className={`object-contain transition-all duration-300 ${isSold ? 'filter grayscale-[40%]' : ''}`}
                                />

                                {isSold && (
                                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-20 flex items-center justify-center">
                                        <span className="bg-rose-950/90 text-rose-300 font-black text-xs sm:text-sm px-4 py-2 rounded-full border border-rose-500/50 tracking-widest uppercase">
                                            AKUN SUDAH TERJUAL
                                        </span>
                                    </div>
                                )}

                                {allImages.length > 1 && (
                                    <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 text-xs font-mono text-cyan-400 z-10">
                                        {currentImageIndex + 1} / {allImages.length}
                                    </div>
                                )}
                            </div>

                            {allImages.length > 1 ? (
                                <button
                                    onClick={nextImage}
                                    className="p-2 sm:p-3 text-white hover:text-cyan-400 transition-colors shrink-0"
                                    aria-label="Next Image"
                                >
                                    <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
                                </button>
                            ) : (
                                <div className="w-8 sm:w-10 shrink-0" />
                            )}
                        </div>

                        {/* Header Info Akun */}
                        <div className="bg-[#131B2E] border border-slate-800 p-4 sm:p-5 rounded-2xl shadow-lg space-y-2">
                            <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                                {account.category || 'MLBB'}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <h1 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-wide">
                                    {account.title}
                                </h1>
                                <span className="text-xl sm:text-2xl font-black text-cyan-400 shrink-0">
                                    {formattedPrice}
                                </span>
                            </div>
                        </div>

                        {/* Statistik Hero, Skin & Rank */}
                        <div className="bg-[#131B2E] border border-slate-800 rounded-2xl p-4 grid grid-cols-3 divide-x divide-slate-800 text-center shadow-lg">
                            <div className="px-2">
                                <p className="text-xs text-slate-400 font-medium mb-1">Hero</p>
                                <p className="text-base sm:text-lg font-black text-cyan-400">
                                    {account.hero_count || '-'}
                                </p>
                            </div>
                            <div className="px-2">
                                <p className="text-xs text-slate-400 font-medium mb-1">Skin</p>
                                <p className="text-base sm:text-lg font-black text-cyan-400">
                                    {account.skin_count || '-'}
                                </p>
                            </div>
                            <div className="px-2">
                                <p className="text-xs text-slate-400 font-medium mb-1">High Rank</p>
                                <p className="text-base sm:text-lg font-black text-white uppercase">
                                    {account.rank || '-'}
                                </p>
                            </div>
                        </div>

                        {/* Deskripsi Produk */}
                        <div className="bg-[#131B2E] border border-slate-800 p-5 rounded-2xl shadow-lg space-y-3">
                            <h2 className="text-base sm:text-lg font-bold text-white border-b border-slate-800 pb-3">
                                Deskripsi Produk
                            </h2>

                            <div className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                                <p>
                                    <span className="font-semibold text-slate-400">Warranty : </span>
                                    <span className="text-cyan-400 font-bold uppercase">
                                        {account.warranty || 'REFF PLAYER (FULL GARANSI TETSUMARKET)'}
                                    </span>
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-400">NOMOR AKUN : </span>
                                    <span className="text-white font-mono font-bold">#{account.code}</span>
                                </p>
                            </div>

                            {account.description && (
                                <div className="pt-2 border-t border-slate-800/60 text-xs sm:text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line">
                                    {account.description}
                                </div>
                            )}
                        </div>

                    </div>

                    {/* KELOMPOK 2: Tahapan Rekber & Catatan Penting (Order 2 di HP, Kolom Kiri di PC) */}
                    <div className="order-2 lg:order-1 lg:col-span-5 lg:col-start-1">
                        <div className="bg-[#131B2E] border border-slate-800 rounded-2xl p-5 sm:p-6 lg:p-5 shadow-lg space-y-5 sm:space-y-6 lg:space-y-4">
                            
                            {/* Tahapan Rekber */}
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 sm:mb-3 lg:mb-2">
                                    Tahapan Rekber di Tetsumarket
                                </h3>
                                <ol className="space-y-2 sm:space-y-2.5 lg:space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed list-decimal list-inside">
                                    <li>Pembeli Chat ke WhatsApp Admin untuk menanyakan ketersediaan akun.</li>
                                    <li>Silakan melakukan negosiasi sampai kedua belah pihak sepakat.</li>
                                    <li>Jika sudah sepakat silakan lanjut melakukan pembayaran resmi ke Admin.</li>
                                    <li>Ikuti tahapan pengamanan data yang diberikan oleh Admin Tetsumarket sampai selesai.</li>
                                </ol>
                            </div>

                            <hr className="border-slate-800" />

                            {/* Catatan Penting */}
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 sm:mb-3 lg:mb-2">
                                    Catatan Penting!
                                </h3>
                                <ol className="space-y-2 sm:space-y-2.5 lg:space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed list-decimal list-inside">
                                    <li>Kami tidak pernah mengalihkan nomor Admin Tetsumarket. Nomor kami hanya yang tercantum di web/bio resmi.</li>
                                    <li>Jangan pernah melakukan transaksi/transfer langsung kepada penjual tanpa via Admin.</li>
                                    <li>Jika ada pihak yang menolak transaksi menggunakan Rekber Tetsumarket, harap laporkan ke kami.</li>
                                    <li>Jika ada pertanyaan / kendala silakan langsung hubungi Admin.</li>
                                    <li>Hati-hati saat bertransaksi!</li>
                                </ol>
                            </div>

                        </div>
                    </div>

                    {/* KELOMPOK 3: Tombol WhatsApp (Order 3 di HP -> Di bawah Rekber, Kanan Bawah di PC) */}
                    <div className="order-3 lg:order-3 lg:col-span-7 lg:col-start-6">
                        {isSold ? (
                            <button 
                                disabled 
                                className="w-full bg-slate-800 text-slate-500 font-bold py-4 rounded-2xl cursor-not-allowed text-sm text-center"
                            >
                                Stok Akun Ini Sudah Terjual
                            </button>
                        ) : (
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2.5 w-full bg-[#00FF66] hover:bg-[#00E65C] text-slate-950 font-black py-4 px-6 rounded-2xl shadow-xl shadow-[#00FF66]/20 transition-all text-sm sm:text-base uppercase tracking-wide"
                            >
                                <MessageSquare className="w-5 h-5 fill-current" />
                                <span>Beli Sekarang via WhatsApp Admin</span>
                            </a>
                        )}
                    </div>

                </div>

            </div>

            <Footer />
        </main>
    );
}