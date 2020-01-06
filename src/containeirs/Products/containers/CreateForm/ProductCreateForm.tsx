import React, { FC } from 'react';
import ProductForm, { ProductFormData } from 'containeirs/Products/components/ProductForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useAddProductMutation, GetProductsDocument } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

interface Props {
  handleBack: VoidFunction;
}

const ProductCreateForm: FC<Props> = ({
  handleBack,
}) => {
  const [addProduct, { loading: saving }] = useAddProductMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się utworzyć produktu.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie utworzono produkt!' }),
  });

  const handleSubmit = async (values: ProductFormData) => {
    try {
      await addProduct({
        variables: {
          product: {
            name: values.name!,
            manufacturerId: values.manufacturer.id!,
            typeId: values.type.id!,
            details: values.details!,
          },
        },
        refetchQueries: [{
          query: GetProductsDocument,
        }],
      });
      handleBack();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <ProductForm
      title="Dodaj produkt"
      subTitle="Dodaj nową yerba mate"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      data={{
        name: '', manufacturer: { id: '', name: '' }, type: { id: '', name: '' }, details: '',
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/products')),
});

export default connect(null, mapDispatchToProps)(ProductCreateForm);
