import { createTheme } from '@mui/material/styles';

import "./index.d";
import Table from './overrides/Table';
import Button from './overrides/Button';
import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette,
  typography,
});

theme.components = {
  ...Button(theme),
  ...Table(theme),
};

export default theme;