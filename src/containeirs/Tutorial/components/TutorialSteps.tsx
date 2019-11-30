import React, { useState } from 'react';
import { tutorialData, TutorialStep } from '../types';
import { Button } from 'antd';
import { TutorialContainer } from './styled';


const ReactComponent = () => {
  const [step, setstep] = useState(tutorialData[0]);
  const handleSetStep = () => {
    if(step.id < tutorialData.length) {/**do something */}
    else {/**do something else */}
  }
  return (
    <TutorialContainer>
      <TutorialStep step={step} />
      <Button onClick={handleSetStep} />
      <Button onClick={() => end} />
    </TutorialContainer>
  )
}

export default ReactComponent;
