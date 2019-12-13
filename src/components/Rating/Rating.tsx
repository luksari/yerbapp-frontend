import React, { FC } from 'react';
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

export const Rating: FC<Props> = ({
  name,
  label,
  initialRating,
  onChange,
  size = SizeType.Normal,
  vertical = false,
  ...rest
}) => {
  let value;
  let handleChange;

  const context = useFormikContext<any>();

  if (context) {
    value = get(context.values, name);
    handleChange = context.setFieldValue(name, value, false);
  } else {
    value = initialRating;
    handleChange = onChange;
  }

  return (
    <InputWrapper size={size} vertical={vertical}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledRating {...rest} onChange={handleChange} onClick={handleChange} initialRating={value} emptySymbol={<EmptySymbol />} fullSymbol={<FullSymbol />} quiet />
    </InputWrapper>
  );
};
