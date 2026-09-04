import { Metadata } from 'next';

export const metadata: Metadata = {
title: 'Jual Beli Akun MLBB Murah & Garansi Aman | Tetsumarket',
description: 'Katalog lengkap jual beli akun Mobile Legends (MLBB). Tersedia akun Mythic, Hero lengkap, dan Skin Collector dengan garansi aman via Rekber resmi Tetsumarket.',
keywords: [
    'jual beli mlbb',
    'jual akun ml murah',
    'beli akun mobile legends',
    'katalog akun mlbb',
    'rekber mlbb terpercaya',
    'tetsumarket'
],
openGraph: {
    title: 'Jual Beli Akun MLBB Murah & Garansi Aman | Tetsumarket',
    description: 'Katalog lengkap akun Mobile Legends (MLBB) terpercaya. Dapatkan akun impianmu sekarang di Tetsumarket.',
    url: 'https://tetsumarket.my.id/mlbb-stock', // Ganti dengan URL domain aslimu
    siteName: 'Tetsumarket',
    locale: 'id_ID',
    type: 'website',
},
};

export default function MLBBStockLayout({
children,
}: {
children: React.ReactNode;
}) {
return <>{children}</>;
}