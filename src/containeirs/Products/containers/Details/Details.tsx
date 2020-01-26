import React, { FC } from 'react';
import { GetProductDetailsDocument, useAddReviewMutation } from 'generated/graphql';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';
import { DetailsView } from 'containeirs/Products/containers/Details/DetailsView';
import { SectionWrapper } from 'containeirs/Products/styled';
import { notificationError, notificationSuccess } from 'components/Notification';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated, makeSelectUserId } from 'store/auth/slice';
import { useQuery } from 'react-apollo';
import { ReviewFormData } from 'containeirs/Products/types';
import { ReviewSection } from '../Review/ReviewSection';

interface Props extends RouteComponentProps<{productId: string}> {
  redirectBack: VoidFunction;
  isAuthenticated: boolean;
  userId: string;
}
const Details: FC<Props> = ({
  match,
  redirectBack,
  isAuthenticated,
  userId,
}) => {
  const { productId } = match.params;

  const {
    data, loading, networkStatus, refetch,
  } = useQuery(GetProductDetailsDocument,
    {
      variables: {
        productId,
        peersonalizeFor: userId,
      },
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true,
      onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się pobrać detali Yerba Mate.' }),
    });

  const [addReview, { loading: adding }] = useAddReviewMutation({
    onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się dodać recenzji Yerba Mate.' }),
    onCompleted: () => {
      notificationSuccess({ title: 'Sukces', message: 'Pomyślnie dodano recenzję Yerba Mate!' });
      refetch({
        productId,
        peersonalizeFor: userId,
      });
    },
  });

  const submitReview = async (values: ReviewFormData) => {
    try {
      await addReview({
        variables: {
          review: {
            ...values,
            productId,
          },
        },
        fetchPolicy: 'no-cache',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const isLoading = loading || adding || networkStatus === 4;


  if (isLoading) {
    return <Loader fullscreen />;
  }


  return (
    <SectionWrapper>
      <Helmet
        title="Szczegóły produktu"
      />
      <Title>Szczegóły produktu</Title>
      <DetailsView data={data} redirectBack={redirectBack} />
      <ReviewSection productId={productId} isAuthenticated={isAuthenticated} isLoading={isLoading} data={data} handleSubmitReview={submitReview} />
    </SectionWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectBack: () => dispatch(push('/products')),
});

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
  userId: makeSelectUserId(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(Details);
