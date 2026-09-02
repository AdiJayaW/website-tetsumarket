const steps = [
{ step: "01", title: "Pilih Akun Pilihanmu", desc: "Jelajahi katalog akun siap kirim kami. Tangkapan layar 100% akurat.", borderColor: "border-purple-500", textColor: "text-purple-400", glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]", gridPos: "col-start-1 row-start-1 md:col-auto md:row-auto" },
{ step: "02", title: "Pembayaran via WA", desc: "Selesaikan pembayaran via Whatsapp resmi Tetsumarket.", borderColor: "border-cyan-400", textColor: "text-cyan-400", glow: "shadow-[0_0_15px_rgba(56,189,248,0.3)]", gridPos: "col-start-2 row-start-1 md:col-auto md:row-auto" },
{ step: "03", title: "Penyerahan Data", desc: "Tim kami memandu Anda mengamankan email dan akun.", borderColor: "border-emerald-500", textColor: "text-emerald-400", glow: "shadow-[0_0_15px_rgba(34,197,94,0.3)]", gridPos: "col-start-2 row-start-2 md:col-auto md:row-auto" },
{ step: "04", title: "Garansi Resmi", desc: "Transaksi selesai & terlindungi garansi anti-hackback.", borderColor: "border-amber-500", textColor: "text-amber-400", glow: "shadow-[0_0_15px_rgba(245,158,11,0.3)]", gridPos: "col-start-1 row-start-2 md:col-auto md:row-auto" },
];

export default function ProcessSection() {
return (
    <section className="py-10 sm:py-16 md:py-20 px-4 max-w-6xl md:max-w-7xl mx-auto overflow-hidden">
    {/* Title */}
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-cyan-400">
        100% AMAN & BERGARANSI
        </span>
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-1 md:mt-2">
        4 Langkah Mudah Dapatkan Akun
        </h2>
    </div>

    {/* Steps Container */}
    <div className="relative">
        {/* GARIS PENYAMBUNG DESKTOP (Horizontal Lurus Slim) */}
        <div className="hidden md:block absolute top-6 md:top-10 left-[12.5%] right-[12.5%] h-[1.5px] md:h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 via-emerald-500 to-amber-500 z-0" />

        <svg 
        className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        >
        <defs>
            {/* 1. Gradasi 01 -> 02 (Ungu -> Cyan) */}
            <linearGradient id="gradTop" x1="25" y1="8.5" x2="80" y2="8.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a855f7" />  {/* Ungu 01 */}
            <stop offset="100%" stopColor="#38bdf8" /> {/* Cyan 02 */}
            </linearGradient>

            {/* 2. Gradasi Lengkungan 02 -> 03 (Cyan -> Hijau) */}
            <linearGradient id="gradCurve" x1="80" y1="8.5" x2="70" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />  {/* Cyan 02 */}
            <stop offset="100%" stopColor="#22c55e" /> {/* Hijau 03 */}
            </linearGradient>

            {/* 3. Gradasi 03 -> 04 (Hijau -> Oranye) */}
            <linearGradient id="gradBottom" x1="70" y1="65" x2="25" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22c55e" />  {/* Hijau 03 */}
            <stop offset="100%" stopColor="#f59e0b" /> {/* Oranye 04 */}
            </linearGradient>
        </defs>

        {/* Garis Atas (01 -> 02) */}
        <path
            d="M 25 8.5 H 80"
            fill="none"
            stroke="url(#gradTop)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
        />

        {/* Lengkungan Kanan (02 -> 03) */}
        <path
            d="M 80 8.5 C 98 8.5, 100 75, 70 65"
            fill="none"
            stroke="url(#gradCurve)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
        />

        {/* Garis Bawah (03 -> 04) */}
        <path
            d="M 70 65 H 25"
            fill="none"
            stroke="url(#gradBottom)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
        />
        </svg>

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-x-6 lg:gap-x-8 relative z-10">
        {steps.map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${item.gridPos}`}>
            {/* Circle Number */}
            <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-full border-2 md:border-[3px] bg-[#0B0E17] flex items-center justify-center font-bold text-sm sm:text-base md:text-xl lg:text-2xl mb-3 md:mb-5 ${item.borderColor} ${item.textColor}${item.glow} transition-all duration-300`}
            >
                {item.step}
            </div>

            {/* Title */}
            <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white mb-1 md:mb-2 max-w-[130px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px]">
                {item.title}
            </h3>

            {/* Description */}
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-slate-400 leading-relaxed max-w-[130px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px]">
                {item.desc}
            </p>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}