import React, { memo, FC } from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { Wrapper } from './styled';
import { ManuFacturersTable } from './components/ManufacturersTable';

interface Props {
  props: any;
}


export const ManufacturesRaw: FC<Props> = () => {
  return (
    <Wrapper>
      <Helmet title="Producenci" />
      <Title>Producenci</Title>
      <ManuFacturersTable data={[]} />
    </Wrapper>
  );
};

export default compose(
  memo,
)(ManufacturesRaw);
