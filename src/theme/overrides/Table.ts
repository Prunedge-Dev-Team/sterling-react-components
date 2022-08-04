import { Theme } from '@mui/material/styles';

export default function Table(theme: Theme) {
    return {
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: theme.palette.action.selected,
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: "none"
                },
                head: {
                    ...theme.typography.subtitle2,
                    borderBottom: "1px solid #ddd",
                    color: '#AAA',
                    '&:first-of-type': {
                        paddingLeft: theme.spacing(3),
                    },
                    '&:last-of-type': {
                        paddingRight: theme.spacing(3),
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.background.paper,
                },
                body: {
                    '&:first-of-type': {
                        paddingLeft: theme.spacing(3)
                    },
                    '&:last-of-type': {
                        paddingRight: theme.spacing(3)
                    }
                }
            }
        }
    };
}
