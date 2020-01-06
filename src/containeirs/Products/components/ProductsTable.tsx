import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { TableProps } from 'utils/types';
import { ProductData } from '../types';

export const ProductsTable: FC<TableProps<ProductData>> = ({
  data,
  onEdit,
  onDelete,
  handleSort,
  isLoading,
}) => (
  <>
    <Table<ProductData>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Nazwa produktu', accessor: 'name', disableSortBy: false },
        { Header: 'Nazwa producenta', accessor: 'manufacturer.name', disableSortBy: false },
        { Header: 'Typ', accessor: 'type.name', disableSortBy: false },
        { Header: 'Opis', accessor: 'details', disableSortBy: false },
        {
          id: 'edit',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Primary} variant={ButtonVariant.Narrow} onClick={() => onEdit(row.values.id)}>Edytuj</Button>
            </div>
          ),
        },
        {
          id: 'remove',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Danger} variant={ButtonVariant.Narrow} onClick={() => onDelete(row.values.id)}>Usuń</Button>
            </div>
          ),
        },
      ]}
      data={data}
      isLoading={isLoading}
      onSort={handleSort}
    />
  </>
);
