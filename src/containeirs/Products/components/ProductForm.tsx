import React, { FC } from 'react';
import { FormProps, SelectableItem } from 'utils/types';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormField } from 'components/Form/components/FormField';
import { Select } from 'components/Select';
import { ProductData } from '../types';

export type ProductFormData = Partial<ProductData>;
type ProductFormProps = FormProps<ProductFormData> & { manufacturers: SelectableItem[]; types: SelectableItem[]}

export const ProductForm: FC<ProductFormProps> = ({
  data,
  title,
  subTitle,
  handleBack,
  onSubmit,
  isLoading,
  isSaving,
  manufacturers,
  types,
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
        name="manufacturer"
        component={Select}
        label="Producent:"
        props={{
          placeholder: 'Wskaż producenta...',
          options: manufacturers,
        }}
      />

      <FormField
        name="type"
        component={Select}
        label="Typ:"
        props={{
          placeholder: 'Wskaż typ yerba mate...',
          options: types,
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
