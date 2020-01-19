/* eslint-disable no-restricted-syntax */
import React, {
  memo, FC, useEffect,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import {
  GetManufacturersDocument, useDeleteManufacturerMutation,
} from 'generated/graphql';
import { Loader } from 'components/Loader';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { usePagination } from 'hooks/usePagination';
import { useSort } from 'hooks/useSort';
import { useQuery } from '@apollo/react-hooks';
import { ActionBar } from 'components/ActionBar/ActionBar';
import { notificationSuccess, notificationError } from 'components/Notification';
import { ManuFacturersTable } from './components/ManufacturersTable';
import { Wrapper } from './styled';


interface Props {
  redirectEdit: (id: string) => void;
  redirectCreate: VoidFunction;
}

export const ManufacturesRaw: FC<Props> = ({
  redirectCreate,
  redirectEdit,
}) => {
  const { offset, perPage, setPage } = usePagination(5, 1);
  const { order, orderBy, handleSort } = useSort();

  const { data, loading, refetch } = useQuery(
    GetManufacturersDocument,
    {
      variables: {
        offset, perPage, order, orderBy,
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  useEffect(() => {
    refetch({
      offset, perPage, order, orderBy,
    });
  }, []);

  const [deleteManufacturer, { loading: deleting }] = useDeleteManufacturerMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się usunąć producenta yerba mate.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie usunięto producenta yerba mate!' }),
  });

  const handleEdit = (id: string) => {
    redirectEdit(id);
  };

  const handleCreate = () => {
    redirectCreate();
  };

  const handleDelete = (id: string) => {
    deleteManufacturer({
      variables: { manufacturerId: id },
      refetchQueries: [{
        query: GetManufacturersDocument,
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
      <Helmet title="Producenci" />
      <Title>Producenci</Title>
      <ActionBar
        redirectCreate={handleCreate}
        onPageChange={setPage}
        perPage={perPage}
        total={data.manufacturers.total}
        createText="Utwórz producenta"
      />
      <ManuFacturersTable
        data={data.manufacturers.items}
        onEdit={handleEdit}
        onDelete={handleDelete}
        handleSort={handleSort}
        isLoading={loading || deleting}
      />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: string) => dispatch(push(`/admin/manufacturers/${id}`)),
  redirectCreate: () => dispatch(push('/admin/manufacturers/create')),
});

export default compose(
  memo,
  connect(null, mapDispatchToProps),
)(ManufacturesRaw);
