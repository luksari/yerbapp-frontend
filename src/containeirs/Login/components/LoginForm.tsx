import React, { FC } from 'react';
import {
  FormikConfig, Formik,
} from 'formik';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { StyledForm, FormCard } from 'components/Form/styled';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { LoginFormData } from '../types';

interface OwnFormProps extends FormikConfig<LoginFormData> {
  title: string;
}
export const LoginForm: FC<OwnFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({ handleChange, handleSubmit, values }) => (
        <FormCard
          onSubmit={handleSubmit}
        >
          <FormField
            label="Nazwa użytkownika:"
            name="username"
            component={Input}
            value={values.username}
            fullWidth
            props={{
              placeholder: 'Twoja nazwa użytkownika',
              onChange: handleChange,
            }}
          />
          <FormField
            label="Hasło:"
            name="password"
            component={Input}
            value={values.password}
            type="password"
            fullWidth
            props={{
              placeholder: 'Twoja nazwa użytkownika',
              onChange: handleChange,
            }}
          />
          <Button themeType={ButtonType.Primary} type="submit">
        Zaloguj się
          </Button>
          <Button themeType={ButtonType.Link} type="button">
            <Link to="/register">Nie masz konta? Zarejestruj się!</Link>
          </Button>
        </FormCard>
      )}
    </Formik>
  );
};
