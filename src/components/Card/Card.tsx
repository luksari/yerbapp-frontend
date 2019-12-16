import React, { FC } from 'react';
import { ButtonType } from 'components/Button';
import { SizeType } from 'components/Rating/types';
import { truncate } from 'lodash';
import {
  CardContainer, YerbaTitle, DataWrapper, Image, CardButton, Description, StyledRating,
} from './styled';
import { CardValue } from './CardValue';

interface CardProps {
  id: number;
  manufacturer: string;
  type: string;
  name: string;
  details: string;
  country: string;
  photoUrl: string;
  addedAt: string;
  aromaScore: number;
  tasteScore: number;
  bitternessScore: number;
  energyScore: number;
  priceScore: number;
  overallScore: number;
}

export const Card: FC<CardProps> = (
  {
    name,
    photoUrl,
    manufacturer,
    type,
    country,
    aromaScore,
    tasteScore,
    bitternessScore,
    energyScore,
    priceScore,
    overallScore,
    details,
  },
) => {
  const shortDescription = truncate(details, { length: 150, separator: '.' });
  return (
    <CardContainer>
      <DataWrapper primary>
        <YerbaTitle>
          {name}
        </YerbaTitle>
        <Image src={photoUrl} alt={name} />
        <CardButton themeType={ButtonType.Secondary}>
          Zobacz więcej
        </CardButton>
      </DataWrapper>
      <DataWrapper>
        <CardValue label="Producent: " value={manufacturer} />
        <CardValue label="Typ: " value={type} />
        <CardValue label="Kraj pochodzenia: " value={country} />
        <StyledRating size={SizeType.Small} label="Aromat: " initialRating={aromaScore} readonly />
        <StyledRating size={SizeType.Small} label="Smak: " initialRating={tasteScore} readonly />
        <StyledRating size={SizeType.Small} label="Gorycz: " initialRating={bitternessScore} readonly />
        <StyledRating size={SizeType.Small} label="Moc: " initialRating={energyScore} readonly />
        <StyledRating size={SizeType.Small} label="Cena: " initialRating={priceScore} readonly />
        <StyledRating size={SizeType.Small} label="Ocena ogólna: " initialRating={overallScore} readonly />
        <Description>
          {shortDescription}
        </Description>
      </DataWrapper>
    </CardContainer>
  );
};
