import React, { FC } from 'react';
import { FormProps } from 'utils/types';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormField } from 'components/Form/components/FormField';
import { Select } from 'components/Select';
import { ProductData } from '../types';

export type ProductFormData = Partial<ProductData>

const ProductForm: FC<FormProps<ProductFormData>> = ({
  data,
  title,
  subTitle,
  handleBack,
  onSubmit,
  isLoading,
  isSaving,
}) => {
  return (
    <Form<ProductFormData>
      title={title}
      subTitle={subTitle}
      initialValues={data}
      isLoading={isLoading}
      isSaving={isSaving}
      handleClose={handleBack}
      onSubmit={onSubmit}
    >
      <FormField
        name="name"
        component={Input}
        label="Nazwa produktu:"
        props={{
          placeholder: 'Wpisz nazwę yerba mate...',
        }}
      />
      <FormField
        name="manufacturerId"
        component={Select}
        label="ID producenta:"
        props={{
          placeholder: 'Pole zostanie uzupełnione automatycznie...',
          isDisabled: true,
        }}
      />
      <FormField
        name="manufacturer"
        component={Select}
        label="Producent:"
        props={{
          placeholder: 'Wskaż producenta...',
        }}
      />
      <FormField
        name="typeId"
        component={Select}
        label="ID typu:"
        props={{
          placeholder: 'Pole zostanie uzupełnione automatycznie...',
          isDisabled: true,
        }}
      />
      <FormField
        name="type"
        component={Select}
        label="Typ:"
        props={{
          placeholder: 'Wskaż typ yerba mate...',
        }}
      />
      <FormField
        name="details"
        component={Input}
        label="Opis:"
        props={{
          placeholder: 'Scharakteryzuj produkt (pole nieobowiązkowe)...',
        }}
      />
    </Form>
  );
};

export default ProductForm;
