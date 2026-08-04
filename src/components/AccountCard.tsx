import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

interface AccountProps {
title: string;
price: string;
rank: string;
heroes: number;
skins: number;
image: string;
}

export default function AccountCard({ title, price, rank, heroes, skins, image }: AccountProps) {
return (
<div className="bg-[#131B2E] border border-slate-800 hover:border-purple-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group">
    {/* Image Preview */}
    <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
        <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-xs text-cyan-400 font-medium flex items-center gap-1 border border-slate-700">
        <ShieldCheck className="w-3.5 h-3.5" /> Verified Seller
    </div>
    </div>

    {/* Info */}
    <div className="p-4">
    <h3 className="text-white font-semibold text-lg line-clamp-1">{title}</h3>

    {/* Stats Badges */}
    <div className="grid grid-cols-3 gap-2 my-4 text-center">
        <div className="bg-[#0B0E17] p-2 rounded-lg border border-slate-800/80">
        <span className="block text-xs text-slate-400">Rank</span>
        <span className="text-xs font-bold text-white">{rank}</span>
        </div>
        <div className="bg-[#0B0E17] p-2 rounded-lg border border-slate-800/80">
        <span className="block text-xs text-slate-400">Heroes</span>
        <span className="text-xs font-bold text-white">{heroes}</span>
        </div>
        <div className="bg-[#0B0E17] p-2 rounded-lg border border-slate-800/80">
        <span className="block text-xs text-slate-400">Skins</span>
        <span className="text-xs font-bold text-white">{skins}</span>
        </div>
    </div>

    {/* Price & Action */}
    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
        <div>
        <span className="block text-xs text-slate-400">Price</span>
        <span className="text-lg font-bold text-yellow-400">{price}</span>
        </div>
        <button className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition">
        Details
        </button>
    </div>
    </div>
</div>
);
}