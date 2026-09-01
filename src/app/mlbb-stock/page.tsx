'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccountCard from '@/components/AccountCard';
import { Search, Filter, RotateCcw } from 'lucide-react';

const dummyMLBBAccounts = [
    {
        id: "1",
        code: "ML-224394",
        title: "MLBB Collector Terhormat | 133 Hero 341 Skin",
        price: 1499000,
        originalPrice: 2900000,
        discount: "48%",
        heroCount: 133,
        skinCount: 341,
        rank: "Glory",
        image: "/images/mlbb_banner.webp",
        href: "/mlbb-stock/1",
    },
    {
        id: "2",
        code: "ML-224698",
        title: "MLBB Collector Granger | 133 Hero 319 Skin",
        price: 1149000,
        originalPrice: 2200000,
        discount: "50%",
        heroCount: 133,
        skinCount: 319,
        rank: "Immortal",
        image: "/images/mlbb_jaspost.webp",
        href: "/mlbb-stock/2",
    },
    {
        id: "3",
        code: "ML-224689",
        title: "MLBB Skin Fanny Lightborn & KOF | 110 Hero 188 Skin",
        price: 299000,
        originalPrice: 500000,
        discount: "40%",
        heroCount: 110,
        skinCount: 188,
        rank: "Mythic",
        image: "/images/mlbb_banner.webp",
        href: "/mlbb-stock/3",
    },
    {
        id: "4",
        code: "ML-224705",
        title: "MLBB Sultan Account | 133 Hero 451 Skin Full Effect",
        price: 1799000,
        originalPrice: 3500000,
        discount: "50%",
        heroCount: 133,
        skinCount: 451,
        rank: "Immortal",
        image: "/images/mlbb_jaspost.webp",
        href: "/mlbb-stock/4",
    },
];

export default function MLBBStockPage() {
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minHero, setMinHero] = useState('');
    const [minSkin, setMinSkin] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    const handleReset = () => {
        setSearch('');
        setMinPrice('');
        setMaxPrice('');
        setMinHero('');
        setMinSkin('');
    };

    // Filter dinamis berdasarkan input user
    const filteredAccounts = useMemo(() => {
        return dummyMLBBAccounts.filter((acc) => {
            const matchSearch = acc.title.toLowerCase().includes(search.toLowerCase()) || 
                                acc.code.toLowerCase().includes(search.toLowerCase());
            const matchMinPrice = minPrice ? acc.price >= Number(minPrice) : true;
            const matchMaxPrice = maxPrice ? acc.price <= Number(maxPrice) : true;
            const matchMinHero = minHero ? acc.heroCount >= Number(minHero) : true;
            const matchMinSkin = minSkin ? acc.skinCount >= Number(minSkin) : true;

            return matchSearch && matchMinPrice && matchMaxPrice && matchMinHero && matchMinSkin;
        });
    }, [search, minPrice, maxPrice, minHero, minSkin]);

    return (
        <main className="min-h-screen bg-[#0B0E17] text-slate-100 font-sans pt-24 pb-16">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                {/* Header Judul */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-white">
                        Stok Akun <span className="text-cyan-400">Mobile Legends</span>
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">
                        Cari akun impianmu berdasarkan filter harga, total hero, dan total skin.
                    </p>
                </div>

                {/* Section Search Bar & Tombol Filter */}
                <div className="bg-[#131B2E] border border-slate-800 rounded-2xl p-4 mb-6 shadow-xl">
                    <div className="flex gap-3">
                        {/* Input Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Cari berdasarkan nama akun atau kode (#ML-xxx)..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>

                        {/* Button Toggle Filter */}
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                                showFilter 
                                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20' 
                                    : 'bg-[#0B0E17] text-slate-300 border border-slate-800 hover:border-slate-700'
                            }`}
                        >
                            <Filter className="w-4 h-4" />
                            <span>Filter</span>
                        </button>
                    </div>

                    {/* Filter Inputs Grid */}
                    {showFilter && (
                        <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Harga Minimal</label>
                                <input
                                    type="number"
                                    placeholder="Contoh: 100000"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Harga Maksimal</label>
                                <input
                                    type="number"
                                    placeholder="Contoh: 2000000"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Jumlah Hero Minimal</label>
                                <input
                                    type="number"
                                    placeholder="Min Hero"
                                    value={minHero}
                                    onChange={(e) => setMinHero(e.target.value)}
                                    className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Jumlah Skin Minimal</label>
                                <input
                                    type="number"
                                    placeholder="Min Skin"
                                    value={minSkin}
                                    onChange={(e) => setMinSkin(e.target.value)}
                                    className="w-full bg-[#0B0E17] border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                                />
                            </div>
                        </div>
                    )}

                    {/* Tombol Reset Filter */}
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

                {/* Grid Katalog Stok Akun */}
                {filteredAccounts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredAccounts.map((acc) => (
                            <AccountCard key={acc.id} {...acc} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-[#131B2E]/40 border border-slate-800 rounded-2xl">
                        <p className="text-slate-400 text-sm">Tidak ada akun yang sesuai dengan filter pencarianmu.</p>
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