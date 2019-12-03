import React, { FC } from 'react';
import { TitleBar } from 'components/TitleBar';
import { Button, ButtonType } from 'components/Button';
import { Link } from 'react-router-dom';
import { makeSelectIsAuthenticated } from 'store/auth/slice';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { StyledTopbar } from './styled';

interface TopbarProps {
  handleLogout: VoidFunction;
  isAuthenticated?: boolean;
}

const TopbarRaw: FC<TopbarProps> = ({
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
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

export const Topbar = connect(mapStateToProps, null)(TopbarRaw);
