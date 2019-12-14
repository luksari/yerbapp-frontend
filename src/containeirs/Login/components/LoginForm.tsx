import React, { FC } from 'react';
import {
  FormikConfig, Formik,
} from 'formik';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { FormCard, FormTitle } from 'components/Form/styled';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { LoginFormData } from '../types';

interface OwnFormProps extends FormikConfig<LoginFormData> {
  title: string;
  isPending: boolean;
}
export const LoginForm: FC<OwnFormProps> = ({
  onSubmit,
  initialValues,
  title,
  isPending,
}) => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({
        handleChange, handleSubmit, values, isSubmitting,
      }) => (
        <FormCard
          onSubmit={handleSubmit}
        >
          <FormTitle>{title}</FormTitle>
          <FormField
            label="Nazwa użytkownika:"
            name="username"
            component={Input}
            value={values.username}
            fullWidth
            props={{
              placeholder: 'Twoja nazwa użytkownika',
              onChange: handleChange,
              autoComplete: 'username',
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
              autoComplete: 'password',
            }}
          />
          <Button
            themeType={ButtonType.Primary}
            type="submit"
            disabled={isSubmitting || isPending}
          >
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
