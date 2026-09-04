import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Scale, 
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle
} from 'lucide-react';

export const metadata = {
  title: 'Syarat dan Ketentuan | Tetsumarket',
  description: 'Aturan penggunaan, hak, kewajiban, serta kebijakan garansi dan transaksi resmi di platform Tetsumarket.',
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "4 September 2026";

  return (
    <main className="min-h-screen bg-[#0B0E17] text-slate-200 font-sans pt-20 sm:pt-24 pb-16">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Navigasi & Header */}
        <div className="mb-8">
          <Link 
            href="/mlbb-stock" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-xs sm:text-sm font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">
                <Scale className="w-4 h-4" /> Perjanjian Penggunaan Layanan
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-wide">
                Syarat & Ketentuan Tetsumarket
              </h1>
            </div>
            <div className="bg-[#131B2E] border border-slate-800 px-3.5 py-2 rounded-xl text-xs text-slate-400 self-start sm:self-auto">
              Terakhir diperbarui: <span className="text-slate-200 font-semibold">{lastUpdated}</span>
            </div>
          </div>
        </div>

        {/* Ringkasan Banner Keamanan */}
        <div className="bg-gradient-to-r from-cyan-950/40 via-[#131B2E] to-slate-900 border border-cyan-500/20 rounded-2xl p-5 mb-10 flex items-start gap-4 shadow-xl">
          <ShieldCheck className="w-8 h-8 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <h2 className="font-bold text-white text-base">Penting untuk Diketahui</h2>
            <p className="text-slate-300 leading-relaxed">
              Dengan mengakses, mendaftar, atau melakukan transaksi melalui <strong className="text-cyan-400 font-bold">Tetsumarket</strong>, Anda dianggap telah membaca, memahami, dan menyetujui seluruh aturan main di bawah ini. Transaksi <strong className="text-white font-semibold">hanya sah</strong> apabila dilakukan melalui platform/kontak resmi Tetsumarket.
            </p>
          </div>
        </div>

        {/* Isi Dokumen */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">

          {/* 1. PENDAHULUAN */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">01.</span> Pendahuluan & Ketentuan Umum
            </h2>
            <p>
              <strong className="text-cyan-400 font-bold">Tetsumarket</strong> (selanjutnya disebut <span className="text-white font-medium">“Kami”</span> atau <span className="text-white font-medium">“Platform”</span>) adalah platform perantara transaksi (<span className="text-cyan-300 font-semibold">Rekber / Escrow</span>) dan marketplace jual beli akun gim (<span className="italic">game account</span>).
            </p>
            <p>
              Dokumen Syarat dan Ketentuan ini merupakan perjanjian yang mengikat secara hukum antara Pengguna (<span className="text-white font-medium">“Anda”</span>) dan Tetsumarket. Dengan mengakses atau menggunakan fitur di platform Kami, Anda menyatakan bersedia tunduk pada seluruh regulasi yang tercantum dalam aturan ini serta peraturan perundang-undangan yang berlaku di Republik Indonesia.
            </p>
          </section>

          {/* 2. DEFINISI */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">02.</span> Definisi Istilah
            </h2>
            <ul className="space-y-2.5 pl-1">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong className="text-white font-bold">Pengguna:</strong> Setiap pihak (Pengunjung, Pembeli, maupun Penjual) yang mengakses situs web atau layanan resmi Tetsumarket.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong className="text-white font-bold">Pembeli:</strong> Pengguna yang melakukan Pembelian Akun Gim atau memanfaatkan layanan Rekber melalui platform Tetsumarket.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong className="text-white font-bold">Penjual:</strong> Pengguna yang menawarkan/menjual Akun Gim melalui katalog atau sistem penampungan data Tetsumarket.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong className="text-cyan-400 font-bold">Rekber (Rekening Bersama / Escrow):</strong> Layanan penampungan dana sementara oleh Tetsumarket untuk menjamin keamanan transaksi antara Penjual dan Pembeli.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong className="text-rose-400 font-bold">Hackback:</strong> Tindakan pengambilalihan kembali akses akun gim secara sepihak/tanpa izin oleh Penjual atau pemilik lama setelah transaksi dinyatakan selesai.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong className="text-emerald-400 font-bold">All Unbind:</strong> Kondisi di mana seluruh tautan akun pihak ketiga (seperti Facebook, VK, Google, TikTok, Email) telah dilepas sepenuhnya dari akun gim yang diperjualbelikan.</span>
              </li>
            </ul>
          </section>

          {/* 3. KELAYAKAN & AKUN PENGGUNA */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">03.</span> Kelayakan & Keamanan Pengguna
            </h2>
            <ol className="space-y-2 list-decimal list-inside text-slate-300">
              <li>Pengguna wajib berusia minimal <strong className="text-white font-semibold">18 (delapan belas) tahun</strong> atau telah mendapatkan izin resmi dan pengawasan dari orang tua/wali yang sah.</li>
              <li>Pengguna wajib memberikan informasi identitas (nama, nomor WhatsApp, data pembayaran) yang akurat, jujur, dan dapat dipertanggungjawabkan.</li>
              <li>Pengguna bertanggung jawab penuh atas kerahasiaan informasi akun, kode OTP, dan kata sandi pribadi. Tetsumarket tidak pernah meminta kata sandi atau kode OTP Pengguna di luar sistem resmi.</li>
              <li>Dilarang keras membuat akun ganda atau memanfaatkan sistem untuk tindakan kecurangan, manipulasi promo, penipuan, maupun persaingan tidak sehat.</li>
            </ol>
          </section>

          {/* 4. KETENTUAN PENJUAL */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">04.</span> Ketentuan Bagi Penjual (Seller)
            </h2>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Penjual menjamin bahwa akun gim yang ditawarkan adalah <strong className="text-white font-bold">milik pribadi yang sah</strong>, bebas sengketa, dan bukan hasil dari peretasan, <span className="italic">phishing</span>, atau tindakan ilegal.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Penjual wajib memberikan spesifikasi akun (jumlah hero, skin, rank, status minus diamond, data kaitan) secara jujur dan rinci.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Penjual bersedia membantu proses pelepasan seluruh kaitan akun (<strong className="text-emerald-400 font-bold">All Unbind</strong>) hingga akun sepenuhnya aman berpindah tangan ke Pembeli.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-rose-400 font-bold">Dilarang keras melakukan Hackback.</strong> Segala bentuk tindakan penarikan kembali akun setelah transaksi disepakati akan diproses secara hukum pidana dan data identitas Penjual akan dimasukkan ke daftar hitam (<span className="italic">blacklist</span> publik).</span>
              </li>
            </ul>
          </section>

          {/* 5. KETENTUAN PEMBELI & REKBER */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">05.</span> Ketentuan Bagi Pembeli & Alur Rekber
            </h2>
            <ol className="space-y-2 list-decimal list-inside text-slate-300">
              <li>Pembeli wajib bertransaksi menggunakan jalur pembayaran dan prosedur instruksi resmi yang diarahkan oleh Admin Tetsumarket.</li>
              <li>Setelah menerima data akun dari Admin, Pembeli diberikan waktu untuk melakukan <strong className="text-cyan-300 font-semibold">pemeriksaan kondisi akun</strong> (<span className="italic">check account</span>) serta mengamankan kredensial (mengubah email, kata sandi, dan memasang verifikasi 2 langkah).</li>
              <li>Jika kondisi akun telah sesuai deskripsi dan proses pengamanan data selesai, transaksi akan dinyatakan <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/30">SELESAI (DONE)</span> dan dana akan diteruskan ke Penjual.</li>
              <li>Pembeli dilarang membagikan data akun yang baru diterima kepada pihak ketiga mana pun selama proses pengamanan berlangsung.</li>
            </ol>
          </section>

          {/* 6. KEBIJAKAN GARANSI & ANTI-HACKBACK */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 p-5 sm:p-6 rounded-2xl space-y-4">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">06.</span> Kebijakan Garansi & Syarat Klaim
            </h2>
            <p>
              Akun yang berlabel <strong className="text-cyan-400 font-bold">Full Garansi Tetsumarket</strong> dilindungi jaminan keamanan dengan ketentuan berikut:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="bg-[#0B0E17] border border-emerald-500/30 p-4 rounded-xl space-y-2">
                <h3 className="font-bold text-emerald-400 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Garansi BERLAKU Apabila:
                </h3>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Terbukti terjadi <span className="text-white font-medium">hackback</span> atau penarikan paksa oleh pemilik awal/penjual.</li>
                  <li>Email/Moonton ID dikunci akibat data pemulihan lama yang ditarik Penjual.</li>
                  <li>Klaim diajukan sesuai dengan masa berlaku garansi yang disepakati.</li>
                </ul>
              </div>

              <div className="bg-[#0B0E17] border border-rose-500/30 p-4 rounded-xl space-y-2">
                <h3 className="font-bold text-rose-400 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" /> Garansi GUGUR / BATAL Apabila:
                </h3>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>Pembeli lalai dalam pengamanan (terkena <span className="italic">phishing</span>, membagikan OTP/password).</li>
                  <li>Pembeli melakukan <span className="text-white font-medium">top up</span> diamond ilegal/di tempat tak resmi yang menyebabkan akun di-<span className="italic">banned</span> atau minus diamond.</li>
                  <li>Pembeli menggunakan <span className="text-white font-medium">cheat</span>, bot, skrip ilegal, atau melanggar regulasi publisher game (Moonton).</li>
                  <li>Pembeli menjual kembali akun tersebut ke pihak lain di luar Rekber Tetsumarket.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. PEMBAYARAN & REFUND */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">07.</span> Pembayaran & Kebijakan Pengembalian Dana (Refund)
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Seluruh transaksi pembayaran diproses melalui saluran bank/e-wallet resmi yang dikonfirmasi oleh Admin Tetsumarket.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <div>
                  <strong className="text-white font-bold">Pengembalian dana (Refund 100%)</strong> hanya dapat dilakukan apabila:
                  <ul className="pl-4 pt-1.5 text-slate-400 list-disc space-y-1">
                    <li>Stok akun ternyata kosong atau tidak sesuai dengan deskripsi katalog.</li>
                    <li>Penjual membatalkan transaksi secara sepihak sebelum data diserahkan.</li>
                    <li>Terjadi kendala teknis fatal yang menyebabkan data akun tidak dapat di-unbind.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Apabila transaksi sudah dinyatakan <span className="text-emerald-400 font-semibold">SELESAI (DONE)</span> dan dana telah diteruskan ke Penjual, maka pengembalian dana tidak dapat dilakukan kecuali terdapat klaim garansi <span className="italic">hackback</span> yang valid.</span>
              </li>
            </ul>
          </section>

          {/* 8. RISIKO GAME & BATASAN TANGGUNG JAWAB */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">08.</span> Penafian (Disclaimer) & Risiko Publisher
            </h2>
            <div className="bg-amber-950/30 border border-amber-500/30 p-4 rounded-xl text-amber-200/90 text-xs sm:text-sm space-y-1.5">
              <p className="font-semibold flex items-center gap-1.5 text-amber-400">
                <AlertTriangle className="w-4 h-4 shrink-0" /> Perhatian Mengenai Kebijakan Publisher Game:
              </p>
              <p className="leading-relaxed">
                Jual beli akun gim dapat melibatkan kebijakan internal dari pengembang/publisher game (seperti Moonton). Pengguna memahami bahwa risiko seperti penangguhan (<span className="italic">suspend</span>), <span className="italic">rollback</span>, atau perubahan sistem keamanan oleh publisher di kemudian hari yang bukan disebabkan oleh kelalaian Tetsumarket atau <span className="italic">hackback</span> penjual adalah di luar kendali Platform.
              </p>
            </div>
            <p>
              Tetsumarket bertindak sebagai perantara transaksi (<span className="italic">escrow</span>). Tanggung jawab maksimal Tetsumarket atas sengketa yang timbul dibatasi sebesar nilai nominal transaksi yang dilakukan oleh Pengguna pada transaksi terkait.
            </p>
          </section>

          {/* 9. TRANSAKSI DI LUAR PLATFORM */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">09.</span> Larangan Transaksi di Luar Platform
            </h2>
            <p>
              Tetsumarket <strong className="text-rose-400 font-black">TIDAK BERTANGGUNG JAWAB</strong> dan tidak berkewajiban memberikan ganti rugi dalam bentuk apa pun atas kerugian yang timbul akibat:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 pl-1">
              <li>Transaksi langsung (<span className="italic">direct transfer</span>) antara Penjual dan Pembeli tanpa melalui Admin Tetsumarket.</li>
              <li>Transaksi melalui akun palsu, situs tiruan (<span className="italic">cloning/phishing</span>), atau pihak ketiga yang mengatasnamakan Tetsumarket.</li>
            </ul>
            <p className="text-slate-200 font-medium">
              Pastikan Anda selalu memverifikasi nomor WhatsApp Admin yang tertera di website resmi sebelum mengirimkan dana atau data akun.
            </p>
          </section>

          {/* 10. HUKUM YANG BERLAKU */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">10.</span> Hukum yang Berlaku & Sengketa
            </h2>
            <p>
              Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan <strong className="text-white font-bold">Hukum Republik Indonesia</strong>.
            </p>
            <p>
              Apabila timbul perselisihan atau sengketa antara Pengguna dan Tetsumarket, maka akan diselesaikan terlebih dahulu melalui musyawarah untuk mufakat secara kekeluargaan. Apabila tidak dicapai kesepakatan dalam waktu 30 (tiga puluh) hari kerja, sengketa akan diselesaikan melalui yurisdiksi pengadilan negeri yang berwenang di wilayah Republik Indonesia.
            </p>
          </section>

          {/* 11. PERUBAHAN SYARAT */}
          <section className="bg-[#131B2E]/60 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <span className="text-cyan-400 font-mono">11.</span> Perubahan Syarat & Ketentuan
            </h2>
            <p>
              Tetsumarket berhak untuk melakukan pembaruan, penambahan, atau perubahan atas Syarat dan Ketentuan ini sewaktu-waktu demi meningkatkan keamanan dan kenyamanan pengguna. Perubahan akan berlaku efektif setelah diunggah di halaman ini. Pengguna disarankan untuk memeriksa halaman ini secara berkala.
            </p>
          </section>

          {/* BANTUAN & KONTAK */}
          <div className="bg-[#131B2E] border border-cyan-500/30 p-6 rounded-2xl text-center space-y-3 shadow-2xl">
            <HelpCircle className="w-8 h-8 text-cyan-400 mx-auto" />
            <h3 className="text-base sm:text-lg font-bold text-white">Ada Pertanyaan Mengenai Aturan Layanan?</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              Jika Anda membutuhkan klarifikasi lebih lanjut mengenai proses transaksi, garansi, atau pelaporan kendala, silakan hubungi Customer Service kami.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/6285715338331?text=Halo%20Admin%20Tetsumarket,%20saya%20ingin%20bertanya%20mengenai%20Syarat%20dan%20Ketentuan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors uppercase tracking-wider"
              >
                Hubungi Admin WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}