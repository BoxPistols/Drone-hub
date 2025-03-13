'use client';

import { ThemeProvider } from '@mui/material/styles';
// import { ThemeProvide as ThemeProvider } from '@boxpistols/react-map-vite';

import CssBaseline from '@mui/material/CssBaseline';
// import theme from '@/lib/theme'; // ルートからの絶対パス
import { theme } from '@boxpistols/react-map-vite';
// import { darkTheme } from '@boxpistols/react-map-vite/theme';

// const theme = createTheme();

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
