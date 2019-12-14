
export enum SortOrder {
  NOT_SORTED = '',
  DESC = 'desc',
  ASC = 'asc',
}

/**
 * React-table interfaces are expanded by plugins, and react-table doesn't extend types by himself.
 */
declare module 'react-table' {
  type Row = UseExpandedRowProps<D>
  interface Column<D extends object = {}> extends UseSortByColumnOptions<D> {
    align?: string;
  }
  type ColumnInstance = UseSortByColumnProps<D>
  type TableOptions = UseSortByOptions<D>
  type TableState = UseExpandedState<D>
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
