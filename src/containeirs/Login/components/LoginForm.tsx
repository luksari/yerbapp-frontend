import React, { FC } from 'react';
import {
  useFormik,
  FormikConfig,
} from 'formik';
import {
  Typography, Button, Input,
} from 'antd';
import { StyledForm } from 'components/Form/styled';
import { Link } from 'react-router-dom';
import { LoginFormData } from '../types';

interface OwnFormProps extends FormikConfig<LoginFormData> {
  title: string;
}
export const LoginForm: FC<OwnFormProps> = ({
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
        <label htmlFor="username" id="username">Nazwa użytkownika:</label>
        <Input type="username" name="username" onChange={handleChange} value={values.username} />
      </div>

      <div>
        <label htmlFor="password" id="password">Hasło:</label>
        <Input type="password" name="password" onChange={handleChange} value={values.password} />
      </div>

      <Button type="primary" htmlType="submit">
        Zaloguj się
      </Button>
      <Button type="link" htmlType="button">
        <Link to="/register">Nie masz konta? Zarejestruj się!</Link>
      </Button>
    </StyledForm>
  );
};
