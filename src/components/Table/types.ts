/* eslint-disable @typescript-eslint/no-empty-interface */
import { RefObject } from 'react';

export enum SortOrder {
  NOT_SORTED = '',
  DESC = 'desc',
  ASC = 'asc',
}

/**
 * React-table interfaces are expanded by plugins, and react-table doesn't extend types by himself.
 */
declare module 'react-table' {
  interface Row<D> extends UseExpandedRowProps<D> { }
  interface Column<D extends object = {}> extends UseSortByColumnOptions<D> {
    align?: string;
  }
  interface ColumnInstance<D extends object = {}> extends UseSortByColumnProps<D> { }
  interface TableOptions<D extends object = {}> extends UseSortByOptions<D> { }
  interface TableState<D extends object = {}> extends UseExpandedState<D> { }
  interface TableInstance<D extends object = {}> {
    // at the time of writing that, dispatch is not provided in typings
    dispatch: (opts: { type: string } & Record<string, any>) => void;
  }
  export interface UseTableColumnOptions<D extends object> {
    /**
     * You can access row reference here,
     * but it will be null initally in cell renderer,
     * so it's best used asynchronously
     */
    Cell?: Renderer<CellProps<D> & { rowRef: RefObject<HTMLTableRowElement> }>;
  }
}
