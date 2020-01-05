import React, { FC, memo } from 'react';
import { Wrapper } from 'containeirs/Users/styled';
import { Title } from 'components/TitleBar';
import Helmet from 'react-helmet';
import { ActionBar } from 'components/ActionBar/ActionBar';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { compose } from 'redux';
import { usePagination } from 'hooks/usePagination';
import { useQuery } from 'react-apollo';
import { GET_PRODUCTS } from 'queries/ProductQueries';
import { Loader } from 'components/Loader';
import {
  GetProductsDocument, GetProductsQueryHookResult, GetProductsQueryVariables, GetProductsQuery,
} from 'generated/graphql';
import { Card } from 'components/Card';
import { FilterForm } from './components/FilterForm';
import { DataGrid } from './styled';

interface Props {
  redirectEdit: (id: string) => void;
  redirectCreate: VoidFunction;
}


const Explore: FC<Props> = ({
  redirectCreate,
}) => {
  const { offset, perPage, setPage } = usePagination(4, 1);

  const { data, loading, refetch } = useQuery<GetProductsQuery, GetProductsQueryVariables>(
    GetProductsDocument,
    {
      variables: {
        offset, perPage,
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  const formValues = {
    aromaImportance: 0,
    bitternessImportance: 0,
    energyImportance: 0,
    priceImportance: 0,
    tasteImportance: 0,
    overallImportance: 0,
    name: '',
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
      >
        <FilterForm
          formValues={formValues}
          handleSubmit={console.log}
        />
      </ActionBar>
      <DataGrid>
        {data.products.items.map((product) => (
          <Card
            name={product.name}
            manufacturer={product.manufacturer.name}
            country={product.manufacturer.country}
            key={product.id}
            details={product.details}
            type={product.type.name}
          />
        ))}
      </DataGrid>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: string) => dispatch(push(`/explore/${id}`)),
  redirectCreate: () => dispatch(push('/explore/create')),
});

export default compose(
  memo,
  connect(null, mapDispatchToProps),
)(Explore);
