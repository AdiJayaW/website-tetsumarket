import { Search, Shield, ShoppingBag } from 'lucide-react';

export default function Hero() {
return (
    <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
        {/* Glow Effect Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-6xl font-extrabold text-white tracking-tight leading-tight">
            Jual dan Beli Akun <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Games dengan Aman
            </span>
            
            </h1>
        
        <p className="mt-4 text-slate-400 text-base text:sm sm:text-md max-w-2xl mx-auto">
            Dapatkan akun Games impian Anda atau jual akun Anda dengan mudah dijamin aman, tanpa ribet, dan transaksi terverifikasi.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium text-sm transition">
            <ShoppingBag className="w-4 h-4" />
            Beli Akun
            </button>
            <button className="flex items-center gap-2 bg-[#131B2E] hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-lg font-medium text-sm transition">
            <Shield className="w-4 h-4 text-cyan-400" />
            24/7 Bantuan
            </button>
        </div>
        </div>
    </section>
);
}