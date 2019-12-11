import React, { FC } from 'react';
import {
  FormikConfig,
  Formik,
} from 'formik';
import { FormCard, FormTitle } from 'components/Form/styled';
import { Link } from 'react-router-dom';
import { FormField } from 'components/Form/components/FormField';
import { Button, ButtonType } from 'components/Button';
import { Input } from 'components/Input';
import { isEmpty } from 'lodash';
import { RegisterFormData } from '../types';

interface OwnFormProps extends FormikConfig<RegisterFormData> {
  title: string;
}
export const RegisterForm: FC<OwnFormProps> = ({
  title,
  ...rest
}) => {
  return (
    <Formik
      {...rest}
      validateOnMount
    >
      {({
        handleChange, handleSubmit, values, errors,
      }) => (
        <FormCard
          onSubmit={handleSubmit}
        >
          <FormTitle>{title}</FormTitle>
          <FormField
            label="Adres email"
            name="email"
            component={Input}
            value={values.email}
            fullWidth
            type="email"
            props={{
              placeholder: 'np. jan@dwa.pl',
              onChange: handleChange,
              autoComplete: 'new-email',
            }}
          />
          <FormField
            label="Nazwa użytkownika:"
            name="username"
            component={Input}
            value={values.username}
            fullWidth
            props={{
              placeholder: 'Twoja nazwa użytkownika',
              onChange: handleChange,
              autoComplete: 'new-login',
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
              placeholder: 'Wpisz hasło...',
              onChange: handleChange,
              autoComplete: 'new-password',
            }}
          />
          <FormField
            label="Powtórz hasło:"
            name="repeatPassword"
            component={Input}
            value={values.repeatPassword}
            type="password"
            fullWidth
            props={{
              placeholder: 'Powtórz swoje hasło...',
              onChange: handleChange,
              autoComplete: 'new-password',
            }}
          />
          <Button disabled={!isEmpty(errors)} themeType={ButtonType.Primary} type="submit">
            Zarejestruj się
          </Button>
          <Button themeType={ButtonType.Link} type="button">
            <Link to="/login">Masz już konto? Zaloguj się!</Link>
          </Button>
        </FormCard>
      )}
    </Formik>
  );
};
