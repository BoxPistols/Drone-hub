// カラートークンの中央管理システム
export const tokenColors = {
    light: {
        primary: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#9c27b0',
            light: '#ba68c8',
            dark: '#7b1fa2',
            contrastText: '#ffffff',
        },
        // 他の色定義
    },
    dark: {
        primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#42a5f5',
            contrastText: '#000000',
        },
        secondary: {
            main: '#ce93d8',
            light: '#f3e5f5',
            dark: '#ab47bc',
            contrastText: '#000000',
        },
        // 他の色定義
    },
};

// CSSカスタムプロパティの生成
export const generateCssVariables = (mode: 'light' | 'dark') => {
    const tokens = mode === 'light' ? tokenColors.light : tokenColors.dark;
    return {
        '--color-primary': tokens.primary.main,
        '--color-primary-light': tokens.primary.light,
        '--color-primary-dark': tokens.primary.dark,
        // 他の変数
    };
};
