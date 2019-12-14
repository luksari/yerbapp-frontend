import React, {
  Children, cloneElement, ReactElement,
} from 'react';
import { Button, ButtonType } from 'components/Button';
import { Helmet } from 'react-helmet';
import { Icon } from 'antd';
import {
  FormikConfig, Formik,
} from 'formik';
import { Title } from 'components/TitleBar';
import { Loader } from 'components/Loader';
import {
  FormContainer, StyledForm, FormActionsWrapper, ButtonsWrapper,
} from './styled';

interface CustomFormProps<Values extends Record<string, any> = any> {
  subTitle: string;
  /** Title to show in html title and in Topbar */
  title: string;
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

export function Form<Values>({
  title,
  children,
  handleClose,
  initialValues,
  onSubmit,
  validate,
  isSaving,
  isLoading,
}: FormProps<Values>) {
  if (isLoading) {
    return <Loader fullscreen />;
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {
        ({
          handleSubmit, isValid, isSubmitting,
        }) => (
          <FormContainer>
            <Helmet
              title={title}
            />
            <Title>{title}</Title>
            <StyledForm
              onSubmit={handleSubmit}
            >
              {
                Children.map(children,
                  (child: ReactElement) => cloneElement(child))
              }
              <FormActionsWrapper>
                <ButtonsWrapper>
                  <Button
                    icon={<Icon type="save" />}
                    disabled={isSaving || isSubmitting || !isValid}
                    themeType={ButtonType.Primary}
                    type="submit"
                  >
              Zapisz
                  </Button>
                  <Button
                    themeType={ButtonType.Link}
                    onClick={handleClose}
                    type="button"
                  >
              Zamknij
                  </Button>
                </ButtonsWrapper>
              </FormActionsWrapper>
            </StyledForm>
          </FormContainer>
        )
      }
    </Formik>
  );
}
