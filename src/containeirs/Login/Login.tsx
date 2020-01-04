import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { injectReducer } from 'utils/injectReducer';
import { injectSaga } from 'utils/injectSaga';
import {
  name, reducer, actions, makeSelectIsPending,
} from './slice';
import { watchLoginSaga } from './saga';
import { LoginForm } from './components/LoginForm';
import { LoginFormData } from './types';


interface Props {
  setLoginBegin: (values: LoginFormData) => void;
  isPending?: boolean;
}

const LoginRaw: FC<Props> = ({
  setLoginBegin,
  isPending,
}) => {
  return (
    <div>
      <LoginForm
        title="Zaloguj się"
        initialValues={{
          username: '', password: '',
        }}
        onSubmit={(values) => setLoginBegin(values)}
        isPending={isPending}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isPending: makeSelectIsPending(),
});
const mapDispatchToProps = (dispatch) => ({
  setLoginBegin: (payload: LoginFormData) => dispatch(actions.setLoginPending(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: name, reducer });
const withSaga = injectSaga({ key: name, saga: watchLoginSaga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginRaw);
