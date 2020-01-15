import { notificationError, notificationSuccess } from 'components/Notification';
import { push } from 'connected-react-router';
import { ProductForm, ProductFormData } from 'containeirs/Products/components/ProductForm';
import {
  GetProductsDocument, useAddProductMutation, useGetManufacturersQuery, useGetTypesQuery,
} from 'generated/graphql';
import React, { FC, useMemo } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'components/Loader';

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

  const { data: manufacturersData, loading: loadingManufacturers } = useGetManufacturersQuery({ variables: { offset: 0, perPage: 500 } });
  const { data: typesData, loading: loadingTypes } = useGetTypesQuery({ variables: { offset: 0, perPage: 500 } });
  const isLoading = useMemo(() => loadingManufacturers || loadingTypes || saving, [loadingManufacturers, loadingTypes, saving]);

  const handleSubmit = async (values: ProductFormData) => {
    try {
      await addProduct({
        variables: {
          product: {
            name: values.name!,
            manufacturerId: values.manufacturer.id,
            typeId: values.type.id,
            details: values.details,
            photoUrl: values.photoUrl,
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

  if (isLoading) {
    return <Loader fullscreen />;
  }


  return (
    <ProductForm
      title="Dodaj produkt"
      subTitle="Dodaj nową yerba mate"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      manufacturers={manufacturersData.manufacturers.items}
      types={typesData.types.items}
      isLoading={isLoading}
      data={{
        name: '', manufacturer: null, type: null, details: '', photoUrl: '',
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/products')),
});

export default connect(null, mapDispatchToProps)(ProductCreateForm);
