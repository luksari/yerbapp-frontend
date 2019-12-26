import React, { FC } from 'react';
import { FormProps } from 'utils/types';
import { Manufacturer } from 'generated/graphql';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormField } from 'components/Form/components/FormField';

export type ManufacturerFormData = Partial<Manufacturer>

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
    </Form>
  );
};

export default ManufacturerForm;
