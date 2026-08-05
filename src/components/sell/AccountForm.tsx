'use client';

import React, { useState } from 'react';
import { Upload, MessageCircle, ArrowRight } from 'lucide-react';

export default function AccountForm() {
const [formData, setFormData] = useState({
    ign: '',
    rank: '',
    heroes: '',
    skins: '',
    info: '',
    whatsapp: '',
});

return (
    <section className="max-w-3xl mx-auto mb-20">
    <div className="text-center mb-10">
        <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">SUBMIT NOW</span>
        <h2 className="text-3xl font-extrabold text-white mt-1">Account Submission Form</h2>
    </div>

    <form onSubmit={(e) => e.preventDefault()} className="bg-[#121827]/90 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl backdrop-blur-sm">
        
        {/* Field Grid 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
            Account In-Game Name *
            </label>
            <input
            type="text"
            placeholder="Your ML account name"
            className="w-full bg-[#0B0E17] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            value={formData.ign}
            onChange={(e) => setFormData({ ...formData, ign: e.target.value })}
            />
        </div>

        <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
            Current Rank *
            </label>
            <select
            className="w-full bg-[#0B0E17] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            value={formData.rank}
            onChange={(e) => setFormData({ ...formData, rank: e.target.value })}
            >
            <option value="" disabled>Select rank...</option>
            <option value="epic">Epic</option>
            <option value="legend">Legend</option>
            <option value="mythic">Mythic</option>
            <option value="mythical_honor">Mythical Honor</option>
            <option value="mythical_glory">Mythical Glory</option>
            <option value="immortal">Mythic Immortal</option>
            </select>
        </div>
        </div>

        {/* Field Grid 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
            Total Heroes *
            </label>
            <input
            type="number"
            placeholder="e.g. 75"
            className="w-full bg-[#0B0E17] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            value={formData.heroes}
            onChange={(e) => setFormData({ ...formData, heroes: e.target.value })}
            />
        </div>

        <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
            Total Skins *
            </label>
            <input
            type="number"
            placeholder="e.g. 120"
            className="w-full bg-[#0B0E17] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            value={formData.skins}
            onChange={(e) => setFormData({ ...formData, skins: e.target.value })}
            />
        </div>
        </div>

        {/* Additional Info */}
        <div>
        <label className="block text-xs font-semibold text-slate-300 mb-2">
            Additional Info
        </label>
        <textarea
            rows={4}
            placeholder="Special skins, emblem level, win rate, account age, etc."
            className="w-full bg-[#0B0E17] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            value={formData.info}
            onChange={(e) => setFormData({ ...formData, info: e.target.value })}
        />
        </div>

        {/* WhatsApp Contact */}
        <div>
        <label className="block text-xs font-semibold text-slate-300 mb-2">
            WhatsApp Contact *
        </label>
        <input
            type="text"
            placeholder="+62 8xx-xxxx-xxxx"
            className="w-full bg-[#0B0E17] border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        />
        </div>

        {/* Upload Box */}
        <div>
        <label className="block text-xs font-semibold text-slate-300 mb-2">
            Upload Screenshots
        </label>
        <div className="border-2 border-dashed border-slate-700/80 hover:border-purple-500/50 bg-[#0B0E17]/50 rounded-xl p-8 text-center cursor-pointer transition flex flex-col items-center justify-center group">
            <Upload className="w-8 h-8 text-slate-500 group-hover:text-purple-400 transition-colors mb-2" />
            <p className="text-xs text-slate-300 font-medium">
            Drag & drop or click to upload account screenshots
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
            PNG, JPG up to 10MB each
            </p>
        </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
            type="submit"
            className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 transition duration-200"
        >
            <span>Submit Account</span>
            <ArrowRight className="w-4 h-4" />
        </button>

        <button
            type="button"
            className="bg-[#0B0E17] hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-medium py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition duration-200"
        >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat Admin</span>
        </button>
        </div>
    </form>
    </section>
);
}