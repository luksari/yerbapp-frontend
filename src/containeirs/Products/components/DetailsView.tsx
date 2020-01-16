import React, { FC } from 'react';
import { GetProductDetailsQuery } from 'generated/graphql';
import { Wrapper } from 'containeirs/AdminPanel/styled';
import { Rating } from 'components/Rating';
import {
  DetailsWrapper, YerbaDetailsTitle, StyledImg, RatingWrapper,
} from '../styled';
import { Description } from './Card/styled';

interface Props {
  data: GetProductDetailsQuery;
}

export const DetailsView: FC<Props> = ({
  data,
}) => {
  return (
    <DetailsWrapper>
      <YerbaDetailsTitle>{data.product.name}</YerbaDetailsTitle>
      <Wrapper>
        <Description>{data.product.details}</Description>
        <StyledImg src={data.product.photoUrl} alt={data.product.name} />
      </Wrapper>
      <RatingWrapper>
        <Rating
          readonly
          initialRating={data.product.aromaAverage}
          label="Aromat"
        />
        <Rating
          readonly
          initialRating={data.product.bitternessAverage}
          label="Gorycz"
        />
        <Rating
          readonly
          initialRating={data.product.energyAverage}
          label="Pobudzenie"
        />
        <Rating
          readonly
          initialRating={data.product.priceAverage}
          label="Cena"
        />
        <Rating
          readonly
          initialRating={data.product.tasteAverage}
          label="Smak"
        />
        <Rating
          readonly
          initialRating={data.product.overallAverage}
          label="Ogólna ocena"
        />
      </RatingWrapper>
    </DetailsWrapper>
  );
};
