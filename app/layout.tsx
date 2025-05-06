import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/hooks/useTheme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'DroneHub - 次世代ドローン管理プラットフォーム',
    description: '飛行許可申請から経路計画まで、すべてをシームレスに',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <head>
                {/* テーマフラッシュ防止スクリプト */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        (function() {
                            try {
                                var mode = localStorage.getItem('theme-mode');
                                if (mode) {
                                    document.documentElement.setAttribute('data-theme', mode);
                                    if (mode === 'dark') {
                                        document.documentElement.classList.add('dark');
                                    }
                                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                                    document.documentElement.setAttribute('data-theme', 'dark');
                                    document.documentElement.classList.add('dark');
                                }
                            } catch (e) {}
                        })();
                    `,
                    }}
                />
            </head>
            <body className={inter.className}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
