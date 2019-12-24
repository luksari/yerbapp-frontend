/**
 * A query hook that caches its last valid `data` value. This differs to the
 * normal behaviour which will clear the `data` value back to the empty object
 * `{}` when a query is re-fetched (either due to calling `refetch` or the
 * variables changing).
 * @see https://gist.github.com/jedrichards/c02af3496f4e304b720a9624db647dfb
 */

import { DocumentNode } from 'graphql';
import { useEffect, useState } from 'react';
import { useQuery, QueryHookOptions } from '@apollo/react-hooks';

function useCachedQuery<TData, TVariables = any>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>,
) {
  const [data, setData] = useState<null | TData>(null);
  const res = useQuery<TData, TVariables>(query, options);

  useEffect(() => {
    if (Object.keys((res && res.data) || {}).length > 0) {
      setData(res.data!);
    }
  }, [res, res.networkStatus]);

  return {
    ...res,
    data,
  };
}

export { useCachedQuery };
