import React, { useState } from "react";

export interface Column<T> {
  key: keyof T;
  header: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);

  const toggleRow = (row: T) => {
    let updated: T[];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  if (loading) {
    return <div className="p-4 text-gray-500">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="p-4 text-gray-500">No data available</div>;
  }

  return (
  <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white/60 backdrop-blur-md">
    <table className="min-w-full text-sm text-left text-gray-700">
      <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <tr>
          {selectable && <th className="p-4"></th>}
          {columns.map((col) => (
            <th
              key={String(col.key)}
              onClick={() => requestSort(col.key)}
              className="p-4 cursor-pointer select-none hover:opacity-80 transition"
            >
              {col.header}
              {sortConfig?.key === col.key ? (
                <span className="ml-1">
                  {sortConfig.direction === "asc" ? "▲" : "▼"}
                </span>
              ) : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {sortedData.map((row, idx) => (
          <tr
            key={row.id}
            className={`transition-colors duration-200 ${
              idx % 2 === 0 ? "bg-white/60" : "bg-gray-50/60"
            } hover:bg-indigo-50`}
          >
            {selectable && (
              <td className="p-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                  checked={selectedRows.includes(row)}
                  onChange={() => toggleRow(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={String(col.key)} className="p-4">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


}
