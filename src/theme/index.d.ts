import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends MuiTheme {
    color: {
      danger: string;
      bg: string;
      bg200: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends MuiThemeOptions {
    color?: {
      danger?: string;
      bg?: string;
      bg200?: string;
    };
    typography: object
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}