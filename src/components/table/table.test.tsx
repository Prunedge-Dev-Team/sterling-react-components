import "@testing-library/jest-dom/extend-expect"
import { render } from '@testing-library/react';

import Table from './Table';

const rowHead = [
    { id: 'role', label: 'Role', align: 'left' },
    { id: 'updated', label: 'Updated On', align: 'left' },
    { id: 'description', label: 'Description', align: 'left' },
];

const rowData = [
    {
        role: "Admin",
        updated: "Today",
        description: "Hello",
    },
    {
        role: "Admin",
        updated: "Today",
        description: "Hello",
    }
];

describe("Table component", () => {
    const { getAllByRole } = render(<Table
        rowHead={rowHead}
        rowData={rowData} />
    );
    const rows = getAllByRole('row'); // tr
    const header = getAllByRole('rowgroup'); // thead and tbody
    const ths = getAllByRole('columnheader'); // th

    test('renders expected number of rows', () => {
        // + 2 to cater for the rows in the table head component
        expect(rows.length).toBe((rowData.length * 2) + 2);
    });

    test('renders expected number of tbody', () => {
        // + 2 to cater for the rows in the table head component
        expect(header.length).toBe(2);
    });

    test('renders expected number of ths in table', () => {
        // Subtract 1 because an additional th was added for length
        expect(ths.length - 1).toBe(rowHead.length);
    });
})
