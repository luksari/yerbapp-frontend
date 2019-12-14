import React, { FC, memo } from 'react';
import { LogoContainer, StyledLogo } from './styled';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = memo(({ className }) => {
  return (
    <LogoContainer className={className}>
      <StyledLogo />
    </LogoContainer>
  );
});
