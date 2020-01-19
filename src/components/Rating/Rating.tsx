import React, {
  FC, useMemo, useState,
} from 'react';
import { RatingComponentProps } from 'react-rating';
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

export const Rating: FC<Props> = ({
  name,
  label,
  initialRating,
  size = SizeType.Normal,
  vertical = false,
  className,
  ...rest
}) => {
  const [rating, setRating] = useState(initialRating);
  const handleClick = (val) => setRating(val);

  return useMemo(() => (
    <InputWrapper size={size} vertical={vertical} className={className}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledRating {...rest} onClick={handleClick} initialRating={rating} emptySymbol={<EmptySymbol />} fullSymbol={<FullSymbol />} quiet />
    </InputWrapper>
  ), [rating]);
};
