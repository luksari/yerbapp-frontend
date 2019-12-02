/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import { Button } from 'antd';
import { TutorialStepModel } from './types';
import { TutorialWrapper, ButtonsContainer } from './components/styled';
import { TutorialStep } from './components/TutorialStep';


const tutorialData: TutorialStepModel[] = [
  {
    id: 1,
    imageUrl: 'url1',
    description: 'Przygotuj wszystkie niezbędne rzeczy. Potrzebne będą: matero, bombilla oraz oczywiście yerba mate.',
  },
  {
    id: 2,
    imageUrl: 'url2',
    description: 'Przesyp yerba mate do matera. Ilość suszu wpływa na moc napoju, dlatego początkującym polecamy zacząć od zasypania połowy objętości naczynia. Z biegiem czasu z pewnością sam poznasz jaka ilość yerby najbardziej odpowiada twoim preferencjom.',
  },
  {
    id: 3,
    imageUrl: 'url3',
    description: 'Przykryj naczynie dłonią lub spodeczkiem, a następnie potrząśnij kilka razy w górę i w dół trzymając je do góry nogami',
  },
  {
    id: 4,
    imageUrl: 'url4',
    description: 'Przechyl naczynie w taki sposób, aby susz ułożył się po jednej stronie',
  },
  {
    id: 5,
    imageUrl: 'url5',
    description: 'Przygotuj wodę w temperaturze około 70-80 stopni',
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
    if (index < tutorialData.length - 1) {
      setIndex((prevIndex) => prevIndex += 1);
      setStep(tutorialData[index + 1]);
    } else {
      setIndex(index);
    }
  };
  const handlePreviousStep = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex -= 1);
      setStep(tutorialData[index - 1]);
    } else {
      setIndex(index);
    }
  };
  return (
    <TutorialWrapper>
      <TutorialStep {...step} />
      <ButtonsContainer>
        <Button onClick={handlePreviousStep}>Wstecz</Button>
        <Button onClick={handleNextStep}>Dalej</Button>
        <Button onClick={() => console.warn('koniec')}>Zakończ</Button>
      </ButtonsContainer>
    </TutorialWrapper>
  );
};
export default Tutorial;
