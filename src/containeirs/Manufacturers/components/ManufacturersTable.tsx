import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { Manufacturer } from 'generated/graphql';

interface Props {
  data: Manufacturer[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ManuFacturersTable: FC<Props> = ({
  data,
  onEdit,
  onDelete,
}) => (
  <>
    <Table<Manufacturer>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Nazwa producenta', accessor: 'name', disableSortBy: false },
        { Header: 'Kraj producenta', accessor: 'country', disableSortBy: false },
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
      onSort={console.log}
    />
  </>
);
