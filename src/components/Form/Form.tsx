import React, {
  FC, Children, cloneElement, ReactElement,
} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button, ButtonType } from 'components/Button';
import { Helmet } from 'react-helmet';
import { Icon } from 'antd';
import {
  FormikConfig, useFormik, withFormik, WithFormikConfig,
} from 'formik';
import {
  FormContainer, StyledForm, FormTitle, FormActionsWrapper, ButtonsWrapper,
} from './styled';

interface CustomFormProps<Values extends Record<string, any> = any> {
  subTitle: string;
  /** Title to show in html title and in Topbar */
  title: string;
  /** Fields and other content included in Form */
  children: ReactElement[] | ReactElement;
  /** Close handler */
  handleClose: VoidFunction;
  /** Initial Values */
  initialValues: Values;
  /** Values of the form */
  formData?: Values;
  /** Props to show indicator */
  isLoading: boolean;
  isSaving: boolean;
  /** It specifies if the form is in EditMode */
  isEdit?: boolean;
}

type FormProps<Values> = CustomFormProps<Values> & FormikConfig<Values>

export const Form: FC<FormProps<any>> = ({
  title,
  children,
  handleClose,
  subTitle,
  initialValues,
  onSubmit,
  validate,
  isSaving,
  ...rest
}) => {
  const {
    handleSubmit,
    isValid,
    isSubmitting,
    values,
  } = useFormik({ initialValues, onSubmit, validate });
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
