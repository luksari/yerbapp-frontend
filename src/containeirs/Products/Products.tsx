/* eslint-disable no-restricted-syntax */
import React, {
  memo, FC, useEffect,
} from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import {
  GetProductsDocument, useDeleteProductMutation,
} from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Pagination } from 'components/Pagination';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { usePagination } from 'hooks/usePagination';
import { useSort } from 'hooks/useSort';
import { useQuery } from '@apollo/react-hooks';
import { Icon } from 'antd';
import { ProductsTable } from './components/ProductsTable';
import { Wrapper, ActionWrapper } from './styled';


interface Props {
  redirectEdit: (id: string) => void;
  redirectCreate: VoidFunction;
}

export const ProductsRaw: FC<Props> = ({
  redirectCreate,
  redirectEdit,
}) => {
  const { offset, perPage, setPage } = usePagination(5, 1);
  const { order, orderBy, handleSort } = useSort();

  const { data, loading, refetch } = useQuery(
    GetProductsDocument,
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

  const [deleteProduct, { loading: deleting }] = useDeleteProductMutation();

  const handleEdit = (id: string) => {
    redirectEdit(id);
  };

  const handleCreate = () => {
    redirectCreate();
  };

  const handleDelete = (id: string) => {
    deleteProduct({
      variables: { productId: id },
      refetchQueries: [{
        query: GetProductsDocument,
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
      <Helmet title="Produkty" />
      <Title>Produkty</Title>
      <ActionWrapper>
        <Pagination
          itemCount={data.products.total}
          perPage={perPage}
          currentPage={1}
          onPageChange={(value) => setPage(value)}
        />
        <Button
          variant={ButtonVariant.Normal}
          themeType={ButtonType.Primary}
          onClick={handleCreate}
          icon={<Icon type="plus" />}
        >
        Utwórz produkt
        </Button>
      </ActionWrapper>
      <ProductsTable
        data={data.products.items}
        onEdit={handleEdit}
        onDelete={handleDelete}
        handleSort={handleSort}
        isLoading={loading || deleting}
      />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectEdit: (id: string) => dispatch(push(`/products/${id}`)),
  redirectCreate: () => dispatch(push('/products/create')),
});

export default compose(
  memo,
  connect(null, mapDispatchToProps),
)(ProductsRaw);
