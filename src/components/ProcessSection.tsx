const steps = [
{ step: "01", title: "Pilih Akun", desc: "Pilih Akun Impianmu dari seller yang terverifikasi" },
{ step: "02", title: "Quality Control", desc: "Our system verifies stats, skins, and unbind status." },
{ step: "03", title: "Secure Payment", desc: "Funds held safely in escrow until you check the data." },
{ step: "04", title: "Safe Full Access", desc: "Get full credentials and change email securely." },
];

export default function ProcessSection() {
return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">Cara Transaksi</span>
        <h2 className="text-3xl font-bold text-white mt-2">Proses Verifikasi Akun</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((item, idx) => (
        <div key={idx} className="bg-[#131B2E]/60 border border-slate-800 p-6 rounded-2xl relative text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-purple-500/20">
            {item.step}
            </div>
            <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
        </div>
        ))}
    </div>
    </section>
);
}