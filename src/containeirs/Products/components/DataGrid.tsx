import React, { FC } from 'react';
import { Product } from 'generated/graphql';
import { Card } from 'containeirs/Products/components/Card';
import { Loader } from 'components/Loader';
import { CardGrid } from '../styled';

interface Props {
  data: Partial<Product>[];
  isLoading?: boolean;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  handleRedirectDetails: (id: string) => void;
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
  handleRedirectDetails,
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
            author={product?.author}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onRedirectDetails={handleRedirectDetails}
            isAdmin={isAdmin}
            personalizedScore={product.personalizedScore}
            userId={userId}
          />
        ))}
    </CardGrid>
  );
};
