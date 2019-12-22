import React, {
  memo, FC, useState, useEffect,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { useGetRanksQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { Wrapper } from './styled';
import { RanksTable } from './components/RanksTable';

export const RanksRaw: FC = () => {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset((prevOffset) => (page * perPage) + prevOffset);
  }, [page]);

  const { data, loading } = useGetRanksQuery({ variables: { offset, perPage } });

  const handleEdit = (id: number) => {
    console.warn(`Redirect to edit form for ranks ${id}`);
  };

  const handleDelete = (id: number) => {
    console.warn(`Delete rank ${id}`);
  };

  if (loading) {
    return <Loader fullscreen />;
  }
  return (
    <Wrapper>
      <Helmet title="Rangi" />
      <Title>Rangi</Title>
      <Pagination
        itemCount={data.ranks.length}
        perPage={perPage}
        currentPage={1}
        onPageChange={(value) => setPage(value)}
      />
      <RanksTable data={data.ranks} onEdit={handleEdit} onDelete={handleDelete} />
    </Wrapper>
  );
};

export default compose(
  memo,
)(RanksRaw);
