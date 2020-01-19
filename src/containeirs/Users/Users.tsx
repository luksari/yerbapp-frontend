import React, {
  memo, FC, useMemo,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import {
  GetUsersDocument, useAssignAdminMutation, useRevokeAdminMutation, useDeleteUserMutation,
} from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { usePagination } from 'hooks/usePagination';
import { useSort } from 'hooks/useSort';
import { useQuery } from 'react-apollo';
import { notificationError, notificationSuccess } from 'components/Notification';
import { Wrapper } from './styled';
import { UsersTable } from './components/UsersTable';

export const UsersRaw: FC = () => {
  const { offset, perPage, setPage } = usePagination(5, 1);
  const { order, orderBy, handleSort } = useSort();

  const { data, loading } = useQuery(
    GetUsersDocument,
    {
      variables: {
        offset, perPage, order, orderBy,
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  const [assignAdmin, { loading: assigning }] = useAssignAdminMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się przypisać administratora!' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie przypisano administratora!' }),
  });
  const [revokeAdmin, { loading: revoking }] = useRevokeAdminMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się odebrać roli administratora!' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie odebrano role administratora!' }),
  });
  const [deleteUser, { loading: deleting }] = useDeleteUserMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się usunąć użytkownika!' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie usunięto użytkownika!' }),
  });

  const isLoading = useMemo(() => loading || assigning || revoking || deleting, [loading, assigning, revoking, deleting]);

  const handleMakeAdmin = (id: string) => {
    assignAdmin({
      variables: { userId: id },
      refetchQueries: [{
        query: GetUsersDocument,
        variables: {
          offset, perPage, order, orderBy,
        },
      }],
    });
  };

  const handleMakeUser = (id: string) => {
    revokeAdmin({
      variables: { userId: id },
      refetchQueries: [{
        query: GetUsersDocument,
        variables: {
          offset, perPage, order, orderBy,
        },
      }],
    });
  };

  const handleDelete = (id: string) => {
    deleteUser({
      variables: { userId: id },
      refetchQueries: [{
        query: GetUsersDocument,
        variables: {
          offset, perPage, order, orderBy,
        },
      }],
    });
  };

  if (!data) {
    return <Loader fullscreen />;
  }

  return (
    <Wrapper>
      <Helmet title="Użytkownicy" />
      <Title>Użytkownicy</Title>
      <Pagination
        itemCount={data?.users?.total}
        perPage={perPage}
        currentPage={1}
        onPageChange={setPage}
      />
      <UsersTable
        data={data?.users?.items}
        handleSort={handleSort}
        onMakeAdmin={handleMakeAdmin}
        onDelete={handleDelete}
        onMakeUser={handleMakeUser}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};

export default compose(
  memo,
)(UsersRaw);
