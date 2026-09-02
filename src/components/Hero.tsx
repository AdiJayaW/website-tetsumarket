import { Shield, ShoppingBag } from 'lucide-react';

export default function Hero() {
return (
    <section className="pt-6 sm:pt-14 pb-8 sm:pb-12 px-4 text-center relative overflow-hidden">
    {/* Glow Effect Background - Dikecilkan di HP agar tidak patah */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/20 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />

    <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
        Jual dan Beli Akun <br />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Games dengan Aman
        </span>
        </h1>
    
        <p className="mt-3 text-slate-400 text-xs sm:text-md md:text-base max-w-xl mx-auto leading-relaxed">
        Dapatkan akun Games impian Anda atau jual akun Anda dengan mudah dijamin aman, tanpa ribet, dan transaksi terverifikasi.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex items-center justify-center gap-3">
        <button className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition shadow-lg shadow-purple-900/20">
            <ShoppingBag className="w-4 h-4" />
            Beli Akun
        </button>
        <button className="flex items-center gap-1.5 bg-[#131B2E] hover:bg-slate-800 text-slate-200 border border-slate-700 px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition">
            <Shield className="w-4 h-4 text-cyan-400" />
            24/7 Bantuan
        </button>
        </div>
    </div>
    </section>
);
}