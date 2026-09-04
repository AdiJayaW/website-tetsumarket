'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaTiktok, FaFacebook, FaDiscord } from 'react-icons/fa6';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Jual Akun', href: 'https://wa.me/6285715338331', target: '_blank' },
    { name: 'Laporkan Akun Bermasalah', href: '/akun-masalah' },
];

const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/tetsumarket', icon: FaInstagram },
    { name: 'TikTok', href: 'https://tiktok.com/tetsumarket', icon: FaTiktok },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1BmgKVr7ys', icon: FaFacebook },
    { name: 'Grub Facebook', href: 'https://www.facebook.com/share/g/1D2HC2oCF2', icon: FaFacebook },
    { name: 'Server Discord', href: 'https://discord.com/invite/r2hZac5unu', icon: FaDiscord }
];

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="mt-20 border-t border-slate-800/80 bg-[#080B12] pt-12 pb-8 text-slate-400 text-sm">
            <div className="max-w-7xl mx-auto px-6 space-y-8 md:space-y-10">
                
                {/* Brand Info (Logo & Deskripsi Rata Tengah) */}
                <div className="flex flex-col items-center text-center space-y-3">
                    <Link href="/" className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <div className="p-2 rounded-lg flex items-center justify-center">
                            <img 
                                src="/icon.png" 
                                alt="Shield Icon" 
                                className="w-10 h-12 md:w-12 md:h-14 lg:w-14 lg:h-16 object-contain" 
                            />
                        </div>
                        <span className="font-bold text-lg md:text-2xl lg:text-3xl text-white">
                            Tetsu<span className="text-cyan-400">Market</span>
                        </span>
                    </Link>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
                        Tetsumarket adalah pusat jual beli akun game dan layanan Rekber resmi yang aman, transparan, dan praktis. Mulai dari Mobile Legends, PUBG Mobile, sampai game favorit kamu lainnya. Semua transaksi di Tetsumarket dijamin dengan sistem verifikasi ketat dan garansi penuh demi kenyamanan para gamer di Indonesia.
                    </p>
                </div>

                {/* Responsive Grid: 2 Kolom di HP/Tablet, 4 Kolom di PC */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-8 pt-2">
                    
                    {/* 1. KOLOM 1: Sosial Media */}
                    <div>
                        <h5 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-base">Sosial Media</h5>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <li key={social.name}>
                                        <a 
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
                                        >
                                            <Icon className="w-4 h-4 md:w-4.5 md:h-4.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                                            <span>{social.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* 2. KOLOM 2: Dukungan (Di HP berada di kanan atas) */}
                    <div>
                        <h5 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-base">Dukungan</h5>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            <li>
                                <a 
                                    href="https://wa.me/6285715338331" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Whatsapp Customer Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 3. KOLOM 3: Peta Situs (Di HP berada di kiri bawah) */}
                    <div>
                        <h5 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-base">Peta Situs</h5>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        target={link.target}
                                        rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                        className="hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. KOLOM 4: Legalitas (Di HP berada di kanan bawah) */}
                    <div>
                        <h5 className="font-bold text-white mb-3 md:mb-4 text-sm md:text-base">Legalitas</h5>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            <li>
                                <Link 
                                    href={`/syarat-ketentuan?from=${encodeURIComponent(pathname || '/')}`} 
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Syarat & Ketentuan
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href={`/kebijakan-privasi?from=${encodeURIComponent(pathname || '/')}`} 
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Kebijakan Privasi
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href={`/disclaimer?from=${encodeURIComponent(pathname || '/')}`} 
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Ketentuan Layanan
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright Bottom */}
                <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-slate-500 gap-4">
                    <p>© 2026 TetsuMarket. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}