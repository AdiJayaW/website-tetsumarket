const steps = [
{ step: "01", title: "Pilih Akun Pilihanmu", desc: "Jelajahi katalog akun siap kirim kami. Apa yang Anda lihat di tangkapan layar 100% akurat dan siap dipindah tangankan.", borderColor: "border-purple-500", textColor: "text-purple-400", glow: "shadow-[0_0_20px_rgba(168,85,247,0.4)]"},
{ step: "02", title: "Pembayaran Otomatis & Aman", desc: "Selesaikan pembayaran dengan mudah dan aman melalui gateway pembayaran otomatis (QRIS, E-Wallet, atau Transfer Bank).", borderColor: "border-cyan-400", textColor: "text-cyan-400", glow: "shadow-[0_0_20px_rgba(56,189,248,0.4)]"},
{ step: "03", title: "Penyerahan & Pengamanan Data", desc: "Terima data login secara instan. Tim/sistem kami akan memandu Anda untuk mengganti email dan mengaitkan akun ke data pribadi Anda.", borderColor: "border-emerald-500", textColor: "text-emerald-400", glow: "shadow-[0_0_20px_rgba(34,197,94,0.4)]"},
{ step: "04", title: "Garansi Resmi Aktif", desc: "Transaksi selesai! Akun kini sepenuhnya milik Anda dan secara otomatis dilindungi oleh garansi anti-hackback resmi dari kami.", borderColor: "border-amber-500", textColor: "text-amber-400", glow: "shadow-[0_0_20px_rgba(245,158,11,0.4)]"},
];

export default function ProcessSection() {
return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
    {/* Title */}
    <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">100% AMAN & BERGARANSI</span>
        <h2 className="text-3xl font-bold text-white mt-2">
        4 Langkah Mudah Dapatkan Akun
        </h2>
    </div>

    {/* Steps Container */}
    <div className="relative">
        {/* Horizontal Gradient Line (Hanya muncul di layar PC/Tablet) */}
        <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 via-emerald-500 to-amber-500 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
        {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
            {/* Circle Number with Glow */}
            <div
                className={`w-16 h-16 rounded-full border-2 bg-[#0B0E17] flex items-center justify-center font-bold text-lg mb-6 ${item.borderColor} ${item.textColor} ${item.glow} transition-all duration-300 hover:scale-105`}
            >
                {item.step}
            </div>

            {/* Step Title */}
            <h3 className="text-lg font-bold text-white mb-2 max-w-[200px]">
                {item.title}
            </h3>

            {/* Step Description */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[240px]">
                {item.desc}
            </p>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}