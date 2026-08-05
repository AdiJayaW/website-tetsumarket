import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SellHowItWorks from '@/components/sell/SellHowItWorks';
import SellFeatures from '@/components/sell/SellFeatures';
import AccountForm from '@/components/sell/AccountForm';
import SellerGuarantee from '@/components/sell/SellerGuarantee';

export default function SellAccountPage() {
return (
    <div className="min-h-screen bg-[#0B0E17] text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
    <Navbar />

    <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-6">
            <span>💰 Get Paid for Your Account</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sell Your ML Account <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Safely</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
            Turn your Mobile Legends account into cash. Fast, safe, and at the best market price.
        </p>
        </div>

        {/* Modular Components */}
        <SellHowItWorks />
        <SellFeatures />
        <AccountForm />
        <SellerGuarantee />
    </main>

    <Footer />
    </div>
);
}