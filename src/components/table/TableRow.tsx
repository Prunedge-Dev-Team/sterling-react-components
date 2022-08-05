import React from 'react'
import { TableRow, TableCell, Typography, styled } from '@mui/material';

import { CustomTableRowProps } from './table.types';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    border: `1px solid ${theme.palette.action.selected}`,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
}))

export default function CustomTableRow(props: CustomTableRowProps) {
    const { row, rowHead, onRowClick } = props;

    return (
        <>
            <StyledTableRow hover onClick={onRowClick} tabIndex={-1} >
                {Object.keys(row).map((el: string, index) => (
                    <TableCell align={rowHead?.[index].align} key={el}>
                        {typeof row?.[el] === "string" ? (
                            <Typography variant="subtitle1" color="text.secondary" noWrap>
                                {row[el]}
                            </Typography>
                        ) : row[el]}
                    </TableCell>
                ))}
            </StyledTableRow>

            <TableRow tabIndex={-1} style={{ minHeight: 20 }} >
                <TableCell colSpan={9} />
            </TableRow>
        </>
    );
}
