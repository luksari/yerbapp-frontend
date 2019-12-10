import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { injectReducer } from 'utils/injectReducer';
import { injectSaga } from 'utils/injectSaga';
import { ErrorResponse } from 'utils/types';
import {
  name, reducer, actions, makeSelectMappedErrors,
} from './slice';
import { watchRegisterSaga } from './saga';
import { RegisterForm } from './components/RegisterForm';
import { RegisterFormData } from './types';


interface Props<T = RegisterFormData> {
  setSignUpBegin: (values: T) => void;
  formErrors: ErrorResponse<T>;
}
const initialValues: RegisterFormData = {
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};


const RegisterRaw: FC<Props> = ({
  setSignUpBegin,
  formErrors,
}) => {
  console.warn(formErrors);
  return (
    <div>
      <RegisterForm
        title="Utwórz konto"
        initialValues={initialValues}
        onSubmit={(values) => setSignUpBegin(values)}
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
