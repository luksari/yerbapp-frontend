import { useState, useEffect } from 'react';

export const usePagination = (perPage = 5, start = 1) => {
  const [page, setPage] = useState(start);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (page === 1) {
      setOffset(0);
    } else {
      setOffset((prevOffset) => prevOffset + perPage);
    }
  }, [page]);

  return { offset, perPage, setPage };
};
