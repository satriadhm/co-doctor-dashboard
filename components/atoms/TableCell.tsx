interface TableCellProps {
  children: React.ReactNode;
}

export default function TableCell({ children }: TableCellProps) {
  return (
    <td className="px-6 py-4 text-sm text-gray-700 border-b border-gray-100">
      {children}
    </td>
  );
}
