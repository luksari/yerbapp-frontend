import React, {
  FC, useMemo, useCallback, useState,
} from 'react';
import { RatingComponentProps } from 'react-rating';
import { useField } from 'formik';
import {
  EmptySymbol, FullSymbol, StyledRating, InputWrapper, InputLabel,
} from './styled';
import { SizeType } from './types';

type Props = {
  name?: string;
  label?: string;
  vertical?: boolean;
  size?: SizeType;
} & RatingComponentProps;

export const FormikRating: FC<Props> = ({
  name,
  label,
  initialRating,
  size = SizeType.Normal,
  vertical = false,
  className,
  readonly,
  ...rest
}) => {
  const [field] = useField(readonly ? '' : name);
  const [rating, setRating] = useState(initialRating);
  const handleClick = (val) => setRating(val);

  return useMemo(() => (
    <InputWrapper size={size} vertical={vertical} className={className}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledRating {...rest} onChange={field.onChange} onClick={handleClick} initialRating={rating} emptySymbol={<EmptySymbol />} fullSymbol={<FullSymbol />} quiet />
    </InputWrapper>
  ), [rating]);
};
