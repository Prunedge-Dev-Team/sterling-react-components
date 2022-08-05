import { TableRow, TableCell, Box, Typography } from '@mui/material';

export default function EmptyTable() {
  return (
    <TableRow>
      <TableCell colSpan={9}>
        <Box minHeight={320} display="flex" alignItems="center" justifyContent="center">
          <Typography>No data yet</Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
}
