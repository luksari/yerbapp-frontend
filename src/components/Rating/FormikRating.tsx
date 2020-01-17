import React, {
  FC, useMemo, useCallback, memo,
} from 'react';
import { RatingComponentProps } from 'react-rating';
import { useFormikContext } from 'formik';
import { get } from 'lodash';
import { AdditionalText } from 'components/Form/components/FormField/styled';
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

export const FormikRating: FC<Props> = memo(({
  name,
  label,
  size = SizeType.Normal,
  vertical = false,
  className,
  ...rest
}) => {
  const { values, setFieldValue } = useFormikContext<any>();
  const value = get(values, name);

  const handleChange = useCallback((val: number) => setFieldValue(name, val, true), [value]);

  return useMemo(() => (
    <InputWrapper size={size} vertical={vertical} className={className}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledRating {...rest} onChange={handleChange} onClick={handleChange} initialRating={value} emptySymbol={<EmptySymbol />} fullSymbol={<FullSymbol />} quiet />
    </InputWrapper>
  ), [values[name]]);
});
