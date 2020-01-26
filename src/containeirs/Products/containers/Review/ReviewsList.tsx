import React, { FC } from 'react';
import { GetProductDetailsQuery } from 'generated/graphql';
import { Wrapper } from 'containeirs/Types/styled';
import { Loader } from 'components/Loader';
import { StyledLegend } from 'components/Form/components/FormFieldset/styled';
import { Pagination, usePagination } from 'components/Pagination';
import { ReviewItem } from './ReviewItem';

interface Props {
  data: GetProductDetailsQuery;
  isLoading: boolean;
}

export const ReviewsList: FC<Props> = ({
  data,
  isLoading,
}) => {
  const {
    page, perPage, setPage, data: trimmedData,
  } = usePagination(3, data.product.reviews);
  return (
    <Wrapper>
      <StyledLegend>Wszystkie oceny</StyledLegend>
      <Pagination
        itemCount={data.product.reviews.length}
        perPage={perPage}
        isLoading={isLoading}
        currentPage={page}
        onPageChange={setPage}
      />
      {isLoading ? <Loader /> : trimmedData.map((review) => <ReviewItem key={review.id} data={review} />)}
    </Wrapper>
  );
};
