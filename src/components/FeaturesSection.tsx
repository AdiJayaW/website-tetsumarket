import { ShieldCheck, Zap, Lock, Users } from 'lucide-react';

const features = [
{
    icon: ShieldCheck,
    title: "Instant Protection",
    desc: "Every transaction is secured with escrow protection until you verify account ownership."
},
{
    icon: Zap,
    title: "Fast Delivery",
    desc: "Receive account credentials instantly right after your payment is confirmed."
},
{
    icon: Lock,
    title: "Secure Payment",
    desc: "Multiple trusted payment gateways with 256-bit encryption for safe checkout."
},
{
    icon: Users,
    title: "Trusted Marketplace",
    desc: "Over 15,000+ gamers trust our verified platform for trading ML accounts."
}
];

export default function FeaturesSection() {
return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">WHY CHOOSE US</span>
        <h2 className="text-3xl font-bold text-white mt-2">The Safest Choice for ML Accounts</h2>
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