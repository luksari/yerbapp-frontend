import React, { FC } from 'react';
import { Form } from 'components/Form';
import { GetMeDetailsQuery, Profile } from 'generated/graphql';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { FormFieldset } from 'components/Form/components/FormFieldset/FormFieldset';
import { Rating } from 'components/Rating';
import { BigUserAvatar } from './styled';

interface Props {
  data: GetMeDetailsQuery;
  isLoading: boolean;
  onSubmit: (user: ProfileFormData) => void;
  handleBack: VoidFunction;
  isSaving: boolean;
}

export interface ProfileFormData {
  id?: string;
  name?: string;
  description?: string;
  role?: string;
  profile: Partial<Profile>;
}

export const ProfileForm: FC<Props> = ({
  data,
  isLoading,
  onSubmit,
  isSaving,
  handleBack,
}) => {
  return (
    <Form<ProfileFormData>
      title="Twój profil"
      subTitle="Edytuj swoje dane"
      initialValues={data.whoAmI}
      isLoading={isLoading}
      isSaving={isSaving}
      handleClose={handleBack}
      onSubmit={onSubmit}
    >
      <BigUserAvatar username={data.whoAmI.username} />
      <FormFieldset
        legendTitle="Twoje dane"
      >
        <FormField
          name="email"
          component={Input}
          label="Email"
          props={{
            disabled: true,
            placeholder: 'np. jacek@placek.com',
          }}
        />
        <FormField
          name="username"
          component={Input}
          label="Nazwa użytkownika"
          props={{
            disabled: true,
            placeholder: 'Twoja nazwa użytkownika...',
          }}
        />
        <FormField
          name="role"
          component={Input}
          label="Twoja rola"
          props={{
            disabled: true,
            placeholder: 'Twoja rola użytkownika...',
          }}
        />
      </FormFieldset>
      <FormFieldset
        legendTitle="Twoje preferencje"
        columns={3}
        fullWidth
      >
        <Rating
          label="Aromat"
          name="profile.aromaImportance"
        />
        <Rating
          label="Gorycz"
          name="profile.bitternessImportance"
        />
        <Rating
          label="Pobudzenie"
          name="profile.energyImportance"
        />
        <Rating
          label="Cena"
          name="profile.priceImportance"
        />
        <Rating
          label="Smak"
          name="profile.tasteImportance"
        />
        <Rating
          label="Ogólna ocena"
          name="profile.overallImportance"
        />
      </FormFieldset>
    </Form>
  );
};
