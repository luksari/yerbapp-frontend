import React, { FC } from 'react';
import { ValueWrapper, StyledLabel, StyledValue } from './styled';

interface Props {
  label: string;
  value: number | string;
}

export const CardValue: FC<Props> = ({ label, value }) => {
  return (
    <ValueWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>{value}</StyledValue>
    </ValueWrapper>
  );
};
