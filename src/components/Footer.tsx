import { ShieldCheck } from 'lucide-react';

export default function Footer() {
return (
    <footer className="mt-20 border-t border-slate-800/80 bg-[#080B12] pt-12 pb-8">
    <div className="max-w-9xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand Info */}
        <div>
        <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-1.5 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white">
            Tetsu<span className="text-cyan-400">Market</span>
            </span>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed">
            Safe and verified marketplace for Mobile Legends accounts trading.
        </p>
        </div>

        {/* Marketplace Links */}
        <div>
        <h5 className="font-bold text-white mb-3">Marketplace</h5>
        <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white transition">Cari Akun</a></li>
            <li><a href="/sell-account" className="hover:text-white transition">Jual Akun</a></li>
            <li><a href="#" className="hover:text-white transition">Proses Verifikasi</a></li>
        </ul>
        </div>

        {/* Company Links */}
        <div>
        <h5 className="font-bold text-white mb-3">Company</h5>
        <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
        </ul>
        </div>

        {/* Support Links */}
        <div>
        <h5 className="font-bold text-white mb-3">Support</h5>
        <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="#" className="hover:text-white transition">Live Chat 24/7</a></li>
            <li><a href="#" className="hover:text-white transition">Pusat Bantuan</a></li>
        </ul>
        </div>
    </div>

    {/* Copyright Bottom */}
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
        © 2026 TetsuMarket. All rights reserved.
    </div>
    </footer>
);
}