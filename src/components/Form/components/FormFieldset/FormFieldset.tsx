import React, { HTMLAttributes, FC } from 'react';

import { StyledFieldset, StyledLegend } from './styled';

interface CustomFormFiedlsetProps {
  legendTitle?: string;
  fullWidth?: boolean;
}

type Props = CustomFormFiedlsetProps & HTMLAttributes<HTMLFieldSetElement>;

export const FormFieldset: FC<Props> = ({
  legendTitle,
  children,
  fullWidth,
  ...rest
}) => (
  <StyledFieldset
    {...rest}
    fullWidth={fullWidth}
  >
    <>
      {legendTitle && <StyledLegend>{legendTitle}</StyledLegend>}
    </>
    {children}
  </StyledFieldset>
);
