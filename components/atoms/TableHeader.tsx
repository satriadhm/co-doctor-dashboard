interface TableHeaderProps {
  children: React.ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
  return (
    <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border-b border-gray-300">
      {children}
    </th>
  );
}
