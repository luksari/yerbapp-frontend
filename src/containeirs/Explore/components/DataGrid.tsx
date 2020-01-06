import React, { FC } from 'react';
import { Product } from 'generated/graphql';
import { Card } from 'components/Card';
import { Loader } from 'components/Loader';
import { CardGrid } from '../styled';

interface Props {
  data: Partial<Product>[];
  isLoading?: boolean;
}

export const DataGrid: FC<Props> = ({
  data,
  isLoading,
}) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <CardGrid>
      {data.map((product) => (
        <Card
          name={product.name}
          manufacturer={product.manufacturer.name}
          country={product.manufacturer.country}
          key={product.id}
          details={product.details}
          type={product.type.name}
        />
      ))}
    </CardGrid>
  );
};