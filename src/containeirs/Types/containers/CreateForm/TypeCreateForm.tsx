import React, { FC } from 'react';
import TypeForm, { TypeFormData } from 'containeirs/Types/components/TypeForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useAddTypeMutation, GetTypesDocument } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

interface Props {
  handleBack: VoidFunction;
}

const TypeCreateForm: FC<Props> = ({
  handleBack,
}) => {
  const [addType, { loading: saving }] = useAddTypeMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się utworzyć typu Yerba Mate.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie utworzono typ Yerba Mate!' }),
  });

  const handleSubmit = async (values: TypeFormData) => {
    try {
      await addType({
        variables: {
          type: {
            name: values.name!,
          },
        },
        refetchQueries: [{
          query: GetTypesDocument,
        }],
      });
      handleBack();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <TypeForm
      title="Utwórz typ"
      subTitle="Dodaj nowy typ Yerba Mate"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      data={{ name: '' }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/admin/types')),
});

export default connect(null, mapDispatchToProps)(TypeCreateForm);
