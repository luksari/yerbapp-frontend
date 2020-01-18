import React, { FC } from 'react';
import { useGetProductDetailsQuery } from 'generated/graphql';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';
import { DetailsView } from 'containeirs/Products/containers/Details/DetailsView';
import { SectionWrapper } from 'containeirs/Products/styled';
import { notificationError } from 'components/Notification';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { ReviewSection } from '../Review/ReviewSection';

interface Props extends RouteComponentProps<{productId: string}> {
  redirectBack: VoidFunction;
}
const Details: FC<Props> = ({
  match,
  redirectBack,
}) => {
  const { data, loading } = useGetProductDetailsQuery({
    variables: {
      productId: match.params.productId,
    },
    fetchPolicy: 'no-cache',
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się pobrać detali Yerba Mate.' }),
  });

  if (loading) {
    return <Loader fullscreen />;
  }


  return (
    <SectionWrapper>
      {data && <DetailsView data={data} redirectBack={redirectBack} /> }
      <ReviewSection productId={match.params.productId} />
    </SectionWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectBack: () => dispatch(push('/products')),
});

const withConnect = connect(
  mapDispatchToProps,
);

export default withConnect(Details);
