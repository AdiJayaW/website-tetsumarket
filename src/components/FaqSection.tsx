'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
{
    q: "How does the account buyer protection work?",
    a: "Your payment is held safely in escrow. Money is only released to the seller after you log in, verify the account details, and secure full access."
},
{
    q: "Are all accounts clean unbind?",
    a: "Yes, every account listed undergoes strict verification to ensure Moonton, VK, TikTok, and Facebook bindings can be safely transferred."
},
{
    q: "What if I face an issue after purchase?",
    a: "Our 24/7 support team and live chat system are ready to assist you instantly to resolve any account delivery issues."
}
];

export default function FaqSection() {
const [openIdx, setOpenIdx] = useState<number | null>(null);

return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
    <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">FAQ</span>
        <h2 className="text-3xl font-bold text-white mt-2">Common Questions</h2>
    </div>

    <div className="space-y-4">
        {faqs.map((faq, idx) => (
        <div key={idx} className="bg-[#131B2E] border border-slate-800 rounded-xl overflow-hidden">
            <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full text-left p-5 text-white font-medium flex justify-between items-center gap-4 hover:bg-slate-800/50 transition"
            >
            <span>{faq.q}</span>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openIdx === idx ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {openIdx === idx && (
            <div className="px-5 pb-5 text-sm text-slate-400 border-t border-slate-800/50 pt-3">
                {faq.a}
            </div>
            )}
        </div>
        ))}
    </div>
    </section>
);
}