import React, { FC } from 'react';
import RankForm, { RankFormData } from 'containeirs/Ranks/components/RankForm';
import { notificationError, notificationSuccess } from 'components/Notification';
import { useEditRankMutation, useGetRankQuery } from 'generated/graphql';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';

interface Props extends RouteComponentProps<{rankId: string}> {
  handleBack: VoidFunction;
}

const RankEditForm: FC<Props> = ({
  handleBack,
  match,
}) => {
  const { data, loading } = useGetRankQuery({
    variables: {
      rankId: match.params.rankId,
    },
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się pobrać danych do edycji rangi.' }),
  });

  const [editRank, { loading: saving }] = useEditRankMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się zmodyfikować rangi.' }),
    onCompleted: () => notificationSuccess({ title: 'Sukces', message: 'Pomyślnie zmodyfikowano rangę!' }),
  });

  const handleSubmit = async (values: RankFormData) => {
    try {
      await editRank({
        variables: {
          rankId: match.params.rankId,
          rank: {
            name: values.name,
            lowerRange: values.lowerRange,
            upperRange: values.upperRange,
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
    <RankForm
      title="Edytuj rangę"
      subTitle="Zmodyfikuj istniejącą rangę"
      handleBack={handleBack}
      onSubmit={handleSubmit}
      isSaving={saving}
      data={data?.rank}
      isLoading={loading}
      isEdit
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleBack: () => dispatch(push('/admin/ranks')),
});

export default connect(null, mapDispatchToProps)(RankEditForm);
