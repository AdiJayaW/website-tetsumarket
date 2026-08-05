import { DollarSign, Zap, Shield, Lock } from 'lucide-react';

const features = [
{
    icon: DollarSign,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    title: "Best Market Price",
    desc: "We analyze current market trends to ensure you get the best value for your account.",
},
{
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    title: "Fast Process",
    desc: "From submission to payment, the entire process takes just 24-48 business hours.",
},
{
    icon: Shield,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    title: "Secure Transaction",
    desc: "Your payment is guaranteed. We hold escrow until buyer confirms account receipt.",
},
{
    icon: Lock,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    title: "Safe & Legal",
    desc: "All transactions comply with our terms of service and are handled transparently.",
},
];

export default function SellFeatures() {
return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
    {features.map((item, idx) => {
        const Icon = item.icon;
        return (
        <div 
            key={idx} 
            className="bg-[#121827]/80 border border-slate-800/80 hover:border-slate-700 p-6 rounded-2xl transition-all duration-300"
        >
            <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
            <Icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
        </div>
        );
    })}
    </section>
);
}