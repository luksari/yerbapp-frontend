import React, { FC } from 'react';
import { FormProps } from 'utils/types';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormField } from 'components/Form/components/FormField';
import { TypeModel } from '../TypesData';

export type TypeFormData = Partial<TypeModel>

const validate = (values: TypeModel) => {
  const errors = {} as Record<keyof TypeModel, string>;

  if (!values.name) {
    errors.name = 'Pole wymagane';
  } else if (values.name.length > 100) {
    errors.name = 'Długość nie powinna być dłuższa niż 100 znaków';
  }

  return errors;
};
const TypeForm: FC<FormProps<TypeFormData>> = ({
  data,
  title,
  subTitle,
  handleBack,
  onSubmit,
  isLoading,
  isSaving,
}) => {
  return (
    <Form<TypeFormData>
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
        label="Nazwa typu:"
        props={{
          placeholder: 'Wpisz nazwę typu Yerba Mate...',
        }}
      />
    </Form>
  );
};

export default TypeForm;
