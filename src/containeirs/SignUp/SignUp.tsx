import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from '@reduxjs/toolkit';
import { injectReducer, injectSaga } from '../../utils';
import { name, reducer } from './slice';
import { signUpSaga } from './saga';

interface Props {
  data?: any;
}

const SignUpRaw: FC<Props> = () => {
  return (
    <div>
      This is simple sign up component
      {' '}
      <span role="img" aria-label="Clown">🤡</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = (dispatch) => ({

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: name, reducer });
const withSaga = injectSaga({ key: name, saga: signUpSaga });

export const SignUp = compose<FC<Props>>(
  withReducer,
  withSaga,
  withConnect,
)(SignUpRaw);
