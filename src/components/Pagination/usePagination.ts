import { useState, useMemo } from 'react';

/**
 * Frontend pagination to be used with Pagination component
 */
export const usePagination = (perPage: number, data: any[]) => {
  const [page, setPage] = useState(1);

  const sliceStart = (page - 1) * perPage;
  const sliceEnd = page * perPage;
  const trimmedData = useMemo(() => data.slice(sliceStart, sliceEnd), [data, page]);

  return {
    page,
    perPage,
    setPage,
    data: trimmedData,
  };
};
