import React, { FC } from 'react';
import { Table } from 'components/Table';
import { Button, ButtonType, ButtonVariant } from 'components/Button';
import { RankData } from '../types';

interface Props {
  data: RankData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const RanksTable: FC<Props> = ({
  data,
  onEdit,
  onDelete,
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
      onSort={console.log}
    />
  </>
);
