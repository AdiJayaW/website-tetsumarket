'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
id?: number | string;
question: string;
answer: string;
}

const defaultFaqData: FaqItem[] = [
{
    question: 'Tetsumarket ini trusted nggak, Min? Ada bukti transaksinya?',
    answer: 'Tentu saja! Kami memiliki ratusan testimoni transaksi berhasil dari pembeli dan penjual. Kamu bisa mengecek testimoni lengkap di bagian Testimonial atau sosial media resmi kami.',
},
{
    question: 'Kalau akunnya tiba-tiba kena hackback, Tetsumarket tanggung jawab nggak?',
    answer: 'Kami menyediakan garansi serta perlindungan transaksi untuk menjamin keamanan pembeli. Jika terjadi kendala pada akun yang dibeli sesuai ketentuan garansi, tim CS kami akan membantu proses klaim hingga selesai.',
},
{
    question: 'Transaksinya wajib transfer langsung atau bisa pakai perantara biar aman?',
    answer: 'Untuk keamanan maksimal, semua transaksi wajib melalui Rekber (Rekening Bersama) resmi Tetsumarket. Jangan pernah melakukan transaksi langsung di luar kontak resmi kami.',
},
{
    question: 'Beli di Tetsumarket ada garansi nya ga min?',
    answer: 'Ada! Setiap pembelian akun dilengkapi dengan garansi layanan. Durasi dan ketentuan garansi tertera pada detail masing-masing akun.',
},
{
    question: 'Selain beli akun, bisa nitip jual akun ga min?',
    answer: 'Bisa banget. Kamu bisa langsung menghubungi WhatsApp Customer Service kami untuk mengajukan titip jual akun game kamu dengan proses yang cepat dan aman.',
},
];

export default function FaqSection({
faqs,
}: {
faqs?: FaqItem[];
}) {
const [openIndex, setOpenIndex] = useState<number | null>(null);

// Jika faqs dikirim dari page.tsx pakai data tsb, jika tidak gunakan defaultFaqData
const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqData;

const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
};

return (
    <section className="py-10 sm:py-16 px-4 max-w-4xl mx-auto">
    {/* Header FAQ */}
    <div className="text-center mb-8 sm:mb-12">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400">
        FAQ
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 sm:mt-2">
        Pertanyaan Umum
        </h2>
    </div>

    {/* List Accordion FAQ */}
    <div className="space-y-3 sm:space-y-4">
        {displayFaqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
            <div
            key={item.id || index}
            className="bg-[#131B2E] border border-slate-800 hover:border-slate-700 rounded-xl sm:rounded-2xl transition-all duration-200 overflow-hidden"
            >
            <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-white text-sm sm:text-base md:text-lg leading-snug">
                {item.question}
                </span>
                <ChevronDown
                className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-cyan-400' : ''
                }`}
                />
            </button>

            {/* Isi Jawaban Accordion */}
            {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3 sm:pt-4">
                {item.answer}
                </div>
            )}
            </div>
        );
        })}
    </div>
    </section>
);
}