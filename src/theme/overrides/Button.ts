import { grey } from '@mui/material/colors';
import { Theme } from '@mui/material/styles';

import { pxToRem } from "../util";

export default function Button(theme: Theme) {
    return {
        MuiButton: {
            defaultProps: {
                disableTouchRipple: true
            },
            styleOverrides: {
                root: {
                    'fontWeight': 700,
                    'borderRadius': '4px',
                    'boxShadow': 'none',
                    '&:hover': {
                        boxShadow: 'none'
                    }
                },
                sizeLarge: {
                    fontSize: pxToRem(16),
                    padding: theme.spacing(1, 2),
                    height: 44
                },
                containedPrimary: {
                    '&:hover': {
                        backgroundColor: theme.palette.primary.dark
                    },
                    '&:active': {
                        backgroundColor: theme.palette.primary.dark
                    }
                },
                containedInherit: {
                    'backgroundColor': "#AAA",
                    'color': '#6B6C7E',
                    '&:hover': {
                        backgroundColor: '#B3CDFF'
                    },
                    '&:active': {
                        backgroundColor: '#F0F5FF'
                    }
                },
                outlinedInherit: {
                    'border': `1px solid ${grey[500]}`,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                outlined: {
                    'background': 'white !important',
                },
                textInherit: {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                disabled: {
                    background: theme.palette.background.default,
                    color: '#A7A9BC'
                }
            }
        }
    };
}
