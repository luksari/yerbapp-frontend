import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { TableProps } from 'utils/types';
import { RankData } from '../types';

export const RanksTable: FC<TableProps<RankData>> = ({
  data,
  onEdit,
  onDelete,
  handleSort,
  isLoading,
}) => (
  <>
    <Table<RankData>
      columns={[
        { Header: 'Id', accessor: 'id', disableSortBy: false },
        { Header: 'Nazwa rangi', accessor: 'name', disableSortBy: false },
        { Header: 'Dolna granica', accessor: 'lowerRange', disableSortBy: false },
        { Header: 'Górna granica', accessor: 'upperRange', disableSortBy: false },
        {
          id: 'edit',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Primary} variant={ButtonVariant.Narrow} onClick={() => onEdit(row.values.id)}>Edytuj</Button>
            </div>
          ),
        },
        {
          id: 'remove',
          Cell: ({ row }) => (
            <div>
              <Button themeType={ButtonType.Danger} variant={ButtonVariant.Narrow} onClick={() => onDelete(row.values.id)}>Usuń</Button>
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
