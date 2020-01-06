import React, { memo } from 'react';
import { LoaderWrapper, StyledLoader, StyledAltLoader } from './styled';


interface Props {
  isActive?: boolean;
  fullscreen?: boolean;
}

export const Loader: React.FC<Props> = memo(({ fullscreen }) => {
  return (
    <LoaderWrapper fullscreen={fullscreen}>
      <StyledLoader />
      <StyledAltLoader />
    </LoaderWrapper>
  );
});
