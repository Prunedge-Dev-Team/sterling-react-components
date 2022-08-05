import { Table, TableBody, TableContainer } from '@mui/material';

import CustomTableHead from './TableHead';
import CustomTableRow from './TableRow';
import { CustomTableProps } from './table.types';
import EmptyTable from './EmptyTable';
import LoadingTable from './LoadingTable';

export default function CustomTable({ rowData, rowHead, isLoading, isEmpty }: CustomTableProps) {
    const handleRowClick = (row: any) => null;

    return (
        <TableContainer>
            <Table size="small">
                <CustomTableHead order="asc" orderBy="name" headLabel={rowHead} />

                <TableBody>
                    {rowData.map((row: any, index: number) => (
                        <CustomTableRow key={index} row={row} onRowClick={() => handleRowClick(row)} rowHead={rowHead} />
                    ))}
                    {isEmpty && <EmptyTable />}
                    {isLoading && <LoadingTable />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
