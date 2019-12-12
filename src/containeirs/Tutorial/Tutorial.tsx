/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState, useEffect, useMemo } from 'react';
import { ButtonType } from 'components/Button';
import { Title } from 'components/TitleBar';
import { Helmet } from 'react-helmet';
import { TutorialStepModel } from './types';
import { TutorialWrapper, ButtonsContainer, StyledButton } from './styled';
import { TutorialStep } from './components/TutorialStep';
import img_1 from './img/rysunek1.svg';
import img_2 from './img/rysunek2.svg';
import img_3 from './img/rysunek3.svg';
import img_4 from './img/rysunek4.svg';
import img_5 from './img/rysunek5.svg';
import img_6 from './img/rysunek6.svg';

const tutorialData: TutorialStepModel[] = [
  {
    id: 1,
    imageUrl: img_1,
    description: ' Przygotuj wszystkie niezbędne rzeczy. Potrzebne będą: naczynie, czyli matero, bombilla - słomka z sitkiem oraz oczywiście yerba mate.',
  },
  {
    id: 2,
    imageUrl: img_2,
    description: ' Przesyp yerba mate do matera. Ilość suszu wpływa na moc napoju, dlatego początkującym polecamy zacząć od zasypania połowy objętości naczynia. Z biegiem czasu z pewnością sam poznasz jaka ilość yerby najbardziej odpowiada twoim preferencjom.',
  },
  {
    id: 3,
    imageUrl: img_3,
    description: ' Przykryj naczynie dłonią, spodeczkiem lub podkładką, a następnie potrząśnij kilka razy w górę i w dół trzymając je do góry nogami.',
  },
  {
    id: 4,
    imageUrl: img_4,
    description: ' Przechyl naczynie w taki sposób, aby susz ułożył się po jednej stronie tworząc mały kopiec.',
  },
  {
    id: 5,
    imageUrl: img_5,
    description: ' Wetknij bombillę w wolne miejsce między ścianką naczynia a kopcem z suszu, a następnie wlej wodę w temperaturze około 70-80 stopni. Jeżeli wolisz kolejność można odwrócić najpierw wlewając wodę, a dopiero potem wkładając słomkę, jednak pamiętaj, aby nie mieszać napoju. Jeśli nie masz możliwości, aby sprawdzić jaką temperaturę ma wodą, możesz spróbować zanurzyć palec w wodzie. Jeżeli nie parzy, wówczas można zalewać yerba mate.',
  },
  {
    id: 6,
    imageUrl: img_6,
    description: ' Tak przygotowaną yerba mate pozostaw na około 2-3 minuty, zaraz potem śmiało możesz zacząć delektować się swoim napojem :)',
  },
];

const Tutorial = () => {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(tutorialData[index]);
  const handleNextStep = () => {
    if (index < tutorialData.length - 1) {
      setIndex((prevIndex) => prevIndex += 1);
    } else {
      setIndex(index);
    }
  };
  const handlePreviousStep = () => {
    if (index > 0) {
      setIndex((prevIndex) => prevIndex -= 1);
    } else {
      setIndex(index);
    }
  };

  useEffect(() => {
    setStep(tutorialData[index]);
  }, [index]);

  const isBackDisabled = useMemo(() => index === 0, [index]);
  const isNextDisabled = useMemo(() => index === tutorialData.length - 1, [index]);

  return (
    <TutorialWrapper>
      <Helmet title="Poradnik" />
      <Title>Poradnik</Title>
      <TutorialStep {...step} />
      <ButtonsContainer>
        <StyledButton disabled={isBackDisabled} themeType={ButtonType.Primary} onClick={handlePreviousStep}>Wstecz</StyledButton>
        <StyledButton disabled={isNextDisabled} themeType={ButtonType.Primary} onClick={handleNextStep}>Dalej</StyledButton>
      </ButtonsContainer>
    </TutorialWrapper>
  );
};
export default Tutorial;
