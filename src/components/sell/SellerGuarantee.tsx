import { ShieldCheck } from 'lucide-react';

export default function SellerGuarantee() {
return (
    <section className="max-w-3xl mx-auto">
    <div className="bg-gradient-to-r from-[#171D33] to-[#0F1829] border border-purple-500/30 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xl">
        <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center shrink-0">
        <ShieldCheck className="w-8 h-8 text-purple-400" />
        </div>
        <div>
        <h3 className="text-lg font-bold text-white mb-1">
            100% Seller Protection Guarantee
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Your account is in safe hands. We hold payment in escrow until buyer confirms receipt. If any issues arise, our team mediates and ensures you get paid. No scams, guaranteed.
        </p>
        </div>
    </div>
    </section>
);
}