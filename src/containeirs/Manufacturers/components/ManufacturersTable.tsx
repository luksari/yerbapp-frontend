import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { Manufacturer } from 'generated/graphql';
import { TableProps } from 'utils/types';
import { Icon } from 'antd';

export const ManuFacturersTable: FC<TableProps<Manufacturer>> = ({
  data,
  onEdit,
  onDelete,
  isLoading,
  handleSort,
}) => (
  <>
    <Table<Manufacturer>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Nazwa producenta', accessor: 'name', disableSortBy: false },
        { Header: 'Kraj producenta', accessor: 'country', disableSortBy: false },
        {
          id: 'edit',
          align: 'center',
          Cell: ({ row }) => (
            <div>
              <Button
                themeType={ButtonType.Primary}
                variant={ButtonVariant.Normal}
                onClick={() => onEdit(row.values.id)}
                icon={<Icon type="edit" />}
              >
Edytuj
              </Button>
            </div>
          ),
        },
        {
          id: 'remove',
          align: 'center',
          Cell: ({ row }) => (
            <div>
              <Button
                themeType={ButtonType.Danger}
                variant={ButtonVariant.Normal}
                icon={<Icon type="delete" />}
                onClick={() => onDelete(row.values.id)}
              >
Usuń
              </Button>
            </div>
          ),
        },
      ]}
      data={data}
      isLoading={isLoading}
      onSort={handleSort}
    />
  </>
);
