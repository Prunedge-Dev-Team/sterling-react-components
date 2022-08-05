import React from 'react';

export interface RowDataProps {
    id: string
    label: string | React.ReactNode
    align?: any
    sortDirection?: any
    width?: number
}

export interface CustomTableProps {
    rowData: Array<object>
    rowHead: RowDataProps[]
    isLoading?: boolean
    isEmpty?: boolean
}

export interface CustomTableHeadProps {
    order?: any
    orderBy?: string
    headLabel: RowDataProps[]
    sx?: object
}

export interface CustomTableRowProps {
    onRowClick?: () => any
    row: any
    rowHead?: RowDataProps[]
}