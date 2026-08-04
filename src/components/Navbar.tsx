import Link from 'next/link';
import { ShieldCheck, User } from 'lucide-react';

export default function Navbar() {
return (
    <nav className="border-b border-slate-800 bg-[#0B0E17]/80 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-8xl mx-auto px-15 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-2 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white tracking-wide">
            Tetsu<span className="text-cyan-400">Market</span>
            </span>
        </div>

        {/* Links Navigasi */}
        <div className="hidden md:flex items-center gap-10 text-sm text-slate-300">
            <Link href="#" className="hover:text-cyan-400 transition-colors">Beli Akun</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Jual Akun</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Proses Verifikasi</Link>
            <Link href="#" className="hover:text-cyan-400 transition-colors">Reviews</Link>
        </div>

        {/* User Profile Button */}
        <div className="flex items-center gap-4">
            <button className="flex items-center gap-2.5 px-3 py-1.5 text-sm bg-[#131B2E] hover:bg-slate-800 text-white rounded-xl border border-slate-700/80 hover:border-purple-500/50 transition duration-200 group">
            {/* Avatar Icon Box */}
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shadow-md">
                <User className="w-4 h-4 text-white" />
            </div>
            
            {/* Label / Username */}
            <span className="font-medium text-slate-200 text-md pr-1 group-hover:text-cyan-400 transition-colors">
                Profile
            </span>
            </button>
        </div>
        </div>
    </nav>
);
}