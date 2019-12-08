import React from 'react';
import { Form } from 'components/Form';
import { GetMeDetailsQuery } from 'generated/graphql';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
import { FormFieldset } from 'components/Form/components/FormFieldset/FormFieldset';
import { BigUserAvatar } from './styled';

interface Props {
  data: GetMeDetailsQuery;
  loading: boolean;
}

export const ProfileForm: React.FC<Props> = ({
  data,
  loading,
}) => {
  return (
    <Form
      title="Twój profil"
      subTitle="Edytuj swoje dane"
      initialValues={data.whoAmI}
      isLoading={loading}
      isSaving={false}
      handleClose={console.warn}
      onSubmit={console.warn}
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
            placeholder: 'np. jacek@placek.com',
          }}
        />
        <FormField
          name="username"
          component={Input}
          label="Nazwa użytkownika"
          props={{
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
        columns={2}
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
      </FormFieldset>
    </Form>
  );
};
