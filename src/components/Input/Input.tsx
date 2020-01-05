import React, {
  FC, InputHTMLAttributes, ChangeEvent, ChangeEventHandler, FocusEventHandler,
} from 'react';
import { StyledTextInput } from './styled';


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
  value?: string | number;
}

type Props = InputHTMLAttributes<HTMLInputElement> & OwnProps;

export const Input: FC<Props> = ({
  touched, error, value, onBlur, onChange, ...rest
}) => {
  const meta = { touched, error };
  return (
    <StyledTextInput
      value={value || ''}
      onChange={onChange}
      onBlur={onBlur}
      disabled={rest.disabled}
      {...rest}
      {...meta}
    />
  );
};
