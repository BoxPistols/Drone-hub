// types/boxpistols-react-map-vite.d.ts
/*
declare module '@boxpistols/react-map-vite' {
    import { SelectProps, SelectChangeEvent } from '@mui/material';

    type CustomSelectProps = Omit<SelectProps, 'label' | 'multiple' | 'value' | 'onChange'> & {
        label: string;
        tooltip?: string;
        helperText?: string;
        options: Array<{
            value: string | number;
            label: string;
        }>;
        placeholder?: string;
        multiple?: boolean;
        value?: string | string[] | number | number[];
        onChange?: (
            event: SelectChangeEvent<unknown>,
            value: string | string[] | number | number[],
        ) => void;
        required?: boolean;
        error?: boolean;
        size?: 'small' | 'medium';
        fullWidth?: boolean;
        id?: string;
        name?: string;
        inputProps?: SelectProps['inputProps'];
        clearable?: boolean;
    };

    export const CustomSelect: (props: CustomSelectProps) => JSX.Element;
    export default CustomSelect;

}

types/boxpistols-react-map-vite.d.ts
declare module '@boxpistols/react-map-vite/theme' {
    import { Theme } from '@mui/material/styles';

    export const theme: Theme;
    export const darkTheme: Theme;
    export const colorData: any;
    export const typographyOptions: any;
    export const typographyComponentsOverrides: any;
}

declare module '@boxpistols/react-map-vite' {
    // コンポーネントの型定義
    export const CustomSelect: any;
    export const CustomTextField: any;
    export const Map3D: any;
    export const Mapbox: any;
    export const MapLibre: any;
    export const ThemeProvide: any;
    // その他必要なコンポーネント...
}
*/
