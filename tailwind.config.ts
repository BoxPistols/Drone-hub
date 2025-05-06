import type { Config } from 'tailwindcss';
import { tokenColors } from './lib/themes/tokens';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class', // class戦略を維持
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                // CSSカスタム変数を使用してTailwindカラーを定義
                primary: 'var(--color-primary)',
                'primary-light': 'var(--color-primary-light)',
                'primary-dark': 'var(--color-primary-dark)',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',

                // ダークモード用のトークンを追加
                'dark-primary': tokenColors.dark.primary.main,
                'dark-primary-light': tokenColors.dark.primary.light,
                'dark-primary-dark': tokenColors.dark.primary.dark,
                // 他のトークンも同様に追加
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
