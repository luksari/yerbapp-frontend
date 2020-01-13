import React, { FC } from 'react';
import { FormProps } from 'utils/types';
import { Manufacturer } from 'generated/graphql';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormField } from 'components/Form/components/FormField';
import { UploadImage } from 'components/UploadImage';

export type ManufacturerFormData = Partial<Manufacturer>

const validate = (values: ManufacturerFormData) => {
  const errors = {} as Record<keyof ManufacturerFormData, string>;

  if (!values.name) {
    errors.name = 'Pole wymagane';
  } else if (values.name.length > 100) {
    errors.name = 'Długość nie powinna być dłuższa niż 100 znaków';
  }
  if (!values.country) {
    errors.country = 'Pole wymagane';
  }
  return errors;
};

const ManufacturerForm: FC<FormProps<ManufacturerFormData>> = ({
  data,
  title,
  subTitle,
  handleBack,
  onSubmit,
  isLoading,
  isSaving,
}) => {
  return (
    <Form<ManufacturerFormData>
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
        label="Nazwa producenta:"
        props={{
          placeholder: 'Wpisz nazwę producenta Yerba Mate...',
        }}
      />
      <FormField
        name="country"
        component={Input}
        label="Kraj producenta"
        props={{
          placeholder: 'Wpisz kraj producenta...',
        }}
      />
      <UploadImage name="photoUrl" label="Logo producenta:" />
    </Form>
  );
};

export default ManufacturerForm;
