import React, { FC } from 'react';
import ManufacturerForm, { ManufacturerFormData } from 'containeirs/Manufacturers/components/ManufacturerForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useAddManufacturerMutation } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

interface Props {
  handleBack: VoidFunction;
}

const ManufacturerCreateForm: FC<Props> = ({
  handleBack,
}) => {
  const [addManufacturer, { loading: saving }] = useAddManufacturerMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się utworzyć producenta Yerba Mate.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie utworzono producenta Yerba Mate!' }),
  });

  const handleSubmit = async (values: ManufacturerFormData) => {
    await addManufacturer({
      variables: {
        manufacturer: {
          name: values.name!,
          country: values.country!,
          creatorId: localStorage.getItem('userId'),
        },
      },
    });
  };


  return (
    <ManufacturerForm
      title="Utwórz producenta"
      subTitle="Dodaj nowego producenta Yerba Mata"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/admin/manufacturers')),
});

export default connect(null, mapDispatchToProps)(ManufacturerCreateForm);
