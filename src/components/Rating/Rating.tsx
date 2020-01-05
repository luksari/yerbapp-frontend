import React, {
  FC, useMemo, useCallback, useState,
} from 'react';
import { RatingComponentProps } from 'react-rating';
import { useFormikContext } from 'formik';
import { get } from 'lodash';
import {
  EmptySymbol, FullSymbol, StyledRating, InputWrapper, InputLabel,
} from './styled';
import { SizeType } from './types';

type Props = {
  name?: string;
  label?: string;
  vertical?: boolean;
  size?: SizeType;
  handleChangeCallback?: (value: number, name: string) => void;
} & RatingComponentProps;

export const Rating: FC<Props> = ({
  name,
  label,
  initialRating,
  size = SizeType.Normal,
  vertical = false,
  className,
  handleChangeCallback,
  ...rest
}) => {
  const context = useFormikContext<any>();
  const value = context ? get(context.values, name) : initialRating;
  const [rating, setRating] = useState(value);
  const handleClick = (val) => setRating(val);
  const handleChange = useCallback((val: number) => context ? context.setFieldValue(name, val, false) : handleChangeCallback(value, name), [rating]);

  return useMemo(() => (
    <InputWrapper size={size} vertical={vertical} className={className}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledRating {...rest} onChange={handleChange} onClick={handleClick} initialRating={rating} emptySymbol={<EmptySymbol />} fullSymbol={<FullSymbol />} quiet />
    </InputWrapper>
  ), [value]);
};
