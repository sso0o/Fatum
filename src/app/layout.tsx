import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Fatum — 오늘의 운세',
  description: '매일 별자리 운세를 확인하세요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.variable} font-sans bg-canvas text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
