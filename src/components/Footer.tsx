import Link from 'next/link';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cek Transaksi', href: '/transaksi' },
    { name: 'Jual Akun', href: 'https://wa.me/6285715338331', target: '_blank' },
    { name: 'Masalah Akun?', href: '/akun-masalah' },
];

const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
    { name: 'TikTok', href: 'https://tiktok.com', icon: FaTiktok },
];

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-800/80 bg-[#080B12] pt-12 pb-8 text-slate-400 text-sm">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                
                {/* 1. Brand Info (Melebar 2 kolom di tampilan besar atau 1 kolom di mobile) */}
                <div className="lg:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-90 transition-opacity">
                        <div className="p-2 rounded-lg flex items-center justify-center">
                            <img 
                                src="/icon.png" 
                                alt="Shield Icon" 
                                className="w-10 h-9 object-contain" 
                            />
                        </div>
                        <span className="font-bold text-lg text-white">
                            Tetsu<span className="text-cyan-400">Market</span>
                        </span>
                    </Link>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        Platform jual beli akun Games yang aman, cepat, dan terpercaya.
                    </p>
                </div>

                {/* 2. Peta Situs (Sesuai Navbar) */}
                <div>
                    <h5 className="font-bold text-white mb-3 text-sm">Peta Situs</h5>
                    <ul className="space-y-2 text-xs">
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

                {/* 3. Legalitas */}
                <div>
                    <h5 className="font-bold text-white mb-3 text-sm">Legalitas</h5>
                    <ul className="space-y-2 text-xs">
                        <li>
                            <Link href="/syarat-ketentuan" className="hover:text-cyan-400 transition-colors">
                                Syarat & Ketentuan
                            </Link>
                        </li>
                        <li>
                            <Link href="/kebijakan-privasi" className="hover:text-cyan-400 transition-colors">
                                Kebijakan Privasi
                            </Link>
                        </li>
                        <li>
                            <Link href="/disclaimer" className="hover:text-cyan-400 transition-colors">
                                Ketentuan Layanan
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 4. Dukungan */}
                <div>
                    <h5 className="font-bold text-white mb-3 text-sm">Dukungan</h5>
                    <ul className="space-y-2 text-xs">
                        <li>
                            <a 
                                href="https://wa.me/6285715338331" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Bantuan CS 24/7
                            </a>
                        </li>
                        <li>
                            <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                                FAQ (Tanya Jawab)
                            </Link>
                        </li>
                        <li>
                            <Link href="/bantuan" className="hover:text-cyan-400 transition-colors">
                                Panduan Transaksi
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 5. Sosial Media */}
                <div>
                    <h5 className="font-bold text-white mb-3 text-sm">Sosial Media</h5>
                    <ul className="space-y-2.5 text-xs">
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
                                        <Icon className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                                        <span>{social.name}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

            </div>

            {/* Copyright Bottom */}
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                <p>© 2026 TetsuMarket. All rights reserved.</p>
                <p className="text-slate-600">Built for Gamers with ❤️</p>
            </div>
        </footer>
    );
}