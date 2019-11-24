import React, { FC } from 'react';
import {
  useFormik,
  FormikConfig,
} from 'formik';
import {
  Typography, Form, Button, Input,
} from 'antd';
import { StyledForm } from './styled';

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
    <StyledForm onSubmit={handleSubmit}>
      <Typography.Title level={2}>
        {title}
      </Typography.Title>
      {/** @todo Extract each input to separate component that can be handled by formik
        * @todo Add error message in InputField component
        * @todo Prepare FormField to be reusable with every type of input, Select, Textarea, Checkbox, Radiogroup, TextInpuy
        */}
      <div>
        <label htmlFor="email" id="email">Email</label>
        <Input type="email" name="email" onChange={handleChange} value={values.email} />
      </div>

      <div>
        <label htmlFor="login" id="login">Login</label>
        <Input type="text" name="login" onChange={handleChange} value={values.login} />
      </div>

      <div>
        <label htmlFor="password" id="password">Password</label>
        <Input type="password" name="password" onChange={handleChange} value={values.password} />
      </div>

      <div>
        <label htmlFor="password" id="repeatPassword">Repeat Password</label>
        <Input type="password" name="repeatPassword" onChange={handleChange} value={values.repeatPassword} />
      </div>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </StyledForm>
  );
};
