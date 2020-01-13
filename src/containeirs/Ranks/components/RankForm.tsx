import React, { FC } from 'react';
import { FormProps } from 'utils/types';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormField } from 'components/Form/components/FormField';
import { RankData } from '../types';

export type RankFormData = Partial<RankData>

const validate = ({ name, lowerRange, upperRange }: RankData) => {
  const errors = {} as Record<keyof RankData, string>;

  if (!name) {
    errors.name = 'Pole wymagane';
  } else if (name.length > 100) {
    errors.name = 'Długość nie powinna być dłuższa niż 100 znaków';
  }

  if (lowerRange === null || lowerRange === undefined) {
    errors.lowerRange = 'Pole wymagane';
  } else if (lowerRange < 0) {
    errors.lowerRange = 'Wartość musi być większa od 0';
  } else if (lowerRange > upperRange) {
    errors.lowerRange = `Wartość musi być mniejsza niż ${upperRange}`;
  }

  if (upperRange === null || upperRange === undefined) {
    errors.upperRange = 'Pole wymagane';
  } else if (upperRange < 0) {
    errors.upperRange = 'Wartość musi być większa od 0';
  } else if (upperRange < lowerRange) {
    errors.upperRange = `Wartość musi być większa niż ${lowerRange}`;
  }
  return errors;
};
const RankForm: FC<FormProps<RankFormData>> = ({
  data,
  title,
  subTitle,
  handleBack,
  onSubmit,
  isLoading,
  isSaving,
}) => {
  return (
    <Form<RankFormData>
      title={title}
      subTitle={subTitle}
      initialValues={data}
      isLoading={isLoading}
      isSaving={isSaving}
      handleClose={handleBack}
      onSubmit={onSubmit}
      validate={validate}
    >
      <FormField
        name="name"
        component={Input}
        label="Nazwa typu:"
        props={{
          placeholder: 'Wpisz nazwę typu Yerba Mate...',
        }}
      />
      <FormField
        name="lowerRange"
        component={Input}
        type="number"
        label="Dolna granica punktowa:"
        props={{
          placeholder: 'Podaj dolną granicę punktową dla rangi...',
        }}
      />
      <FormField
        name="upperRange"
        component={Input}
        type="number"
        label="Górna granica punktowa:"
        props={{
          placeholder: 'Podaj górną granicę punktową dla rangi...',
        }}
      />
    </Form>
  );
};

export default RankForm;
