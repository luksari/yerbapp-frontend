import React, { FC, memo } from 'react';
import { getInitials } from 'helpers/getInitials';
import { getInitialsCode } from 'helpers/getInitialsCode';
import { useFormikContext } from 'formik';
import { get } from 'lodash';
import {
  StyledAvatar, StyledInitial, AvatarWrapper, LeftLogo, RightLogo,
} from './styled';

interface Props {
  username: string;
  className?: string;
  avatarUrl?: string;
}

export const FormikUserAvatar: FC<Props> = memo(({
  username,
  className,
  avatarUrl,
}) => {
  const context = useFormikContext();

  const value = context ? get(context.values, 'avatarUrl') : avatarUrl;

  const { firstLetter, secondLetter } = getInitials(username);
  const initialsCode = getInitialsCode(username);


  return (
    <AvatarWrapper className={className}>
      <LeftLogo />
      <StyledAvatar role="img" avatarUrl={value} aria-label={`Awatar użytkownika ${username}`} code={initialsCode}>
        <StyledInitial>
          {firstLetter}
          {secondLetter}
        </StyledInitial>
      </StyledAvatar>
      <RightLogo />
    </AvatarWrapper>
  );
});
