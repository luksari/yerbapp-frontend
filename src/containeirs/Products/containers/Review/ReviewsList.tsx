import React, { FC } from 'react';
import { GetReviewsByQuery } from 'generated/graphql';
import { Wrapper } from 'containeirs/Types/styled';
import { Loader } from 'components/Loader';
import { StyledLegend } from 'components/Form/components/FormFieldset/styled';
import { ReviewItem } from './ReviewItem';

interface Props {
  data: GetReviewsByQuery;
  isLoading: boolean;
}

export const ReviewsList: FC<Props> = ({
  data,
  isLoading,
}) => {
  return (
    <Wrapper>
      <StyledLegend>Wszystkie oceny</StyledLegend>
      {isLoading ? <Loader /> : data.product.reviews.map((review) => <ReviewItem key={review.id} data={review} />)}
    </Wrapper>
  );
};
