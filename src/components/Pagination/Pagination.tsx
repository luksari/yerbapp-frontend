import React, {
  FC, useState, useLayoutEffect, useMemo,
} from 'react';
import { PaginationWrapper, PaginationButton, PaginationText } from 'components/Pagination/styled';
import { Icon } from 'antd';
import { ButtonVariant } from 'components/Button';

interface Props {
  itemCount: number;
  perPage: number;
  /** if set, the component behaves as controlled component */
  currentPage?: number; // starts from 1
  onPageChange?: (page: number) => void; // starting from 1
}

export const Pagination: FC<Props> = ({
  itemCount,
  perPage,
  currentPage,
  onPageChange = () => { return null; },
}) => {
  const [page, setPage] = useState(currentPage || 1);

  useLayoutEffect(() => {
    // If current page changes, set also internal page state
    // to allow to control the component from outside
    if (currentPage !== undefined && currentPage !== page) {
      setPage(currentPage);
    }
  }, [currentPage]);

  const from = Math.min(1 + (perPage * (page - 1)), itemCount);
  const to = Math.min(perPage * page, itemCount);
  const total = itemCount;
  const paginationText = useMemo(() => `${from}-${to} z ${total}`, [from, total, to]);

  const isPrevDisabled = (page === 1);
  const isNextDisabled = (page === Math.ceil(total / perPage));
  const noData = total === 0;

  const goToPage = (p: number) => {
    if (p < 1 || p > Math.ceil(total / perPage)) {
      return;
    }

    setPage(p);
    onPageChange(p);
  };

  return (
    <PaginationWrapper>
      <PaginationButton onClick={() => goToPage(page - 1)} disabled={isPrevDisabled || noData} variant={ButtonVariant.Narrow} icon={<Icon type="arrow-left" />}>
      </PaginationButton>
      <PaginationText>
        {paginationText}
      </PaginationText>
      <PaginationButton onClick={() => goToPage(page + 1)} disabled={isNextDisabled || noData} variant={ButtonVariant.Narrow} icon={<Icon type="arrow-right" />} />
    </PaginationWrapper>
  );
};
