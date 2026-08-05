export default function CtaBanner() {
return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
    <div className="bg-gradient-to-r from-purple-900/90 via-blue-900/90 to-slate-900 border border-purple-500/30 p-8 sm:p-12 rounded-3xl text-center backdrop-blur-xl shadow-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
        Siap untuk Memulai?
        </h2>
        <p className="text-slate-300 mt-2 max-w-xl mx-auto text-sm sm:text-base">
        Temukan Akun ML Premium atau Jual Akun Anda dengan Aman dalam Hitungan Menit.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-blue-600/20">
            Cari Akun
        </button>
        <button className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3 rounded-xl text-sm transition">
            Jual Akun
        </button>
        </div>
    </div>
    </section>
);
}