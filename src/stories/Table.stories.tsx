import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Box, IconButton, Typography, Card } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';

import Table from '../components/Table/Table';
import Status from '../components/Status';
import MoreMenu from '../components/MoreMenu/MoreMenu';
import ThemeProviderWrapper from './ThemeProviderWrapper';
import { roleManagementMockData } from './mock/tableRows';

export default {
    title: "SterlingCore/Table/Table",
    component: Table,
    argTypes: {},
} as ComponentMeta<typeof Table>;

const SeeAllActionButton = () => (
    <Box sx={{ textTransform: "none" }}>
        <IconButton sx={{ bgcolor: "primary.light", borderRadius: 1 }} >
            <VisibilityIcon fontSize="small" color="primary" />
        </IconButton>
        <Typography variant="body2" color="primary">See all</Typography>
    </Box>
);

const menuOptions = [
    {
        label: 'Home',
        icon: <DehazeIcon fontSize="small" />,
        onOptionClick: () => null
    },
    {
        label: 'Services',
        icon: <DehazeIcon fontSize="small" />,
        onOptionClick: () => null
    },
];

const rowData = roleManagementMockData.map((data: any) => ({
    role: data.role,
    updated: data.updated,
    status: <Status text={data.status} bgcolor='warning.main' />,
    description: data.description,
    action: <MoreMenu options={menuOptions} />
}));

const rowHead = [
    { id: 'role', label: 'Role', align: 'left' },
    { id: 'updated', label: 'Updated On', align: 'left' },
    { id: 'status', label: 'Status', align: 'left' },
    { id: 'description', label: 'Description', align: 'left' },
    { id: 'action', label: <SeeAllActionButton />, align: 'center' }
];

const Template: ComponentStory<typeof Table> = (args) => (
    <ThemeProviderWrapper>
        <Table {...args} />
    </ThemeProviderWrapper>
);

export const tableWithData = Template.bind({});
tableWithData.args = {
    rowHead: rowHead,
    rowData: rowData,
    isLoading: false,
    isEmpty: false
};

export const emptyTable = Template.bind({});
emptyTable.args = {
    rowHead: rowHead,
    rowData: [],
    isLoading: false,
    isEmpty: true
};

export const loadingTable = Template.bind({});
loadingTable.args = {
    rowHead: rowHead,
    rowData: [],
    isLoading: true,
    isEmpty: false
};