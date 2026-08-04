import { ShieldCheck } from 'lucide-react';

export default function Footer() {
return (
    <footer className="mt-20 border-t border-slate-800 bg-[#080B12]">
    {/* CTA Banner */}
    <div className="max-w-5xl mx-auto px-4 -translate-y-16">
        <div className="bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-slate-900 border border-purple-500/30 p-8 sm:p-12 rounded-3xl text-center backdrop-blur-xl shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Get Started?</h2>
        <p className="text-slate-300 mt-2 max-w-xl mx-auto text-sm sm:text-base">
            Find premium ML accounts or sell yours securely in minutes.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition">
            Cari Akun
            </button>
            <button className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-xl text-sm transition">
            Jual Akun Kamu
            </button>
        </div>
        </div>
    </div>

    {/* Footer Content */}
    <div className="max-w-8xl mx-auto px-10 pb-12 pt-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
        <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-1.5 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">Tetsu<span className="text-cyan-400">Market</span></span>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed">
            Safe and verified marketplace for Mobile Legends accounts trading.
        </p>
        </div>

        <div>
        <h5 className="font-bold text-white mb-3">Marketplace</h5>
        <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white">Beli Akun</a></li>
            <li><a href="#" className="hover:text-white">Jual AKun</a></li>
            <li><a href="#" className="hover:text-white">Verification Process</a></li>
        </ul>
        </div>

        <div>
        <h5 className="font-bold text-white mb-3">Company</h5>
        <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
        </ul>
        </div>

        <div>
        <h5 className="font-bold text-white mb-3">Support</h5>
        <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white">Live Chat 24/7</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
        </ul>
        </div>
    </div>

    <div className="text-center text-xs text-slate-600 py-6 border-t border-slate-900">
        © 2026 TrustMarket. All rights reserved.
    </div>
    </footer>
);
}