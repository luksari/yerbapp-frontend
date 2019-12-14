import React, { memo, FC } from 'react';
import { compose } from 'redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { useGetManufacturersQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { Wrapper } from './styled';
import { ManuFacturersTable } from './components/ManufacturersTable';

interface Props {
  props: any;
}


export const ManufacturesRaw: FC<Props> = () => {
  const { data, loading } = useGetManufacturersQuery();
  if (loading) {
    return <Loader fullscreen />;
  }
  return (
    <Wrapper>
      <Helmet title="Producenci" />
      <Title>Producenci</Title>
      <ManuFacturersTable data={data.manufacturers} />
    </Wrapper>
  );
};

export default compose(
  memo,
)(ManufacturesRaw);
