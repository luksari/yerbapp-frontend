import React from 'react';
import { useGetMeDetailsQuery, useEditUserMutation } from 'generated/graphql';
import { notificationSuccess, notificationError } from 'components/Notification';
import { ProfileForm, ProfileFormData } from './components/ProfileForm';

const Profile = () => {
  const { data, loading, error: getError } = useGetMeDetailsQuery();
  console.warn(loading);
  const [editUser, { loading: saving }] = useEditUserMutation({
    optimisticResponse: null,
  });
  const handleSubmit = async (user: ProfileFormData) => {
    const userData = {
      ...user.profile,
    };
    try {
      const { data: editResponse } = await editUser({
        variables: {
          user: userData,
          userId: data.whoAmI.id,
        },
      });
      notificationSuccess({ title: 'Sukces', message: 'Pomyślnie zaktualizowano dane' });
    } catch {
      notificationError({ title: 'Wystąpił bład', message: 'Nie udało się zaktualizować danych' });
    }
  };

  return (
    <>
      {data && <ProfileForm data={data} isLoading={loading} isSaving={saving} onSubmit={handleSubmit} /> }
    </>
  );
};

export default Profile;
