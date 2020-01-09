/* eslint-disable no-restricted-syntax */
import React, {
  memo, FC, useEffect,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import {
  GetTypesDocument, useDeleteTypeMutation,
} from 'generated/graphql';
import { Loader } from 'components/Loader';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { usePagination } from 'hooks/usePagination';
import { useSort } from 'hooks/useSort';
import { useQuery } from '@apollo/react-hooks';
import { ActionBar } from 'components/ActionBar/ActionBar';
import { TypesTable } from './components/TypesTable';
import { Wrapper } from './styled';


interface Props {
  redirectEdit: (id: string) => void;
  redirectCreate: VoidFunction;
}

export const TypesRaw: FC<Props> = ({
  redirectCreate,
  redirectEdit,
}) => {
  const { offset, perPage, setPage } = usePagination(5, 1);
  const { order, orderBy, handleSort } = useSort();

  const { data, loading, refetch } = useQuery(
    GetTypesDocument,
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

  const [deleteType, { loading: deleting }] = useDeleteTypeMutation();

  const handleEdit = (id: string) => {
    redirectEdit(id);
  };

  const handleCreate = () => {
    redirectCreate();
  };

  const handleDelete = (id: string) => {
    deleteType({
      variables: { typeId: id },
      refetchQueries: [{
        query: GetTypesDocument,
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
      <Helmet title="Typy" />
      <Title>Typy</Title>
      <ActionBar
        redirectCreate={handleCreate}
        onPageChange={setPage}
        perPage={perPage}
        total={data.types.total}
        createText="Utwórz typ"
      />
      <TypesTable
        data={data.types.items}
        onEdit={handleEdit}
        onDelete={handleDelete}
        handleSort={handleSort}
        isLoading={loading || deleting}
      />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: string) => dispatch(push(`/admin/types/${id}`)),
  redirectCreate: () => dispatch(push('/admin/types/create')),
});

export default compose(
  memo,
  connect(null, mapDispatchToProps),
)(TypesRaw);
