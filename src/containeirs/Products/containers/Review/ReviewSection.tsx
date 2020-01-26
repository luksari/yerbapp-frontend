import React, { FC } from 'react';
import {
  useGetReviewsByQuery, useAddReviewMutation, GetReviewsByDocument, GetProductDetailsDocument,
} from 'generated/graphql';
import { Loader } from 'components/Loader';
import { DetailsWrapper } from 'containeirs/Products/styled';
import { ReviewFormData } from 'containeirs/Products/types';
import { notificationError, notificationSuccess } from 'components/Notification';
import { ReviewForm } from './ReviewForm';
import { ReviewsList } from './ReviewsList';

interface Props {
  productId: string;
  isAuthenticated: boolean;
}

export const ReviewSection: FC<Props> = ({
  productId,
  isAuthenticated,
}) => {
  const [addReview, { loading: adding }] = useAddReviewMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się dodać recenzji Yerba Mate.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie dodano recenzję Yerba Mate!' }),
    refetchQueries: [{
      query: GetReviewsByDocument,
      variables: { productId },
    },
    {
      query: GetProductDetailsDocument,
      variables: { productId },
    },
    ],
  });

  const submitReview = async (values: ReviewFormData) => {
    try {
      await addReview({
        variables: {
          review: {
            ...values,
            productId,
          },
        },
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
          onSubmit={submitReview}
        />
      )}
      <ReviewsList isLoading={adding || loading} data={data} />
    </DetailsWrapper>
  );
};
