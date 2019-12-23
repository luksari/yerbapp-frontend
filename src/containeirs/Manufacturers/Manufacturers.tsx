import React, {
  memo, FC,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { useGetManufacturersQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { usePagination } from 'hooks/usePagination';
import { Wrapper } from './styled';
import { ManuFacturersTable } from './components/ManufacturersTable';

export const ManufacturesRaw: FC = () => {
  const { offset, perPage, setPage } = usePagination(5, 1);

  const { data, loading } = useGetManufacturersQuery({ variables: { offset, perPage } });

  const handleEdit = (id: number) => {
    console.warn(`Redirect to edit form for manufacturer ${id}`);
  };

  const handleDelete = (id: number) => {
    console.warn(`Delete  manufacturer ${id}`);
  };

  if (loading) {
    return <Loader fullscreen />;
  }
  return (
    <Wrapper>
      <Helmet title="Producenci" />
      <Title>Producenci</Title>
      <Pagination
        itemCount={data.manufacturers.total}
        perPage={perPage}
        currentPage={1}
        onPageChange={(value) => setPage(value)}
      />
      <ManuFacturersTable data={data.manufacturers.items} onEdit={handleEdit} onDelete={handleDelete} />
    </Wrapper>
  );
};

export default compose(
  memo,
)(ManufacturesRaw);
