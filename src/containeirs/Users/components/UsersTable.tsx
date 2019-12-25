import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { makeSelectIsAdmin, makeSelectUserId } from 'store/auth/slice';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { UserData } from '../types';

interface Props {
  data: UserData[];
  onMakeAdmin: (id: number) => void;
  onMakeUser: (id: number) => void;
  onDelete: (id: number) => void;
  isAdmin: boolean;
  currentUserId: number;
}

export const UsersTableRaw: FC<Props> = ({
  data,
  onMakeAdmin,
  onMakeUser,
  onDelete,
  isAdmin,
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
              <Button themeType={ButtonType.Primary} variant={ButtonVariant.Narrow} disabled={isAdmin} onClick={() => onMakeAdmin(row.values.id)}>Przypisz admina</Button>
            </div>
          ),
        },
        {
          id: 'makeUser',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Warning} variant={ButtonVariant.Narrow} disabled={!isAdmin} onClick={() => onMakeUser(row.values.id)}>Odbierz admina</Button>
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
  isAdmin: makeSelectIsAdmin(),
  currentUserId: makeSelectUserId(),
});

export const UsersTable = connect(mapStateToProps)(UsersTableRaw);
