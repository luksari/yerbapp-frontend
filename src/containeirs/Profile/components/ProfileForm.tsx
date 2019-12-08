import React, { FC } from 'react';
import { Form } from 'components/Form';
import { GetMeDetailsQuery, Profile } from 'generated/graphql';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { FormFieldset } from 'components/Form/components/FormFieldset/FormFieldset';
import { BigUserAvatar } from './styled';

interface Props {
  data: GetMeDetailsQuery;
  isLoading: boolean;
  onSubmit: (user: ProfileFormData) => void;
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
}) => {
  return (
    <Form<ProfileFormData>
      title="Twój profil"
      subTitle="Edytuj swoje dane"
      initialValues={data.whoAmI}
      isLoading={isLoading}
      isSaving={isSaving}
      handleClose={console.warn}
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
        <FormField
          name="profile.aromaImportance"
          component={Input}
          label="Aromat"
          type="number"
          props={{
            placeholder: 'Aromat...',
          }}
        />
        <FormField
          name="profile.bitternessImportance"
          component={Input}
          label="Gorycz"
          type="number"
          props={{
            placeholder: 'Aromat',
          }}
        />
        <FormField
          name="profile.energyImportance"
          component={Input}
          label="Pobudzenie"
          type="number"
          props={{
            placeholder: 'Aromat',
          }}
        />
        <FormField
          name="profile.priceImportance"
          component={Input}
          label="Cena"
          type="number"
          props={{
            placeholder: 'Aromat',
          }}
        />
        <FormField
          name="profile.tasteImportance"
          component={Input}
          label="Smak"
          type="number"
          props={{
            placeholder: 'Aromat',
          }}
        />
        <FormField
          name="profile.overallImportance"
          component={Input}
          label="Ogólna ocena"
          type="number"
          props={{
            placeholder: 'Ogólna ocena',
          }}
        />
      </FormFieldset>
    </Form>
  );
};
