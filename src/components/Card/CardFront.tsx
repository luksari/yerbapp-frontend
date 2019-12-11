import React, { FC } from 'react';
import { ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import {
  CardContainer, YerbaTitle, CardMain, LeftSide, RightSide, Image, Details, CardButton, CardFooter, Rating,
} from './styled';

interface CardFrontProps {
  ChangeSide?: VoidFunction;
}

export const CardFront: FC<CardFrontProps> = ({ ChangeSide }) => {
  return (
    <CardContainer onClick={ChangeSide}>
      <YerbaTitle>Producent Nazwa</YerbaTitle>
      <CardMain>
        <LeftSide>
          <Image src="https://etnobazar.pl/pol_pl_YERBA-MATE-PAJARITO-ELABORADA-250G-BIO-18821_3.jpg" alt="" />
        </LeftSide>
        <RightSide>
          <Details>
            <li>Pochodzenie: ---</li>
            <li>Typ yerby: ---</li>
          </Details>
          <Rating>
            <li>Aromat: ---</li>
            <li>Smak: ---</li>
            <li>Gorycz: ---</li>
            <li>Moc: ---</li>
            <li>Cena: ---</li>
            <li>Ocena ogólna: ---</li>
          </Rating>
        </RightSide>
      </CardMain>
      <CardFooter>
        <Link to="/explore"><CardButton themeType={ButtonType.Primary}>Dodaj recenzję!</CardButton></Link>
      </CardFooter>
    </CardContainer>
  );
};
