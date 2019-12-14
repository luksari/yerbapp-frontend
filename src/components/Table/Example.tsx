import React from 'react';
import { Table } from 'components/Table/Table';
import { Pagination } from 'components/Pagination';

const renderSubRow = (row: any) => (
  <Table
    columns={[
      { Header: 'Test header', accessor: 'test' },
      { Header: 'Test2 header', accessor: 'test2' },
    ]}
    data={row.subData}
  />
);

export const TableExample = () => (
  <>
    <Pagination
      itemCount={11}
      perPage={5}
      currentPage={0 /** component not controlled */}
      onPageChange={console.log}
    />
    <Table<any>
      columns={[
        {
          Header: 'Full name',
          accessor: 'firstName',
          Cell: ({ cell: { value }, row: { values } }) => values.lastName + value, // lastName + firstName
          disableSortBy: false,
        },
        { Header: 'Last name', accessor: 'lastName', disableSortBy: false },
        {
          Header: 'Details',
          id: 'expander',
          Cell: ({ row }) => (
            <button type="button" onClick={() => row.toggleExpanded()}>Toggle</button>
          ),
        },
      ]}
      data={[
        {
          firstName: 'Mat',
          lastName: 'Qwe',
          subData: [
            { test: 'test', test2: 'test2' }, { test: 'test', test2: 'test2' },
          ],
        },
        {
          firstName: 'Asd',
          lastName: 'Pol',
          subData: [
            { test: 'test', test2: 'test2' },
          ],
        },
      ]}
      onSort={console.log}
      renderSubRow={renderSubRow}
    />
  </>
);
