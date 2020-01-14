import React, { FC, memo } from 'react';
import { Product } from 'generated/graphql';
import { Card } from 'components/Card';
import { Loader } from 'components/Loader';
import { CardGrid } from '../styled';

interface Props {
  data: Partial<Product>[];
  isLoading?: boolean;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  userId: string;
  isAdmin: boolean;
}

export const DataGrid: FC<Props> = ({
  data,
  isLoading,
  handleDelete,
  handleEdit,
  isAdmin,
  userId,
}) => {
  return (
    <CardGrid>
      {isLoading || !data
        ? <Loader />
        : data.map((product) => (
          <Card
            id={product.id}
            name={product.name}
            manufacturer={product.manufacturer.name}
            country={product.manufacturer.country}
            key={product.id}
            details={product.details}
            type={product.type.name}
            aromaScore={product.aromaAverage}
            bitternessScore={product.bitternessAverage}
            energyScore={product.energyAverage}
            overallScore={product.overallAverage}
            priceScore={product.priceAverage}
            tasteScore={product.tasteAverage}
            photoUrl={product.photoUrl}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isAdmin={isAdmin}
            userId={userId}
          />
        ))}
    </CardGrid>
  );
};
