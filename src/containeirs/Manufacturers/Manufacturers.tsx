import React, { memo, FC } from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { TableExample } from 'components/Table';
import { Wrapper } from './styled';

interface Props {
  props: any;
}


export const ManufacturesRaw: FC<Props> = () => {
  return (
    <Wrapper>
      <Helmet title="Producenci" />
      <Title>Producenci</Title>
      <TableExample />
    </Wrapper>
  );
};

export default compose(
  memo,
)(ManufacturesRaw);
