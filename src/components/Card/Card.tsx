import React, { FC } from 'react';
import { ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import {
  CardContainer, YerbaTitle, LeftSide, RightSide, Image, CardButton, Description, DataContainer,
} from './styled';

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
    tasteScore: 4.1,
    bitternessScore: 3.6,
    energyScore: 3.9,
    priceScore: 4.5,
    overallScore: 4.3,
  },
];
export const Card: FC<CardProps> = () => {
  return (
    <CardContainer>
      <LeftSide>
        <YerbaTitle>
          {exampleData[0].name}
        </YerbaTitle>
        <Image src={exampleData[0].photoUrl} alt={exampleData[0].name} />
        <Link to="/explore">
          <CardButton themeType={ButtonType.Primary}>
              Zobacz więcej
          </CardButton>
        </Link>
      </LeftSide>
      <RightSide>
        <DataContainer>
          <label>
            Producent:
            {' '}
            <span>
              {exampleData[0].manufacturer}
            </span>
          </label>
          <label>
            Typ:
            {' '}
            <span>
              {exampleData[0].type}
            </span>
          </label>
          <label>
            Kraj pochodzenia:
            {' '}
            <span>
              {exampleData[0].country}
            </span>
          </label>
          <p />
          <label>
            Aromat:
            {' '}
            <span>
              {exampleData[0].aromaScore}
            </span>
          </label>
          <label>
            Smak:
            {' '}
            <span>
              {exampleData[0].tasteScore}
            </span>
          </label>
          <label>
            Gorycz:
            {' '}
            <span>
              {exampleData[0].bitternessScore}
            </span>
          </label>
          <label>
            Moc:
            {' '}
            <span>
              {exampleData[0].energyScore}
            </span>
          </label>
          <label>
            Cena:
            {' '}
            <span>
              {exampleData[0].priceScore}
            </span>
          </label>
          <label>
            Ocena ogólna:
            {' '}
            <span>
              {exampleData[0].overallScore}
            </span>
          </label>
        </DataContainer>
        <Description>
          {exampleData[0].details}
        </Description>
      </RightSide>
    </CardContainer>
  );
};
