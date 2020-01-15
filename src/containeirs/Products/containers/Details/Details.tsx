import React, { FC, useMemo } from 'react';
import { useGetProductDetailsQuery } from 'generated/graphql';
import { RouteComponentProps } from 'react-router';
import { Loader } from 'components/Loader';
import { DetailsCard } from 'containeirs/Products/components/DetailsCard';

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
  const isLoading = useMemo(() => loading, [loading]);

  if (isLoading || !data) {
    return <Loader fullscreen />;
  }


  return (
    <div>
      <DetailsCard data={data} />
    </div>
  );
};

export default Details;
