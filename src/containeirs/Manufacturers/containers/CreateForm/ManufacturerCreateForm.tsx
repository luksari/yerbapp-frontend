import React, { FC } from 'react';
import ManufacturerForm, { ManufacturerFormData } from 'containeirs/Manufacturers/components/ManufacturerForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useAddManufacturerMutation, GetManufacturersDocument } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { GET_MANUFACTURERS } from 'queries/ManufacturerQueries';

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
    try {
      await addManufacturer({
        variables: {
          manufacturer: {
            name: values.name!,
            country: values.country!,
            creatorId: localStorage.getItem('userId'),
          },
        },
      });
      handleBack();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <ManufacturerForm
      title="Utwórz producenta"
      subTitle="Dodaj nowego producenta Yerba Mata"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      data={{ name: '', country: '' }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/admin/manufacturers')),
});

export default connect(null, mapDispatchToProps)(ManufacturerCreateForm);
