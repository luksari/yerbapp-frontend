import React, { FC } from 'react';
import {
  useGetMeDetailsQuery, useEditUserMutation,
} from 'generated/graphql';
import { notificationError, notificationSuccess } from 'components/Notification';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Loader } from 'components/Loader';
import { ProfileForm, ProfileFormData } from './components/ProfileForm';

interface Props {
  handleBack: VoidFunction;
}

const ProfileRaw: FC<Props> = ({ handleBack }) => {
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

  if (loading || !data) {
    return <Loader fullscreen />;
  }

  return (
    <ProfileForm data={data?.whoAmI} isLoading={loading} isSaving={saving} onSubmit={handleSubmit} handleBack={handleBack} />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/explore')),
});

export default connect(null, mapDispatchToProps)(ProfileRaw);
