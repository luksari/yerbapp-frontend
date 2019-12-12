import React, { memo } from 'react';
import { LoaderWrapper, StyledLoader, StyledAltLoader } from './styled';


interface Props {
  isActive?: boolean;
  fullscreen?: boolean;
}

export const Loader: React.FC<Props> = memo(() => {
  return (
    <LoaderWrapper>
      <StyledLoader />
      <StyledAltLoader />
    </LoaderWrapper>
  );
});
