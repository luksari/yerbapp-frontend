import React, { FC, memo } from 'react';
import { useGetReviewsByQuery, useAddReviewMutation, GetReviewsByDocument } from 'generated/graphql';
import { Loader } from 'components/Loader';
import { DetailsWrapper } from 'containeirs/Products/styled';
import { ReviewFormData } from 'containeirs/Products/types';
import { ReviewForm } from './ReviewForm';
import { ReviewsList } from './ReviewsList';

interface Props {
  productId: string;
}

export const ReviewSection: FC<Props> = memo(({
  productId,
}) => {
  const { data, loading, fetchMore } = useGetReviewsByQuery({ variables: { productId }, fetchPolicy: 'no-cache' });
  const [addReview, { loading: adding }] = useAddReviewMutation();

  const submitReview = async (values: ReviewFormData) => {
    try {
      await addReview({
        variables: {
          review: {
            ...values,
            productId,
          },
        },
        refetchQueries: GetReviewsByDocument,
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (loading || adding) {
    return <Loader />;
  }

  return (
    <DetailsWrapper>
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
        onSubmit={submitReview}
      />
      <ReviewsList isLoading={adding || loading} data={data} />
    </DetailsWrapper>
  );
});
