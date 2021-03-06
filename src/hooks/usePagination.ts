import { useState, useEffect } from 'react';

export const usePagination = (perPage = 5, start = 1) => {
  const [page, setPage] = useState(start);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(page * perPage - perPage);
  }, [page]);

  return { offset, perPage, setPage };
};
