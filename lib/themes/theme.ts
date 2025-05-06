import { type Theme, type ThemeOptions, createTheme } from '@mui/material/styles';
import { generateCssVariables, tokenColors } from './tokens';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import {
    colorData,
    typographyComponentsOverrides,
    typographyOptions,
} from '@boxpistols/react-map-vite';

// パレットを新しいトークンシステムで作成
const createPalette = (mode: 'light' | 'dark') => {
    const tokens = mode === 'light' ? tokenColors.light : tokenColors.dark;
    const isLight = mode === 'light';

    return {
        mode,
        primary: tokens.primary,
        secondary: tokens.secondary,
        // 背景色
        background: {
            default: isLight ? '#f8f9fa' : '#303030',
            paper: isLight ? '#ffffff' : '#424242',
        },
        // テキスト色を直接指定
        text: {
            primary: isLight ? '#212121' : '#ffffff',
            secondary: isLight ? '#757575' : '#bbbbbb',
            disabled: isLight ? '#9e9e9e' : '#757575',
        },
        // 必要に応じて他のプロパティも追加
    };
};

// コンポーネントスタイルを更新
const createComponentStyles = (mode: 'light' | 'dark'): ThemeOptions['components'] => {
    const tokens = mode === 'light' ? tokenColors.light : tokenColors.dark;
    const isLight = mode === 'light';
    const palette = createPalette(mode);

    return {
        MuiCssBaseline: {
            styleOverrides: {
                ':root': {
                    // CSS変数の適用
                    ...Object.entries(generateCssVariables(mode)).reduce(
                        (acc, [key, value]) => ({ ...acc, [key]: value }),
                        {},
                    ),
                },
                body: {
                    backgroundColor: mode === 'light' ? '#f8f9fa' : '#303030',
                    color: palette.text.primary,
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: isLight ? '#ffffff' : '#424242',
                    color: palette.text.primary,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'medium',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 4,
                },
                sizeSmall: {
                    padding: '0.25em 0.875em',
                },
                contained: {
                    '&.MuiButton-contained.MuiButton-root': {
                        color: tokens.primary.contrastText,
                    },
                    '&.MuiButton-contained.MuiButton-root.MuiButton-containedInherit': {
                        color: isLight ? '#212121' : '#ffffff',
                    },
                },
            },
        },
        // Table
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${isLight ? '#e0e0e0' : '#424242'}`,
                },
                head: {
                    backgroundColor: palette.background.paper,
                    color: palette.text.primary,
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    padding: '0.5em 1.25em',
                },
                body: {
                    color: palette.text.secondary,
                    padding: '0.5em 1.25em',
                },
            },
        },
    };
};

const commonThemeOptions: Omit<ThemeOptions, 'palette' | 'components'> = {
    typography: typographyOptions as TypographyOptions,
    shape: { borderRadius: 2 },
    transitions: {
        easing: { sharp: 'cubic-bezier(0.4, 0, 0.6, 1)' },
        duration: { leavingScreen: 100, enteringScreen: 100 },
    },
    spacing: 4,
    zIndex: { appBar: 1100, drawer: 1000 },
};

const createAppTheme = (mode: 'light' | 'dark'): Theme =>
    createTheme({
        ...commonThemeOptions,
        palette: createPalette(mode),
        components: {
            ...typographyComponentsOverrides,
            ...createComponentStyles(mode),
        },
    });

export const lightTheme = createAppTheme('light');
export const darkTheme = createAppTheme('dark');
export { colorData, typographyOptions };
