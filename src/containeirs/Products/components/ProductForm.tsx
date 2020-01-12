import { Form } from 'components/Form';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { Textarea } from 'components/Textarea';
import { UploadImage } from 'components/UploadImage';
import React, { FC } from 'react';
import { FormProps, SelectableItem } from 'utils/types';
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
          isClearable: true,
        }}
      />

      <FormField
        name="type"
        component={Select}
        label="Typ:"
        props={{
          placeholder: 'Wskaż typ yerba mate...',
          options: types,
          isClearable: true,
        }}
      />
      <FormField
        name="details"
        component={Textarea}
        label="Opis:"
        props={{
          placeholder: 'Scharakteryzuj produkt (pole nieobowiązkowe)...',
        }}
      />
      <UploadImage name="image" label="Zdjęcie Yerba Mate:" />
    </Form>
  );
};
