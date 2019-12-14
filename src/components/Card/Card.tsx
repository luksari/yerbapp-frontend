import React, { FC } from 'react';
import { ButtonType } from 'components/Button';
import { Rating } from 'components/Rating';
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

const exampleData: CardProps[] = [
  {
    id: 1,
    manufacturer: 'Pajarito',
    type: 'Elaborada',
    name: 'Pajarito Elaborada',
    details: 'Pajarito w swojej podstawowej wersji (Elaborada) to produkt bardzo solidny, herbatka brawurowo wręcz pobudza, jest wydajna oraz relatywnie tania. Jej atutem jest również powszechna dostępność. Bardzo dobry wybór dla osób rozpoczynających swoją przygodę z yerba mate.',
    country: 'Paragwaj',
    photoUrl: 'https://etnobazar.pl/pol_pl_YERBA-MATE-PAJARITO-ELABORADA-250G-BIO-18821_3.jpg',
    addedAt: '09.11.2001 21:37:42',
    aromaScore: 3.3,
    tasteScore: 3.9,
    bitternessScore: 3.6,
    energyScore: 4.1,
    priceScore: 4.5,
    overallScore: 4.3,
  },
];

export const Card: FC<CardProps> = (
  // {
  //   name,
  //   photoUrl,
  //   manufacturer,
  //   type,
  //   country,
  //   aromaScore,
  //   tasteScore,
  //   bitternessScore,
  //   energyScore,
  //   priceScore,
  //   overallScore,
  //   details,
  // },
) => {
  const {
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
  } = exampleData[0];
  const shortDescription = truncate(details, { length: 150, separator: '.' });
  return (
    <CardContainer>
      <DataWrapper primary>
        <YerbaTitle>
          {name}
        </YerbaTitle>
        <Image src={photoUrl} alt={name} />
        <CardButton
          themeType={ButtonType.Secondary}
        >
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
