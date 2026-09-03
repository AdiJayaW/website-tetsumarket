'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TestimonialItem } from './TestimonialsSection';

interface StatsSectionProps {
    testimonials?: TestimonialItem[];
    activeListingsCount?: number;
}

// Sub-komponen untuk animasi angka berputar
function AnimatedCounter({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [displayValue, setDisplayValue] = useState('0');

    const numericTarget = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const suffix = value.replace(/[0-9.]/g, '');
    const isFloat = value.includes('.');

    useEffect(() => {
        if (!isInView) return;

        let startTimestamp: number | null = null;
        const duration = 2000;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
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

export default function StatsSection({
    testimonials = [],
    activeListingsCount = 0, // <-- Diubah dari 4 menjadi 0
}: StatsSectionProps) {
    // 1. Akun Terjual = Total semua testimoni di database
    const totalSold = testimonials.length;

    // 2. Happy Customers = Testimoni yang memiliki rating >= 4
    const happyCustomers = testimonials.filter(
        (item) => (Number(item.rating) || 5) >= 4
    ).length;

    // 3. Kepuasan Pengguna = (Happy Customers / Total Terjual) * 100
    let satisfactionRate = 100;
    if (totalSold > 0) {
        const rawPercentage = (happyCustomers / totalSold) * 100;
        satisfactionRate = rawPercentage >= 100 ? 99.9 : rawPercentage;
    }

    const stats = [
        { value: totalSold.toString(), label: 'Akun Terjual' },
        { value: happyCustomers.toString(), label: 'Customer Senang' },
        { value: activeListingsCount.toString(), label: 'Akun Tersedia' },
        { value: `${satisfactionRate.toFixed(1)}%`, label: 'Kepuasan Pengguna' },
    ];

    return (
        <section className="py-8 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{
                            duration: 0.6,
                            delay: idx * 0.15,
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