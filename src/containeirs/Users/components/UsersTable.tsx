import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { TableProps } from 'utils/types';
import { connect } from 'react-redux';
import { makeSelectUserId } from 'store/auth/slice';
import { createStructuredSelector } from 'reselect';
import { isAdmin } from 'utils/isAdmin';
import { userRoleMap } from 'utils/roleMap';
import { UserData } from '../types';

type UserTableProps = TableProps<UserData> & {
  onMakeAdmin: (id: string) => void;
  onMakeUser: (id: string) => void;
  currentUserId: number;
}

const UsersTableRaw: FC<UserTableProps> = ({
  data,
  onMakeAdmin,
  onMakeUser,
  onDelete,
  handleSort,
  isLoading,
  currentUserId,
}) => (
  <>
    <Table<UserData>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Adres e-mail', accessor: 'email', disableSortBy: false },
        { Header: 'Nazwa użytkownika', accessor: 'username', disableSortBy: false },
        {
          Header: 'Rola',
          accessor: 'role',
          disableSortBy: false,
          Cell: ({ row }) => (
            <div>
              {userRoleMap[row.values.role]}
            </div>
          ),
        },
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
      onSort={handleSort}
      isLoading={isLoading}
    />
  </>
);

const mapStateToProps = createStructuredSelector({
  currentUserId: makeSelectUserId(),
});

export const UsersTable = connect(mapStateToProps)(UsersTableRaw);
