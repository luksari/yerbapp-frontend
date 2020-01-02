import React, { FC } from 'react';
import TypeForm, { TypeFormData } from 'containeirs/Types/components/TypeForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useEditTypeMutation, useGetTypeQuery } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';

interface Props extends RouteComponentProps<{typeId: string}> {
  handleBack: VoidFunction;
}

const TypeEditForm: FC<Props> = ({
  handleBack,
  match,
}) => {
  const { data, loading } = useGetTypeQuery({
    variables: {
      typeId: match.params.typeId,
    },
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się pobrać danych do edycji typu.' }),
  });

  const [editType, { loading: saving }] = useEditTypeMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się zmodyfikować typu Yerba Mate.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie zmodyfikowano typ Yerba Mate!' }),
  });

  const handleSubmit = async (values: TypeFormData) => {
    try {
      await editType({
        variables: {
          typeId: match.params.typeId,
          type: {
            name: values.name,
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
    <TypeForm
      title="Edytuj typ"
      subTitle="Zmodyfikuj istniejący typ Yerba Mate"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      data={data?.type}
      isLoading={loading}
      isEdit
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/admin/types')),
});

export default connect(null, mapDispatchToProps)(TypeEditForm);
