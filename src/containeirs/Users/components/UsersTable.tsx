import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { TableProps } from 'utils/types';
import { connect } from 'react-redux';
import { makeSelectUserId } from 'store/auth/slice';
import { createStructuredSelector } from 'reselect';
import { isAdmin } from 'utils/isAdmin';
import { userRoleMap } from 'utils/roleMap';
import { UserAvatar } from 'components/UserAvatar';
import { UserData } from '../types';
import { HorizontalContainer } from '../styled';


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
        {
          Header: 'Id',
          accessor: 'id',
          disableSortBy: false,
        },
        {
          Header: 'Użytkownik',
          accessor: 'username',
          disableSortBy: false,
          Cell: ({ row: { values: { username, avatarUrl } } }) => (
            <HorizontalContainer>
              <UserAvatar username={username} avatarUrl={avatarUrl} />
              <p>{username}</p>
            </HorizontalContainer>
          ),
        },
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
          align: 'center',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Primary} disabled={isAdmin(row.values.role)} onClick={() => onMakeAdmin(row.values.id)}>Przypisz administratora</Button>
            </div>
          ),
        },
        {
          id: 'makeUser',
          align: 'center',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Warning} disabled={!isAdmin(row.values.role)} onClick={() => onMakeUser(row.values.id)}>Odbierz administatora</Button>
            </div>
          ),
        },
        {
          id: 'remove',
          align: 'center',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Danger} disabled={row.values.id === currentUserId} onClick={() => onDelete(row.values.id)}>Usuń użytkownika</Button>
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
