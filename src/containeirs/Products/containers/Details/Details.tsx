import React, { FC, useMemo } from 'react';
import { useGetProductDetailsQuery } from 'generated/graphql';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';
import { DetailsView } from 'containeirs/Products/components/DetailsView';

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
  });
  const isLoading = useMemo(() => loading || !data, [loading, loading]);

  if (isLoading) {
    return <Loader fullscreen />;
  }


  return (
    <DetailsView data={data} />
  );
};

export default Details;
