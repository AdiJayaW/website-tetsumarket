import { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const baseUrl = 'https://tetsumarket.my.id';

// 1. Halaman Statis Utama & Halaman Katalog Utama
const staticRoutes: MetadataRoute.Sitemap = [
    {
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
    },
    {
    url: `${baseUrl}/mlbb-stock`, // Sesuaikan jika kamu punya URL khusus katalog MLBB (misal: /catalog atau /mlbb)
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
    },
];

// 2. Halaman Dinamis (Detail Stok Akun MLBB)
let dynamicRoutes: MetadataRoute.Sitemap = [];

try {
    const supabase = await createClient();

    // Mengambil data stok akun dari Supabase
    const { data: accounts, error } = await supabase
    .from('accounts') // Ganti dengan nama tabel akunmu
    .select('id, updated_at, created_at')
    .eq('status', 'available'); // Opsional: Hanya masukkan akun yang ready stock/belum terjual

    if (!error && accounts) {
    dynamicRoutes = accounts.map((item) => ({
        // Sesuaikan struktur URL detail akunmu (contoh: /akun/123 atau /mlbb/123)
        url: `${baseUrl}/akun/${item.id}`, 
        lastModified: new Date(item.updated_at || item.created_at || Date.now()),
        changeFrequency: 'daily',
        priority: 0.7,
    }));
    }
} catch (err) {
    console.error('Gagal mengambil data sitemap dari Supabase:', err);
}

// Gabungkan halaman statis dan dinamis
return [...staticRoutes, ...dynamicRoutes];
}