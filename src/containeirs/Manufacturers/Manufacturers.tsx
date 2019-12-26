import React, {
  memo, FC, useState, useEffect,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { useGetManufacturersQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Button, ButtonType } from 'components/Button';
import { Wrapper, ActionWrapper } from './styled';
import { ManuFacturersTable } from './components/ManufacturersTable';

interface Props {
  redirectEdit: (id: number) => void;
  redirectCreate: VoidFunction;
}

export const ManufacturesRaw: FC<Props> = ({
  redirectCreate,
  redirectEdit,
}) => {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset((prevOffset) => (page * perPage) + prevOffset);
  }, [page]);

  const { data, loading } = useGetManufacturersQuery({ variables: { offset, perPage } });

  const handleEdit = (id: number) => {
    redirectEdit(id);
  };

  const handleCreate = () => {
    redirectCreate();
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
      <ActionWrapper>
        <Button
          themeType={ButtonType.Primary}
          onClick={handleCreate}
        >
        Utwórz producenta
        </Button>
        <Pagination
          itemCount={data.manufacturers.length}
          perPage={perPage}
          currentPage={1}
          onPageChange={(value) => setPage(value)}
        />
      </ActionWrapper>
      <ManuFacturersTable data={data.manufacturers} onEdit={handleEdit} onDelete={handleDelete} />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: number) => dispatch(push(`/admin/manufacturers/${id}`)),
  redirectCreate: () => dispatch(push('/admin/manufacturers/create')),
});

export default compose(
  memo,
  connect(null, mapDispatchToProps),
)(ManufacturesRaw);
