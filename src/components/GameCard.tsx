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
const validHref = href || '#';
const validImage = image || '/images/mlbb_banner.webp';

return (
    <Link href={validHref} className="block h-full">
    <div className="bg-[#131B2E] border border-slate-800 hover:border-purple-500/50 rounded-xl sm:rounded-2xl p-2 sm:p-3.5 transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full flex flex-col justify-between">
        {/* Banner Image Container - Aspect 3/2 di Mobile biar lebih tinggi & jelas, 16/9 di Desktop */}
        <div className="relative aspect-[3/2] sm:aspect-[16/9] w-full bg-slate-900 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 group-hover:bg-slate-800">
        <Image
            src={validImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
        />
        </div>

        {/* Info */}
        <div className="mt-2 sm:mt-3 px-1 pb-0.5">
        <h3 className="text-yellow-500 font-bold text-xs sm:text-base leading-snug sm:leading-normal line-clamp-2 group-hover:text-yellow-200 transition-colors">
            {title}
        </h3>
        <p className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
            {publisher}
        </p>
        </div>
    </div>
    </Link>
);
}