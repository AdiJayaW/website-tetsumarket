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
    <section className="py-8 sm:py-12 px-3 sm:px-4 max-w-7xl mx-auto">
    <div className="text-center mb-6 sm:mb-8">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-cyan-400">Kenapa pilih kami?</span>
        <h2 className="text-lg sm:text-2xl font-bold text-white mt-0.5">Pilihan Paling Aman untuk Akun ML</h2>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {features.map((item, idx) => {
        const Icon = item.icon;
        return (
            <div key={idx} className="bg-[#131B2E] border border-slate-800/80 p-3 sm:p-5 rounded-xl hover:border-cyan-500/50 transition duration-300 flex flex-col items-start">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 sm:mb-3 shrink-0">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 leading-snug">{item.title}</h3>
            <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
        );
        })}
    </div>
    </section>
);
}