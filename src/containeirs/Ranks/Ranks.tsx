/* eslint-disable no-restricted-syntax */
import React, {
  memo, FC, useEffect,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import {
  GetRanksDocument, useDeleteRankMutation,
} from 'generated/graphql';
import { Loader } from 'components/Loader';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { usePagination } from 'hooks/usePagination';
import { useSort } from 'hooks/useSort';
import { useQuery } from '@apollo/react-hooks';
import { ActionBar } from 'components/ActionBar/ActionBar';
import { notificationError, notificationSuccess } from 'components/Notification';
import { RanksTable } from './components/RanksTable';
import { Wrapper } from './styled';


interface Props {
  redirectEdit: (id: string) => void;
  redirectCreate: VoidFunction;
}

export const RanksRaw: FC<Props> = ({
  redirectCreate,
  redirectEdit,
}) => {
  const { offset, perPage, setPage } = usePagination(5, 1);
  const { order, orderBy, handleSort } = useSort();

  const { data, loading, refetch } = useQuery(
    GetRanksDocument,
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

  const [deleteRank, { loading: deleting }] = useDeleteRankMutation(
    {
      onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się rangi!' }),
      onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie usunięto rangę!' }),
    },
  );

  const handleEdit = (id: string) => {
    redirectEdit(id);
  };

  const handleCreate = () => {
    redirectCreate();
  };

  const handleDelete = (id: string) => {
    deleteRank({
      variables: { rankId: id },
      refetchQueries: [{
        query: GetRanksDocument,
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
      <Helmet title="Rangi" />
      <Title>Rangi</Title>
      <ActionBar
        redirectCreate={handleCreate}
        onPageChange={setPage}
        perPage={perPage}
        total={data.ranks.total}
        createText="Utwórz rangę"
      />
      <RanksTable
        data={data.ranks.items}
        onEdit={handleEdit}
        onDelete={handleDelete}
        handleSort={handleSort}
        isLoading={loading || deleting}
      />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: string) => dispatch(push(`/admin/ranks/${id}`)),
  redirectCreate: () => dispatch(push('/admin/ranks/create')),
});

export default compose(
  memo,
  connect(null, mapDispatchToProps),
)(RanksRaw);
