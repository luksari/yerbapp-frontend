import React, { FC } from 'react';
import {
  FormikConfig,
} from 'formik';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { Form } from 'components/Form';
import { LoginFormData } from '../types';

interface OwnFormProps extends FormikConfig<LoginFormData> {
  title: string;
  handleClose: VoidFunction;
}
export const LoginForm: FC<OwnFormProps> = ({
  title,
  onSubmit,
  initialValues,
  validate,
  handleClose,
}) => {
  return (
    <Form
      title={title}
      subTitle=""
      initialValues={initialValues}
      handleClose={handleClose}
      validate={validate}
      onSubmit={onSubmit}
      isLoading={false}
      isSaving={false}
    >
      <FormField
        label="Nazwa użytkownika:"
        name="username"
        component={Input}
        props={{
          placeholder: 'Twoja nazwa użytkownika',
        }}
      />
      <FormField
        label="Hasło:"
        name="password"
        component={Input}
        type="password"
        props={{
          placeholder: 'Twoja nazwa użytkownika',
        }}
      />
    </Form>
  );
};
