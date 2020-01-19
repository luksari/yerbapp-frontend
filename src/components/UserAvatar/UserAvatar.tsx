import React, { FC, memo } from 'react';
import { getInitials } from 'helpers/getInitials';
import { getInitialsCode } from 'helpers/getInitialsCode';
import {
  StyledAvatar, StyledInitial, AvatarWrapper, LeftLogo, RightLogo,
} from './styled';

interface Props {
  username: string;
  className?: string;
  avatarUrl?: string;
}

export const UserAvatar: FC<Props> = memo(({
  username,
  className,
  avatarUrl,
}) => {
  const { firstLetter, secondLetter } = getInitials(username);
  const initialsCode = getInitialsCode(username);

  return (
    <AvatarWrapper className={className}>
      <LeftLogo />
      <StyledAvatar role="img" avatarUrl={avatarUrl} aria-label={`Awatar użytkownika ${username}`} code={initialsCode}>
        <StyledInitial>
          {firstLetter}
          {secondLetter}
        </StyledInitial>
      </StyledAvatar>
      <RightLogo />
    </AvatarWrapper>
  );
});
