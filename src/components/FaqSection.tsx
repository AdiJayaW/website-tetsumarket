'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
{
    q: "Tetsumarket ini trusted nggak, Min? Ada bukti transaksinya?",
    a: "Trusted dongs, kalian bisa langsung cek di testimoni, atau langsung ke server discordnya, buat langsung cek"
},
{
    q: "Ada garansi ga, kalau beli di tetsumarket?",
    a: "Kami Beri garansi uang kembali 100% full, jika kalian beli akun di tetsumarket, dan dalam kondisi tidak dijual kembali"
},
{
    q: "Kalau akunnya tiba-tiba kena hackback, Tetsumarket tanggung jawab nggak?",
    a: "Kalau akun kena HB setelah beli dari Tetsumarket, kami bakal reffund dana kalian 100%"
},
{
    q: "Transaksinya wajib transfer langsung atau bisa pakai perantara biar aman?",
    a: "Kalian bisa pakai rekber yang sudah trusted, atau kalian transfer langsung juga aman sentosa"
},
{
    q: "Selain beli akun, bisa nitip jual atau ngobrol bareng player lain?",
    a: "Pasti bisa dongs, kami sudah siapin buat kalian yang mau nitip akun di server discord kami, cuzz langsung join ajahh"
}
];

export default function FaqSection() {
const [openIdx, setOpenIdx] = useState<number | null>(null);

return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
    <div className="text-center mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">FAQ</span>
        <h2 className="text-3xl font-bold text-white mt-2">Pertanyaan Umum</h2>
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