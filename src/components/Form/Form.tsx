import React, {
  FC, Children, cloneElement, ReactElement,
} from 'react';
import { Button, ButtonType } from 'components/Button';
import { Helmet } from 'react-helmet';
import { Icon } from 'antd';
import {
  FormikConfig, Formik,
} from 'formik';
import { Title } from 'components/TitleBar';
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
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {
        ({
          handleSubmit, isValid, isSubmitting, values,
        }) => (
          <FormContainer>
            <Helmet
              title={title}
            />
            <Title>{title}</Title>
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
                  disabled={isSaving || isSubmitting || !isValid}
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
        )
      }
    </Formik>
  );
};
