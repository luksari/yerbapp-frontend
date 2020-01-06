import React, { FC } from 'react';
import { Pagination } from 'components/Pagination';
import { Button, ButtonVariant, ButtonType } from 'components/Button';
import { Icon } from 'antd';
import { ActionWrapper, CreateButton } from './styled';

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
      <Pagination
        itemCount={total}
        perPage={perPage}
        currentPage={1}
        onPageChange={onPageChange}
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
