import { ActionBar } from 'components/ActionBar/ActionBar';
import { Loader } from 'components/Loader';
import { Title } from 'components/TitleBar';
import { push } from 'connected-react-router';
import { Wrapper } from 'containeirs/Users/styled';
import {
  GetProductsDocument, GetProductsQuery, GetProductsQueryVariables, useDeleteProductMutation,
} from 'generated/graphql';
import { usePagination } from 'hooks/usePagination';
import React, { FC, memo } from 'react';
import { useQuery } from 'react-apollo';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { notificationError, notificationSuccess } from 'components/Notification';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAdmin, makeSelectUserId } from 'store/auth/slice';
import { getAnyImportance } from 'utils/getAnyImportance';
import { size } from 'lodash';
import { DataGrid } from './components/DataGrid';
import { FilterForm } from './components/FilterForm';

interface Props {
  redirectEdit: (id: string) => void;
  redirectDetails: (id: string) => void;
  redirectCreate: VoidFunction;
  userId: string;
  isAdmin: boolean;
}

const formValues = {
  aroma: 0,
  bitterness: 0,
  energy: 0,
  price: 0,
  taste: 0,
  overall: 0,
  name: '',
};

const Explore: FC<Props> = ({
  redirectCreate,
  redirectEdit,
  redirectDetails,
  isAdmin,
  userId,
}) => {
  const { offset, perPage, setPage } = usePagination(4, 1);

  const {
    data, loading, refetch, networkStatus,
  } = useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    {
      variables: {
        offset,
        perPage,
        ...(userId && { personalizeForUser: userId }),
      },
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true,
    },
  );

  const [deleteProduct, { loading: deleting }] = useDeleteProductMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się usunąć Yerba Mate!' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie usunięto Yerba Mate!' }),
  });

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct({ variables: { productId: id } });
      refetch({
        offset,
        perPage,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (values: typeof formValues) => {
    const personalizeBy = getAnyImportance(values);

    const vars = {
      searchByName: values.name,
      offset,
      perPage,
      ...(userId && size(personalizeBy) !== 0 && { personalizeForUser: userId }),
      ...(size(personalizeBy) !== 0 && { personalizeBy }),
    };
    console.log('Run with variables', vars);
    try {
      refetch(vars);
    } catch (err) {
      console.error(err);
    }
  };

  if (!data) {
    return <Loader fullscreen />;
  }

  return (
    <Wrapper>
      <Helmet
        title="Przeglądaj produkty"
      />
      <Title>Przeglądaj produkty</Title>
      <ActionBar
        perPage={perPage}
        createText="Utwórz Yerba Mate"
        total={data.products.total}
        redirectCreate={redirectCreate}
        onPageChange={setPage}
        isLoading={loading}
        gridColumns="0.5fr 1fr 0.5fr"
      >
        <FilterForm
          formValues={formValues}
          handleSubmit={handleSubmit}
        />
      </ActionBar>
      <DataGrid
        data={data.products.items}
        isLoading={loading || deleting}
        handleEdit={redirectEdit}
        handleDelete={handleDelete}
        handleRedirectDetails={redirectDetails}
        userId={userId}
        isAdmin={isAdmin}
      />
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  isAdmin: makeSelectIsAdmin(),
  userId: makeSelectUserId(),
});
const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: string) => dispatch(push(`/products/${id}`)),
  redirectDetails: (id) => dispatch(push(`/products/details/${id}`)),
  redirectCreate: () => dispatch(push('/products/create')),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Explore);
