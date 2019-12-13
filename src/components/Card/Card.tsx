import React, { FC } from 'react';
import { ButtonType } from 'components/Button';
import {
  CardContainer, YerbaTitle, DataWrapper, Image, CardButton, Description,
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

export const Card: FC<CardProps> = ({
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
}) => {
  const data = exampleData[0];
  return (
    <CardContainer>
      <DataWrapper primary>
        <YerbaTitle>
          {data.name}
        </YerbaTitle>
        <Image src={data.photoUrl} alt={data.name} />
        <CardButton
          themeType={ButtonType.Primary}
        >
            Zobacz więcej
        </CardButton>
      </DataWrapper>
      <DataWrapper>
        <CardValue label="Producent:" value={data.manufacturer} />
        <CardValue label="Typ:" value={data.type} />
        <CardValue label="Kraj pochodzenia:" value={data.country} />
        <CardValue label="Aromat:" value={data.aromaScore} />
        <CardValue label="Smak:" value={data.tasteScore} />
        <CardValue label="Gorycz:" value={data.bitternessScore} />
        <CardValue label="Moc:" value={data.energyScore} />
        <CardValue label="Cena:" value={data.priceScore} />
        <CardValue label="Ocena ogólna:" value={data.overallScore} />
        <Description>
          {data.details}
        </Description>
      </DataWrapper>
    </CardContainer>
  );
};
