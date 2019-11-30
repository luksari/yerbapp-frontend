import React, { FC } from 'react';
import { Button } from 'antd';
import { TitleBar } from 'components/TitleBar';
import { StyledTopbar } from './styled';

interface TopbarProps {
  handleLogout: VoidFunction;
  isLoggedIn: boolean;
}

export const Topbar: FC<TopbarProps> = ({
  handleLogout,
}) => {
  return (
    <StyledTopbar>
      <TitleBar />
      <Button onClick={handleLogout} />
    </StyledTopbar>
  );
};
