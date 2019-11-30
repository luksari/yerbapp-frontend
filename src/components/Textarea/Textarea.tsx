import React, {
 FC, TextareaHTMLAttributes, ChangeEvent, ChangeEventHandler, FocusEventHandler,
} from 'react';
import { StyledTextArea } from './styled';

type OwnProps = {
  autosize?: {
    minRows: number;
    maxRows: number;
  };
  /** These props are used by Redux form inputs */
  touched?: boolean;
  error?: any;
  warning?: any;
  onBlur?: FocusEventHandler<FocusEvent>;
  onChange?: ChangeEventHandler<ChangeEvent>;
  value?: string;
}

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & OwnProps;

const DEFAULT_AUTOSIZE = {
  minRows: 3,
  maxRows: 10,
};
export const Textarea: FC<Props> = ({
 autosize, value, onChange, touched, error, warning, onBlur, ...rest
}) => {
  const match = (value && `${value}`.match(/\n/g)) || [];
  const meta = { touched, error, warning };
  const textRows = match.length + 1;
  const { minRows, maxRows } = autosize || DEFAULT_AUTOSIZE;
  const rows = textRows <= minRows ? minRows : textRows;
  return (
    <StyledTextArea
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      rows={rows >= maxRows ? maxRows : rows}
      {...meta}
      {...rest}
    />
  );
};
