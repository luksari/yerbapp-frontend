import { Form } from 'components/Form';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { Textarea } from 'components/Textarea';
import { UploadImage } from 'components/UploadImage';
import React, { FC } from 'react';
import { FormProps } from 'utils/types';
import { Manufacturer, ProductType } from 'generated/graphql';
import { ProductData } from '../types';

export type ProductFormData = Partial<ProductData>;
type ProductFormProps = FormProps<ProductFormData> & { manufacturers: Manufacturer[]; types: ProductType[]}
const validate = (values: ProductFormData) => {
  const errors = {} as Record<keyof ProductData, string>;

  if (!values.name) {
    errors.name = 'Pole wymagane';
  } else if (values.name.length > 100) {
    errors.name = 'Długość nie powinna być dłuższa niż 100 znaków';
  }
  if (!values.details) {
    errors.details = 'Pole wymagane';
  } else if (values.details.length > 1000) {
    errors.details = 'Długość nie powinna być dłuższa niż 1000 znaków';
  }

  return errors;
};

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
  isEdit,
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
      validate={validate}
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
          isDisabled: isEdit,
          getOptionLabel: (option) => option.name,
          getOptionValue: (option) => option.id,
        }}
      />

      <FormField
        name="type"
        component={Select}
        label="Typ:"
        props={{
          placeholder: 'Wskaż typ yerba mate...',
          options: types,
          isDisabled: isEdit,
          isClearable: true,
          getOptionLabel: (option) => option.name,
          getOptionValue: (option) => option.id,
        }}
      />
      <FormField
        name="details"
        component={Textarea}
        label="Opis:"
        props={{
          placeholder: 'Scharakteryzuj produkt...',
        }}
      />
      <UploadImage name="photoUrl" label="Zdjęcie Yerba Mate:" />
    </Form>
  );
};
