import React, { FC, memo, useMemo } from 'react';
import { Formik } from 'formik';
import { Input } from 'components/Input';
import { SizeType } from 'components/Rating/types';
import { FormikRating } from 'components/Rating/FormikRating';
import { Icon } from 'antd';
import { RatingWrapper, StyledFormField } from '../styled';
import { WithAutoSave } from './WithAutoSave';
import { RoundedButton } from './Card/styled';

interface Props {
  formValues: any;
  handleSubmit: (values: any) => void;
}

export const FilterForm: FC<Props> = memo(({
  formValues,
  handleSubmit,
}) => {
  return useMemo(() => (
    <Formik<typeof formValues>
      initialValues={formValues}
      onSubmit={handleSubmit}
    >
      {({
        dirty,
        values,
        initialValues,
        resetForm,
      }) => (
        <WithAutoSave debounceMs={500}>
          <StyledFormField
            name="name"
            component={Input}
            fullWidth
            props={{
              placeholder: 'Wyszukaj po nazwie...',
            }}
          />
          <RatingWrapper>
            <FormikRating
              label="Aromat"
              name="aroma"
              size={SizeType.Small}
            />
            <FormikRating
              label="Gorycz"
              name="bitterness"
              size={SizeType.Small}
            />
            <FormikRating
              label="Pobudzenie"
              name="energy"
              size={SizeType.Small}
            />
            <FormikRating
              label="Cena"
              name="price"
              size={SizeType.Small}
            />
            <FormikRating
              label="Smak"
              name="taste"
              size={SizeType.Small}
            />
            <FormikRating
              label="Ogólna ocena"
              name="overall"
              size={SizeType.Small}
            />
            {dirty && (
              <RoundedButton
                icon={<Icon type="close" />}
                onClick={() => {
                  resetForm({ values: { ...initialValues, name: values.name } });
                }}
              />
            )}
          </RatingWrapper>
        </WithAutoSave>
      )}
    </Formik>
  ), [formValues]);
});
