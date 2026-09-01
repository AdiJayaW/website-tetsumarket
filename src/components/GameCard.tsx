import Image from 'next/image';
import Link from 'next/link';

export interface GameCardProps {
title?: string;
publisher?: string;
image?: string;
href?: string;
}

export default function GameCard({
title = 'Game',
publisher = '-',
image = '/images/mlbb_banner.webp',
href = '#',
}: GameCardProps) {
// Proteksi ganda agar href & image tidak pernah bernilai null/undefined
const validHref = href || '#';
const validImage = image || '/images/mlbb_banner.webp';

return (
    <Link href={validHref}>
    <div className="bg-[#131B2E] border border-slate-800 hover:border-purple-500/50 rounded-2xl p-3.5 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
        {/* Banner Image Container */}
        <div className="relative h-40 w-full bg-slate-900 rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-slate-800">
        <Image
            src={validImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
        />
        </div>

        {/* Info */}
        <div className="mt-3 px-1">
        <h3 className="text-yellow-500 font-bold text-base line-clamp-1 group-hover:text-yellow-200 transition-colors">
            {title}
        </h3>
        <p className="text-xs text-slate-400 font-medium mt-0.5">
            {publisher}
        </p>
        </div>
    </div>
    </Link>
);
}