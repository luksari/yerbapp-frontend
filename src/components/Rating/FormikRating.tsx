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
} & RatingComponentProps;

export const FormikRating: FC<Props> = ({
  name,
  label,
  size = SizeType.Normal,
  vertical = false,
  className,
  ...rest
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const value = get(values, name);
  const [rating, setRating] = useState(value);

  const handleClick = (val) => setRating(val);
  const handleChange = useCallback((val: number) => setFieldValue(name, val, false), [rating]);

  return useMemo(() => (
    <InputWrapper size={size} vertical={vertical} className={className}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledRating {...rest} onChange={handleChange} onClick={handleClick} initialRating={rating} emptySymbol={<EmptySymbol />} fullSymbol={<FullSymbol />} quiet />
    </InputWrapper>
  ), [values[name]]);
};
