import { TableRow, TableCell, TableHead, useTheme } from '@mui/material';

import { CustomTableHeadProps } from './table.types';

export default function CustomTableHead(props: CustomTableHeadProps) {
    const { order, orderBy, headLabel, sx } = props;
    const theme = useTheme();

    return (
        <TableHead sx={sx}>
            <TableRow>
                {headLabel?.map((headCell: any) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align || 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ width: headCell.width, minWidth: headCell.minWidth, textTransform: "uppercase" }}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
            <TableRow tabIndex={-1} sx={{ height: theme.spacing(4) }} >
                <TableCell colSpan={9} sx={{ border: "none" }} />
            </TableRow>
        </TableHead>
    );
}