import React, { FC } from 'react';
import { GetProductDetailsQuery } from 'generated/graphql';

interface Props {
  data: GetProductDetailsQuery;
}

export const DetailsCard: FC<Props> = ({
  data,
}) => {
  return (
    <div>
      {data.product.id}
    </div>
  );
};
