import React, { FC, useMemo } from 'react';
import { ProductFormData, ProductForm } from 'containeirs/Products/components/ProductForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import {
  useAddProductMutation, GetProductsDocument, useGetManufacturersQuery, useGetTypesQuery,
} from 'generated/graphql';
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
  const { data: manufactuersData, loading: loadingManufacturers } = useGetManufacturersQuery({ variables: { offset: 0, perPage: 500 } });
  const { data: typesData, loading: loadingTypes } = useGetTypesQuery({ variables: { offset: 0, perPage: 500 } });
  console.log(manufactuersData);
  const isLoading = useMemo(() => loadingManufacturers || loadingTypes || saving, [loadingManufacturers, loadingTypes, saving]);

  const manufacturers = useMemo(() => manufactuersData?.manufacturers?.items?.map(({ id, name }) => ({ value: id, label: name })), [manufactuersData]);
  const types = useMemo(() => typesData?.types?.items?.map(({ id, name }) => ({ value: id, label: name })), [typesData]);

  const handleSubmit = async (values: ProductFormData) => {
    try {
      await addProduct({
        variables: {
          product: {
            name: values.name!,
            manufacturerId: values.manufacturer.value!,
            typeId: values.type.value!,
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
      manufacturers={manufacturers}
      types={types}
      isLoading={isLoading}
      data={{
        name: '', manufacturer: { value: '', label: '' }, type: { value: '', label: '' }, details: '',
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/products')),
});

export default connect(null, mapDispatchToProps)(ProductCreateForm);
