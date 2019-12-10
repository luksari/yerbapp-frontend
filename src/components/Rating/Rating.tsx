import React, { FC } from 'react';
import { RatingComponentProps } from 'react-rating';
import { useFormikContext } from 'formik';
import { get } from 'lodash';
import { InputWrapper, InputLabel } from 'components/Form/components/FormField/styled';
import { EmptySymbol, FullSymbol, StyledRating } from './styled';

export enum RatingType {
  Percentage = 'percentage',
  Integer = 'integer'
}


type Props = {
  name: string;
  label?: string;
} & RatingComponentProps;

export const Rating: FC<Props> = ({ name, label }) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const handleValueChange = (value: number) => {
    setFieldValue(name, value, false);
  };
  const value = get(values, name);
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledRating onChange={handleValueChange} onClick={handleValueChange} initialRating={value} emptySymbol={<EmptySymbol />} fullSymbol={<FullSymbol />} />
    </InputWrapper>
  );
};
