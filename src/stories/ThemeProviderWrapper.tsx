import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { FC } from "react";

import theme from "../theme";

interface IThemeProviderWrapperProps {
    children: FC
}

const ThemeProviderWrapper = (props: IThemeProviderWrapperProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    {props.children}
  </ThemeProvider>
);

export default ThemeProviderWrapper;