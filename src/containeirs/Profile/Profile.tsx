import React from 'react';
import {
  useGetMeDetailsQuery, useEditUserMutation,
} from 'generated/graphql';
import { notificationError, notificationSuccess } from 'components/Notification';
import { Loader } from 'components/Loader';
import { ProfileForm, ProfileFormData } from './components/ProfileForm';

const Profile = () => {
  const { data, loading } = useGetMeDetailsQuery({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się pobrać danych profilu użytkownika.' }),
  });

  const [editUser, { loading: saving }] = useEditUserMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się zapisć danych profilu użytkownika.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie zapisano profil użytkownika!' }),
  });

  const handleSubmit = async (user: ProfileFormData) => {
    const userData = {
      ...user.profile,
    };
    await editUser({
      variables: {
        user: userData,
        userId: data.whoAmI.id,
      },
    });
  };

  if (loading) {
    return <Loader fullscreen />;
  }

  return (
    <>
      {data && <ProfileForm data={data} isLoading={loading} isSaving={saving} onSubmit={handleSubmit} /> }
    </>
  );
};

export default Profile;
