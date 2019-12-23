import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { UserData } from '../types';

interface Props {
  data: UserData[];
  onChangeRole: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const UsersTable: FC<Props> = ({
  data,
  onChangeRole,
  onEdit,
  onDelete,
}) => (
  <>
    <Table<UserData>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Adres e-mail', accessor: 'email', disableSortBy: false },
        { Header: 'Nazwa użytkownika', accessor: 'username', disableSortBy: false },
        { Header: 'Rola', accessor: 'role', disableSortBy: false },
        {
          id: 'roleChange',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Primary} variant={ButtonVariant.Narrow} onClick={() => onChangeRole(row.values.id)}>Zmień rolę</Button>
            </div>
          ),
        },
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
