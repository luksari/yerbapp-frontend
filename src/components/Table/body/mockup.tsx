import React from 'react';
import { range, random } from 'lodash';
import { Row, Cell, MockupCellData } from 'components/Table/styled';

/**
 * Mapper building columns with random values
 */
export const mapMockupRow = (opts: { columns: number }) => () => range(0, opts.columns).reduce((column, value) => Object.assign(column, { [value]: random(9, 24) }), {});

/**
 * Return (Row = Record<ColumnIndex, MockSize>)[]
 */
export const getMockupRows = (opts: { columns: number }) => range(0, random(4, 10)).map(mapMockupRow({ columns: opts.columns })) as Record<number, number>[];

/**
 * Render row with mockup animated data of random length
 */
export const renderMockupRows = (rows: Record<number, number>[]) => (
  rows.map((row, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Row key={`__mockRow-${i}`} isEven={i % 2 === 0}>
      {Object.entries(row).map(([col, length]) => (
        <Cell key={`__mockCell-${col}`} alignText="left">
          <MockupCellData style={{ width: `${5 * length}px`, animationDelay: `${random(-2, 0, true)}s` }} />
        </Cell>
      ))}
    </Row>
  ))
);
