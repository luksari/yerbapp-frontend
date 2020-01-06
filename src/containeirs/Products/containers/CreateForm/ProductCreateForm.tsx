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

  /**
    * Tutaj, zarówno jak i w ProductEditForm należy pobrać dane dotyczące producentów i typów
    * query do pobrania listy typów i producentów już są, ewentualnie możesz stworzyć nowe które pobierają tylko id i name
    */

  /**
    * Ja już to zrobię jak tylko załatwisz pobieranie tych danych
    * Tu będzie mapowanie obiektów typu { id: string, name: string } -> { value: string, label: string }
    */

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
      /** Te dane muszą mieć strukturę manufacturer: { value: '', label: '' } itd. */
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
