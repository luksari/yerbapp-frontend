import React, { FC } from 'react';
import {
  useFormik,
  FormikProps,
  FormikConfig,
} from 'formik';
import { Typography } from 'antd';

interface SignUpFormData {
  login: string;
  email: string;
  password: string;
  repeatPassword: string;
}
interface OwnFormProps extends FormikConfig<SignUpFormData> {
  title: string;
}
export const SignUpForm: FC<OwnFormProps> = ({
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
    <form onSubmit={handleSubmit}>
      <Typography.Title level={2}>
        {title}
      </Typography.Title>
      <label htmlFor="email" id="email">Email</label>
      <input type="email" name="email" onChange={handleChange} value={values.email} />

      <label htmlFor="login" id="login">Login</label>
      <input type="text" name="login" onChange={handleChange} value={values.login} />

      <label htmlFor="password" id="password">Password</label>
      <input type="password" name="password" onChange={handleChange} value={values.password} />

      <label htmlFor="password" id="repeatPassword">Repeat Password</label>
      <input type="password" name="repeatPassword" onChange={handleChange} value={values.repeatPassword} />

      <button type="submit">
        Submit
      </button>
    </form>
  );
};
