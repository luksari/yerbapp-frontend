import React, { FC, memo } from 'react';
import { LogoContainer, StyledLogo } from './styled';


export const Logo: FC = memo(() => {
  return (
    <LogoContainer>
      <StyledLogo />
    </LogoContainer>
  );
});
