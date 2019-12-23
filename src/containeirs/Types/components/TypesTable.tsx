import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { TypeModel } from '../TypesData';

interface Props {
  data: TypeModel[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TypesTable: FC<Props> = ({
  data,
  onEdit,
  onDelete,
}) => (
  <>
    <Table<TypeModel>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Nazwa typu', accessor: 'name', disableSortBy: false },
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
