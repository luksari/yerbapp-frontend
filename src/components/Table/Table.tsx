import React, { ReactNode, useMemo } from 'react';
import {
  TableContainer, HeadCell, HeadRow, SortingIcon,
} from 'components/Table/styled';
import { getMockupRows, renderMockupRows } from 'components/Table/body/mockup';
import { renderRows, renderEmptyRows } from 'components/Table/body/rows';
import {
  useTable, useSortBy, useExpanded, Column, ColumnInstance,
} from 'react-table';
import { SortOrder } from './types';

interface Props<T extends object> {
  columns: Column<T>[];
  data: T[];
  onSort?: (columnId: string, order: SortOrder) => void;
  autoSort?: boolean;
  isLoading?: boolean;
  renderSubRow?: (row: T) => ReactNode;
  className?: string;
}

/**
 * Parse columns configs and set different defaults
 */
const parseColumns = (columns: Column<any>[]) => columns.map((c) => ({
  ...c,
  disableSortBy: c.disableSortBy === undefined ? true : c.disableSortBy,
}));

const sortColumn = (column: ColumnInstance<any>): SortOrder => {
  if (!column.toggleSortBy) {
    return SortOrder.NOT_SORTED;
  }

  if (column.isSortedDesc === true) {
    column.toggleSortBy(false, false);
    return SortOrder.ASC;
  }

  column.toggleSortBy(true, false);
  return SortOrder.DESC;
};


export function Table<T extends object>({
  columns,
  data,
  className,
  renderSubRow,
  onSort,
  autoSort = false,
  isLoading = false,
}: Props<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    flatColumns,
  } = useTable<T>({
    columns: parseColumns(columns),
    data,
    manualSorting: !autoSort,
  }, useSortBy, useExpanded);

  const mockupRows = useMemo(() => getMockupRows({ columns: flatColumns.length, rows: rows.length }), [flatColumns]);

  let tableBody: ReactNode;
  if (data.length === 0) {
    tableBody = renderEmptyRows(flatColumns);
  } else if (isLoading) {
    tableBody = renderMockupRows(mockupRows);
  } else {
    tableBody = renderRows({
      rows, flatColumns, prepareRow, renderSubRow,
    });
  }


  return (
    <TableContainer {...getTableProps()} className={className}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <HeadRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <HeadCell
                {...column.getHeaderProps(column.getSortByToggleProps())}
                disableSortBy={column.disableSortBy}
                onClick={() => {
                  if (!column.disableSortBy) {
                    const order = sortColumn(column);
                    onSort(column.id, order);
                  }
                }}
                alignText={column.align || 'left'}
              >
                {column.render('Header')}
                {!column.disableSortBy && <SortingIcon sortedDesc={column.isSortedDesc} />}
              </HeadCell>
            ))}
          </HeadRow>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {tableBody}
      </tbody>
    </TableContainer>
  );
}
