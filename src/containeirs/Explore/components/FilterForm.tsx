import React, { FC } from 'react';
import { Formik } from 'formik';
import { Input } from 'components/Input';
import { Rating } from 'components/Rating';
import { SizeType } from 'components/Rating/types';
import { FormikRating } from 'components/Rating/FormikRating';
import { RatingWrapper, StyledFormField } from '../styled';
import { WithAutoSave } from './WithAutoSave';

interface Props {
  formValues: any;
  handleSubmit: (values: any) => void;
}

export const FilterForm: FC<Props> = ({
  formValues,
  handleSubmit,
}) => {
  return (
    <Formik<typeof formValues>
      initialValues={formValues}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
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
              name="aromaImportance"
              size={SizeType.Small}
            />
            <FormikRating
              label="Gorycz"
              name="bitternessImportance"
              size={SizeType.Small}
            />
            <FormikRating
              label="Pobudzenie"
              name="energyImportance"
              size={SizeType.Small}
            />
            <FormikRating
              label="Cena"
              name="priceImportance"
              size={SizeType.Small}
            />
            <FormikRating
              label="Smak"
              name="tasteImportance"
              size={SizeType.Small}
            />
            <FormikRating
              label="Ogólna ocena"
              name="overallImportance"
              size={SizeType.Small}
            />
          </RatingWrapper>
        </WithAutoSave>
      )}
    </Formik>
  );
};
