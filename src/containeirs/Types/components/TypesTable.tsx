import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { TableProps } from 'utils/types';
import { TypeModel } from '../TypesData';


export const TypesTable: FC<TableProps<TypeModel>> = ({
  data,
  onEdit,
  onDelete,
  handleSort,
  isLoading,
}) => (
  <>
    <Table<TypeModel>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Nazwa typu', accessor: 'name', disableSortBy: false },
        {
          id: 'edit',
          align: 'center',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Primary} onClick={() => onEdit(row.values.id)}>Edytuj</Button>
            </div>
          ),
        },
        {
          id: 'remove',
          align: 'center',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Danger} onClick={() => onDelete(row.values.id)}>Usuń</Button>
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
