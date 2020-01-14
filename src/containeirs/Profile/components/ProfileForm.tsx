import React, { FC } from 'react';
import { Form } from 'components/Form';
import { User } from 'generated/graphql';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { FormFieldset } from 'components/Form/components/FormFieldset/FormFieldset';
import { FormikRating } from 'components/Rating/FormikRating';
import { UploadImage } from 'components/UploadImage';
import { BigUserAvatar } from './styled';

interface Props {
  data: ProfileFormData;
  isLoading: boolean;
  onSubmit: (user: ProfileFormData) => void;
  handleBack: VoidFunction;
  isSaving: boolean;
}

export type ProfileFormData = Partial<User>;

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
      initialValues={data}
      isLoading={isLoading}
      isSaving={isSaving}
      handleClose={handleBack}
      onSubmit={onSubmit}
    >
      <BigUserAvatar
        username={data.username}
      />
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
        <UploadImage name="avatarUrl" label="Avatar użytkownika:" />
      </FormFieldset>
      <FormFieldset
        legendTitle="Twoje preferencje"
        columns={3}
        fullWidth
      >
        <FormikRating
          label="Aromat"
          name="profile.aromaImportance"
        />
        <FormikRating
          label="Gorycz"
          name="profile.bitternessImportance"
        />
        <FormikRating
          label="Pobudzenie"
          name="profile.energyImportance"
        />
        <FormikRating
          label="Cena"
          name="profile.priceImportance"
        />
        <FormikRating
          label="Smak"
          name="profile.tasteImportance"
        />
        <FormikRating
          label="Ogólna ocena"
          name="profile.overallImportance"
        />
      </FormFieldset>
    </Form>
  );
};
