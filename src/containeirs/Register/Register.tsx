import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { name, reducer, actions } from './slice';
import { watchRegisterSaga } from './saga';
import { RegisterForm } from './components/RegisterForm';
import { RegisterFormData } from './types';


interface Props {
  setSignUpBegin: (values: RegisterFormData) => void;
}

const RegisterRaw: FC<Props> = ({
  setSignUpBegin,
}) => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: watchRegisterSaga });
  return (
    <div>
      This is simple sign up component
      {' '}
      <span role="img" aria-label="Clown">🤡</span>
      <RegisterForm
        title="Utwórz konto"
        initialValues={{
          login: '', email: '', password: '', repeatPassword: '',
        }}
        onSubmit={(values) => setSignUpBegin(values)}
      >
      </RegisterForm>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({

});
const mapDispatchToProps = (dispatch) => ({
  setSignUpBegin: (payload: RegisterFormData) => dispatch(actions.setSignUpPending(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const RegisterContainer = compose(
  withConnect,
)(RegisterRaw);
