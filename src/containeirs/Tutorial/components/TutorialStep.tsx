import React, { FC } from 'react';
import { TutorialStepModel } from '../types';
import { Image, DescriptionArea } from '../styled';

export const TutorialStep: FC<TutorialStepModel> = ({ id, imageUrl, description }) => {
  return (
    <div>
      <Image src={imageUrl} alt="" />
      <DescriptionArea>
        {id}
        .
        {description}
      </DescriptionArea>
    </div>
  );
};
