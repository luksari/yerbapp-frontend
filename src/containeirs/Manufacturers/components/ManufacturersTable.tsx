import React from 'react';
import { Pagination } from 'components/Pagination';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { ManufacturerModel } from '../types';

interface Props {
  data: ManufacturerModel[];
}

export const ManuFacturersTable = ({
  data,
}) => (
  <>
    <Pagination
      itemCount={11}
      perPage={5}
      currentPage={0 /** component not controlled */}
      onPageChange={console.log}
    />
    <Table<ManufacturerModel>
      columns={[
        {
          Header: 'ID',
          accessor: 'id',
          Cell: ({ cell: { value }, row: { values } }) => values.id + value, // lastName + firstName
          disableSortBy: false,
        },
        { Header: 'Nazwa producenta', accessor: 'name', disableSortBy: false },
        { Header: 'Kraj producenta', accessor: 'country', disableSortBy: false },
        {
          id: 'edit',
          Cell: ({ row }) => (
            <div>
              {row.values.x}
              <Button themeType={ButtonType.Primary} variant={ButtonVariant.Narrow}>Edytuj</Button>
            </div>
          ),
        },
        {
          id: 'remove',
          Cell: ({ row }) => (
            <div>
              {row.values.x}
              <Button themeType={ButtonType.Danger} variant={ButtonVariant.Narrow}>Usuń</Button>
            </div>
          ),
        },
      ]}
      data={data}
      onSort={console.log}
    />
  </>
);
