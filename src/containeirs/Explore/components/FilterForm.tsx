import React, { FC } from 'react';
import { Formik } from 'formik';
import { Input } from 'components/Input';
import { Rating } from 'components/Rating';
import { SizeType } from 'components/Rating/types';
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
            <Rating
              label="Aromat"
              name="aromaImportance"
              size={SizeType.Small}
            />
            <Rating
              label="Gorycz"
              name="bitternessImportance"
              size={SizeType.Small}
            />
            <Rating
              label="Pobudzenie"
              name="energyImportance"
              size={SizeType.Small}
            />
            <Rating
              label="Cena"
              name="priceImportance"
              size={SizeType.Small}
            />
            <Rating
              label="Smak"
              name="tasteImportance"
              size={SizeType.Small}
            />
            <Rating
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
