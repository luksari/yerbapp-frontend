import React, { FC, ReactNode } from 'react';
import { HomepageWrapper } from './styled';

interface Props {
  children: ReactNode;
}

export const HomepageLayout: FC<Props> = ({
  children,
}) => {
  return (
    <HomepageWrapper>
      {children}
    </HomepageWrapper>
  );
};
