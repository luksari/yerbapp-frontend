import React, { FC, memo } from 'react';
import { TitleBar } from 'components/TitleBar';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { StyledTopbar } from './styled';

interface TopbarProps {
  handleLogout: VoidFunction;
  isAuthenticated?: boolean;
}

export const Topbar: FC<TopbarProps> = memo(({
  handleLogout,
  isAuthenticated,
}) => {
  return (
    <StyledTopbar>
      <TitleBar />
      {
        isAuthenticated
          ? <Button themeType={ButtonType.Link} onClick={handleLogout}>Wyloguj się</Button>
          : <Button themeType={ButtonType.Link}><Link to="/login">Zaloguj się</Link></Button>
      }
    </StyledTopbar>
  );
});
