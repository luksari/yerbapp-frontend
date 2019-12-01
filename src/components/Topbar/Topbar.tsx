import React, { FC } from 'react';
import { TitleBar } from 'components/TitleBar';
import { Button } from 'components/Button';
import { StyledTopbar } from './styled';

interface TopbarProps {
  handleLogout?: VoidFunction;
}

export const Topbar: FC<TopbarProps> = ({
  handleLogout,
}) => {
  return (
    <StyledTopbar>
      <TitleBar />
      <Button onClick={handleLogout}>Wyloguj się</Button>
    </StyledTopbar>
  );
};
