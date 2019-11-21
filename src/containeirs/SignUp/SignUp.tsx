import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { name, reducer } from './slice';
import { signUpSaga } from './saga';
import { SignUpForm } from './components/SignUpForm';

interface Props {
  data?: any;
}

const SignUpRaw: FC<Props> = () => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: signUpSaga });
  return (
    <div>
      This is simple sign up component
      {' '}
      <span role="img" aria-label="Clown">🤡</span>
      <SignUpForm
        title="Utwórz konto"
        initialValues={{
          login: '', email: '', password: '', repeatPassword: '',
        }}
        onSubmit={(values) => console.warn(values)}
      >

      </SignUpForm>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);


export const SignUp = SignUpRaw;
