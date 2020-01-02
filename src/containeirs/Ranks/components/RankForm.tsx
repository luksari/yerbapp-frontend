import React, { FC } from 'react';
import { FormProps } from 'utils/types';
import { Form } from 'components/Form';
import { Input } from 'components/Input';
import { FormField } from 'components/Form/components/FormField';
import { RankData } from '../types';

export type RankFormData = Partial<RankData>

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
