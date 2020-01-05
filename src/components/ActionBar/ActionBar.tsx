import React, { FC } from 'react';
import { Pagination } from 'components/Pagination';
import { Button, ButtonVariant, ButtonType } from 'components/Button';
import { Icon } from 'antd';
import { ActionWrapper } from './styled';

interface Props {
  total: number;
  perPage: number;
  onPageChange: (page: number) => void;
  redirectCreate: VoidFunction;
  createText: string;
}

export const ActionBar: FC<Props> = ({
  total,
  perPage,
  onPageChange,
  redirectCreate,
  createText,
  children,
}) => {
  return (
    <ActionWrapper>
      {children}
      <Pagination
        itemCount={total}
        perPage={perPage}
        currentPage={1}
        onPageChange={onPageChange}
      />
      <Button
        variant={ButtonVariant.Normal}
        themeType={ButtonType.Primary}
        onClick={redirectCreate}
        icon={<Icon type="plus" />}
      >
        {createText}
      </Button>
    </ActionWrapper>
  );
};
