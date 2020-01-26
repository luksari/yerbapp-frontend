import React, { FC, useEffect } from 'react';
import { useGetProductDetailsQuery, GetProductDetailsDocument } from 'generated/graphql';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';
import { DetailsView } from 'containeirs/Products/containers/Details/DetailsView';
import { SectionWrapper } from 'containeirs/Products/styled';
import { notificationError } from 'components/Notification';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { Title } from 'components/TitleBar';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsAuthenticated } from 'store/auth/slice';
import { useQuery } from 'react-apollo';
import { ReviewSection } from '../Review/ReviewSection';

interface Props extends RouteComponentProps<{productId: string}> {
  redirectBack: VoidFunction;
  isAuthenticated: boolean;
}
const Details: FC<Props> = ({
  match,
  redirectBack,
  isAuthenticated,
}) => {
  const {
    data, loading, networkStatus, refetch,
  } = useQuery(GetProductDetailsDocument,
    {
      variables: {
        productId: match.params.productId,
      },
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true,
      onError: () => notificationError({ title: 'Wystąpił błąd', message: 'Nie udało się pobrać detali Yerba Mate.' }),
    });

  useEffect(() => {
    if (networkStatus === 7) {
      refetch({
        productId: match.params.productId,
      });
    }
  }, [networkStatus]);


  if (loading || networkStatus === 4) {
    return <Loader fullscreen />;
  }


  return (
    <SectionWrapper>
      <Helmet
        title="Szczegóły produktu"
      />
      <Title>Szczegóły produktu</Title>
      <DetailsView data={data} redirectBack={redirectBack} />
      <ReviewSection productId={match.params.productId} isAuthenticated={isAuthenticated} handleRefetch={} />
    </SectionWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  redirectBack: () => dispatch(push('/products')),
});

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(Details);
