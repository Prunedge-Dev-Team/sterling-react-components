import React from 'react';
import { Box, Typography } from '@mui/material';

interface IStatusProps {
    text: string
    bgcolor: string
}

function Status(props: IStatusProps) {
    const { text, bgcolor } = props

    return (
        <Box display="flex" alignItems="center">
            <Box component="span" sx={{ bgcolor, width: 13, height: 10, mr: 1 }} />
            <Typography variant="subtitle1" color="text.secondary" noWrap>
                {text}
            </Typography>
        </Box>
    )
}

export default Status;
