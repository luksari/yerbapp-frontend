import React, { memo } from 'react';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { compose } from 'redux';
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
