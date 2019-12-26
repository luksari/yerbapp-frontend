import React, {
  memo, FC,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { GetUsersDocument } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { usePagination } from 'hooks/usePagination';
import { useSort } from 'hooks/useSort';
import { useCachedQuery } from 'hooks/useCachedQuery';
import { Wrapper } from './styled';
import { UsersTable } from './components/UsersTable';

export const UsersRaw: FC = () => {
  const { offset, perPage, setPage } = usePagination(5, 1);
  const { order, orderBy, handleSort } = useSort();

  const { data, loading } = useCachedQuery(
    GetUsersDocument,
    {
      variables: {
        offset, perPage, order, orderBy,
      },
    },
  );

  const handleMakeAdmin = (id: number) => {
    console.warn(`Grant user ${id} admin privileges`);
  };

  const handleMakeUser = (id: number) => {
    console.warn(`Normal user role for user ${id}`);
  };

  const handleDelete = (id: number) => {
    console.warn(`Delete  user ${id}`);
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
        isLoading={loading}
      />
    </Wrapper>
  );
};

export default compose(
  memo,
)(UsersRaw);
