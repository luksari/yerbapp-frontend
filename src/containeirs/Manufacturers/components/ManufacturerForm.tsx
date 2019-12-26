import React, { FC } from 'react';
import { FormProps } from 'utils/types';
import { Manufacturer } from 'generated/graphql';
import { Form } from 'components/Form';

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
    <Form
      title={title}
      subTitle={subTitle}
      initialValues={data}
      isLoading={isLoading}
      isSaving={isSaving}
      handleClose={handleBack}
      onSubmit={onSubmit}
    >

    </Form>
  );
};

export default ManufacturerForm;
