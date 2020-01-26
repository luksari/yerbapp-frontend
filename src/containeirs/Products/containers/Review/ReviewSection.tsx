import React, { FC } from 'react';
import { GetProductDetailsQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { DetailsWrapper } from 'containeirs/Products/styled';
import { ReviewFormData } from 'containeirs/Products/types';
import { ReviewForm } from './ReviewForm';
import { ReviewsList } from './ReviewsList';

interface Props {
  productId: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  data: GetProductDetailsQuery;
  handleSubmitReview: (values: ReviewFormData) => void;
}

export const ReviewSection: FC<Props> = ({
  isAuthenticated,
  isLoading,
  data,
  handleSubmitReview,
  productId,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <DetailsWrapper>
      {isAuthenticated && (
        <ReviewForm
          initialValues={{
            productId,
            aroma: 0,
            bitterness: 0,
            price: 0,
            description: '',
            overall: 0,
            energy: 0,
            taste: 0,
          }}
          onSubmit={handleSubmitReview}
        />
      )}
      <ReviewsList isLoading={isLoading} data={data} />
    </DetailsWrapper>
  );
};
