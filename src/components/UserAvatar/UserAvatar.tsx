import React, { FC } from 'react';
import { getInitials } from 'helpers/getInitials';
import { getInitialsCode } from 'helpers/getInitialsCode';
import { StyledAvatar, StyledInitial, AvatarWrapper } from './styled';

interface Props {
  username: string;
}

export const UserAvatar: FC<Props> = ({
  username,
}) => {
  const { firstLetter, secondLetter } = getInitials(username);
  const initialsCode = getInitialsCode(firstLetter, secondLetter);
  return (
    <AvatarWrapper>
      <StyledAvatar role="img" aria-label={`Awatar użytkownika ${username}`} code={initialsCode}>
        <StyledInitial>
          {firstLetter}
          {secondLetter}
        </StyledInitial>
      </StyledAvatar>
    </AvatarWrapper>
  );
};
