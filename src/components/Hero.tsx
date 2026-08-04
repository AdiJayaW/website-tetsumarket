import { Search, Shield, ShoppingBag } from 'lucide-react';

export default function Hero() {
return (
    <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
        {/* Glow Effect Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-7xl font-extrabold text-white tracking-tight leading-tight">
            Jual dan Beli Akun <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Mobile Legends
            </span> <br />
            dengan Aman
            </h1>
        
        <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Dapatkan akun ML impian Anda atau jual akun Anda dengan mudah dijamin aman, tanpa ribet, dan transaksi terverifikasi.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto flex items-center bg-[#131B2E] border border-slate-700/60 rounded-xl p-1.5 shadow-2xl">
            <div className="pl-3 text-slate-400">
            <Search className="w-5 h-5" />
            </div>
            <input
            type="text"
            placeholder="Try searching: Mythic, Collector skin, 100+ heroes..."
            className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition">
            Search
            </button>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium text-sm transition">
            <ShoppingBag className="w-4 h-4" />
            Buy Account
            </button>
            <button className="flex items-center gap-2 bg-[#131B2E] hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg font-medium text-sm transition">
            <Shield className="w-4 h-4 text-cyan-400" />
            24/7 Support
            </button>
        </div>
        </div>
    </section>
);
}