import React, { FC } from 'react';
import ManufacturerForm, { ManufacturerFormData } from 'containeirs/Manufacturers/components/ManufacturerForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useEditManufacturerMutation, useGetManufacturerQuery } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';

interface Props extends RouteComponentProps<{manufacturerId: string}> {
  handleBack: VoidFunction;
}

const ManufacturerEditForm: FC<Props> = ({
  handleBack,
  match,
}) => {
  const { data, loading } = useGetManufacturerQuery({
    variables: {
      manufacturerId: match.params.manufacturerId,
    },
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się pobrać danych profilu użytkownika.' }),
  });

  const [editManufacturer, { loading: saving }] = useEditManufacturerMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się zmodyfikować producenta Yerba Mate.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie zmodyfikowano producenta Yerba Mate!' }),
  });

  const handleSubmit = async (values: ManufacturerFormData) => {
    try {
      await editManufacturer({
        variables: {
          manufacturerId: match.params.manufacturerId,
          manufacturer: {
            name: values.name,
            country: values.country,
            photoUrl: values.photoUrl,
          },
        },
      });
      handleBack();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading || !data) {
    return <Loader fullscreen />;
  }


  return (
    <ManufacturerForm
      title="Utwórz producenta"
      subTitle="Dodaj nowego producenta Yerba Mata"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      data={data?.manufacturer}
      isLoading={loading}
      isEdit
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/admin/manufacturers')),
});

export default connect(null, mapDispatchToProps)(ManufacturerEditForm);
