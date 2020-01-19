import React, { FC, memo } from 'react';
import { ValueWrapper, StyledLabel, StyledValue } from './styled';

interface Props {
  label: string;
  value: number | string;
  className?: string;
}

export const CardValue: FC<Props> = memo(({ label, value, className }) => {
  return (
    <ValueWrapper className={className}>
      <StyledLabel>{label}</StyledLabel>
      <StyledValue>{value}</StyledValue>
    </ValueWrapper>
  );
});
