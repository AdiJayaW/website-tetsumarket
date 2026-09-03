import { ShieldCheck, Zap, Lock, Users } from 'lucide-react';

const features = [
{
    icon: ShieldCheck,
    title: "100% Stok Milik Sendiri",
    desc: "Semua akun milik kami & terverifikasi total. Tanpa pihak ketiga."
},
{
    icon: Lock,
    title: "Garansi Anti-HB",
    desc: "Dilindungi garansi seumur hidup. Keamanan akun terjamin 100%."
},
{
    icon: Zap,
    title: "Penyerahan Instan",
    desc: "Tanpa menunggu penjual lain. Dapatkan data login otomatis."
},
{
    icon: Users,
    title: "Dukungan Amankan Data",
    desc: "Admin memandu proses pengamanan data hingga tuntas."
}
];

export default function FeaturesSection() {
return (
    <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <span className="text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Kenapa pilih kami?
        </span>
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mt-0.5 sm:mt-1">
        Pilihan Paling Aman untuk Akun ML
        </h2>
    </div>

    {/* Grid Features */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
        {features.map((item, idx) => {
        const Icon = item.icon;
        return (
            <div
            key={idx}
            className="bg-[#131B2E] border border-slate-800/80 p-3.5 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl hover:border-cyan-500/50 transition duration-300 flex flex-col items-start"
            >
            {/* Box Icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2.5 sm:mb-3.5 lg:mb-4 shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>

            {/* Title & Description */}
            <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white mb-1 lg:mb-1.5 leading-snug">
                {item.title}
            </h3>
            <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400 leading-relaxed">
                {item.desc}
            </p>
            </div>
        );
        })}
    </div>
    </section>
);
}