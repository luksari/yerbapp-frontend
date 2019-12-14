import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { Wrapper } from './styled';

interface Props {
  props: any;
}


export const AdminPanelRaw: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Helmet title="Panel administratora" />
      <Title>Panel administratora</Title>
    </Wrapper>
  );
};

export default compose(
  memo,
)(AdminPanelRaw);
