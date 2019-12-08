import React from 'react';
import { Form } from 'components/Form';
import { GetMeDetailsQuery } from 'generated/graphql';
import { FormField } from 'components/Form/components/FormField';
import { Input } from 'components/Input';
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
    </Form>
  );
};
