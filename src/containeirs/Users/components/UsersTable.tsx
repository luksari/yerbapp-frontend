import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { makeSelectUserId } from 'store/auth/slice';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { isAdmin } from 'utils/isAdmin';
import { UserData } from '../types';

interface Props {
  data: UserData[];
  onMakeAdmin: (id: number) => void;
  onMakeUser: (id: number) => void;
  onDelete: (id: number) => void;
  currentUserId: number;
}

export const UsersTableRaw: FC<Props> = ({
  data,
  onMakeAdmin,
  onMakeUser,
  onDelete,
  currentUserId,
}) => (
  <>
    <Table<UserData>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Adres e-mail', accessor: 'email', disableSortBy: false },
        { Header: 'Nazwa użytkownika', accessor: 'username', disableSortBy: false },
        { Header: 'Rola', accessor: 'role', disableSortBy: false },
        {
          id: 'makeAdmin',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Primary} variant={ButtonVariant.Narrow} disabled={isAdmin(row.values.role)} onClick={() => onMakeAdmin(row.values.id)}>Przypisz administratora</Button>
            </div>
          ),
        },
        {
          id: 'makeUser',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Warning} variant={ButtonVariant.Narrow} disabled={!isAdmin(row.values.role)} onClick={() => onMakeUser(row.values.id)}>Odbierz administatora</Button>
            </div>
          ),
        },
        {
          id: 'remove',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Danger} variant={ButtonVariant.Narrow} disabled={row.values.id === currentUserId} onClick={() => onDelete(row.values.id)}>Usuń użytkownika</Button>
            </div>
          ),
        },
      ]}
      data={data}
      onSort={console.log}
    />
  </>
);

const mapStateToProps = createStructuredSelector({
  currentUserId: makeSelectUserId(),
});

export const UsersTable = connect(mapStateToProps)(UsersTableRaw);
