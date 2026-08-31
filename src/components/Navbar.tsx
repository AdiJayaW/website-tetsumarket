'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Tag, CircleAlert } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Cek Transaksi', href: '/transaksi', icon: Search },
    { name: 'Jual Akun', href: 'https://wa.me/6285715338331', target: '_blank', icon: Tag },
    { name: 'Masalah Akun', href: '/akun-masalah', icon: CircleAlert },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="border-b border-slate-800 bg-[#0B0E17]/80 backdrop-blur-md fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                
                {/* Kiri: Logo */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity shrink-0">
                    <div className="p-2 rounded-lg flex items-center justify-center">
                        <img 
                            src="./icon.png" 
                            alt="Shield Icon" 
                            className="w-10 h-9 object-contain" 
                        />
                    </div>
                    <span className="font-bold text-xl text-white tracking-wide">
                        Tetsu<span className="text-cyan-400">Market</span>
                    </span>
                </Link>

                {/* Tengah: Nav Links Utama */}
                <div className="flex items-center justify-center gap-5 md:gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                target={link.target}
                                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                className={`flex items-center gap-2 text-sm whitespace-nowrap transition-all duration-200 ${
                                    isActive
                                        ? 'text-cyan-400 font-semibold'
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                {Icon && <Icon className="w-4 h-4 shrink-0" />}
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Kanan: Spacer Penyeimbang Layout */}
                <div className="w-[160px] hidden lg:block"></div>

            </div>
        </nav>
    );
}