import React, {
  memo, FC,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { GetRanksDocument } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { usePagination } from 'hooks/usePagination';
import { useCachedQuery } from 'hooks/useCachedQuery';
import { useSort } from 'hooks/useSort';
import { Wrapper } from './styled';
import { RanksTable } from './components/RanksTable';

export const RanksRaw: FC = () => {
  const { offset, perPage, setPage } = usePagination(5, 1);
  const { order, orderBy, handleSort } = useSort();

  const { data, loading } = useCachedQuery(
    GetRanksDocument,
    {
      variables: {
        offset, perPage, order, orderBy,
      },
    },
  );

  const handleEdit = (id: number) => {
    console.warn(`Redirect to edit form for ranks ${id}`);
  };

  const handleDelete = (id: number) => {
    console.warn(`Delete  rank ${id}`);
  };

  if (!data) {
    return <Loader fullscreen />;
  }
  return (
    <Wrapper>
      <Helmet title="Rangi" />
      <Title>Rangi</Title>
      <Pagination
        itemCount={data.ranks.total}
        perPage={perPage}
        currentPage={1}
        onPageChange={(value) => setPage(value)}
      />
      <RanksTable
        data={data.ranks.items}
        onEdit={handleEdit}
        onDelete={handleDelete}
        handleSort={handleSort}
        isLoading={loading}
      />
    </Wrapper>
  );
};

export default compose(
  memo,
)(RanksRaw);
