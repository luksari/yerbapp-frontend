import React, { FC } from 'react';
import {
  useFormik,
  FormikConfig,
} from 'formik';
import {
  Typography, Button, Input,
} from 'antd';
import { StyledForm } from 'components/Form/styled';
import { RegisterFormData } from '../types';

interface OwnFormProps extends FormikConfig<RegisterFormData> {
  title: string;
}
export const RegisterForm: FC<OwnFormProps> = ({
  title,
  validate,
  onSubmit,
  initialValues,
}) => {
  const { handleChange, values, handleSubmit } = useFormik({
    validate,
    initialValues,
    onSubmit,
  });
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Typography.Title level={2}>
        {title}
      </Typography.Title>
      {/** @todo Extract each input to separate component that can be handled by formik
        * @todo Add error message in InputField component
        * @todo Prepare FormField to be reusable with every type of input, Select, Textarea, Checkbox, Radiogroup, TextInpuy
        */}
      <div>
        <label htmlFor="email" id="email">Adres email:</label>
        <Input type="email" name="email" onChange={handleChange} value={values.email} />
      </div>

      <div>
        <label htmlFor="username" id="username">Nazwa użytkownika:</label>
        <Input type="text" name="username" onChange={handleChange} value={values.username} />
      </div>

      <div>
        <label htmlFor="password" id="password">Hasło:</label>
        <Input type="password" name="password" onChange={handleChange} value={values.password} />
      </div>

      <div>
        <label htmlFor="password" id="repeatPassword">Powtórz hasło:</label>
        <Input type="password" name="repeatPassword" onChange={handleChange} value={values.repeatPassword} />
      </div>

      <Button type="primary" htmlType="submit">
        Zarejestruj się
      </Button>
    </StyledForm>
  );
};
