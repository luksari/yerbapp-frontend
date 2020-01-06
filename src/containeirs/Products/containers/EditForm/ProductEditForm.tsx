import React, { FC } from 'react';
import ProductForm, { ProductFormData } from 'containeirs/Products/components/ProductForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useEditProductMutation, useGetProductQuery } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';

interface Props extends RouteComponentProps<{productId: string}> {
  handleBack: VoidFunction;
}

const ProductEditForm: FC<Props> = ({
  handleBack,
  match,
}) => {
  const { data, loading } = useGetProductQuery({
    variables: {
      productId: match.params.productId,
    },
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się pobrać danych do edycji produktu.' }),
  });

  const [editProduct, { loading: saving }] = useEditProductMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się zmodyfikować produktu.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie zmodyfikowano produkt!' }),
  });

  const handleSubmit = async (values: ProductFormData) => {
    try {
      await editProduct({
        variables: {
          productId: match.params.productId,
          product: {
            name: values.name!,
            details: values.details!,
          },
        },
      });
      handleBack();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading || !data) {
    return <Loader fullscreen />;
  }


  return (
    <ProductForm
      title="Edytuj yerba mate"
      subTitle="Zmodyfikuj istniejący produkt"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      data={data?.product}
      isLoading={loading}
      isEdit
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/products')),
});

export default connect(null, mapDispatchToProps)(ProductEditForm);
