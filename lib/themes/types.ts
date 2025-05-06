export interface ColorToken {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
}

export interface TextColors {
    primary: string;
    secondary: string;
    disabled: string;
    white: string;
}

export interface BackgroundColors {
    default: string;
    paper: string;
    // 他の背景色
}

export interface ThemeTokens {
    primary: ColorToken;
    secondary: ColorToken;
    error: ColorToken;
    warning: ColorToken;
    info: ColorToken;
    success: ColorToken;
    text: TextColors;
    background: BackgroundColors;
    divider: string;
    // 他のトークン
}

// 既存のコードとの後方互換性を保つための型
export type TokenColorData = {
    light: ThemeTokens;
    dark: ThemeTokens;
};
