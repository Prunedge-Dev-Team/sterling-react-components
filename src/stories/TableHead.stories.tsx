import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, IconButton, Typography, Card } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';

import TableHead from '../components/Table/TableHead';
import ThemeProviderWrapper from './ThemeProviderWrapper';

export default {
    title: "SterlingCore/Table/Head",
    component: TableHead,
    argTypes: {},
} as ComponentMeta<typeof TableHead>;

const SeeAllActionButton = () => (
    <Box sx={{ textTransform: "none" }}>
        <IconButton sx={{ bgcolor: "primary.light", borderRadius: 1 }} >
            <VisibilityIcon fontSize="small" color="primary" />
        </IconButton>
        <Typography variant="body2" color="primary">See all</Typography>
    </Box>
);

const rowHead = [
    { id: 'role', label: 'Role', align: 'left' },
    { id: 'updated', label: 'Updated On', align: 'left' },
    { id: 'status', label: 'Status', align: 'left' },
    { id: 'description', label: 'Description', align: 'left' },
    { id: 'action', label: <SeeAllActionButton />, align: 'center' }
];

const Template: ComponentStory<typeof TableRow> = (args) => (
    <ThemeProviderWrapper>
        <Card>
            <TableHead {...args} />
        </Card>
    </ThemeProviderWrapper>
);

export const tableRow = Template.bind({});
tableRow.args = {
    order: "asc",
    orderBy: "name",
    headLabel: rowHead
};