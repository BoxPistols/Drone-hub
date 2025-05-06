'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../lib/themes/theme';
import { generateCssVariables } from '../lib/themes/tokens';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    theme: typeof lightTheme | typeof darkTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // システム設定の初期検出
    const prefersDark =
        typeof window !== 'undefined'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
            : false;

    const [mode, setMode] = useState<ThemeMode>(
        // ローカルストレージとシステム設定のハイブリッドアプローチ
        typeof window !== 'undefined'
            ? (localStorage.getItem('theme') as ThemeMode) || (prefersDark ? 'dark' : 'light')
            : 'light',
    );

    const theme = mode === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        // DOM操作を統一
        const root = document.documentElement;

        // 1. Tailwind用のクラス設定
        if (mode === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // 2. data-theme属性設定
        root.setAttribute('data-theme', mode);

        // 3. CSS変数の適用
        const cssVars = generateCssVariables(mode);
        Object.entries(cssVars).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });

        // 4. ストレージに保存
        localStorage.setItem('theme', mode);
    }, [mode]);

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
