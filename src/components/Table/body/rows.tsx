import React, { ReactNode, Fragment } from 'react';
import { ColumnInstance, Row as RowType } from 'react-table';
import {
  Row, Cell, NestedRow, EmptyRow,
} from 'components/Table/styled';

export const renderEmptyRows = <T extends object>(flatColumns: ColumnInstance<T>[]) => (
  <EmptyRow>
    <Cell colSpan={flatColumns.length} alignText="center">
        Brak danych
    </Cell>
  </EmptyRow>
);

export const renderRows = <T extends object>({
  rows, flatColumns, prepareRow, renderSubRow,
}: {
  rows: RowType<T>[];
  flatColumns: ColumnInstance<T>[];
  prepareRow: (row: RowType<T>) => void;
  renderSubRow?: (row: T) => ReactNode;
}) => rows.map(
    (row, i) => {
      prepareRow(row);

      const props = (row as any).getRowProps() as any;

      const ref = React.createRef();

      return (
        <Fragment key={props.key}>
          <Row {...props} isEven={i % 2 === 0} ref={ref}>
            {row.cells.map((cell) => (
              <Cell
                {...cell.getCellProps()}
                alignText={cell.column.align || 'left'}
              >
                {cell.render('Cell', { rowRef: ref })}
              </Cell>
            ))}
          </Row>
          {(row.subRows && renderSubRow) ? (
            <NestedRow className="is-nested">
              <Cell colSpan={flatColumns.length} alignText="left">
                {renderSubRow(row.original)}
              </Cell>
            </NestedRow>
          ) : null}
        </Fragment>
      );
    },
  );
