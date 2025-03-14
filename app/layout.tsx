import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeRegistry from './components/ThemeRegistry';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'My New App',
    description: 'Generated by Onlook',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="gje88am">
            <body className={inter.className} data-oid="om-_-dz">
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    );
}
