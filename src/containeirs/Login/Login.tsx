import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { name, reducer, actions } from './slice';
import { watchLoginSaga } from './saga';
import { LoginForm } from './components/LoginForm';
import { LoginFormData } from './types';


interface Props {
  setLoginBegin: (values: LoginFormData) => void;
}

const RegisterRaw: FC<Props> = ({
  setLoginBegin,
}) => {
  useInjectReducer({ key: name, reducer });
  useInjectSaga({ key: name, saga: watchLoginSaga });
  return (
    <div>
      This is simple login component
      {' '}
      <span role="img" aria-label="Clown">🤡</span>
      <LoginForm
        title="Zaloguj się"
        initialValues={{
          login: '', password: '',
        }}
        onSubmit={(values) => setLoginBegin(values)}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({

});
const mapDispatchToProps = (dispatch) => ({
  setSignUpBegin: (payload: LoginFormData) => dispatch(actions.setLoginBegin(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const RegisterContainer = compose(
  withConnect,
)(RegisterRaw);