import { MetadataRoute } from 'next';
// Import client Supabase jika ingin menarik halaman detail produk/akun dinamis:
// import { createClient } from '@/utils/supabase/server'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const baseUrl = 'https://tetsumarket.my.id';

// 1. Halaman Statis Utama
const staticRoutes: MetadataRoute.Sitemap = [
    {
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
    },
    {
    url: `${baseUrl}/faq`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    },
    {
    url: `${baseUrl}/testimoni`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    },
];

/* 
// 2. Jika Punya Halaman Detail Produk/Akun Dinamis dari Supabase (Contoh):
// Buka komentar kode ini jika kamu buat halaman seperti /akun/[id]

const supabase = await createClient();
const { data: accounts } = await supabase.from('accounts').select('id, updated_at');

const dynamicRoutes: MetadataRoute.Sitemap = (accounts || []).map((item) => ({
    url: `${baseUrl}/akun/${item.id}`,
    lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
}));

return [...staticRoutes, ...dynamicRoutes];
*/

return staticRoutes;
}