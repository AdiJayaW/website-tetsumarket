'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
id: number;
question: string;
answer: string;
}

export default function FaqSection({ faqs = [] }: { faqs?: FaqItem[] }) {
const [openIdx, setOpenIdx] = useState<number | null>(null);

return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
    <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">FAQ</span>
        <h2 className="text-3xl font-bold text-white mt-2">Pertanyaan Umum</h2>
    </div>

    <div className="space-y-4">
        {faqs.map((faq, idx) => (
        <div key={faq.id || idx} className="bg-[#131B2E] border border-slate-800 rounded-xl overflow-hidden">
            <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full text-left p-5 text-white font-medium flex justify-between items-center gap-4 hover:bg-slate-800/50 transition"
            >
            <span>{faq.question}</span>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openIdx === idx ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {openIdx === idx && (
            /* Perubahan di baris ini: tambahkan class `whitespace-pre-line` dan replace `\n` */
            <div className="px-5 pb-5 text-sm text-slate-400 border-t border-slate-800/50 pt-3 whitespace-pre-line leading-relaxed">
                {faq.answer?.replace(/\\n/g, '\n')}
            </div>
            )}
        </div>
        ))}
    </div>
    </section>
);
}