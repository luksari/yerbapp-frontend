import React, { FC, ReactNode } from 'react';
import { StyledNoMatchLayout } from './styled';

interface Props {
  children: ReactNode;
}

export const NoMatchLayout: FC<Props> = ({
  children,
}) => {
  return (
    <StyledNoMatchLayout>
      {children}
    </StyledNoMatchLayout>
  );
};
