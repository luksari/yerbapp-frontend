import React, { FC, memo } from 'react';
import { GetProductDetailsQuery } from 'generated/graphql';
import { Rating } from 'components/Rating';
import { Button, ButtonType } from 'components/Button';
import { Icon } from 'antd';
import {
  DetailsWrapper, YerbaDetailsTitle, StyledImg, RatingWrapper, ScoreValue, MainDataWrapper, ImageWrapper,
} from '../../styled';
import { DetailsDescription } from '../../components/Card/styled';
import { CardValue } from '../../components/Card/CardValue';

interface Props {
  data: GetProductDetailsQuery;
  redirectBack: VoidFunction;
}

export const DetailsView: FC<Props> = memo(({
  data,
  redirectBack,
}) => {
  return (
    <DetailsWrapper>
      <Button onClick={redirectBack} icon={<Icon type="arrow-left" />} themeType={ButtonType.Link}>Wróć</Button>
      <YerbaDetailsTitle>{data.product.name}</YerbaDetailsTitle>
      <CardValue label="Producent:" value={data.product.manufacturer.name} />
      <CardValue label="Kraj producenta:" value={data.product.manufacturer.country} />
      <CardValue label="Typ Yerba Mate:" value={data.product.type.name} />
      <MainDataWrapper>
        <DetailsDescription>{data.product.details}</DetailsDescription>
        <ImageWrapper>
          <StyledImg src={data.product.photoUrl} alt={data.product.name} />
          <ScoreValue>
            {data.product.personalizedScore}
          </ScoreValue>
        </ImageWrapper>
      </MainDataWrapper>
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
});
