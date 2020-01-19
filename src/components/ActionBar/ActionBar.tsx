import React, { FC } from 'react';
import { Pagination } from 'components/Pagination';
import { ButtonVariant, ButtonType } from 'components/Button';
import { Icon } from 'antd';
import { ActionWrapper, CreateButton } from './styled';

interface Props {
  total: number;
  perPage: number;
  onPageChange: (page: number) => void;
  redirectCreate: VoidFunction;
  createText: string;
  isLoading?: boolean;
  className?: string;
  gridColumns?: string;
}

export const ActionBar: FC<Props> = ({
  total,
  perPage,
  onPageChange,
  redirectCreate,
  createText,
  children,
  isLoading,
  className,
  gridColumns = '1fr 1fr',
}) => {
  return (
    <ActionWrapper className={className} gridColumns={gridColumns}>
      <Pagination
        itemCount={total}
        perPage={perPage}
        currentPage={1}
        onPageChange={onPageChange}
        isLoading={isLoading}
      />
      <CreateButton
        variant={ButtonVariant.Normal}
        themeType={ButtonType.Primary}
        onClick={redirectCreate}
        icon={<Icon type="plus" />}
      >
        {createText}
      </CreateButton>
      {children}
    </ActionWrapper>
  );
};
