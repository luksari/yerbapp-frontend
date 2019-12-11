import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonType } from 'components/Button';
import {
  CardContainer, Description, YerbaTitle, CardMain, CardFooter, CardButton,
} from './styled';

interface CardFrontProps {
  ChangeSide?: VoidFunction;
}

export const CardBack: FC<CardFrontProps> = ({ ChangeSide }) => {
  return (
    <CardContainer onClick={ChangeSide}>
      <YerbaTitle>
        Pajarito Elaborada
      </YerbaTitle>
      <CardMain>
        <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.
        </Description>
      </CardMain>
      <CardFooter>
        <Link to="/explore">
          <CardButton themeType={ButtonType.Primary}>
            Dodaj recenzję
          </CardButton>
        </Link>
      </CardFooter>
    </CardContainer>
  );
};
