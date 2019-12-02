import React, { FC } from 'react';
import { TutorialStepModel } from '../types';

export const TutorialStep: FC<TutorialStepModel> = ({ id, imageUrl, description }) => {
  return (
    <div>
      <img alt="" src={imageUrl} />
      {id}
        .
      {description}
    </div>
  );
};
