import React, {
  memo, FC,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { useGetTypesQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { usePagination } from 'hooks/usePagination';
import { Wrapper } from './styled';
import { TypesTable } from './components/TypesTable';

export const TypesRaw: FC = () => {
  const { offset, perPage, setPage } = usePagination(5, 1);

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
        itemCount={data.types.total}
        perPage={perPage}
        currentPage={1}
        onPageChange={(value) => setPage(value)}
      />
      <TypesTable data={data.types.items} onEdit={handleEdit} onDelete={handleDelete} />
    </Wrapper>
  );
};

export default compose(
  memo,
)(TypesRaw);
