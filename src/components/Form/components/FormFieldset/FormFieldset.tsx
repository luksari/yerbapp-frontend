import React, {
  HTMLAttributes, FC,
} from 'react';

import { StyledFieldset, StyledLegend } from './styled';

interface CustomFormFiedlsetProps {
  legendTitle?: string;
  fullWidth?: boolean;
  className?: string;
  columns?: number;
}

type Props = CustomFormFiedlsetProps & HTMLAttributes<HTMLDivElement>;

export const FormFieldset: FC<Props> = ({
  legendTitle,
  children,
  fullWidth,
  columns = 1,
}) => (
  <StyledFieldset
    fullWidth={fullWidth}
    columns={columns}
  >
    {legendTitle && <StyledLegend>{legendTitle}</StyledLegend>}
    {children}
  </StyledFieldset>
);
