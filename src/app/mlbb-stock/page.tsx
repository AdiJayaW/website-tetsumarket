'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccountCard, { AccountCardProps } from '@/components/AccountCard';
import { Search, Filter, RotateCcw, Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function MLBBStockPage() {
    const [accounts, setAccounts] = useState<AccountCardProps[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minHero, setMinHero] = useState('');
    const [minSkin, setMinSkin] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    // Helper untuk memformat angka dengan titik ribuan (misal: 100000 -> 100.000)
    const formatThousand = (val: string) => {
        const rawNumber = val.replace(/\D/g, ''); // Ambil digit saja
        if (!rawNumber) return '';
        return new Intl.NumberFormat('id-ID').format(Number(rawNumber));
    };

    // Helper untuk mengembalikan ke angka murni
    const parseRawNumber = (val: string) => {
        return Number(val.replace(/\./g, '')) || 0;
    };

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(formatThousand(e.target.value));
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(formatThousand(e.target.value));
    };

    useEffect(() => {
        const fetchAccounts = async () => {
            setLoading(true);
            
            // Ambil data dari tabel 'accounts' untuk kategori 'mlbb'
            const { data, error } = await supabase
                .from('accounts')
                .select('*')
                .eq('category', 'mlbb');

            if (error) {
                console.error('Error fetching accounts:', error.message);
            } else if (data) {
                const formattedData: AccountCardProps[] = data.map((item) => ({
                    id: String(item.id),
                    code: item.code || 'ML-000',
                    title: item.title || 'Akun Mobile Legends',
                    price: Number(item.price) || 0,
                    originalPrice: item.original_price ?? undefined,
                    discount: item.discount || undefined,
                    heroCount: item.hero_count ?? 0,
                    skinCount: item.skin_count ?? 0,
                    rank: item.rank || 'Unranked',
                    image: item.image || '/images/mlbb_banner.webp',
                    href: `/mlbb-stock/${item.id}`,
                    status: item.status || 'available',
                    views: item.views ?? 0, // <-- [PERUBAHAN 1] Membaca data views dari Supabase
                }));
                setAccounts(formattedData);
            }
            setLoading(false);
        };

        fetchAccounts();
    }, []);

    const handleReset = () => {
        setSearch('');
        setMinPrice('');
        setMaxPrice('');
        setMinHero('');
        setMinSkin('');
    };

    const filteredAccounts = useMemo(() => {
        const rawMin = parseRawNumber(minPrice);
        const rawMax = parseRawNumber(maxPrice);

        return accounts
            .filter((acc) => {
                const matchSearch = (acc.title || '').toLowerCase().includes(search.toLowerCase()) || 
                                    (acc.code || '').toLowerCase().includes(search.toLowerCase());
                const matchMinPrice = rawMin ? acc.price >= rawMin : true;
                const matchMaxPrice = rawMax ? acc.price <= rawMax : true;
                
                // Amankan dengan ?? 0 agar TypeScript tidak error undefined
                const matchMinHero = minHero ? (acc.heroCount ?? 0) >= Number(minHero) : true;
                const matchMinSkin = minSkin ? (acc.skinCount ?? 0) >= Number(minSkin) : true;

                return matchSearch && matchMinPrice && matchMaxPrice && matchMinHero && matchMinSkin;
            })
            .sort((a, b) => {
                const isASold = a.status?.toLowerCase() === 'sold';
                const isBSold = b.status?.toLowerCase() === 'sold';

                // 1. Akun 'sold' SELALU ditaruh di paling belakang
                if (isASold && !isBSold) return 1;
                if (!isASold && isBSold) return -1;

                // 2. [PERUBAHAN 2] PRIORITAS UTAMA: views terbanyak (paling sering diklik)
                const viewsA = a.views ?? 0;
                const viewsB = b.views ?? 0;
                if (viewsB !== viewsA) {
                    return viewsB - viewsA;
                }

                // 3. Cadangan 1: Jika views sama, urutkan berdasarkan Skin Terbanyak
                if (b.skinCount !== a.skinCount) {
                    return b.skinCount - a.skinCount;
                }

                // 4. Cadangan 2: Harga Termahal
                if (b.price !== a.price) {
                    return b.price - a.price;
                }

                // 5. Cadangan 3: Hero Terbanyak
                return b.heroCount - a.heroCount;
            });
    }, [accounts, search, minPrice, maxPrice, minHero, minSkin]);

    return (
        <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans pt-20 sm:pt-24 pb-16">
            <Navbar />

            <div className="max-w-7xl mx-auto px-2.5 sm:px-6">
                
                {/* Banner Header */}
                <div className="mb-6 sm:mb-8 rounded-2xl overflow-hidden bg-[#131B2E] border border-slate-800/80 shadow-2xl">
                    <div className="relative w-full h-32 sm:h-56 md:h-72 bg-slate-900">
                        <Image
                            src="/images/mlbb_banner.webp"
                            alt="MLBB Cover Banner"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-black/20" />
                    </div>

                    <div className="px-3 sm:px-6 pb-4 pt-0 flex items-end gap-3 sm:gap-5 -mt-8 sm:-mt-12 relative z-10">
                        <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-[#131B2E] bg-slate-900 shrink-0 shadow-lg">
                            <Image
                                src="/images/mlbb_banner.webp"
                                alt="Game Icon"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="pb-0.5 sm:pb-1 min-w-0 flex-1">
                            <h1 className="text-sm sm:text-2xl md:text-3xl font-bold text-yellow-500 leading-snug sm:leading-normal truncate">
                                Mobile Legends Stock Tetsumarket
                            </h1>
                            <p className="text-[11px] sm:text-sm text-slate-400 font-medium mt-0.5">
                                Moonton
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filter Section */}
                <div className="bg-[#131B2E] border border-slate-800 rounded-2xl p-3 sm:p-4 mb-6 shadow-xl">
                    <div className="flex gap-2.5 sm:gap-3">
                        <div className="relative flex-1">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Cari berdasarkan nama akun atau kode (#ML-xxx)..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl pl-10 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>

                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                                showFilter 
                                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' 
                                    : 'bg-[#0B0E17] text-slate-300 border border-slate-800 hover:border-slate-700'
                            }`}
                        >
                            <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>Filter</span>
                        </button>
                    </div>

                    {showFilter && (
                        <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Harga Minimal (Rp)</label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="Contoh: 100.000"
                                    value={minPrice}
                                    onChange={handleMinPriceChange}
                                    className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Harga Maksimal (Rp)</label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="Contoh: 2.000.000"
                                    value={maxPrice}
                                    onChange={handleMaxPriceChange}
                                    className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Jumlah Hero Minimal</label>
                                <input
                                    type="number"
                                    placeholder="Min Hero"
                                    value={minHero}
                                    onChange={(e) => setMinHero(e.target.value)}
                                    className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Jumlah Skin Minimal</label>
                                <input
                                    type="number"
                                    placeholder="Min Skin"
                                    value={minSkin}
                                    onChange={(e) => setMinSkin(e.target.value)}
                                    className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                        </div>
                    )}

                    {(search || minPrice || maxPrice || minHero || minSkin) && (
                        <div className="mt-3 flex justify-end">
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors"
                            >
                                <RotateCcw className="w-3.5 h-3.5" /> Reset Filter
                            </button>
                        </div>
                    )}
                </div>

                {/* Account Grid */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                        <Loader2 className="w-8 h-8 animate-spin text-cyan-400 mb-2" />
                        <p className="text-sm">Memuat stok akun...</p>
                    </div>
                ) : filteredAccounts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
                        {filteredAccounts.map((acc) => (
                            <AccountCard key={acc.id} {...acc} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-[#131B2E]/40 border border-slate-800 rounded-2xl">
                        <p className="text-slate-400 text-sm">Tidak ada akun yang sesuai dengan pencarianmu.</p>
                        <button 
                            onClick={handleReset}
                            className="mt-3 text-cyan-400 underline text-xs hover:text-cyan-300"
                        >
                            Bersihkan Filter
                        </button>
                    </div>
                )}

            </div>

            <Footer />
        </main>
    );
}