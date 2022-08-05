import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DehazeIcon from '@mui/icons-material/Dehaze';

import TableRow from '../components/table/TableRow';
import Status from '../components/Status';
import MoreMenu from '../components/moreMenu/MoreMenu';
import ThemeProviderWrapper from './ThemeProviderWrapper';
import { roleManagementMockData } from './mock/tableRows';

export default {
    title: "SterlingCore/Table/Row",
    component: TableRow,
    argTypes: {},
} as ComponentMeta<typeof TableRow>;

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

const data = roleManagementMockData[0];
const rowData = {
    role: data.role,
    updated: data.updated,
    status: <Status text={data.status} bgcolor='warning.main' />,
    description: data.description,
    action: <MoreMenu options={menuOptions} />
};

const Template: ComponentStory<typeof TableRow> = (args) => (
    <ThemeProviderWrapper>
        <TableRow {...args} />
    </ThemeProviderWrapper>
);

export const tableRow = Template.bind({});
tableRow.args = {
    onRowClick: () => null,
    row: rowData
};