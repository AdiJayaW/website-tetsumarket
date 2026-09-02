'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Tag, CircleAlert, Menu, X } from 'lucide-react';

const navLinks = [
{ name: 'Home', href: '/', icon: Home },
{ name: 'Jual Akun', href: 'https://wa.me/6285715338331', target: '_blank', icon: Tag },
{ name: 'Laporkan Akun Bermasalah', href: '/akun-masalah', icon: CircleAlert },
];

export default function Navbar() {
const pathname = usePathname();
const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="border-b border-slate-800/80 bg-[#0B0E17]/90 backdrop-blur-md fixed top-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Kiri: Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
        <div className="p-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center">
            <img 
            src="/icon.png" 
            alt="Shield Icon" 
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain" 
            />
        </div>
        <span className="font-bold text-lg sm:text-xl text-white tracking-wide">
            Tetsu<span className="text-cyan-400">Market</span>
        </span>
        </Link>

        {/* Kanan: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
            <Link
                key={link.href}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-2 text-sm transition-all duration-200 ${
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

        {/* Kanan: Hamburger Button (Tampil hanya di HP & Tablet) */}
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
        aria-label="Toggle Menu"
        >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
    </div>

    {/* Mobile Drawer Menu (Muncul saat tombol Hamburger diklik) */}
    {isOpen && (
        <div className="md:hidden bg-[#0B0E17] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2">
        {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
            <Link
                key={link.href}
                href={link.href}
                target={link.target}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                isActive
                    ? 'bg-cyan-500/10 text-cyan-400 font-medium border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
            >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{link.name}</span>
            </Link>
            );
        })}
        </div>
    )}
    </nav>
);
}