import React, {
  memo, FC, useState, useEffect,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { useGetUsersQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { Wrapper } from './styled';
import { UsersTable } from './components/UsersTable';

export const UsersRaw: FC = () => {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset((prevOffset) => (page * perPage) + prevOffset);
  }, [page]);

  const { data, loading } = useGetUsersQuery({ variables: { offset, perPage } });

  const handleMakeAdmin = (id: number) => {
    console.warn(`Grant user ${id} admin privileges`);
  };

  const handleMakeUser = (id: number) => {
    console.warn(`Normal user role for user ${id}`);
  };

  const handleDelete = (id: number) => {
    console.warn(`Delete  user ${id}`);
  };

  return (
    <Wrapper>
      <Helmet title="Użytkownicy" />
      <Title>Użytkownicy</Title>
      {
        data && (
          <>
            <Pagination
              itemCount={data.users.length}
              perPage={perPage}
              currentPage={1}
              onPageChange={(value) => setPage(value)}
            />
            <UsersTable data={data.users} onMakeAdmin={handleMakeAdmin} onDelete={handleDelete} onMakeUser={handleMakeUser} />
          </>
        )
      }
    </Wrapper>
  );
};

export default compose(
  memo,
)(UsersRaw);
