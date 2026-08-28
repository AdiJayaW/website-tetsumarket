import Image from 'next/image';

interface GameCardProps {
    title: string;
    publisher: string;
    image: string;
}

export default function GameCard({ title, publisher, image }: GameCardProps) {
    return (
        <div className="bg-[#131B2E] border border-slate-800 hover:border-purple-500/50 rounded-2xl p-3.5 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
        {/* Banner Image */}
        <div className="relative h-40 w-full bg-slate-900 rounded-xl overflow-hidden">
            <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>

        {/* Info */}
        <div className="mt-3 px-1">
            <h3 className="text-purple-400 font-bold text-base line-clamp-1 group-hover:text-purple-300 transition-colors">
            {title}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
            {publisher}
            </p>
        </div>
        </div>
    );
}