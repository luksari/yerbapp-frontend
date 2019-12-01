/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Button } from 'antd';
import { TutorialStepModel } from './types';
import { TutorialWrapper } from './components/styled';
import { TutorialStep } from './components/TutorialStep';


const tutorialData: TutorialStepModel[] = [
  {
    id: 1,
    imageUrl: 'url1',
    description: 'New step description',
  },
  {
    id: 2,
    imageUrl: 'url2',
    description: 'New step2 description',
  },
  {
    id: 3,
    imageUrl: 'url3',
    description: 'New step3 description',
  },
  {
    id: 4,
    imageUrl: 'url4',
    description: 'New step4 description',
  },
  {
    id: 5,
    imageUrl: 'url5',
    description: 'New step5 description',
  },
  {
    id: 6,
    imageUrl: 'url6',
    description: 'New step6 description',
  },
];

const Tutorial = () => {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(tutorialData[index]);
  const handleNextStep = () => {
    if (index < tutorialData.length) {
      setIndex((prevIndex) => prevIndex += 1);
      setStep(tutorialData[index]);
    } else {
      setIndex(index);
    }
  };
  return (
    <TutorialWrapper>
      <TutorialStep {...step} />
      <Button onClick={handleNextStep}>Krok dalej</Button>
      <Button onClick={() => console.warn('koniec')}>Zakończ</Button>
    </TutorialWrapper>
  );
};
export default Tutorial;
