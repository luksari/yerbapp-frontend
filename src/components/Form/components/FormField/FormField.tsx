import React, { FC } from 'react';
import {
  useField, Field, FieldConfig,
} from 'formik';
import { InputWrapper, InputLabel, AdditionalText } from './styled';


type CustomFormFieldProps<T> = T extends FC<infer R> ? {
  component: T;
  props: Omit<R, keyof FieldConfig>;
  label: string;
} : never;

type WrappedFormFieldProps<T> = CustomFormFieldProps<T> & FieldConfig;

export function WrappedFormField<T extends FC<any>>({
  component: Component, props, label, ...rest
}: WrappedFormFieldProps<T>) {
  const [field, meta] = useField(rest);
  return (
    <InputWrapper>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>

      <Component
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

type FormFieldProps<T> = CustomFormFieldProps<T> & Omit<FieldConfig, 'component'>;

export function FormField<T>({
  props, component, label, ...rest
}: FormFieldProps<T>) {
  return (
    <Field
      {...rest}
      component={WrappedFormField}

    ></Field>
  );
}
