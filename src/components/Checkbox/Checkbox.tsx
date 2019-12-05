import React, { FC, InputHTMLAttributes } from 'react';
import {
  StyledCheckbox, CheckboxContainer, HiddenCheckbox, CheckedIcon,
} from './styled';


export const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox>
      <CheckedIcon checked={checked} type="check" />
    </StyledCheckbox>
  </CheckboxContainer>
);
