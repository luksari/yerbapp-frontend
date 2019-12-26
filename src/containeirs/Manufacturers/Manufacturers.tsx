import React, {
  memo, FC,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { GetManufacturersDocument } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Button, ButtonType } from 'components/Button';
import { usePagination } from 'hooks/usePagination';
import { useSort } from 'hooks/useSort';
import { useCachedQuery } from 'hooks/useCachedQuery';
import { ManuFacturersTable } from './components/ManufacturersTable';
import { Wrapper, ActionWrapper } from './styled';


interface Props {
  redirectEdit: (id: number) => void;
  redirectCreate: VoidFunction;
}

export const ManufacturesRaw: FC<Props> = ({
  redirectCreate,
  redirectEdit,
}) => {
  const { offset, perPage, setPage } = usePagination(5, 1);
  const { order, orderBy, handleSort } = useSort();

  const { data, loading } = useCachedQuery(
    GetManufacturersDocument,
    {
      variables: {
        offset, perPage, order, orderBy,
      },
    },
  );

  const handleEdit = (id: number) => {
    redirectEdit(id);
  };

  const handleCreate = () => {
    redirectCreate();
  };

  const handleDelete = (id: number) => {
    console.warn(`Delete  manufacturer ${id}`);
  };

  if (!data) {
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
          itemCount={data.manufacturers.total}
          perPage={perPage}
          currentPage={1}
          onPageChange={(value) => setPage(value)}
        />
      </ActionWrapper>
      <ManuFacturersTable
        data={data.manufacturers.items}
        onEdit={handleEdit}
        onDelete={handleDelete}
        handleSort={handleSort}
        isLoading={loading}
      />
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
