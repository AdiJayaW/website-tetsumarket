'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: "19", label: "Akun Terjual" },
    { value: "19", label: "Happy Customers" },
    { value: "4", label: "Active Listings" },
    { value: "99.9%", label: "Kepuasan Pengguna" },
];

// Sub-komponen untuk menangani animasi angka berputar / count-up
function AnimatedCounter({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState("0");

    // Memisahkan angka dan simbol (misal "99.9%" -> angka: 99.9, simbol: "%")
    const numericTarget = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const suffix = value.replace(/[0-9.]/g, '');
    const isFloat = value.includes('.');

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number | null = null;
        const duration = 2000; // Durasi animasi (2 detik)

        const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);

        // Fungsi Easing (Eased-out) agar gerakan melambat mendekati angka akhir
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        const currentNumber = easeOutQuad * numericTarget;

        setDisplayValue(
            isFloat 
            ? currentNumber.toFixed(1) 
            : Math.floor(currentNumber).toLocaleString('id-ID')
        );

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        };

        window.requestAnimationFrame(step);
    }, [isInView, numericTarget, isFloat]);
    return (
        <span ref={ref}>
        {displayValue}
        {suffix}
        </span>
        );
    }


    export default function StatsSection() {
        return (
            <section className="py-8 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                // Container Kartu dengan Animasi Slide-Up
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }} // Posisi awal: agak ke bawah & transparan
                    whileInView={{ opacity: 1, y: 0 }} // Posisi saat di-scroll: naik ke posisi asli
                    viewport={{ once: true, margin: "-50px" }} // Hanya memicu animasi 1x
                    transition={{
                    duration: 0.6,
                    delay: idx * 0.15, // Efek bertahap (stagger) antar kartu
                    ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="bg-[#131B2E]/60 border border-slate-800/80 rounded-xl p-6 text-center backdrop-blur-sm hover:border-cyan-500/40 transition-colors"
                >
                    <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1">
                    {stat.label}
                    </div>
                </motion.div>
                ))}
            </div>
            </section>
        );
}