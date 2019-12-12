import React, { FC } from 'react';
import { ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import {
  CardContainer, YerbaTitle, LeftSide, RightSide, Image, Details, CardButton, Rating, Description,
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
export const Card: FC<CardProps> = ({
  id, manufacturer, type, name, details, country, photoUrl, addedAt, aromaScore, tasteScore, bitternessScore, energyScore, priceScore, overallScore,
}) => {
  return (
    <CardContainer>
      <LeftSide>
        <YerbaTitle>
          {manufacturer}
          Pajarito
          {' '}
          {name}
          Elaborada
        </YerbaTitle>
        <Image src="https://etnobazar.pl/pol_pl_YERBA-MATE-PAJARITO-ELABORADA-250G-BIO-18821_3.jpg" alt={photoUrl} />
        <Link to="/explore">
          <CardButton themeType={ButtonType.Primary}>
              Zobacz więcej
          </CardButton>
        </Link>
      </LeftSide>
      <RightSide>
        <Details>
          <label>
              Typ:
            <p>
              {type}
            </p>
          </label>
          <label>
              Kraj pochodzenia:
            <p>
              {country}
            </p>
          </label>
        </Details>
        <Rating>
          <label>
            Aromat:
            {' '}
            {aromaScore}
          </label>
          <label>
            Smak:
            {' '}
            {tasteScore}
          </label>
          <label>
            Gorycz:
            {' '}
            {bitternessScore}
          </label>
          <label>
            Moc:
            {' '}
            {energyScore}
          </label>
          <label>
            Cena:
            {' '}
            {priceScore}
          </label>
          <label>
            Ocena ogólna:
            {' '}
            {overallScore}
          </label>
        </Rating>
        <Description>
          {details}
        </Description>
      </RightSide>
    </CardContainer>
  );
};
