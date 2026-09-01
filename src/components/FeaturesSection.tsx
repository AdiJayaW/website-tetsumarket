import { ShieldCheck, Zap, Lock, Users } from 'lucide-react';

const features = [
{
    icon: ShieldCheck,
    title: "100% Stok Milik Sendiri",
    desc: "Semua akun adalah milik kami & sudah diverifikasi total. Tanpa penjual pihak ketiga."
},
{
    icon: Lock,
    title: "Garansi Anti-Hackback (HB)",
    desc: "Dilindungi garansi penuh seumur hidup. Karena stok milik kami sendiri, keamanan akun Anda terjamin 100%."
},
{
    icon: Zap,
    title: "Penyerahan Data Instan",
    desc: "Tanpa menunggu respon penjual lain. Dapatkan data login langsung secara otomatis setelah pembayaran."
},
{
    icon: Users,
    title: "Dukungan Amankan Data",
    desc: "Tim admin kami siap memandu proses mengamankan data sampai ke tangan buyers."
}
];

export default function FeaturesSection() {
return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Kenapa pilih kami?</span>
        <h2 className="text-3xl font-bold text-white mt-2">Pilihan Paling Aman untuk Akun ML</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => {
        const Icon = item.icon;
        return (
            <div key={idx} className="bg-[#131B2E] border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
        );
        })}
    </div>
    </section>
);
}