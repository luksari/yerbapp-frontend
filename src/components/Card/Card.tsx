import React, { FC, memo } from 'react';
import { ButtonType } from 'components/Button';
import { SizeType } from 'components/Rating/types';
import { truncate } from 'lodash';
import {
  CardContainer, YerbaTitle, DataWrapper, Image, CardButton, Description, StyledRating,
} from './styled';
import { CardValue } from './CardValue';

interface CardProps {
  id?: number;
  manufacturer?: string;
  type?: string;
  name?: string;
  details?: string;
  country?: string;
  photoUrl?: string;
  addedAt?: string;
  aromaScore?: number;
  tasteScore?: number;
  bitternessScore?: number;
  energyScore?: number;
  priceScore?: number;
  overallScore?: number;
}

export const Card: FC<CardProps> = memo((
  {
    name = 'Brak nazwy',
    photoUrl,
    manufacturer = 'Nieznanty producent',
    type = 'Nieznany typ',
    country = 'Nieznany kraj',
    aromaScore = 0,
    tasteScore = 0,
    bitternessScore = 0,
    energyScore = 0,
    priceScore = 0,
    overallScore = 0,
    details = 'Brak opisu',
  },
) => {
  const shortDescription = truncate(details, { length: 100, separator: '...' });
  const shortName = truncate(name, { length: 45, separator: '...' });
  const shortProducer = truncate(manufacturer, { length: 45, separator: '...' });
  const shortType = truncate(type, { length: 15, separator: '...' });
  const shortCountry = truncate(country, { length: 15, separator: '...' });
  return (
    <CardContainer>
      <DataWrapper primary>
        <YerbaTitle>
          {shortName}
        </YerbaTitle>
        <Image src={photoUrl} alt={name} />
        <CardButton themeType={ButtonType.Secondary}>
          Zobacz więcej
        </CardButton>
      </DataWrapper>
      <DataWrapper>
        <CardValue label="Producent: " value={shortProducer} />
        <CardValue label="Typ: " value={shortType} />
        <CardValue label="Kraj pochodzenia: " value={shortCountry} />
        <Description>
          {shortDescription}
        </Description>
        <StyledRating size={SizeType.Small} label="Aromat: " initialRating={aromaScore} readonly />
        <StyledRating size={SizeType.Small} label="Smak: " initialRating={tasteScore} readonly />
        <StyledRating size={SizeType.Small} label="Gorycz: " initialRating={bitternessScore} readonly />
        <StyledRating size={SizeType.Small} label="Moc: " initialRating={energyScore} readonly />
        <StyledRating size={SizeType.Small} label="Cena: " initialRating={priceScore} readonly />
        <StyledRating size={SizeType.Small} label="Ocena ogólna: " initialRating={overallScore} readonly />
      </DataWrapper>
    </CardContainer>
  );
});
