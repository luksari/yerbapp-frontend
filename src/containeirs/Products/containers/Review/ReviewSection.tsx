import React, { FC, memo } from 'react';
import { useGetReviewsByQuery } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { DetailsWrapper } from 'containeirs/Products/styled';
import { ReviewForm } from './ReviewForm';

interface Props {
  productId: string;
}

export const ReviewSection: FC<Props> = memo(({
  productId,
}) => {
  const { data, loading, fetchMore } = useGetReviewsByQuery({ variables: { productId } });

  if (loading) {
    return <Loader />;
  }
  return (
    <DetailsWrapper>
      <ReviewForm
        initialValues={{
          aroma: 0,
          bitterness: 0,
          price: 0,
          description: '',
          overall: 0,
          energy: 0,
          productId,
          taste: 0,
        }}
        onSubmit={console.log}
      />
    </DetailsWrapper>
  );
});
