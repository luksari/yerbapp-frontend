import React, { FC } from 'react';
import {
  useField, FieldConfig,
} from 'formik';
import { InputWrapper, InputLabel, AdditionalText } from './styled';


type CustomFormFieldProps<T> = T extends FC<infer R> ? {
  component: T;
  props: Omit<R, keyof FieldConfig>;
  label: string;
} : never;

type WrappedFormFieldProps<T> = CustomFormFieldProps<T> & FieldConfig;

export function FormField<T extends FC<any>>({
  component: Component, props, label, ...rest
}: WrappedFormFieldProps<T>) {
  const [field, meta] = useField(rest);
  return (
    <InputWrapper>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>

      <Component
        {...rest}
        {...props}
        {...field}
        {...meta}
      />
      {meta.touched && meta.error
        && (
          <AdditionalText error={meta.error}>
            {meta.error}
          </AdditionalText>
        )}
    </InputWrapper>
  );
}
