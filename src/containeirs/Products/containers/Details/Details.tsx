import React, { FC } from 'react';
import { useGetProductDetailsQuery } from 'generated/graphql';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';
import { DetailsView } from 'containeirs/Products/containers/Details/DetailsView';
import { SectionWrapper } from 'containeirs/Products/styled';
import { ReviewSection } from '../Review/ReviewSection';

interface Props extends RouteComponentProps<{productId: string}> {
  redirectBack?: VoidFunction;
}
const Details: FC<Props> = ({
  match,
}) => {
  const { data, loading } = useGetProductDetailsQuery({
    variables: {
      productId: match.params.productId,
    },
    fetchPolicy: 'no-cache',
  });

  if (loading) {
    return <Loader fullscreen />;
  }


  return (
    <SectionWrapper>
      <DetailsView data={data} />
      <ReviewSection productId={match.params.productId} />
    </SectionWrapper>
  );
};

export default Details;
