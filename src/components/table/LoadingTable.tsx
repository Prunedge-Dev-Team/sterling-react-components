import { TableRow, TableCell, Box, Typography, CircularProgress } from '@mui/material';

export default function LoadingTable() {
    return (
        <TableRow>
            <TableCell colSpan={9}>
                <Box minHeight={320} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <CircularProgress />
                    <Typography sx={{mt: 1}}>Fetching data...</Typography>
                </Box>
            </TableCell>
        </TableRow>
    );
}
