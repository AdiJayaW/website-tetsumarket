const steps = [
{
    step: "01",
    title: "Submit Account",
    desc: "Fill in your account details including rank, heroes, skins, and upload screenshots.",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
},
{
    step: "02",
    title: "Verification",
    desc: "Our team verifies your account details and quality within 24 hours.",
    borderColor: "border-cyan-400",
    textColor: "text-cyan-400",
    glow: "shadow-[0_0_20px_rgba(56,189,248,0.3)]",
},
{
    step: "03",
    title: "Negotiation",
    desc: "We offer a fair price based on market value. You can accept or negotiate.",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-400",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",
},
{
    step: "04",
    title: "Payment",
    desc: "Once sold, receive payment directly to your preferred bank account or e-wallet.",
    borderColor: "border-amber-500",
    textColor: "text-amber-400",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.3)]",
},
{
    step: "05",
    title: "Security Observation",
    desc: "Account is monitored for 7 days to ensure smooth transfer and buyer satisfaction.",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
},
];

export default function SellHowItWorks() {
return (
    <section className="mb-20">
    <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">SIMPLE PROCESS</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">How It Works</h2>
    </div>

    <div className="relative">
        <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 via-emerald-500 via-amber-500 to-purple-500 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
        {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
            <div
                className={`w-14 h-14 rounded-full border-2 bg-[#0B0E17] flex items-center justify-center font-bold text-base mb-4 ${item.borderColor} ${item.textColor} ${item.glow} transition-transform hover:scale-105`}
            >
                {item.step}
            </div>
            <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">{item.desc}</p>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}