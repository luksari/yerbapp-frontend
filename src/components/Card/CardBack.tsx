import React, { FC } from 'react';
import {
  CardContainer, Description,
} from './styled';

interface CardFrontProps {
  ChangeSide?: VoidFunction;
}

export const CardBack: FC<CardFrontProps> = ({ ChangeSide }) => {
  return (
    <CardContainer onClick={ChangeSide}>
      <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem nam pariatur voluptate perferendis, asperiores aspernatur! Porro similique consequatur, nobis soluta minima, quasi laboriosam hic cupiditate perferendis esse numquam magni.
      </Description>
    </CardContainer>
  );
};
