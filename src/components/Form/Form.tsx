import React, {
  FC, Children, cloneElement, ReactElement,
} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, ButtonType } from 'components/Button';
import { Helmet } from 'react-helmet';
import { Icon } from 'antd';
import { FormikConfig, useFormik } from 'formik';
import {
  FormContainer, StyledForm, FormTitle, FormActionsWrapper, ButtonsWrapper,
} from './styled';

interface CustomFormProps<T extends Record<string, any> = any> {
  /** Title of form to show in component */
  subTitle: string;
  /** Title to show in html title and in Topbar */
  title: string;
  /** Fields and other content included in Form */
  children: ReactElement[] | ReactElement;
  /** Close handler */
  handleClose: VoidFunction;
  /** Initial Values */
  initialValues: T;
  /** onSubmit custom method */
  onSubmit: (values: T) => void;
  /** Values of the form */
  formData?: T;
  /** Custom validate function */
  handleValidate?: (values: T) => Record<keyof T, string | null>;
  /** Props to show indicator */
  isLoading: boolean;
  isSaving: boolean;
  /** It specifies if the form is in EditMode */
  isEdit?: boolean;
}

type GenericFormProps<T = any> = CustomFormProps<T> & FormikConfig<T>

const GenericForm: FC<GenericFormProps> = ({
  title,
  children,
  handleClose,
  subTitle,
  initialValues,
  onSubmit,
  handleValidate,
  isSaving,
  ...rest
}) => {
  const {
    handleSubmit,
    isValid,
    isSubmitting,
    values,
  } = useFormik({ initialValues, onSubmit, validate: handleValidate });
  const isDisabled = !isValid || isSubmitting || isSaving;
  return (
    <FormContainer>
      <Helmet
        title={title}
      />
      <h2>{title}</h2>
      <StyledForm
        onSubmit={handleSubmit}
      >
        <FormTitle>
          {subTitle}
        </FormTitle>
        {
          Children.map(children,
            (child: ReactElement) => cloneElement(child))
        }
      </StyledForm>
      <FormActionsWrapper>
        <ButtonsWrapper>
          <Button
            icon={<Icon type="save" />}
            disabled={isDisabled}
            type="submit"
            themeType={ButtonType.Primary}
            onClick={() => handleSubmit(values)}
          >
            Zapisz
          </Button>
          <Button
            themeType={ButtonType.Link}
            onClick={handleClose}
          >
            Zamknij
          </Button>
        </ButtonsWrapper>
      </FormActionsWrapper>
    </FormContainer>
  );
};


export const FormikForm = compose<FC<CustomFormProps>>(
)(GenericForm);

export function Form<T extends Record<string, any>>({ handleValidate, ...rest }: CustomFormProps<T>) {
  return (
    <FormikForm
      {...rest}
      onSubmit={rest.onSubmit}
      handleValidate={handleValidate}
    >
      {rest.children}
    </FormikForm>
  );
}
