import React, { FC } from 'react';
import RankForm, { RankFormData } from 'containeirs/Ranks/components/RankForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useAddRankMutation, GetRanksDocument } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

interface Props {
  handleBack: VoidFunction;
}

const RankCreateForm: FC<Props> = ({
  handleBack,
}) => {
  const [addRank, { loading: saving }] = useAddRankMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się utworzyć rangi.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie utworzono rangę!' }),
  });

  const handleSubmit = async (values: RankFormData) => {
    try {
      await addRank({
        variables: {
          rank: {
            name: values.name!,
            lowerRange: values.lowerRange!,
            upperRange: values.upperRange!,
          },
        },
        refetchQueries: [{
          query: GetRanksDocument,
        }],
      });
      handleBack();
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <RankForm
      title="Utwórz rangę"
      subTitle="Dodaj nową rangę określającą doświadczenie uużytkownika"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      data={{ name: '', lowerRange: undefined, upperRange: undefined }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/admin/ranks')),
});

export default connect(null, mapDispatchToProps)(RankCreateForm);
