import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Jual Beli Akun MLBB Murah & Garansi Aman | Tetsumarket',
  description: 'Tempat jual beli akun Mobile Legends (MLBB) terpercaya. Dapatkan akun MLBB impianmu dengan sistem rekber resmi, garansi, dan harga bersaing.',
  keywords: ['jual beli mlbb', 'jual akun ml', 'beli akun mobile legends', 'rekber mlbb', 'tetsumarket'],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
