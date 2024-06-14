import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TEESAS.com',
  description: 'Welcome to Teesas Education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <a target="_blank" href="https://icons8.com/icon/tKD3C7EOcsTX/knight">Knight</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
