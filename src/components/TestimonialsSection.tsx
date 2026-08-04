import { Star, Quote } from 'lucide-react';

const reviews = [
{
    name: "Alex Pratama",
    role: "Mythic Player",
    comment: "Proses cepat banget! Nggak nyampe 10 menit akun langsung aman pindah tangan.",
    stars: 5,
},
{
    name: "Rian Hidayat",
    role: "Collector Collector",
    comment: "Awalnya ragu beli akun mahal, tapi fitur escrow-nya bikin tenang banget.",
    stars: 5,
},
{
    name: "Amelia Rose",
    role: "Verified Buyer",
    comment: "Support 24/7 fast respon banget pas bantu ganti email Moonton.",
    stars: 5,
}
];

export default function TestimonialsSection() {
return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400">TESTIMONIALS</span>
        <h2 className="text-3xl font-bold text-white mt-2">What Our Customers Say</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
        <div key={idx} className="bg-[#131B2E] border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
            <div>
            <Quote className="w-8 h-8 text-purple-500/40 mb-3" />
            <p className="text-sm text-slate-300 italic mb-6">"{rev.comment}"</p>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-4">
            <div>
                <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                <span className="text-xs text-slate-500">{rev.role}</span>
            </div>
            <div className="flex text-yellow-400">
                {[...Array(rev.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
            </div>
            </div>
        </div>
        ))}
    </div>
    </section>
);
}