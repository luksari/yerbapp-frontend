import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { injectReducer } from 'utils/injectReducer';
import { injectSaga } from 'utils/injectSaga';
import {
  name, reducer, actions, makeSelectMappedErrors,
} from './slice';
import { watchRegisterSaga } from './saga';
import { RegisterForm } from './components/RegisterForm';
import { RegisterFormData } from './types';


interface Props<T = RegisterFormData> {
  setSignUpBegin: (values: T) => void;
}

const initialValues: RegisterFormData = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const validate = (values: RegisterFormData) => {
  const errors = {} as Record<keyof RegisterFormData, any>;
  if (!values.email) {
    errors.email = 'Pole wymagane';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Nieprawidłowy adres email!';
  }

  if (!values.password) {
    errors.password = 'Pole wymagane';
  } else if (values.password.length < 8) {
    errors.password = 'Hasło musi mieć minimalnie 8 znaków';
  }

  if (values.password !== values.repeatPassword) {
    errors.password = 'Pola nie są takie same';
    errors.repeatPassword = 'Pola nie są takie same';
  }

  if (!values.username) {
    errors.username = 'Pole wymagane';
  }

  return errors;
};


const RegisterRaw: FC<Props> = ({
  setSignUpBegin,
}) => {
  return (
    <div>
      <RegisterForm
        title="Utwórz konto"
        initialValues={initialValues}
        onSubmit={(values) => setSignUpBegin(values)}
        validate={validate}
      >
      </RegisterForm>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  formErrors: makeSelectMappedErrors(),
});


const mapDispatchToProps = (dispatch) => ({
  setSignUpBegin: (payload: RegisterFormData) => dispatch(actions.setRegisterPending(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: name, reducer });
const withSaga = injectSaga({ key: name, saga: watchRegisterSaga });
export default compose(
  withSaga,
  withReducer,
  withConnect,
)(RegisterRaw);
