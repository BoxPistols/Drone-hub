'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../lib/themes/theme';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  theme: typeof lightTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [isInitialized, setIsInitialized] = useState(false);
  const prefersDarkMode = typeof window !== 'undefined' && window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  // アプリ起動時にlocalStorageから読み込み (初回のみ実行)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedMode = localStorage.getItem('theme-mode') as ThemeMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else if (prefersDarkMode) {
      setMode('dark');
    }
    setIsInitialized(true);
  }, [prefersDarkMode]); // prefersDarkModeが変更されたときに実行

  // モード変更時にlocalStorageに保存 (初期化完了後のみ)
  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem('theme-mode', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode, isInitialized]);

  // システムのテーマ変更を監視
  useEffect(() => {
    if (mode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      document.documentElement.setAttribute(
        'data-theme',
        mediaQuery.matches ? 'dark' : 'light'
      );
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  // 現在のモードに基づいてテーマオブジェクトを定義
  const theme = useMemo(() => {
    const resolvedMode =
      mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode;
    return resolvedMode === 'dark' ? darkTheme : lightTheme;
  }, [mode, prefersDarkMode]);

  // HTMLのクラスを追加
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme.palette.mode === 'dark');
  }, [theme.palette.mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
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
