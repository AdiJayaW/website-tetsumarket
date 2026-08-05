'use client';

import Link from 'next/link';
import { ShieldCheck, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
    {name : 'Beli Akun', href : '/beli-akun' },
    {name : 'Jual Akun', href : '/jual-akun'},
    {name : 'About', href : '#about'},
    {name : 'FAQ', href : '#fqa'}
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="border-b border-slate-800 bg-[#0B0E17]/80 backdrop-blur-md fixed top-0 w-full z-50">
            <div className="max-w-8xl mx-auto px-15 h-16 flex items-center justify-between">
                {/* Logo dengan Link ke Beranda */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-2 rounded-lg">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl text-white tracking-wide">
                        Tetsu<span className="text-cyan-400">Market</span>
                    </span>
                </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
                {navLinks.map((link) => {
                    // 2. Cek apakah path saat ini cocok dengan href menu
                    const isActive = pathname === link.href;

                    return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm transition-all duration-200 ${
                        isActive
                            ? 'text-cyan-400 font-semibold' // Style saat menu AKTIF (seperti di gambar)
                            : 'text-slate-400 hover:text-slate-200' // Style saat menu TIDAK aktif
                        }`}
                    >
                        {link.name}
                    </Link>
                    );
                })}
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
                    Masuk
                </span>
                </button>
            </div>
            </div>
        </nav>
    );
}