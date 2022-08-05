import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DehazeIcon from '@mui/icons-material/Dehaze';

import TableRow from '../components/table/TableRow';
import Status from '../components/Status';
import MoreMenu from '../components/moreMenu/MoreMenu';
import ThemeProviderWrapper from './ThemeProviderWrapper';

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

const rowData = {
    role: "Admin",
    updated: "9am today",
    status: <Status text="Pending" bgcolor='warning.main' />,
    description: "Admin was added by superadmin",
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