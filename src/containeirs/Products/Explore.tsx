import { ActionBar } from 'components/ActionBar/ActionBar';
import { Loader } from 'components/Loader';
import { Title } from 'components/TitleBar';
import { push } from 'connected-react-router';
import { Wrapper } from 'containeirs/Users/styled';
import { GetProductsDocument, GetProductsQuery, GetProductsQueryVariables } from 'generated/graphql';
import { usePagination } from 'hooks/usePagination';
import React, { FC, memo } from 'react';
import { useQuery } from 'react-apollo';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DataGrid } from './components/DataGrid';
import { FilterForm } from './components/FilterForm';

interface Props {
  redirectEdit: (id: string) => void;
  redirectCreate: VoidFunction;
}

const formValues = {
  aromaImportance: 0,
  bitternessImportance: 0,
  energyImportance: 0,
  priceImportance: 0,
  tasteImportance: 0,
  overallImportance: 0,
  name: '',
};

const Explore: FC<Props> = memo(({
  redirectCreate,
}) => {
  const { offset, perPage, setPage } = usePagination(4, 1);

  const { data, loading, refetch } = useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    {
      variables: {
        offset, perPage,
      },
      fetchPolicy: 'network-only',
    },
  );

  if (!data) {
    return <Loader fullscreen />;
  }

  console.log('Products', data.products.items);


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
          handleSubmit={console.log}
        />
      </ActionBar>
      <DataGrid data={data.products.items} isLoading={loading} />
    </Wrapper>
  );
});

const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: string) => dispatch(push(`/products/${id}`)),
  redirectCreate: () => dispatch(push('/products/create')),
});

export default compose(
  memo,
  connect(null, mapDispatchToProps),
)(Explore);
