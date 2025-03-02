import React from "react";

export interface TableProps<T extends Record<string, unknown>> {
  /** Data to be displayed in the table */
  data: T[];
  /** Column configurations */
  columns: {
    key: keyof T;
    title: string;
    render?: (value: T[keyof T], record: T) => React.ReactNode;
    sortable?: boolean;
  }[];
  /** Optional custom class name */
  className?: string;
  /** Enable/disable striped rows */
  striped?: boolean;
  /** Enable/disable hover effect on rows */
  hoverable?: boolean;
  /** Current page number for pagination */
  currentPage?: number;
  /** Number of items per page */
  pageSize?: number;
  /** Callback when page changes */
  onPageChange?: (page: number) => void;
  /** Callback when sorting changes */
  onSort?: (key: keyof T, direction: "asc" | "desc") => void;
}

const Table = <T extends Record<string, unknown>>({
  data,
  columns,
  className = "",
  striped = false,
  hoverable = true,
  currentPage = 1,
  pageSize = 10,
  onPageChange,
  onSort,
}: TableProps<T>): React.ReactElement => {
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "asc"
  );

  const handleSort = (key: keyof T) => {
    const newDirection =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDirection(newDirection);
    onSort?.(key, newDirection);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className={`w-full font-retro text-sm ${className}`}>
          <thead>
            <tr className="border-b-4 border-pixel-darkGray">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`text-left py-3 px-4 ${
                    column.sortable ? "cursor-pointer select-none" : ""
                  }`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.title}</span>
                    {column.sortable && sortKey === column.key && (
                      <span className="text-pixel-blue">
                        {sortDirection === "asc" ? " ▲" : " ▼"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-pixel-darkGray/20">
            {paginatedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  ${striped && rowIndex % 2 === 0 ? "bg-pixel-black/5" : ""}
                  ${hoverable ? "hover:bg-pixel-black/10" : ""}
                  transition-colors duration-150
                `}
              >
                {columns.map((column) => (
                  <td key={String(column.key)} className="py-3 px-4">
                    {column.render
                      ? column.render(row[column.key], row)
                      : String(row[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {onPageChange && totalPages > 1 && (
        <div className="flex justify-center space-x-2 font-retro">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 border-2 border-pixel-darkGray ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-pixel-black/5"
            }`}
          >
            ◄
          </button>
          <div className="flex items-center px-4 border-2 border-pixel-darkGray bg-pixel-white">
            {currentPage} / {totalPages}
          </div>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border-2 border-pixel-darkGray ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-pixel-black/5"
            }`}
          >
            ►
          </button>
        </div>
      )}
    </div>
  );
};

export default Table;
