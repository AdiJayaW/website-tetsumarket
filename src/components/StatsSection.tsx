const stats = [
{ value: "2,847", label: "Akun Terjual" },
{ value: "15,392", label: "Happy Customers" },
{ value: "8,210", label: "Active Listings" },
{ value: "99.2%", label: "Kepuasan Pengguna" },
];

export default function StatsSection() {
return (
<section className="py-8 px-4 max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {stats.map((stat, idx) => (
        <div
        key={idx}
        className="bg-[#131B2E]/60 border border-slate-800/80 rounded-xl p-6 text-center backdrop-blur-sm"
        >
        <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {stat.value}
        </div>
        <div className="text-xs sm:text-sm text-slate-400 mt-1">
            {stat.label}
        </div>
        </div>
    ))}
    </div>
</section>
);
}