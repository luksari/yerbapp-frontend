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

  const [assignAdmin, { loading: assigning }] = useAssignAdminMutation();
  const [revokeAdmin, { loading: revoking }] = useRevokeAdminMutation();
  const [deleteUser, { loading: deleting }] = useDeleteUserMutation();

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
