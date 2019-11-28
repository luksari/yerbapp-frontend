import React, { FC } from 'react';
import { Button } from 'antd';
import { StyledTopbar } from './styled';

interface TopbarProps {
  handleLogout: VoidFunction;
  title: string;
  isLoggedIn: boolean;
}

export const Topbar: FC<TopbarProps> = ({
  title,
  handleLogout,
}) => {
  return (
    <StyledTopbar>
      {title}
      <Button onClick={handleLogout} />
    </StyledTopbar>
  );
};
