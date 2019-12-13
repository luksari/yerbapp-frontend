import React, { FC } from 'react';
import { ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import {
  CardContainer, YerbaTitle, LeftSide, RightSide, Image, CardButton, Description, DataContainer, StyledLabel, StyledSpan,
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
    tasteScore: 3.9,
    bitternessScore: 3.6,
    energyScore: 4.1,
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
          <StyledLabel>
            Producent:
            {' '}
            <StyledSpan>
              {exampleData[0].manufacturer}
            </StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Typ:
            {' '}
            <StyledSpan>
              {exampleData[0].type}
            </StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Kraj pochodzenia:
            {' '}
            <StyledSpan>
              {exampleData[0].country}
            </StyledSpan>
          </StyledLabel>
          <p />
          <StyledLabel>
            Aromat:
            {' '}
            <StyledSpan>
              {exampleData[0].aromaScore}
            </StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Smak:
            {' '}
            <StyledSpan>
              {exampleData[0].tasteScore}
            </StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Gorycz:
            {' '}
            <StyledSpan>
              {exampleData[0].bitternessScore}
            </StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Moc:
            {' '}
            <StyledSpan>
              {exampleData[0].energyScore}
            </StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Cena:
            {' '}
            <StyledSpan>
              {exampleData[0].priceScore}
            </StyledSpan>
          </StyledLabel>
          <StyledLabel>
            Ocena ogólna:
            {' '}
            <StyledSpan>
              {exampleData[0].overallScore}
            </StyledSpan>
          </StyledLabel>
        </DataContainer>
        <Description>
          {exampleData[0].details}
        </Description>
      </RightSide>
    </CardContainer>
  );
};
