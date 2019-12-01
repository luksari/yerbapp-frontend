import React from 'react';
import { LoaderWrapper, StyledLoader, StyledAltLoader } from './styled';


interface Props {
  isActive?: boolean;
  fullscreen?: boolean;
}

export const Loader: React.FC<Props> = () => {
  return (
    <LoaderWrapper>
      <StyledLoader />
      <StyledAltLoader />
    </LoaderWrapper>
  );
};
