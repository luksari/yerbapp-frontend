import React, {
  memo, FC, useState, useEffect,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { useGetTypesQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { Wrapper } from './styled';
import { TypesTable } from './components/TypesTable';

export const TypesRaw: FC = () => {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset((prevOffset) => (page * perPage) + prevOffset);
  }, [page]);

  const { data, loading } = useGetTypesQuery({ variables: { offset, perPage } });

  const handleEdit = (id: number) => {
    console.warn(`Redirect to edit form for types ${id}`);
  };

  const handleDelete = (id: number) => {
    console.warn(`Delete  type ${id}`);
  };

  if (loading) {
    return <Loader fullscreen />;
  }
  return (
    <Wrapper>
      <Helmet title="Typy" />
      <Title>Typy</Title>
      <Pagination
        itemCount={data.types.length}
        perPage={perPage}
        currentPage={1}
        onPageChange={(value) => setPage(value)}
      />
      <TypesTable data={data.types} onEdit={handleEdit} onDelete={handleDelete} />
    </Wrapper>
  );
};

export default compose(
  memo,
)(TypesRaw);
