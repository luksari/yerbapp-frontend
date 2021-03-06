import React, { FC } from 'react';
import { Formik, FormikConfig } from 'formik';
import { ReviewFormData } from 'containeirs/Products/types';
import { FormField } from 'components/Form/components/FormField';
import { Textarea } from 'components/Textarea';
import { FormFieldset } from 'components/Form/components/FormFieldset/FormFieldset';
import { FormikRating } from 'components/Rating/FormikRating';
import { SizeType } from 'components/Rating/types';
import { ReviewFormWrapper } from 'containeirs/Products/styled';
import { Button } from 'components/Button';
import { RoundedButton } from 'containeirs/Products/components/Card/styled';
import { Icon } from 'antd';
import { AdditionalText } from 'components/Form/components/FormField/styled';
import { some } from 'lodash';


type Props = FormikConfig<ReviewFormData>

type Errors = Record<keyof ReviewFormData, string>;

const validate = ({
  aroma, description, energy, bitterness, overall, price, taste,
}: ReviewFormData) => {
  const errors = {} as Errors;
  if (some({
    aroma, description, energy, bitterness, overall, price, taste,
  }, (o) => o === 0)) {
    errors.additional = 'Musisz określić oceny aby dodać recenzję!';
  }
  if (description.length > 700) {
    errors.description = 'Maksymalna długość recenzji to 700 znaków';
  }
  return errors;
};

export const ReviewForm: FC<Props> = ({
  initialValues,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      validateOnChange
    >
      {({
        dirty, resetForm, values, isValid, errors, isSubmitting, submitForm,
      }) => (
        <ReviewFormWrapper>
          <FormFieldset
            legendTitle="Twoja ocena"
            columns={3}
            fullWidth
          >
            <FormikRating
              size={SizeType.Small}
              label="Aromat"
              name="aroma"
            />
            <FormikRating
              size={SizeType.Small}
              label="Gorycz"
              name="bitterness"
            />
            <FormikRating
              size={SizeType.Small}
              label="Pobudzenie"
              name="energy"
            />
            <FormikRating
              size={SizeType.Small}
              label="Cena"
              name="price"
            />
            <FormikRating
              size={SizeType.Small}
              label="Smak"
              name="taste"
            />
            <FormikRating
              size={SizeType.Small}
              label="Ogólna ocena"
              name="overall"
            />
            {errors.additional && <AdditionalText error={errors.additional}>{errors.additional}</AdditionalText> }
            {dirty && <RoundedButton icon={<Icon type="close" />} onClick={() => resetForm({ values: { ...initialValues, description: values.description } })} />}
          </FormFieldset>
          <FormField
            component={Textarea}
            label="Recenzja:"
            name="description"
            fullWidth
            props={{
              autosize: {
                maxRows: 10,
                minRows: 7,
              },
            }}
          />
          <Button type="button" onClick={() => submitForm()} disabled={!isValid || isSubmitting || !dirty}>Dodaj</Button>
        </ReviewFormWrapper>
      )}
    </Formik>
  );
};
