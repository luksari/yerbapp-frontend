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

  const { data, loading, refetch } = useQuery(
    GetProductsDocument,
    {
      variables: {
        offset, perPage,
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  useEffect(() => {
    refetch({
      offset, perPage,
    });
  }, []);


  const handleEdit = (id: string) => {
    redirectEdit(id);
  };

  const handleCreate = () => {
    redirectCreate();
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
      {/** To jest fajny sposób debugowania danych bez bawienia się w jakieś tabelki i kopiowania niepotrzebnego kodu
       * który trzeba pozniej wyczyścić, a to marnuje czas
       */}
      {JSON.stringify(data.products.items, null, 2)}
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
